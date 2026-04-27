"use client";

import { motion } from "framer-motion";
import { Dumbbell, AtSign as Instagram, Phone, MapPin, Lock, Heart, Clock, ArrowRight, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Yaşam Alanı", href: "#lifestyle" },
  { label: "Galeri", href: "#gallery" },
  { label: "Üye Yorumları", href: "#testimonials" },
  { label: "Paketler", href: "#packages" },
  { label: "VKİ Hesapla", href: "#bmi" },
  { label: "İletişim", href: "#contact" },
];

const packageLinks = [
  "Standart GYM",
  "Premium PT",
  "Reformer Pilates",
  "Bölgesel İncelme",
  "Çocuk Gelişim",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Banner */}
      <div className="bg-[#FFC107]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-1">
                Harekete Geçme Zamanı.
              </h3>
              <p className="text-gray-900/70 font-medium">
                2017&apos;den beri Antalya&apos;da premium fitness deneyimi. Sıradaki sen ol.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="#packages"
                className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-black text-sm px-7 py-3.5 rounded-xl transition-all duration-200 active:scale-95"
              >
                <Lock className="w-4 h-4" />
                Online Üye Ol
              </a>
              <a
                href="https://wa.me/905064668981"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-gray-900 font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-[#FFC107] rounded-xl flex items-center justify-center shadow-lg shadow-[#FFC107]/20">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-white font-black text-xl">E&S</span>
                  <span className="text-[#FFC107] font-black text-xl">GYM</span>
                </div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest -mt-0.5">Fitness Center · Since 2017</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Antalya&apos;nın premium fitness ve yaşam merkezi. 2017&apos;den bu yana profesyonel ekipman, sertifikalı kadro ve kapsayıcı bir atmosferle hizmetinizdeyiz.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              <a href="tel:+905064668981" className="flex items-center gap-2.5 text-gray-400 hover:text-[#FFC107] transition-colors text-sm group">
                <div className="w-7 h-7 bg-gray-800 group-hover:bg-[#FFC107]/20 rounded-lg flex items-center justify-center transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                0506 466 89 81
              </a>
              <div className="flex items-start gap-2.5 text-gray-400 text-sm">
                <div className="w-7 h-7 bg-gray-800 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                Kanal Mah. Halide Edip Cad. Kepez, Antalya
              </div>
              <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                <div className="w-7 h-7 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                Pzt – Cmt: 10:00 – 22:00 &nbsp;·&nbsp; <span className="text-red-400">Paz: Kapalı</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/esgymfitness"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-200 group"
              >
                <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://wa.me/905064668981"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-[#25D366] rounded-xl flex items-center justify-center transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="tel:+905064668981"
                className="w-9 h-9 bg-gray-800 hover:bg-[#FFC107]/20 rounded-xl flex items-center justify-center transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-5">Navigasyon</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFC107] text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-5">Paketler</h4>
            <ul className="flex flex-col gap-3">
              {packageLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#packages"
                    className="text-gray-400 hover:text-[#FFC107] text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Trust */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-5">Çalışma Saatleri</h4>
            <div className="flex flex-col gap-2.5 mb-6">
              {[
                { day: "Pazartesi – Cuma", hours: "10:00 – 22:00", open: true },
                { day: "Cumartesi", hours: "10:00 – 22:00", open: true },
                { day: "Pazar", hours: "Kapalı", open: false },
              ].map(({ day, hours, open }) => (
                <div key={day} className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{day}</span>
                  <span className={`text-xs font-semibold ${open ? "text-gray-300" : "text-red-400"}`}>{hours}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 bg-gray-800 rounded-xl px-3 py-2.5">
                <Lock className="w-3.5 h-3.5 text-[#FFC107] shrink-0" />
                <span className="text-gray-400 text-xs">3D Secure Güvenli Ödeme</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800 rounded-xl px-3 py-2.5">
                <span className="text-sm">🐾</span>
                <div className="flex items-center gap-1">
                  <Heart className="w-3 h-3 text-red-400 fill-red-400" />
                  <span className="text-gray-400 text-xs">Hayvan Dostu İşletme</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} E&S GYM Fitness Center. Tüm hakları saklıdır. · Antalya
            </p>
            <div className="flex items-center gap-4">
              {["Visa", "Mastercard", "Troy", "iyzico"].map(b => (
                <span key={b} className="text-gray-700 text-xs">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
