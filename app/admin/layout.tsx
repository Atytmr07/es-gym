"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import {
  LayoutDashboard, Users, Package, TrendingUp, LogOut, Menu, X, Loader2,
} from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Genel Bakış", href: "/admin", icon: LayoutDashboard },
  { label: "Üyeler", href: "/admin/users", icon: Users },
  { label: "Paketler", href: "/admin/packages", icon: Package },
  { label: "Gelir & Analitik", href: "/admin/revenue", icon: TrendingUp },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, profile, logout, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!user) router.push("/login");
      else if (profile && profile.role !== "admin") router.push("/dashboard");
    }
  }, [user, profile, loading, router]);

  if (loading || !profile) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#FFC107] animate-spin" />
      </div>
    );
  }

  const handleLogout = async () => {
    setLoggingOut(true);
    await logout();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-zinc-900 border-r border-zinc-800 z-40 flex flex-col transform transition-transform duration-200 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Brand */}
        <div className="h-16 flex items-center gap-3 px-4 border-b border-zinc-800">
          <Image src="/logo.jpg" alt="E&S GYM" width={80} height={80} className="h-9 w-auto rounded-lg shrink-0" />
          <p className="text-[#FFC107] text-xs font-bold leading-tight">Yönetim<br/>Paneli</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  active
                    ? "bg-[#FFC107]/15 text-[#FFC107] border border-[#FFC107]/20"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                <Icon className="w-4.5 h-4.5 shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="px-3 py-4 border-t border-zinc-800">
          <div className="flex items-center gap-3 px-3 py-2.5 mb-2">
            <div className="w-8 h-8 bg-[#FFC107]/20 rounded-full flex items-center justify-center text-[#FFC107] font-black text-sm shrink-0">
              {profile.name?.[0]?.toUpperCase() ?? "A"}
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-bold truncate">{profile.name}</p>
              <p className="text-zinc-500 text-xs truncate">{profile.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-red-500/10 text-sm font-semibold transition-all"
          >
            <LogOut className="w-4 h-4" />
            Çıkış Yap
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Mobile topbar */}
        <header className="h-16 bg-zinc-900/80 backdrop-blur border-b border-zinc-800 flex items-center gap-4 px-4 lg:hidden sticky top-0 z-20">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-zinc-400 hover:text-white"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-black text-white">Yönetim Paneli</span>
          {sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="ml-auto text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </header>

        <main className="flex-1 p-5 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
