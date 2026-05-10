"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, AtSign as Instagram, MessageCircle, Clock, Navigation } from "lucide-react";
import Image from "next/image";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z" />
    </svg>
  );
}

const socialPosts = [
  { id: 1, src: "/gallery/workout.webp", label: "Antrenman" },
  { id: 2, src: "/gallery/boxing.webp", label: "Boks" },
  { id: 3, src: "/gallery/pilates.jpg", label: "Pilates" },
  { id: 4, src: "/gallery/interior.jpg", label: "GYM" },
  { id: 5, src: "/gallery/ropes.webp", label: "Fonksiyonel" },
  { id: 6, src: "/gallery/community.webp", label: "Topluluk" },
];

export default function ContactLocation() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFF8E1] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FFF8E1] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFF8E1] border border-[#FFC107]/30 rounded-full px-4 py-1.5 mb-4">
            <Navigation className="w-3.5 h-3.5 text-[#FFC107]" />
            <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-widest">İletişim & Konum</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Bizi{" "}
            <span className="text-[#FFC107]">Bul & Takip Et.</span>
          </h2>
          <p className="text-gray-500 text-base mt-3 max-w-xl mx-auto">
            Kepez, Antalya&apos;nın kalbinde — Kanal Mahallesi Halide Edip Caddesi üzerinde.
            Kepez spor salonu, pilates, kickboks ve EMS fitness için doğru adres.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {/* Contact info */}
            <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
              <h3 className="text-gray-900 font-black text-xl mb-6">İletişim Bilgileri</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFF8E1] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#FFC107]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Adres</p>
                    <p className="text-gray-800 font-semibold text-sm">Kanal Mah. Halide Edip Cad.</p>
                    <p className="text-gray-500 text-sm">Kepez, Antalya</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFF8E1] rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#FFC107]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Telefon</p>
                    <a href="tel:+905064668981" className="text-gray-800 font-semibold text-sm hover:text-[#FFC107] transition-colors">
                      0506 466 89 81
                    </a>
                    <p className="text-gray-400 text-xs mt-0.5">Arayın veya WhatsApp yazın</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FFF8E1] rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#FFC107]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Çalışma Saatleri</p>
                    <p className="text-gray-800 font-semibold text-sm">Pzt – Cum: 09:00 – 23:00</p>
                    <p className="text-gray-700 text-sm">Cmt: 09:00 – 20:00</p>
                    <p className="text-red-400 text-sm font-medium">Pazar: Kapalı</p>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/905064668981"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 hover:border-[#25D366]/40 text-[#25D366] font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp&apos;tan Yaz
              </a>
            </div>

            {/* Social block — Instagram + TikTok */}
            <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-gray-900 font-black text-base">Sosyal Medya</h3>
              </div>

              {/* Instagram */}
              <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-xl hover:bg-[#FFF8E1] transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-black text-sm">@esgymfitness</p>
                    <p className="text-gray-400 text-xs">Instagram</p>
                  </div>
                </div>
                <a href="https://www.instagram.com/esgymfitness" target="_blank" rel="noopener noreferrer" className="text-[#FFC107] text-xs font-semibold hover:underline">
                  Takip Et →
                </a>
              </div>

              {/* TikTok */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-black/5 transition-colors group mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center">
                    <TikTokIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-black text-sm">@esgymfitness</p>
                    <p className="text-gray-400 text-xs">TikTok</p>
                  </div>
                </div>
                <a href="https://www.tiktok.com/@esgymfitness" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-xs font-semibold hover:underline">
                  Takip Et →
                </a>
              </div>

              {/* Post grid */}
              <a
                href="https://www.instagram.com/esgymfitness"
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-3 gap-2"
              >
                {socialPosts.map((post) => (
                  <div
                    key={post.id}
                    className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={post.src}
                      alt={post.label}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="80px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center px-1">{post.label}</span>
                    </div>
                  </div>
                ))}
              </a>
            </div>
          </motion.div>

          {/* Right: Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div className="flex-1 min-h-[420px] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.754360818073!2d30.676416100000004!3d36.920137100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38fb7eb7f8279%3A0xfb6caab4445df65c!2sE%26S%20Gym%20Fitness%20Center!5e0!3m2!1str!2str!4v1777242647912!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="E&S GYM Fitness Center Konum"
              />
            </div>

            <div className="bg-[#FFF8E1] border border-[#FFC107]/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#FFC107]/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#FFC107]" />
                </div>
                <div>
                  <p className="text-gray-900 font-black text-sm">Hemen Ara</p>
                  <p className="text-gray-500 text-xs">Üyelik ve bilgi için</p>
                </div>
              </div>
              <a
                href="tel:+905064668981"
                className="flex items-center justify-center gap-2 w-full bg-[#FFC107] hover:bg-[#FFB300] text-white font-black text-sm py-3.5 rounded-xl transition-all duration-200 active:scale-95"
              >
                0506 466 89 81
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
