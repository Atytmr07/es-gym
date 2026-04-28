"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Menu, X, Dumbbell } from "lucide-react";

const links = [
  { label: "Yaşam Alanı", href: "/#lifestyle" },
  { label: "Galeri", href: "/#gallery" },
  { label: "Paketler", href: "/packages" },
  { label: "İletişim", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#FFC107] rounded-xl flex items-center justify-center shadow-sm">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-gray-900 font-black text-lg tracking-tight">E&S</span>
              <span className="text-[#FFC107] font-black text-lg tracking-tight"> GYM</span>
              <p className="text-gray-400 text-[9px] uppercase tracking-widest -mt-0.5">Fitness Center</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFC107] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/packages"
              className="relative flex items-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-[#FFC107]/30 hover:shadow-xl hover:shadow-[#FFC107]/40 active:scale-95"
            >
              <Lock className="w-3.5 h-3.5" />
              Online Üye Ol
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white animate-pulse" />
            </a>
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
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900 text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/packages"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#FFC107] text-gray-900 font-black text-sm px-5 py-3.5 rounded-xl mt-2 shadow-md shadow-[#FFC107]/30"
              >
                <Lock className="w-3.5 h-3.5" />
                Online Üye Ol
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
