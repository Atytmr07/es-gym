"use client";

import { motion, type Variants } from "framer-motion";
import { Target, Gamepad2, Users, Dumbbell, Star, Sparkles, Baby, ArrowUpRight } from "lucide-react";

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
      {/* subtle bg shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFF8E1] rounded-full blur-[140px] opacity-60 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-100 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-auto">

          {/* 1 — BOKS RINGI — büyük dark kart, col-span-4 */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-4 group relative bg-zinc-900 rounded-3xl p-8 lg:p-10 overflow-hidden cursor-pointer min-h-[320px] flex flex-col justify-between"
          >
            {/* Dekoratif büyük yazı */}
            <span className="absolute -bottom-6 -right-4 text-[140px] font-black text-white/[0.04] select-none leading-none pointer-events-none">
              BOKS
            </span>
            {/* Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFC107]/10 rounded-full blur-3xl group-hover:bg-[#FFC107]/18 transition-all duration-500" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-[#FFC107] rounded-2xl flex items-center justify-center shadow-lg shadow-[#FFC107]/30">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <span className="flex items-center gap-1.5 text-xs text-zinc-400 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Her Seviyeye Açık
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">Profesyonel Boks Ringi</h3>
              <p className="text-zinc-400 text-base leading-relaxed max-w-md">
                Tam donanımlı profesyonel ring, kickboks torbası ve dövüş sporu ekipmanları. Uzman antrenörler eşliğinde teknik geliştir, stres at, kendini aş.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/5 mt-6">
              <div className="flex gap-6">
                <div>
                  <p className="text-[#FFC107] font-black text-xl">Pro</p>
                  <p className="text-zinc-500 text-xs">Ring Kalitesi</p>
                </div>
                <div>
                  <p className="text-[#FFC107] font-black text-xl">1:1</p>
                  <p className="text-zinc-500 text-xs">PT Seansı</p>
                </div>
                <div>
                  <p className="text-[#FFC107] font-black text-xl">Grup</p>
                  <p className="text-zinc-500 text-xs">Dersler</p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white/5 group-hover:bg-[#FFC107] rounded-xl flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
          </motion.div>

          {/* 2 — SERTİFİKALI EĞİTMENLER — col-span-2, sarı kart */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-2 group relative bg-[#FFC107] rounded-3xl p-7 overflow-hidden cursor-pointer min-h-[160px] flex flex-col justify-between"
          >
            <span className="absolute -bottom-4 -right-2 text-[90px] font-black text-black/[0.06] select-none leading-none pointer-events-none">PT</span>
            <div className="relative z-10">
              <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <h3 className="text-xl font-black text-white mb-1">Sertifikalı Eğitmenler</h3>
              <p className="text-white/75 text-sm leading-relaxed">Uluslararası lisanslı PT kadrosu. Hedefine özel program, birebir takip.</p>
            </div>
            <div className="relative z-10 flex items-center justify-between mt-5 pt-4 border-t border-white/20">
              <div className="flex -space-x-2">
                {["A","B","C","D"].map(l => (
                  <div key={l} className="w-8 h-8 bg-white/25 border-2 border-[#FFC107] rounded-full flex items-center justify-center text-white text-[10px] font-black">{l}</div>
                ))}
                <div className="w-8 h-8 bg-white border-2 border-[#FFC107] rounded-full flex items-center justify-center text-[#FFC107] text-[10px] font-black">+6</div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
            </div>
          </motion.div>

          {/* 3 — BİLARDO & DART — col-span-2 */}
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-2 group relative bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#FFC107]/30 rounded-3xl p-7 overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <span className="absolute -bottom-4 -right-3 text-[80px] font-black text-gray-200 select-none leading-none pointer-events-none group-hover:text-[#FFF3CD] transition-colors duration-300">🎱</span>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-11 h-11 bg-white border border-gray-100 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#FFC107] group-hover:border-[#FFC107] transition-all duration-300">
                <Gamepad2 className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Bilardo & Dart</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">Antrenman bitti, eğlence bitmedi. Sosyal aktivite köşemizde arkadaşlarınla kaliteli vakit geçir.</p>
              <div className="mt-4 text-[#FFC107] text-xs font-bold flex items-center gap-1">Her Gün Açık <ArrowUpRight className="w-3 h-3" /></div>
            </div>
          </motion.div>

          {/* 4 — REFORMER PİLATES — col-span-2 */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-2 group relative bg-gray-900 rounded-3xl p-7 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
          >
            <span className="absolute -bottom-3 -right-2 text-[80px] font-black text-white/[0.04] select-none leading-none pointer-events-none">🧘</span>
            <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 to-transparent" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-11 h-11 bg-rose-500/15 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-rose-400" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">Reformer Pilates</h3>
              <p className="text-zinc-400 text-sm leading-relaxed flex-1">Profesyonel reformer makineler, sertifikalı pilates eğitmeni. Hem esneklik hem güç, hem de huzur.</p>
              <div className="mt-4 flex gap-2">
                {["Esneklik","Postür","Güç"].map(tag => (
                  <span key={tag} className="text-[10px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded-full px-2.5 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 5 — KAPSAYICI ATMOSFER — col-span-3, geniş yatay */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-3 group relative bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#FFC107]/30 rounded-3xl p-7 lg:p-8 overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#FFF8E1] rounded-full blur-2xl group-hover:bg-[#FFF3CD] transition-all duration-500" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-11 h-11 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#FFC107] group-hover:border-[#FFC107] transition-all duration-300">
                  <Users className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-[#FFC107] transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Kapsayıcı Atmosfer</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">Kadın, erkek, çocuk, genç, yaşlı — fark etmez. Burada herkes kendini güvende ve motive hisseder.</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { emoji: "👩", label: "Kadın Dostu", sub: "Özel alan" },
                  { emoji: "🧒", label: "Çocuk Programı", sub: "4-15 yaş" },
                  { emoji: "🤝", label: "Topluluk", sub: "Gerçek bağ" },
                ].map(item => (
                  <div key={item.label} className="bg-white border border-gray-100 rounded-2xl p-3 text-center group-hover:border-[#FFC107]/20 transition-colors">
                    <span className="text-2xl block mb-1">{item.emoji}</span>
                    <p className="text-gray-800 text-xs font-bold">{item.label}</p>
                    <p className="text-gray-400 text-[10px] mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 6 — ÇOCUK GELİŞİM — col-span-2 */}
          <motion.div
            custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-2 group relative bg-amber-50 hover:bg-[#FFF8E1] border border-amber-100 hover:border-[#FFC107]/40 rounded-3xl p-7 overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <span className="absolute -bottom-3 -right-2 text-[80px] select-none leading-none pointer-events-none">⭐</span>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-11 h-11 bg-[#FFC107]/15 rounded-xl flex items-center justify-center mb-4">
                <Baby className="w-5 h-5 text-[#B8860B]" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Çocuk Gelişim</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">4-15 yaş arası çocuklar için oyun tabanlı motor gelişim programı. Uzman çocuk antrenörleri gözetiminde.</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-[10px] font-bold text-[#B8860B] bg-[#FFC107]/15 rounded-full px-2.5 py-1">4–15 Yaş</span>
                <span className="text-[10px] font-bold text-[#B8860B] bg-[#FFC107]/15 rounded-full px-2.5 py-1">Uzman Antrenör</span>
              </div>
            </div>
          </motion.div>

          {/* 7 — PREMİUM EKİPMAN — col-span-3, dark */}
          <motion.div
            custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-3 group relative bg-zinc-900 rounded-3xl p-7 lg:p-8 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
          >
            <span className="absolute -bottom-8 -right-4 text-[120px] font-black text-white/[0.04] select-none leading-none pointer-events-none">GYM</span>
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFC107]/5 rounded-full blur-3xl group-hover:bg-[#FFC107]/10 transition-all duration-500" />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-11 h-11 bg-[#FFC107]/15 rounded-xl flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-[#FFC107]" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-[#FFC107] transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Premium Ekipman</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">Dünya standartlarında kardio ve ağırlık istasyonları. Sürekli yenilenen makine parkuru ile her antrenman en verimli hali.</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "Kardio", label: "Koşu & Bisiklet" },
                  { value: "Güç", label: "Free Weights" },
                  { value: "Fonk.", label: "Functional Zone" },
                ].map(item => (
                  <div key={item.label} className="bg-white/5 border border-white/5 rounded-2xl p-3 text-center group-hover:border-[#FFC107]/15 transition-colors">
                    <p className="text-[#FFC107] font-black text-sm">{item.value}</p>
                    <p className="text-zinc-500 text-[10px] mt-0.5">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
