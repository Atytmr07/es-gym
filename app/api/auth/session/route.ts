import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyFirebaseToken } from "@/lib/verify-token";
import { createSession } from "@/lib/session";
import { fsGet } from "@/lib/firestore-server";

const MAX_AGE = 60 * 60 * 24 * 14;

export async function POST(req: NextRequest) {
  try {
    const { idToken } = await req.json();
    if (!idToken) return NextResponse.json({ error: "Token eksik" }, { status: 400 });

    const firebaseUser = await verifyFirebaseToken(idToken);
    if (!firebaseUser) return NextResponse.json({ error: "Geçersiz token" }, { status: 401 });

    // Role'ü Firestore REST API ile al
    const userDoc = await fsGet("users", firebaseUser.uid);
    const role = (userDoc?.role as string) === "admin" ? "admin" : "user";

    const sessionToken = await createSession({ uid: firebaseUser.uid, role });

    const cookieStore = await cookies();
    cookieStore.set("__session", sessionToken, {
      maxAge: MAX_AGE,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
    });
    cookieStore.set("user_role", role, {
      maxAge: MAX_AGE,
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
    });

    return NextResponse.json({ ok: true, role });
  } catch (err) {
    console.error("Session create error:", err);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete("__session");
  cookieStore.delete("user_role");
  return NextResponse.json({ ok: true });
}
