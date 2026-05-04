import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySession } from "@/lib/session";
import { fsGetAll } from "@/lib/firestore-server";

async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get("__session")?.value;
  if (!token) return false;
  const session = await verifySession(token);
  return session?.role === "admin";
}

export async function GET() {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Yetkisiz" }, { status: 403 });

  const docs = await fsGetAll("users");
  return NextResponse.json(
    docs.map(({ _id, ...d }) => ({
      uid: _id,
      email: d.email ?? null,
      name: d.name ?? null,
      phone: d.phone ?? null,
      role: d.role ?? "user",
      activePackage: d.activePackage ?? null,
      packageType: d.packageType ?? null,
      expiresAt: d.expiresAt
        ? typeof d.expiresAt === "string"
          ? d.expiresAt
          : new Date((d.expiresAt as { seconds: number }).seconds * 1000).toISOString()
        : null,
      sessionsTotal: d.sessionsTotal ?? null,
      sessionsUsed: d.sessionsUsed ?? null,
      createdAt: d.createdAt
        ? typeof d.createdAt === "string"
          ? d.createdAt
          : new Date((d.createdAt as { seconds: number }).seconds * 1000).toISOString()
        : null,
    }))
  );
}
