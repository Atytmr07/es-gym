"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import type { Subscription } from "@/lib/firestore";
import Image from "next/image";
import {
  Dumbbell, LogOut, Clock, Zap, Users, Calendar,
  ShoppingBag, CheckCircle2, AlertTriangle, ChevronRight,
  Phone, Plus, Home, ChevronDown,
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
    <div className={`bg-zinc-900 border rounded-2xl p-4 sm:p-5 ${isActive ? "border-[#FFC107]/30" : "border-zinc-800"}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${isActive ? "bg-[#FFC107]/15" : "bg-zinc-800"}`}>
            <Dumbbell className={`w-4 h-4 ${isActive ? "text-[#FFC107]" : "text-zinc-500"}`} />
          </div>
          <div className="min-w-0">
            <p className="text-white font-bold text-sm leading-tight truncate">{sub.packageName}</p>
            <p className="text-zinc-500 text-xs truncate">{sub.tierLabel}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${isActive ? "bg-emerald-500/15 text-emerald-400" : "bg-zinc-800 text-zinc-500"}`}>
            {isActive ? "● Aktif" : "● Bitti"}
          </span>
          {isExpiring && isActive && (
            <span className="flex items-center gap-1 text-amber-400 text-xs whitespace-nowrap">
              <AlertTriangle className="w-3 h-3" /> Yakında bitiyor
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {days !== null && (
          <div className="bg-zinc-800/60 rounded-xl p-2.5 sm:p-3">
            <div className="flex items-center gap-1 text-zinc-500 text-xs mb-1">
              <Clock className="w-3 h-3" /> Kalan
            </div>
            <p className={`text-xl font-black ${isExpiring ? "text-amber-400" : "text-white"}`}>{days}</p>
            <p className="text-zinc-600 text-xs">gün</p>
          </div>
        )}
        {sessionsLeft !== null && (
          <div className="bg-zinc-800/60 rounded-xl p-2.5 sm:p-3">
            <div className="flex items-center gap-1 text-zinc-500 text-xs mb-1">
              <Zap className="w-3 h-3" /> Seans
            </div>
            <p className="text-xl font-black text-white">{sessionsLeft}</p>
            <p className="text-zinc-600 text-xs">/ {sub.sessionsTotal}</p>
          </div>
        )}
        {sub.expiresAt && (
          <div className="bg-zinc-800/60 rounded-xl p-2.5 sm:p-3">
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
  const [showExpired, setShowExpired] = useState(false);

  const subs: Subscription[] = (() => {
    if (profile?.subscriptions && profile.subscriptions.length > 0) {
      return profile.subscriptions as Subscription[];
    }
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
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0">
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
    <div className="space-y-3">
      {active.map(sub => <SubCard key={sub.id} sub={sub} />)}

      {expired.length > 0 && (
        <div>
          <button
            onClick={() => setShowExpired(v => !v)}
            className="text-zinc-600 text-xs hover:text-zinc-400 transition-colors flex items-center gap-1.5 mb-3"
          >
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showExpired ? "rotate-180" : ""}`} />
            Geçmiş üyelikler ({expired.length})
          </button>
          {showExpired && (
            <div className="space-y-3">
              {expired.map(sub => <SubCard key={sub.id} sub={sub} />)}
            </div>
          )}
        </div>
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

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [loading, user, router]);

  const handleLogout = async () => {
    setLoggingOut(true);
    await logout();
    router.push("/");
  };

  const quickLinks = [
    { label: "Paket Al", icon: ShoppingBag, href: "/packages", desc: "Yeni üyelik" },
    { label: "WhatsApp", icon: Phone, href: "https://wa.me/905064668981", desc: "Destek hattı", external: true },
    { label: "Randevu", icon: Calendar, href: "https://wa.me/905064668981", desc: "Seans & iptal", external: true },
    { label: "Dersler", icon: Users, href: "/packages#groups", desc: "Grup saatleri" },
  ];

  if (loading || !user) return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#FFC107] border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="bg-zinc-900/80 backdrop-blur border-b border-zinc-800 sticky top-0 z-40">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpg" alt="E&S GYM" width={80} height={80} className="h-8 w-auto rounded-lg" />
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-sm px-3 py-2 rounded-lg hover:bg-zinc-800 transition-all"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Ana Sayfa</span>
            </Link>
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-red-400 text-sm px-3 py-2 rounded-lg hover:bg-zinc-800 transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Çıkış</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-6">

        {/* Greeting */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
          <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Hoş geldin</p>
          <h1 className="text-2xl font-black text-white leading-tight">
            {profile?.name ?? user?.displayName ?? "Üye"}
          </h1>
          <p className="text-zinc-500 text-sm mt-0.5 truncate">{user?.email}</p>
        </div>

        {/* Subscriptions */}
        <div>
          <h2 className="text-white font-bold text-base mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FFC107]" />
            Üyeliklerim
          </h2>
          <SubscriptionsSection profile={profile} />
        </div>

        {/* Quick links */}
        <div>
          <h2 className="text-white font-bold text-base mb-3">Hızlı Erişim</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickLinks.map(({ label, icon: Icon, href, desc, external }) => (
              <Link
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col gap-2 hover:border-[#FFC107]/30 active:scale-95 transition-all group"
              >
                <div className="w-9 h-9 bg-zinc-800 group-hover:bg-[#FFC107]/15 rounded-xl flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4 text-zinc-400 group-hover:text-[#FFC107] transition-colors" />
                </div>
                <p className="text-white font-bold text-sm leading-tight">{label}</p>
                <p className="text-zinc-500 text-xs">{desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-[#FFC107]/10 to-transparent border border-[#FFC107]/20 rounded-2xl p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-[#FFC107] text-xs font-semibold uppercase tracking-widest mb-1">Yardıma mı ihtiyacın var?</p>
              <h3 className="text-white font-black text-lg">Bize ulaş</h3>
              <p className="text-zinc-400 text-sm mt-0.5">0506 466 89 81 · Kepez, Antalya</p>
            </div>
            <a
              href="https://wa.me/905064668981"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFC107] hover:bg-[#FFB300] active:scale-95 text-gray-900 font-black text-sm px-5 py-3 rounded-xl transition-all whitespace-nowrap text-center"
            >
              WhatsApp&apos;ta Yaz
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}
