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

function toIso(val: unknown): string | null {
  if (!val) return null;
  if (typeof val === "string") return val;
  if (typeof val === "object" && "seconds" in (val as object))
    return new Date((val as { seconds: number }).seconds * 1000).toISOString();
  return null;
}

export async function GET() {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Yetkisiz" }, { status: 403 });

  const [txDocs, userDocs] = await Promise.all([fsGetAll("transactions"), fsGetAll("users")]);

  const transactions = txDocs
    .filter((t) => t.status === "success")
    .map(({ _id, ...t }) => ({
      id: _id,
      userId: t.userId,
      userEmail: t.userEmail,
      userName: t.userName,
      packageName: t.packageName,
      tierLabel: t.tierLabel,
      amount: Number(t.amount ?? 0),
      createdAt: toIso(t.createdAt),
    }))
    .sort((a, b) => {
      if (!a.createdAt || !b.createdAt) return 0;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  const totalRevenue = transactions.reduce((s, t) => s + t.amount, 0);

  const now = new Date();
  const monthlyRevenue = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
    const label = d.toLocaleString("tr-TR", { month: "short", year: "2-digit" });
    const revenue = transactions
      .filter((t) => {
        if (!t.createdAt) return false;
        const tx = new Date(t.createdAt);
        return tx.getFullYear() === d.getFullYear() && tx.getMonth() === d.getMonth();
      })
      .reduce((s, t) => s + t.amount, 0);
    return { month: label, revenue };
  });

  const byPackage: Record<string, number> = {};
  for (const t of transactions) {
    const k = String(t.packageName ?? "Diğer");
    byPackage[k] = (byPackage[k] ?? 0) + t.amount;
  }

  const activeSubscriptions = userDocs.filter((u) => {
    if (!u.activePackage) return false;
    if (u.expiresAt) {
      const iso = toIso(u.expiresAt);
      return iso ? new Date(iso) > now : false;
    }
    return (Number(u.sessionsTotal ?? 0) - Number(u.sessionsUsed ?? 0)) > 0;
  }).length;

  return NextResponse.json({
    totalRevenue,
    totalTransactions: transactions.length,
    totalUsers: userDocs.filter((u) => u.role !== "admin").length,
    activeSubscriptions,
    monthlyRevenue,
    byPackage,
    recentTransactions: transactions.slice(0, 10),
  });
}
