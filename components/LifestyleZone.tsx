"use client";

import { motion, type Variants } from "framer-motion";
import { Dumbbell, Sparkles, Baby, Gamepad2, Star, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function LifestyleZone() {
  return (
    <section id="lifestyle" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFF8E1] rounded-full blur-[140px] opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-100 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFF8E1] border border-[#FFC107]/30 rounded-full px-4 py-1.5 mb-4">
              <Star className="w-3.5 h-3.5 text-[#FFC107] fill-[#FFC107]" />
              <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-widest">Yaşam Alanı</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Sadece Spor Değil,<br />
              <span className="text-[#FFC107]">Bir Yaşam Tarzı.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-base leading-relaxed max-w-sm lg:text-right">
            Dambıldan bilardoya, pilates stüdyosundan boks ringine — E&S hayatının her köşesine dokunuyor.
          </p>
        </motion.div>

        {/* Bento Grid — 2 rows, 6-col */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

          {/* ── ROW 1 ── */}

          {/* 1 — PREMIUM GYM & FITNESS */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-4 group relative bg-zinc-900 rounded-3xl p-8 lg:p-10 overflow-hidden cursor-pointer min-h-[320px] flex flex-col justify-between"
          >
            <span className="absolute -bottom-6 -right-4 text-[140px] font-black text-white/[0.04] select-none leading-none pointer-events-none">GYM</span>
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFC107]/8 rounded-full blur-3xl group-hover:bg-[#FFC107]/15 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-[#FFC107] rounded-2xl flex items-center justify-center shadow-lg shadow-[#FFC107]/30">
                  <Dumbbell className="w-7 h-7 text-white" />
                </div>
                <span className="flex items-center gap-1.5 text-xs text-zinc-400 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Her Seviyeye Açık
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">Premium GYM & Fitness</h3>
              <p className="text-zinc-400 text-base leading-relaxed max-w-md">
                Sürekli yenilenen ekipman parkuru, profesyonel atmosfer. Kardio, ağırlık ve makine alanlarıyla her antrenmanını bir üst seviyeye taşı.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/5 mt-6">
              <div className="flex gap-8">
                <div>
                  <p className="text-[#FFC107] font-black text-xl">Kardio</p>
                  <p className="text-zinc-500 text-xs">Koşu & Bisiklet</p>
                </div>
                <div>
                  <p className="text-[#FFC107] font-black text-xl">Güç</p>
                  <p className="text-zinc-500 text-xs">Free Weights</p>
                </div>
                <div>
                  <p className="text-[#FFC107] font-black text-xl">Makine</p>
                  <p className="text-zinc-500 text-xs">Plate-Loaded</p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white/5 group-hover:bg-[#FFC107] rounded-xl flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
          </motion.div>

          {/* 2 — SERTİFİKALI EĞİTMENLER */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-2 group relative bg-[#FFC107] rounded-3xl p-7 overflow-hidden cursor-pointer min-h-[160px] flex flex-col justify-between"
          >
            <span className="absolute -bottom-4 -right-2 text-[90px] font-black text-black/[0.06] select-none leading-none pointer-events-none">PT</span>
            <div className="relative z-10 flex flex-col h-full gap-4">
              <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-1">Sertifikalı Eğitmenler</h3>
                <p className="text-white/75 text-sm leading-relaxed">Uluslararası lisanslı PT kadrosu. Hedefine özel program, birebir takip ve gerçek sonuçlar.</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <div>
                  <p className="text-white font-black text-2xl">10+</p>
                  <p className="text-white/60 text-xs">Yıllık Deneyim</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              </div>
            </div>
          </motion.div>

          {/* ── ROW 2 ── */}

          {/* 3 — REFORMER PİLATES */}
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-2 group relative bg-zinc-900 rounded-3xl p-7 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-900/25 to-transparent pointer-events-none" />
            <div className="absolute -bottom-4 -right-3 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-rose-500/15 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-rose-400" />
                </div>
                <span className="text-[10px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded-full px-2.5 py-1">Stüdyo</span>
              </div>
              <h3 className="text-xl font-black text-white mb-2">Reformer Pilates</h3>
              <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                Profesyonel reformer ekipmanlar ve sertifikalı eğitmen eşliğinde. Esnekliğini artır, postürünü düzelt, gücünü hisset.
              </p>
              <div className="mt-5 flex gap-2">
                {["Esneklik", "Postür", "Denge"].map(tag => (
                  <span key={tag} className="text-[10px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded-full px-2.5 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 4 — ÇOCUK HAREKET GELİŞİM — DOKUNMA */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-2 group relative bg-amber-50 hover:bg-[#FFF8E1] border border-amber-100 hover:border-[#FFC107]/40 rounded-3xl p-7 overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <span className="absolute -bottom-3 -right-2 text-[80px] select-none leading-none pointer-events-none">⭐</span>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-11 h-11 bg-[#FFC107]/15 rounded-xl flex items-center justify-center mb-4">
                <Baby className="w-5 h-5 text-[#B8860B]" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-1">Hareket Gelişim</h3>
              <p className="text-[#B8860B] text-xs font-bold italic mb-2">&ldquo;Keşfet, Öğren, Eğlen&rdquo;</p>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">2-12 yaş çocuklar için dikkat, denge, kuvvet ve sosyal beceri geliştiren oyun tabanlı program.</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-[10px] font-bold text-[#B8860B] bg-[#FFC107]/15 rounded-full px-2.5 py-1">2–12 Yaş</span>
                <span className="text-[10px] font-bold text-[#B8860B] bg-[#FFC107]/15 rounded-full px-2.5 py-1">12 Ders/Ay</span>
              </div>
            </div>
          </motion.div>

          {/* 5 — BİLARDO & SOSYAL */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-2 group relative bg-zinc-900 rounded-3xl p-7 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
          >
            <span className="absolute -bottom-4 -right-3 text-[80px] select-none leading-none pointer-events-none opacity-10">🎱</span>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-white/8 rounded-xl flex items-center justify-center group-hover:bg-[#FFC107]/15 transition-all duration-300">
                  <Gamepad2 className="w-5 h-5 text-zinc-400 group-hover:text-[#FFC107] transition-colors duration-300" />
                </div>
                <span className="flex items-center gap-1.5 text-xs text-zinc-500 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                  <Zap className="w-3 h-3 text-[#FFC107]" />
                  Sosyal Alan
                </span>
              </div>
              <h3 className="text-xl font-black text-white mb-2">Bilardo & Dart</h3>
              <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                Antrenman bitti, eğlence bitmedi. Arkadaşlarınla vakit geçir, sosyalleş, dinlen.
              </p>
              <div className="mt-5 pt-4 border-t border-white/5">
                <p className="text-zinc-600 text-xs">Antrenman saatleri ile birlikte kullanılabilir.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
