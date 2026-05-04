"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import type { Subscription } from "@/lib/firestore";
import Image from "next/image";
import {
  Dumbbell, LogOut, Clock, Zap, Users, Calendar,
  ShoppingBag, CheckCircle2, AlertTriangle, ChevronRight, Phone, Plus,
} from "lucide-react";

function toDate(val: unknown): Date | null {
  if (!val) return null;
  if (typeof val === "string") return new Date(val);
  if (typeof val === "object" && "seconds" in (val as object))
    return new Date((val as { seconds: number }).seconds * 1000);
  return null;
}

function daysRemaining(val: unknown): number | null {
  const date = toDate(val);
  if (!date) return null;
  const diff = date.getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function SubCard({ sub }: { sub: Subscription }) {
  const days = daysRemaining(sub.expiresAt);
  const sessionsLeft = sub.sessionsTotal != null
    ? sub.sessionsTotal - (sub.sessionsUsed ?? 0)
    : null;
  const isExpiring = days !== null && days <= 7;
  const isActive = days === null
    ? (sessionsLeft ?? 0) > 0
    : days > 0;

  return (
    <div className={`bg-zinc-900 border rounded-2xl p-5 ${isActive ? "border-[#FFC107]/30" : "border-zinc-800"}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${isActive ? "bg-[#FFC107]/15" : "bg-zinc-800"}`}>
            <Dumbbell className={`w-4.5 h-4.5 ${isActive ? "text-[#FFC107]" : "text-zinc-500"}`} />
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-tight">{sub.packageName}</p>
            <p className="text-zinc-500 text-xs">{sub.tierLabel}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isActive ? "bg-emerald-500/15 text-emerald-400" : "bg-zinc-800 text-zinc-500"}`}>
            {isActive ? "● Aktif" : "● Bitti"}
          </span>
          {isExpiring && isActive && (
            <span className="flex items-center gap-1 text-amber-400 text-xs">
              <AlertTriangle className="w-3 h-3" /> Yakında bitiyor
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {days !== null && (
          <div className="bg-zinc-800/60 rounded-xl p-3">
            <div className="flex items-center gap-1 text-zinc-500 text-xs mb-1">
              <Clock className="w-3 h-3" /> Kalan
            </div>
            <p className={`text-xl font-black ${isExpiring ? "text-amber-400" : "text-white"}`}>{days}</p>
            <p className="text-zinc-600 text-xs">gün</p>
          </div>
        )}
        {sessionsLeft !== null && (
          <div className="bg-zinc-800/60 rounded-xl p-3">
            <div className="flex items-center gap-1 text-zinc-500 text-xs mb-1">
              <Zap className="w-3 h-3" /> Seans
            </div>
            <p className="text-xl font-black text-white">{sessionsLeft}</p>
            <p className="text-zinc-600 text-xs">/ {sub.sessionsTotal}</p>
          </div>
        )}
        {sub.expiresAt && (
          <div className="bg-zinc-800/60 rounded-xl p-3">
            <div className="flex items-center gap-1 text-zinc-500 text-xs mb-1">
              <Calendar className="w-3 h-3" /> Bitiş
            </div>
            <p className="text-xs font-bold text-white leading-tight">
              {toDate(sub.expiresAt)?.toLocaleDateString("tr-TR", { day: "numeric", month: "short", year: "numeric" }) ?? "—"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function SubscriptionsSection({ profile }: { profile: ReturnType<typeof useAuth>["profile"] }) {
  // subscriptions dizisini kullan; yoksa legacy single-package'dan oluştur
  const subs: Subscription[] = (() => {
    if (profile?.subscriptions && profile.subscriptions.length > 0) {
      return profile.subscriptions as Subscription[];
    }
    // Eski format — tek paket
    if (profile?.activePackage) {
      return [{
        id: "legacy",
        packageId: profile.packageId ?? "",
        packageName: profile.activePackage.split(" - ").slice(0, -1).join(" - ") || profile.activePackage,
        packageType: profile.packageType ?? "",
        tierLabel: profile.activePackage.split(" - ").pop() ?? "",
        expiresAt: profile.expiresAt ? new Date((profile.expiresAt as unknown as { seconds: number }).seconds * 1000).toISOString() : null,
        sessionsTotal: profile.sessionsTotal,
        sessionsUsed: profile.sessionsUsed,
        purchasedAt: "",
      }];
    }
    return [];
  })();

  if (subs.length === 0) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-zinc-500" />
          </div>
          <div>
            <p className="text-white font-bold">Aktif Üyelik Yok</p>
            <p className="text-zinc-500 text-sm">Bir paket satın alarak başla</p>
          </div>
        </div>
        <Link
          href="/packages"
          className="w-full bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black text-sm py-3 rounded-xl transition-all text-center flex items-center justify-center gap-2"
        >
          Paketleri Gör <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const active = subs.filter(s => {
    if (s.expiresAt) return new Date(s.expiresAt) > new Date();
    return (s.sessionsTotal ?? 0) - (s.sessionsUsed ?? 0) > 0;
  });
  const expired = subs.filter(s => !active.includes(s));

  return (
    <div className="space-y-4">
      {/* Aktif abonelikler */}
      {active.map(sub => <SubCard key={sub.id} sub={sub} />)}

      {/* Süresi dolmuş abonelikler (varsa küçük göster) */}
      {expired.length > 0 && (
        <details className="group">
          <summary className="text-zinc-600 text-xs cursor-pointer hover:text-zinc-400 transition-colors list-none flex items-center gap-1.5">
            <span className="group-open:hidden">▶</span>
            <span className="hidden group-open:inline">▼</span>
            Geçmiş üyelikler ({expired.length})
          </summary>
          <div className="mt-3 space-y-3">
            {expired.map(sub => <SubCard key={sub.id} sub={sub} />)}
          </div>
        </details>
      )}

      <Link
        href="/packages"
        className="w-full border border-zinc-800 hover:border-[#FFC107]/40 text-zinc-400 hover:text-white font-semibold text-sm py-3 rounded-xl transition-all text-center flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" /> Yeni Paket Ekle
      </Link>
    </div>
  );
}

export default function DashboardPage() {
  const { user, profile, logout, loading } = useAuth();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    await logout();
    router.push("/");
  };

  const quickLinks = [
    { label: "Paket Satın Al", icon: ShoppingBag, href: "/packages", desc: "Yeni üyelik başlat" },
    { label: "WhatsApp Destek", icon: Phone, href: "https://wa.me/905064668981", desc: "Anlık yardım al", external: true },
    { label: "Seans Yönetimi", icon: Calendar, href: "https://wa.me/905064668981", desc: "Randevu & iptal", external: true },
    { label: "Grup Dersleri", icon: Users, href: "/packages#groups", desc: "Program & saatler" },
  ];

  if (loading) return null;

  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="bg-zinc-900/80 backdrop-blur border-b border-zinc-800 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpg" alt="E&S GYM" width={80} height={80} className="h-9 w-auto rounded-lg" />
          </Link>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Çıkış
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <p className="text-zinc-500 text-sm">Hoş geldin,</p>
          <h1 className="text-3xl font-black text-white mt-0.5">
            {profile?.name ?? user?.displayName ?? "Üye"}
          </h1>
          <p className="text-zinc-500 text-sm mt-1">{user?.email}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FFC107]" />
              Üyeliklerim
            </h2>
            <SubscriptionsSection profile={profile} />
          </div>

          <div className="md:col-span-2">
            <h2 className="text-white font-bold text-lg mb-3">Hızlı Erişim</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {quickLinks.map(({ label, icon: Icon, href, desc, external }) => (
                <Link
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col gap-2 hover:border-[#FFC107]/30 transition-all group"
                >
                  <div className="w-9 h-9 bg-zinc-800 group-hover:bg-[#FFC107]/15 rounded-xl flex items-center justify-center transition-colors">
                    <Icon className="w-4.5 h-4.5 text-zinc-400 group-hover:text-[#FFC107] transition-colors" />
                  </div>
                  <p className="text-white font-bold text-sm">{label}</p>
                  <p className="text-zinc-500 text-xs">{desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 bg-gradient-to-br from-[#FFC107]/10 to-transparent border border-[#FFC107]/20 rounded-2xl p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-[#FFC107] text-xs font-semibold uppercase tracking-widest mb-1">Yardıma mı ihtiyacın var?</p>
                <h3 className="text-white font-black text-xl">Bize ulaş</h3>
                <p className="text-zinc-400 text-sm mt-1">0506 466 89 81 · E&S GYM Kepez, Antalya</p>
              </div>
              <a
                href="https://wa.me/905064668981"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black text-sm px-5 py-3 rounded-xl transition-all whitespace-nowrap"
              >
                WhatsApp&apos;ta Yaz
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
