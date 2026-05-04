"use client";

import { useEffect, useState, useMemo } from "react";
import { Search, Users, Clock, Zap, AlertTriangle, Loader2, MinusCircle, PlusCircle, ChevronDown, ChevronUp } from "lucide-react";

interface Subscription {
  id: string;
  packageName: string;
  tierLabel: string;
  expiresAt: string | null;
  sessionsTotal: number | null;
  sessionsUsed: number | null;
  purchasedAt: string;
}

interface UserRow {
  uid: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  activePackage: string | null;
  packageType: string | null;
  expiresAt: string | null;
  sessionsTotal: number | null;
  sessionsUsed: number | null;
  createdAt: string | null;
  subscriptions?: Subscription[];
}

function SessionBadge({ sub, userId, onUpdate }: {
  sub: Subscription;
  userId: string;
  onUpdate: (subId: string, used: number) => void;
}) {
  const [loading, setLoading] = useState(false);
  if (sub.sessionsTotal === null) return null;
  const left = sub.sessionsTotal - (sub.sessionsUsed ?? 0);

  const mark = async (delta: number) => {
    setLoading(true);
    const res = await fetch("/api/admin/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, subscriptionId: sub.id, delta }),
    });
    const data = await res.json();
    if (data.ok) onUpdate(sub.id, data.sessionsUsed);
    setLoading(false);
  };

  return (
    <div className="flex items-center gap-1.5 bg-zinc-800 rounded-lg px-2 py-1">
      <button onClick={() => mark(-1)} disabled={loading || (sub.sessionsUsed ?? 0) <= 0}
        className="text-zinc-500 hover:text-red-400 disabled:opacity-30 transition-colors">
        <MinusCircle className="w-3.5 h-3.5" />
      </button>
      <span className={`text-xs font-bold tabular-nums ${left <= 0 ? "text-red-400" : left <= 3 ? "text-amber-400" : "text-emerald-400"}`}>
        {left}/{sub.sessionsTotal}
      </span>
      <button onClick={() => mark(1)} disabled={loading || left <= 0}
        className="text-zinc-500 hover:text-emerald-400 disabled:opacity-30 transition-colors">
        <PlusCircle className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

function UserRow({ u, onUpdate }: { u: UserRow; onUpdate: (u: UserRow) => void }) {
  const [expanded, setExpanded] = useState(false);
  const { label, color } = statusInfo(u);
  const hasSessions = u.subscriptions?.some(s => s.sessionsTotal !== null);

  const handleSessionUpdate = (subId: string, used: number) => {
    const updated = {
      ...u,
      subscriptions: u.subscriptions?.map(s =>
        s.id === subId ? { ...s, sessionsUsed: used } : s
      ),
    };
    onUpdate(updated);
  };

  return (
    <>
      <tr className="hover:bg-zinc-800/30 transition-colors cursor-pointer"
        onClick={() => hasSessions && setExpanded(e => !e)}>
        <td className="py-3.5 pl-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FFC107]/15 rounded-full flex items-center justify-center text-[#FFC107] font-black text-sm shrink-0">
              {u.name?.[0]?.toUpperCase() ?? "?"}
            </div>
            <div>
              <p className="text-white text-sm font-medium">{u.name}</p>
              <p className="text-zinc-500 text-xs">{u.email}</p>
            </div>
          </div>
        </td>
        <td className="py-3.5 text-zinc-300 text-sm">{u.phone || "—"}</td>
        <td className="py-3.5 text-zinc-300 text-sm max-w-[180px] truncate">
          {u.activePackage ?? <span className="text-zinc-600">—</span>}
        </td>
        <td className="py-3.5">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${color}`}>{label}</span>
        </td>
        <td className="py-3.5">
          <span className="text-zinc-500 text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {u.createdAt ? new Date(u.createdAt).toLocaleDateString("tr-TR", { day: "numeric", month: "short", year: "2-digit" }) : "—"}
          </span>
        </td>
        <td className="py-3.5 pr-5">
          <div className="flex items-center gap-2">
            <span className="text-zinc-400 text-xs">
              {u.expiresAt
                ? new Date(u.expiresAt).toLocaleDateString("tr-TR", { day: "numeric", month: "short", year: "2-digit" })
                : u.sessionsTotal !== null ? `${u.sessionsTotal - (u.sessionsUsed ?? 0)} seans` : "—"}
            </span>
            {hasSessions && (
              <span className="text-zinc-600">
                {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </span>
            )}
          </div>
        </td>
      </tr>

      {/* Seans detayı */}
      {expanded && u.subscriptions && (
        <tr className="bg-zinc-800/20">
          <td colSpan={6} className="px-5 py-3">
            <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-2">Seans Takibi</p>
            <div className="flex flex-wrap gap-2">
              {u.subscriptions.filter(s => s.sessionsTotal !== null).map(sub => (
                <div key={sub.id} className="flex items-center gap-2 bg-zinc-800 rounded-xl px-3 py-2">
                  <span className="text-zinc-300 text-xs">{sub.packageName} — {sub.tierLabel}</span>
                  <SessionBadge sub={sub} userId={u.uid} onUpdate={handleSessionUpdate} />
                </div>
              ))}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

function statusInfo(u: UserRow): { label: string; color: string } {
  if (!u.activePackage) return { label: "Paket Yok", color: "text-zinc-500 bg-zinc-800" };
  if (u.expiresAt) {
    const days = Math.ceil((new Date(u.expiresAt).getTime() - Date.now()) / 86400000);
    if (days <= 0) return { label: "Süresi Doldu", color: "text-red-400 bg-red-500/10" };
    if (days <= 7) return { label: `${days} gün kaldı`, color: "text-amber-400 bg-amber-500/10" };
    return { label: `${days} gün`, color: "text-emerald-400 bg-emerald-500/10" };
  }
  if (u.sessionsTotal !== null) {
    const left = u.sessionsTotal - (u.sessionsUsed ?? 0);
    if (left <= 0) return { label: "Seans Bitti", color: "text-red-400 bg-red-500/10" };
    return { label: `${left} seans`, color: "text-emerald-400 bg-emerald-500/10" };
  }
  return { label: "Aktif", color: "text-emerald-400 bg-emerald-500/10" };
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "expired" | "none">("all");

  useEffect(() => {
    fetch("/api/admin/users")
      .then((r) => r.json())
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    let list = users.filter((u) => u.role !== "admin");
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (u) =>
          u.name?.toLowerCase().includes(q) ||
          u.email?.toLowerCase().includes(q) ||
          u.phone?.includes(q)
      );
    }
    if (filter === "active") {
      list = list.filter((u) => {
        if (!u.activePackage) return false;
        if (u.expiresAt) return new Date(u.expiresAt) > new Date();
        return (u.sessionsTotal ?? 0) - (u.sessionsUsed ?? 0) > 0;
      });
    } else if (filter === "expired") {
      list = list.filter((u) => {
        if (!u.activePackage) return false;
        if (u.expiresAt) return new Date(u.expiresAt) <= new Date();
        return (u.sessionsTotal ?? 0) - (u.sessionsUsed ?? 0) <= 0;
      });
    } else if (filter === "none") {
      list = list.filter((u) => !u.activePackage);
    }
    return list;
  }, [users, search, filter]);

  const totalActive = users.filter((u) => {
    if (u.role === "admin" || !u.activePackage) return false;
    if (u.expiresAt) return new Date(u.expiresAt) > new Date();
    return (u.sessionsTotal ?? 0) - (u.sessionsUsed ?? 0) > 0;
  }).length;

  const expiringCount = users.filter((u) => {
    if (!u.activePackage || !u.expiresAt) return false;
    const days = Math.ceil((new Date(u.expiresAt).getTime() - Date.now()) / 86400000);
    return days > 0 && days <= 7;
  }).length;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 text-[#FFC107] animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Üyeler</h1>
        <p className="text-zinc-400 mt-1">Tüm kayıtlı üyelerin listesi</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-zinc-400 text-xs mb-2">
            <Users className="w-3.5 h-3.5" /> Toplam Üye
          </div>
          <p className="text-2xl font-black text-white">{users.filter((u) => u.role !== "admin").length}</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-zinc-400 text-xs mb-2">
            <Zap className="w-3.5 h-3.5" /> Aktif Abonelik
          </div>
          <p className="text-2xl font-black text-emerald-400">{totalActive}</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-zinc-400 text-xs mb-2">
            <AlertTriangle className="w-3.5 h-3.5" /> Bu Hafta Bitiyor
          </div>
          <p className="text-2xl font-black text-amber-400">{expiringCount}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="İsim, e-posta veya telefon ara..."
            className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#FFC107] transition-colors placeholder:text-zinc-600"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {(["all", "active", "expired", "none"] as const).map((f) => {
            const labels = { all: "Tümü", active: "Aktif", expired: "Süresi Doldu", none: "Paket Yok" };
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === f
                    ? "bg-[#FFC107] text-gray-900"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                }`}
              >
                {labels[f]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Table */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="border-b border-zinc-800">
              <tr className="text-zinc-500 text-xs uppercase tracking-wider">
                <th className="text-left py-3.5 pl-5">Üye</th>
                <th className="text-left py-3.5">Telefon</th>
                <th className="text-left py-3.5">Paket</th>
                <th className="text-left py-3.5">Durum</th>
                <th className="text-left py-3.5">Kayıt</th>
                <th className="text-left py-3.5 pr-5">Bitiş</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {filtered.map((u) => (
                <UserRow key={u.uid} u={u} onUpdate={(updated) =>
                  setUsers(prev => prev.map(x => x.uid === updated.uid ? updated : x))
                } />
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-zinc-500 text-sm">
                    Eşleşen üye bulunamadı.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="border-t border-zinc-800 px-5 py-3">
          <p className="text-zinc-500 text-xs">{filtered.length} üye gösteriliyor</p>
        </div>
      </div>
    </div>
  );
}
