"use client";

import { useEffect, useState } from "react";
import { Users, TrendingUp, CreditCard, Activity, ArrowUpRight, Loader2 } from "lucide-react";

interface Stats {
  totalRevenue: number;
  totalTransactions: number;
  totalUsers: number;
  activeSubscriptions: number;
  monthlyRevenue: { month: string; revenue: number }[];
  byPackage: Record<string, number>;
  recentTransactions: {
    id: string;
    userName: string;
    userEmail: string;
    packageName: string;
    tierLabel: string;
    amount: number;
    createdAt: string;
  }[];
}

function StatCard({
  label,
  value,
  icon: Icon,
  sub,
  color = "gold",
}: {
  label: string;
  value: string;
  icon: React.ElementType;
  sub?: string;
  color?: "gold" | "green" | "blue" | "purple";
}) {
  const colors = {
    gold: "bg-[#FFC107]/15 text-[#FFC107]",
    green: "bg-emerald-500/15 text-emerald-400",
    blue: "bg-blue-500/15 text-blue-400",
    purple: "bg-purple-500/15 text-purple-400",
  };
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
      <div className="flex items-start justify-between mb-4">
        <p className="text-zinc-400 text-sm font-medium">{label}</p>
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${colors[color]}`}>
          <Icon className="w-4.5 h-4.5" />
        </div>
      </div>
      <p className="text-3xl font-black text-white">{value}</p>
      {sub && <p className="text-zinc-500 text-xs mt-1">{sub}</p>}
    </div>
  );
}

function MiniBar({ label, value, max }: { label: string; value: number; max: number }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-zinc-300 text-sm truncate max-w-[180px]">{label}</span>
        <span className="text-white font-bold text-sm shrink-0 ml-2">
          ₺{value.toLocaleString("tr-TR")}
        </span>
      </div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#FFC107] rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function AdminOverviewPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then(setStats)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 text-[#FFC107] animate-spin" />
      </div>
    );
  }

  if (!stats) return <p className="text-zinc-400">Veriler yüklenemedi.</p>;

  const maxMonthly = Math.max(...stats.monthlyRevenue.map((m) => m.revenue), 1);
  const maxPkg = Math.max(...Object.values(stats.byPackage), 1);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-white">Genel Bakış</h1>
        <p className="text-zinc-400 mt-1">E&S GYM yönetim özeti</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          label="Toplam Gelir"
          value={`₺${stats.totalRevenue.toLocaleString("tr-TR")}`}
          icon={TrendingUp}
          sub={`${stats.totalTransactions} işlem`}
          color="gold"
        />
        <StatCard
          label="Toplam Üye"
          value={stats.totalUsers.toString()}
          icon={Users}
          sub="kayıtlı hesap"
          color="blue"
        />
        <StatCard
          label="Aktif Abonelik"
          value={stats.activeSubscriptions.toString()}
          icon={Activity}
          sub="şu an aktif"
          color="green"
        />
        <StatCard
          label="İşlem Sayısı"
          value={stats.totalTransactions.toString()}
          icon={CreditCard}
          sub="başarılı ödeme"
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Monthly bar chart */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-white font-bold text-lg mb-5">Aylık Gelir (Son 6 Ay)</h2>
          <div className="flex items-end gap-2 h-36">
            {stats.monthlyRevenue.map(({ month, revenue }) => {
              const h = maxMonthly > 0 ? (revenue / maxMonthly) * 100 : 0;
              return (
                <div key={month} className="flex-1 flex flex-col items-center gap-1.5">
                  <span className="text-zinc-500 text-[10px] font-medium">
                    {revenue > 0 ? `₺${(revenue / 1000).toFixed(0)}K` : "—"}
                  </span>
                  <div className="w-full flex items-end" style={{ height: "80px" }}>
                    <div
                      className="w-full bg-[#FFC107]/80 hover:bg-[#FFC107] rounded-t-lg transition-all duration-300"
                      style={{ height: `${Math.max(h, 4)}%` }}
                    />
                  </div>
                  <span className="text-zinc-500 text-[10px]">{month}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Revenue by package */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-white font-bold text-lg mb-5">Paket Bazında Gelir</h2>
          <div className="space-y-4">
            {Object.entries(stats.byPackage)
              .sort(([, a], [, b]) => b - a)
              .slice(0, 6)
              .map(([name, val]) => (
                <MiniBar key={name} label={name} value={val} max={maxPkg} />
              ))}
            {Object.keys(stats.byPackage).length === 0 && (
              <p className="text-zinc-500 text-sm">Henüz işlem yok.</p>
            )}
          </div>
        </div>
      </div>

      {/* Recent transactions */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-white font-bold text-lg">Son İşlemler</h2>
          <a href="/admin/revenue" className="text-[#FFC107] text-sm font-semibold flex items-center gap-1 hover:underline">
            Tümünü Gör <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
        {stats.recentTransactions.length === 0 ? (
          <p className="text-zinc-500 text-sm">Henüz işlem yok.</p>
        ) : (
          <div className="overflow-x-auto -mx-2">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="text-zinc-500 text-xs uppercase tracking-wider">
                  <th className="text-left pb-3 pl-2">Üye</th>
                  <th className="text-left pb-3">Paket</th>
                  <th className="text-right pb-3">Tutar</th>
                  <th className="text-right pb-3 pr-2">Tarih</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {stats.recentTransactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="py-3 pl-2">
                      <p className="text-white text-sm font-medium">{tx.userName}</p>
                      <p className="text-zinc-500 text-xs">{tx.userEmail}</p>
                    </td>
                    <td className="py-3">
                      <span className="text-zinc-300 text-sm">
                        {tx.packageName} — {tx.tierLabel}
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <span className="text-[#FFC107] font-bold text-sm">
                        ₺{(tx.amount ?? 0).toLocaleString("tr-TR")}
                      </span>
                    </td>
                    <td className="py-3 text-right pr-2">
                      <span className="text-zinc-500 text-xs">
                        {tx.createdAt
                          ? new Date(tx.createdAt).toLocaleDateString("tr-TR", {
                              day: "numeric",
                              month: "short",
                            })
                          : "—"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
