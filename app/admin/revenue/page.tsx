"use client";

import { useEffect, useState } from "react";
import { TrendingUp, CreditCard, Download, Loader2 } from "lucide-react";

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

function MiniBar({ label, value, max }: { label: string; value: number; max: number }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  const pctLabel = max > 0 ? ((value / max) * 100).toFixed(0) : "0";
  return (
    <div className="flex items-center gap-4">
      <span className="text-zinc-300 text-sm w-36 shrink-0 truncate">{label}</span>
      <div className="flex-1 h-2.5 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#FFC107] rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="text-right w-28 shrink-0">
        <span className="text-white font-bold text-sm">₺{value.toLocaleString("tr-TR")}</span>
        <span className="text-zinc-600 text-xs ml-1">({pctLabel}%)</span>
      </div>
    </div>
  );
}

export default function AdminRevenuePage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then(setStats)
      .finally(() => setLoading(false));
  }, []);

  const handleExportCSV = () => {
    if (!stats) return;
    const rows = [
      ["Üye", "E-posta", "Paket", "Tier", "Tutar (₺)", "Tarih"],
      ...stats.recentTransactions.map((t) => [
        t.userName,
        t.userEmail,
        t.packageName,
        t.tierLabel,
        t.amount?.toString() ?? "0",
        t.createdAt ? new Date(t.createdAt).toLocaleDateString("tr-TR") : "—",
      ]),
    ];
    const csv = rows.map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `es-gym-gelir-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

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

  const totalThisMonth = stats.monthlyRevenue[stats.monthlyRevenue.length - 1]?.revenue ?? 0;
  const totalLastMonth = stats.monthlyRevenue[stats.monthlyRevenue.length - 2]?.revenue ?? 0;
  const growth =
    totalLastMonth > 0
      ? (((totalThisMonth - totalLastMonth) / totalLastMonth) * 100).toFixed(1)
      : "—";

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-black text-white">Gelir & Analitik</h1>
          <p className="text-zinc-400 mt-1">Finansal büyüme takibi</p>
        </div>
        <button
          onClick={handleExportCSV}
          className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 hover:text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
        >
          <Download className="w-4 h-4" /> CSV İndir
        </button>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <div className="flex items-center gap-2 text-zinc-400 text-xs mb-3">
            <TrendingUp className="w-3.5 h-3.5" /> Toplam Gelir
          </div>
          <p className="text-3xl font-black text-[#FFC107]">
            ₺{stats.totalRevenue.toLocaleString("tr-TR")}
          </p>
          <p className="text-zinc-500 text-xs mt-1">{stats.totalTransactions} başarılı işlem</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <div className="flex items-center gap-2 text-zinc-400 text-xs mb-3">
            <CreditCard className="w-3.5 h-3.5" /> Bu Ay
          </div>
          <p className="text-3xl font-black text-white">
            ₺{totalThisMonth.toLocaleString("tr-TR")}
          </p>
          <p className={`text-xs mt-1 font-semibold ${typeof growth === "string" && growth !== "—" ? (parseFloat(growth) >= 0 ? "text-emerald-400" : "text-red-400") : "text-zinc-500"}`}>
            {growth !== "—" ? `${parseFloat(growth) >= 0 ? "▲" : "▼"} %${Math.abs(parseFloat(growth))} geçen aya göre` : "Karşılaştırma yok"}
          </p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <div className="flex items-center gap-2 text-zinc-400 text-xs mb-3">
            <CreditCard className="w-3.5 h-3.5" /> Ortalama İşlem
          </div>
          <p className="text-3xl font-black text-white">
            ₺{stats.totalTransactions > 0 ? Math.round(stats.totalRevenue / stats.totalTransactions).toLocaleString("tr-TR") : "0"}
          </p>
          <p className="text-zinc-500 text-xs mt-1">işlem başına</p>
        </div>
      </div>

      {/* Monthly bar chart (bigger) */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-white font-bold text-lg mb-6">Aylık Gelir (Son 6 Ay)</h2>
        <div className="flex items-end gap-3 h-48">
          {stats.monthlyRevenue.map(({ month, revenue }) => {
            const h = maxMonthly > 0 ? (revenue / maxMonthly) * 100 : 0;
            return (
              <div key={month} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-zinc-400 text-xs font-medium">
                  {revenue > 0 ? `₺${(revenue / 1000).toFixed(0)}K` : "—"}
                </span>
                <div className="w-full flex items-end" style={{ height: "140px" }}>
                  <div
                    className="w-full bg-gradient-to-t from-[#FFC107] to-[#FFD54F] hover:from-[#FFB300] hover:to-[#FFC107] rounded-t-lg transition-all duration-300 group cursor-pointer relative"
                    style={{ height: `${Math.max(h, 3)}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-700 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      ₺{revenue.toLocaleString("tr-TR")}
                    </div>
                  </div>
                </div>
                <span className="text-zinc-500 text-xs">{month}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Package revenue */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-white font-bold text-lg mb-5">Paket Bazında Gelir Dağılımı</h2>
        <div className="space-y-4">
          {Object.entries(stats.byPackage)
            .sort(([, a], [, b]) => b - a)
            .map(([name, val]) => (
              <MiniBar key={name} label={name} value={val} max={maxPkg} />
            ))}
          {Object.keys(stats.byPackage).length === 0 && (
            <p className="text-zinc-500 text-sm">Henüz işlem yok.</p>
          )}
        </div>
      </div>

      {/* All transactions */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-white font-bold text-lg mb-5">Tüm İşlemler</h2>
        {stats.recentTransactions.length === 0 ? (
          <p className="text-zinc-500 text-sm">Henüz işlem yok.</p>
        ) : (
          <div className="overflow-x-auto -mx-2">
            <table className="w-full min-w-[600px]">
              <thead className="border-b border-zinc-800">
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
                    <td className="py-3 text-zinc-300 text-sm">
                      {tx.packageName} — {tx.tierLabel}
                    </td>
                    <td className="py-3 text-right">
                      <span className="text-[#FFC107] font-bold text-sm">
                        ₺{(tx.amount ?? 0).toLocaleString("tr-TR")}
                      </span>
                    </td>
                    <td className="py-3 text-right pr-2 text-zinc-500 text-xs">
                      {tx.createdAt
                        ? new Date(tx.createdAt).toLocaleDateString("tr-TR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                        : "—"}
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
