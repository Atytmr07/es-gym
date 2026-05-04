import { NextRequest, NextResponse } from "next/server";

const AUTH_PATHS = ["/login", "/register"];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = req.cookies.get("__session")?.value;
  const roleCookie = req.cookies.get("user_role")?.value;

  // Public: statik dosyalar, API rotaları, genel sayfalar
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/payment/") ||  // checkout kendi auth kontrolünü yapıyor
    pathname.match(/\.(ico|png|jpg|jpeg|svg|mp4|webp|woff2?)$/) ||
    pathname === "/" ||
    pathname === "/packages"
  ) {
    return NextResponse.next();
  }

  // Giriş yapmış kullanıcıyı auth sayfalarından yönlendir
  if (AUTH_PATHS.some((p) => pathname.startsWith(p))) {
    if (session) {
      const dest = roleCookie === "admin" ? "/admin" : "/dashboard";
      return NextResponse.redirect(new URL(dest, req.url));
    }
    return NextResponse.next();
  }

  // Dashboard ve admin koruması
  if (!session) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Sadece adminler /admin'e girebilir
  if (pathname.startsWith("/admin") && roleCookie !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
