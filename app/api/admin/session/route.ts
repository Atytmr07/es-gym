import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySession } from "@/lib/session";
import { fsGet, fsPatch } from "@/lib/firestore-server";

async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get("__session")?.value;
  if (!token) return false;
  const session = await verifySession(token);
  return session?.role === "admin";
}

// Bir üyenin belirli aboneliğinde seans işaretle
export async function POST(req: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 403 });
  }

  const { userId, subscriptionId, delta } = await req.json();
  // delta: +1 seans kullanıldı, -1 geri al
  if (!userId || !subscriptionId || delta === undefined) {
    return NextResponse.json({ error: "Eksik parametre" }, { status: 400 });
  }

  const userData = await fsGet("users", userId);
  if (!userData) return NextResponse.json({ error: "Üye bulunamadı" }, { status: 404 });

  const subs = (userData.subscriptions as {
    id: string;
    sessionsTotal: number | null;
    sessionsUsed: number | null;
    [key: string]: unknown;
  }[]) ?? [];

  const idx = subs.findIndex(s => s.id === subscriptionId);
  if (idx === -1) return NextResponse.json({ error: "Abonelik bulunamadı" }, { status: 404 });

  const sub = subs[idx];
  if (sub.sessionsTotal === null) {
    return NextResponse.json({ error: "Bu paket seans bazlı değil" }, { status: 400 });
  }

  const current = sub.sessionsUsed ?? 0;
  const newUsed = Math.max(0, Math.min(sub.sessionsTotal, current + delta));
  subs[idx] = { ...sub, sessionsUsed: newUsed };

  await fsPatch("users", userId, { subscriptions: subs });
  return NextResponse.json({ ok: true, sessionsUsed: newUsed, sessionsTotal: sub.sessionsTotal });
}
