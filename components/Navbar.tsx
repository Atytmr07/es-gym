"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Menu, X, LayoutDashboard, LogOut, Shield } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const links = [
  { label: "Yaşam Alanı", href: "/#lifestyle" },
  { label: "Galeri", href: "/#gallery" },
  { label: "Paketler", href: "/packages" },
  { label: "İletişim", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, profile, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = async () => {
    setMenuOpen(false);
    await logout();
    router.push("/");
  };

  const dashboardHref = profile?.role === "admin" ? "/admin" : "/dashboard";
  const dashboardLabel = profile?.role === "admin" ? "Yönetim" : "Hesabım";
  const DashIcon = profile?.role === "admin" ? Shield : LayoutDashboard;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="E&S GYM Fitness Center"
              width={100}
              height={100}
              className="h-11 w-auto rounded-xl object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFC107] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA / Auth */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <>
                <Link
                  href={dashboardHref}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-semibold transition-colors px-3 py-2 rounded-xl hover:bg-gray-100"
                >
                  <DashIcon className="w-4 h-4" />
                  {dashboardLabel}
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-gray-400 hover:text-red-500 text-sm font-medium transition-colors px-3 py-2 rounded-xl hover:bg-red-50"
                >
                  <LogOut className="w-4 h-4" />
                  Çıkış
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-gray-900 text-sm font-semibold transition-colors px-3 py-2"
                >
                  Giriş Yap
                </Link>
                <Link
                  href="/packages"
                  className="relative flex items-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-[#FFC107]/30 hover:shadow-xl hover:shadow-[#FFC107]/40 active:scale-95"
                >
                  <Lock className="w-3.5 h-3.5" />
                  Online Üye Ol
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white animate-pulse" />
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-500 hover:text-gray-900 transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900 text-base font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {user ? (
                <>
                  <Link
                    href={dashboardHref}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm px-5 py-3.5 rounded-xl mt-2"
                  >
                    <DashIcon className="w-4 h-4" />
                    {dashboardLabel}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 border border-red-200 text-red-500 font-semibold text-sm px-5 py-3.5 rounded-xl"
                  >
                    <LogOut className="w-4 h-4" />
                    Çıkış Yap
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold text-sm px-5 py-3.5 rounded-xl mt-2"
                  >
                    Giriş Yap
                  </Link>
                  <Link
                    href="/packages"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 bg-[#FFC107] text-gray-900 font-black text-sm px-5 py-3.5 rounded-xl shadow-md shadow-[#FFC107]/30"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    Online Üye Ol
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
