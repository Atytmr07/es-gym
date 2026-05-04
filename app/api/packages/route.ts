import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySession } from "@/lib/session";
import { fsGetAll, fsPatch } from "@/lib/firestore-server";

async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("__session")?.value;
  if (!token) return null;
  return verifySession(token);
}

export async function GET() {
  const docs = await fsGetAll("packages");
  const packages = docs
    .map(({ _id, ...d }) => ({ id: _id, ...d } as Record<string, unknown> & { id: string }))
    .sort((a, b) => Number(a.order ?? 0) - Number(b.order ?? 0));
  return NextResponse.json(packages);
}

export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "Yetkisiz" }, { status: 403 });
  }

  const { id, ...data } = await req.json();
  if (!id) return NextResponse.json({ error: "ID eksik" }, { status: 400 });

  await fsPatch("packages", id, data);
  return NextResponse.json({ ok: true });
}
