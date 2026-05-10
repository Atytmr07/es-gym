/**
 * Next.js 16 Proxy (eski adıyla Middleware)
 *
 * Görevleri:
 * 1. /dashboard ve /admin rotalarını oturum varlığına göre korur (optimistik kontrol)
 * 2. Giriş yapmış kullanıcıyı /login ve /register'dan yönlendirir
 * 3. /api/auth/* ve /api/payment/initialize endpoint'lerine rate limiting uygular
 * 4. Süresi dolmuş session cookie'sini tespit edip temizler
 *
 * NOT: JWT doğrulama (jwtVerify) Next.js 16 proxy'de pahalı bir işlem olduğundan
 * burada cookie varlığı kontrolü yapılır (optimistik). Tam doğrulama API
 * route'larında verifySession() ile yapılmaktadır.
 */

import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

// ─── JWT — sadece expiry kontrolü için ───────────────────────────────────────

const secret = new TextEncoder().encode(
  process.env.SESSION_SECRET ?? "es-gym-fallback-secret"
);

async function isTokenValid(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false; // süresi dolmuş veya geçersiz
  }
}

// ─── Rate Limiter ─────────────────────────────────────────────────────────────
// Instance-level in-memory — serverless ortamda warm start'lar arası çalışır.
// Küçük ölçekli site için yeterli; büyük trafik için Upstash Redis kullanın.

const rlMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const entry = rlMap.get(key);

  if (!entry || now > entry.resetAt) {
    rlMap.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count++;
  return true;
}

function pruneRlMap() {
  if (rlMap.size < 200) return;
  const now = Date.now();
  for (const [key, val] of rlMap.entries()) {
    if (now > val.resetAt) rlMap.delete(key);
  }
}

// ─── Route sabitleri ──────────────────────────────────────────────────────────

const AUTH_PATHS = ["/login", "/register", "/sifremi-unuttum"];

const PUBLIC_PAGES = [
  "/",
  "/packages",
  "/hakkimizda",
  "/ems-fitness-kepez",
  "/kvkk",
  "/mesafeli-satis",
  "/iptal-iade",
  "/kullanim-kosullari",
];

// ─── Proxy ────────────────────────────────────────────────────────────────────

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  pruneRlMap();

  // ── Statik dosyalar, API, ödeme sayfaları → direkt geç ───────────────────
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/payment/") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|mp4|webp|woff2?)$/) ||
    PUBLIC_PAGES.includes(pathname)
  ) {
    // Rate limiting: auth API endpoint'leri
    if (pathname.startsWith("/api/auth/")) {
      const allowed = checkRateLimit(`auth:${ip}`, 15, 60_000);
      if (!allowed) {
        return NextResponse.json(
          { error: "Çok fazla istek. Lütfen 1 dakika bekleyin." },
          { status: 429, headers: { "Retry-After": "60" } }
        );
      }
    }

    // Rate limiting: ödeme başlatma
    if (pathname === "/api/payment/initialize") {
      const allowed = checkRateLimit(`pay:${ip}`, 5, 60_000);
      if (!allowed) {
        return NextResponse.json(
          { error: "Çok fazla ödeme denemesi. Lütfen 1 dakika bekleyin." },
          { status: 429, headers: { "Retry-After": "60" } }
        );
      }
    }

    return NextResponse.next();
  }

  const sessionToken = req.cookies.get("__session")?.value;
  const roleCookie = req.cookies.get("user_role")?.value;

  // ── Giriş yapmış kullanıcıyı auth sayfalarından yönlendir ────────────────
  if (AUTH_PATHS.some((p) => pathname.startsWith(p))) {
    if (sessionToken) {
      const dest = roleCookie === "admin" ? "/admin" : "/dashboard";
      return NextResponse.redirect(new URL(dest, req.url));
    }
    return NextResponse.next();
  }

  // ── Korumalı rota: session yoksa login'e yönlendir ───────────────────────
  if (!sessionToken) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ── Token süresi dolmuşsa çerezleri temizle ve login'e yönlendir ─────────
  const valid = await isTokenValid(sessionToken);
  if (!valid) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("from", pathname);
    const res = NextResponse.redirect(loginUrl);
    res.cookies.delete("__session");
    res.cookies.delete("user_role");
    return res;
  }

  // ── Admin sayfası: admin rolü gerekli ─────────────────────────────────────
  if (pathname.startsWith("/admin") && roleCookie !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
