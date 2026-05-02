"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Lock, CheckCircle2, Zap, Dumbbell, Heart,
  Baby, Sparkles, MessageCircle, Users, Phone, Flame,
} from "lucide-react";

type Variant = "dark" | "light" | "gold";

function TierSelector({
  tiers,
  variant = "dark",
}: {
  tiers: { label: string; price: string; sub?: string }[];
  variant?: Variant;
}) {
  const [sel, setSel] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tiers.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setSel(i)}
            className={[
              "text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200",
              sel === i
                ? variant === "gold"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "bg-[#FFC107] text-gray-900 shadow-sm"
                : variant === "dark"
                ? "bg-white/10 text-zinc-400 hover:bg-white/15 border border-white/5"
                : variant === "gold"
                ? "bg-white/20 text-white hover:bg-white/30"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200",
            ].join(" ")}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className={`text-4xl font-black ${variant === "light" ? "text-gray-900" : "text-white"}`}>
          ₺{tiers[sel].price}
        </span>
        <span className={`text-sm ${variant === "dark" ? "text-zinc-500" : variant === "gold" ? "text-white/60" : "text-gray-400"}`}>
          {tiers[sel].sub ?? "toplam"}
        </span>
      </div>
    </div>
  );
}

function BolgeselSelector() {
  const [sel, setSel] = useState(0);
  const devices = [
    { name: "G5", price: "7.500", desc: "Vücut şekillendirme" },
    { name: "WSlim", price: "8.200", desc: "İncelme & sıkılaştırma" },
    { name: "Lenf Tulumu", price: "8.000", desc: "Lenf drenajı" },
  ];
  return (
    <div>
      <div className="flex gap-2 mb-3">
        {devices.map((d, i) => (
          <button
            key={d.name}
            onClick={() => setSel(i)}
            className={`flex-1 text-xs font-bold py-2 px-1.5 rounded-xl border transition-all duration-200 ${
              sel === i
                ? "bg-[#FFC107] border-[#FFC107] text-white shadow-sm"
                : "bg-gray-50 border-gray-200 text-gray-500 hover:border-[#FFC107]/40"
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>
      <p className="text-gray-400 text-xs mb-3">{devices[sel].desc} · 3 aylık program</p>
      <div className="flex items-baseline gap-1.5">
        <span className="text-4xl font-black text-gray-900">₺{devices[sel].price}</span>
        <span className="text-gray-400 text-sm">· 3 ay toplam</span>
      </div>
    </div>
  );
}

function DarkFeatures({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((f) => (
        <li key={f} className="flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#FFC107] shrink-0" />
          <span className="text-zinc-400 text-sm">{f}</span>
        </li>
      ))}
    </ul>
  );
}

function LightFeatures({ items, gold = false }: { items: string[]; gold?: boolean }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((f) => (
        <li key={f} className="flex items-center gap-2.5">
          <CheckCircle2 className={`w-4 h-4 shrink-0 ${gold ? "text-white" : "text-[#FFC107]"}`} />
          <span className={`text-sm ${gold ? "text-white/80" : "text-gray-500"}`}>{f}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Packages() {
  return (
    <section id="packages" className="overflow-hidden">

      {/* ══════════════════════════════════════════════════
          DARK — GYM · EMS · PT
      ══════════════════════════════════════════════════ */}
      <div className="bg-zinc-950 py-24 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#FFC107 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FFC107]/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#FFC107]/15 border border-[#FFC107]/25 rounded-full px-4 py-1.5 mb-4">
              <Zap className="w-3.5 h-3.5 text-[#FFC107] fill-[#FFC107]" />
              <span className="text-[#FFC107] text-xs font-semibold uppercase tracking-widest">Güç & Performans</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Sınırlarını <span className="text-[#FFC107]">Zorla.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* ── GYM ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-7 flex flex-col group hover:border-[#FFC107]/25 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#FFC107]/5 rounded-full blur-2xl group-hover:bg-[#FFC107]/10 transition-all duration-500 pointer-events-none" />
              <div className="relative z-10 flex flex-col flex-1">
                <div className="w-12 h-12 bg-[#FFC107]/15 rounded-2xl flex items-center justify-center mb-5">
                  <Dumbbell className="w-6 h-6 text-[#FFC107]" />
                </div>
                <h3 className="text-2xl font-black text-white mb-1">GYM Üyeliği</h3>
                <p className="text-zinc-500 text-sm mb-7">Sınırsız erişim, profesyonel ekipman</p>

                <TierSelector
                  variant="dark"
                  tiers={[
                    { label: "1 Ay", price: "3.000" },
                    { label: "2 Ay", price: "5.000" },
                    { label: "3 Ay", price: "6.500" },
                    { label: "6 Ay", price: "11.000" },
                    { label: "12 Ay", price: "18.000" },
                  ]}
                />

                <div className="my-7 border-t border-zinc-800" />

                <DarkFeatures items={[
                  "Sınırsız GYM erişimi",
                  "Kardio & ağırlık alanı",
                  "Soyunma odası & duş",
                  "Fitness değerlendirmesi",
                  "Profesyonel ekipman",
                ]} />

                <a
                  href="https://wa.me/905064668981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-7 w-full flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black text-sm py-3.5 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <Lock className="w-3.5 h-3.5" />
                  Hemen Başla
                </a>
              </div>
            </motion.div>

            {/* ── EMS ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-7 flex flex-col group hover:border-[#FFC107]/25 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#FFC107]/40 to-transparent pointer-events-none" />
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#FFC107]/5 rounded-full blur-2xl group-hover:bg-[#FFC107]/10 transition-all duration-500 pointer-events-none" />
              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-[#FFC107]/15 rounded-2xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#FFC107] fill-[#FFC107]" />
                  </div>
                  <span className="text-[10px] font-black text-[#FFC107] bg-[#FFC107]/10 border border-[#FFC107]/20 rounded-full px-2.5 py-1 uppercase tracking-wide">⚡ Yeni Nesil</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-1">EMS Fitness</h3>
                <p className="text-zinc-500 text-sm mb-3">Az Zaman, Büyük Değişim!</p>
                <div className="flex flex-wrap gap-2 mb-7">
                  <span className="bg-[#FFC107]/10 text-[#FFC107] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#FFC107]/15">⚡ 25dk = 3.000 Kal</span>
                  <span className="bg-[#FFC107]/10 text-[#FFC107] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#FFC107]/15">🔥 Ayda 4kg Yakım</span>
                </div>

                <TierSelector
                  variant="dark"
                  tiers={[
                    { label: "12 Seans", price: "12.000" },
                    { label: "16 Seans", price: "14.000" },
                    { label: "24 Seans", price: "16.000" },
                    { label: "32 Seans", price: "18.000" },
                  ]}
                />

                <div className="my-7 border-t border-zinc-800" />

                <DarkFeatures items={[
                  "Haftada 3 gün antrenman",
                  "EMS tam vücut aktivasyon",
                  "Sertifikalı EMS antrenörü",
                  "Kişiye özel program",
                  "Vücut analizi & aylık takip",
                ]} />

                <a
                  href="https://wa.me/905064668981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-7 w-full flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black text-sm py-3.5 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Bilgi Al
                </a>
              </div>
            </motion.div>

            {/* ── PT ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="relative bg-zinc-900 border border-[#FFC107]/40 rounded-2xl p-7 flex flex-col group hover:border-[#FFC107]/70 transition-all duration-300 overflow-hidden ring-1 ring-[#FFC107]/20"
            >
              {/* Badge */}
              <div className="absolute -top-px left-1/2 -translate-x-1/2">
                <span className="bg-[#FFC107] text-gray-900 text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-b-xl shadow-lg shadow-[#FFC107]/30">
                  ⭐ En Çok Tercih Edilen
                </span>
              </div>
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[#FFC107]/8 rounded-full blur-2xl group-hover:bg-[#FFC107]/15 transition-all duration-500 pointer-events-none" />
              <div className="relative z-10 flex flex-col flex-1 pt-5">
                <div className="w-12 h-12 bg-[#FFC107]/15 rounded-2xl flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-[#FFC107]" />
                </div>
                <h3 className="text-2xl font-black text-white mb-1">Personal Training</h3>
                <p className="text-zinc-500 text-sm mb-7">Birebir sertifikalı PT eğitimi</p>

                <TierSelector
                  variant="dark"
                  tiers={[
                    { label: "8 Seans", price: "8.000" },
                    { label: "12 Seans", price: "10.000" },
                    { label: "16 Seans", price: "11.000" },
                  ]}
                />

                <div className="my-7 border-t border-zinc-800" />

                <DarkFeatures items={[
                  "Birebir kişisel antrenör",
                  "Hedefine özel program",
                  "Beslenme danışmanlığı",
                  "Vücut analizi & takip",
                  "WhatsApp destek hattı",
                ]} />

                <a
                  href="https://wa.me/905064668981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-7 w-full flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black text-sm py-3.5 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <Lock className="w-3.5 h-3.5" />
                  Hemen Başla
                </a>
              </div>
            </motion.div>

            {/* ── KİCKBOKS ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-7 flex flex-col group hover:border-orange-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all duration-500 pointer-events-none" />
              <div className="relative z-10 flex flex-col flex-1">
                <div className="w-12 h-12 bg-orange-500/15 rounded-2xl flex items-center justify-center mb-5">
                  <Flame className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-black text-white mb-1">Kickboks</h3>
                <p className="text-zinc-500 text-sm mb-5">Pzt · Çar · Cum · Grup Dersi</p>

                {/* Gruplar */}
                <div className="flex flex-col gap-3 mb-6">
                  <div className="bg-zinc-800/80 border border-zinc-700/50 rounded-xl p-3.5 flex items-center justify-between">
                    <div>
                      <p className="text-white font-black text-sm">Çocuk Grubu</p>
                      <p className="text-zinc-500 text-xs mt-0.5">Pzt · Çar · Cum</p>
                    </div>
                    <span className="text-orange-400 font-black text-sm bg-orange-500/10 border border-orange-500/20 rounded-lg px-2.5 py-1">19:30</span>
                  </div>
                  <div className="bg-zinc-800/80 border border-zinc-700/50 rounded-xl p-3.5 flex items-center justify-between">
                    <div>
                      <p className="text-white font-black text-sm">Yetişkin Grubu</p>
                      <p className="text-zinc-500 text-xs mt-0.5">Pzt · Çar · Cum</p>
                    </div>
                    <span className="text-orange-400 font-black text-sm bg-orange-500/10 border border-orange-500/20 rounded-lg px-2.5 py-1">20:30</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-1.5 mb-7">
                  <span className="text-4xl font-black text-white">₺2.500</span>
                  <span className="text-zinc-500 text-sm">/ ay</span>
                </div>

                <div className="mb-7 border-t border-zinc-800" />

                <DarkFeatures items={[
                  "Haftada 3 gün antrenman",
                  "Boks & tekme kombinasyonları",
                  "Sertifikalı antrenör eşliğinde",
                  "Kondisyon & refleks geliştirme",
                  "GYM alanına ücretsiz erişim",
                ]} />

                <a
                  href="https://wa.me/905064668981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-7 w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-black text-sm py-3.5 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <Flame className="w-3.5 h-3.5" />
                  Hemen Başla
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          LIGHT — Pilates · Bölgesel · Çocuk
      ══════════════════════════════════════════════════ */}
      <div className="bg-gray-50 py-24 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFF8E1] rounded-full blur-[140px] opacity-70 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#FFF8E1] border border-[#FFC107]/30 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC107]" />
              <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-widest">Sağlık & Yaşam Kalitesi</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Kendine İyi <span className="text-[#FFC107]">Bak.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* ── Grup Pilates ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative bg-white border border-gray-100 rounded-2xl p-7 flex flex-col group hover:border-[#FFC107]/30 hover:shadow-lg transition-all duration-300 overflow-hidden shadow-sm"
            >
              <div className="relative z-10 flex flex-col flex-1">
                <div className="w-12 h-12 bg-[#FFF8E1] rounded-2xl flex items-center justify-center mb-5">
                  <Sparkles className="w-6 h-6 text-[#FFC107]" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-1">Grup Pilates</h3>
                <p className="text-gray-400 text-sm mb-7">Sertifikalı eğitmen eşliğinde</p>

                <TierSelector
                  variant="light"
                  tiers={[
                    { label: "8 Seans", price: "3.400", sub: "· 1 ay" },
                    { label: "24 Seans", price: "7.500", sub: "· 3 ay" },
                    { label: "32 Seans", price: "9.500", sub: "· 4 ay" },
                    { label: "64 Seans", price: "13.900", sub: "· 8 ay" },
                    { label: "100 Seans", price: "18.000", sub: "· 1 yıl" },
                  ]}
                />

                <div className="my-7 border-t border-gray-100" />

                <LightFeatures items={[
                  "Reformer pilates grup dersleri",
                  "Sertifikalı pilates eğitmeni",
                  "Esneklik & postür programı",
                  "Max 8 kişilik küçük gruplar",
                  "GYM alanına ücretsiz erişim",
                ]} />

                <a
                  href="https://wa.me/905064668981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-7 w-full flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-white font-black text-sm py-3.5 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <Lock className="w-3.5 h-3.5" />
                  Hemen Başla
                </a>
              </div>
            </motion.div>

            {/* ── Bölgesel İncelme ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative bg-white border border-gray-100 rounded-2xl p-7 flex flex-col group hover:border-[#FFC107]/30 hover:shadow-lg transition-all duration-300 overflow-hidden shadow-sm"
            >
              <div className="relative z-10 flex flex-col flex-1">
                <div className="w-12 h-12 bg-[#FFF8E1] rounded-2xl flex items-center justify-center mb-5">
                  <Heart className="w-6 h-6 text-[#FFC107]" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-1">Bölgesel İncelme</h3>
                <p className="text-gray-400 text-sm mb-2">Haftada 3 gün · 3 Aylık Program</p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="bg-[#FFF8E1] text-[#B8860B] text-[10px] font-bold px-2.5 py-1 rounded-full">📅 Randevulu Sistem</span>
                  <span className="bg-[#FFF8E1] text-[#B8860B] text-[10px] font-bold px-2.5 py-1 rounded-full">✓ 6 Saat Öncesine İptal</span>
                </div>

                <BolgeselSelector />

                <div className="my-7 border-t border-gray-100" />

                <LightFeatures items={[
                  "Haftada 3 gün istediğiniz bölge",
                  "Tel & WhatsApp ile randevu",
                  "6 saat öncesine kadar iptal hakkı",
                  "Uzman estetisyen eşliğinde",
                  "Kişiye özel bölge programı",
                ]} />

                <a
                  href="https://wa.me/905064668981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-7 w-full flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-white font-black text-sm py-3.5 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Randevu Al
                </a>
              </div>
            </motion.div>

            {/* ── Çocuk Hareket Gelişim ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="relative bg-amber-50 border border-amber-100 rounded-2xl p-7 flex flex-col group hover:border-[#FFC107]/40 hover:shadow-lg transition-all duration-300 overflow-hidden shadow-sm"
            >
              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-[#FFC107]/15 rounded-2xl flex items-center justify-center">
                    <Baby className="w-6 h-6 text-[#B8860B]" />
                  </div>
                  <span className="text-[10px] font-black text-[#B8860B] bg-[#FFC107]/15 border border-[#FFC107]/25 rounded-full px-3 py-1">
                    2–12 Yaş
                  </span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-0.5">Hareket Gelişim</h3>
                <p className="text-amber-700/60 text-sm mb-1">Çocuklar İçin</p>
                <p className="text-[#B8860B] font-black text-sm italic mb-7">&ldquo;Keşfet, Öğren, Eğlen&rdquo;</p>

                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-4xl font-black text-gray-900">₺7.500</span>
                  <span className="text-gray-400 text-sm">toplam</span>
                </div>
                <p className="text-amber-700/60 text-xs mb-7">1 ay · 12 ders</p>

                <div className="border-t border-amber-100 mb-7" />

                <LightFeatures items={[
                  "Dikkat & odak geliştirme",
                  "Denge, sürat & kuvvet",
                  "Problem çözme becerileri",
                  "Etkili iletişim & sosyalleşme",
                  "Hiperaktivite yönetimi",
                  "Uzman çocuk antrenörü",
                ]} />

                <a
                  href="https://wa.me/905064668981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-7 w-full flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-white font-black text-sm py-3.5 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Bilgi Al
                </a>
              </div>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="text-gray-400 text-sm">
              Tüm paketler için 3D Secure güvenli ödeme ·{" "}
              <a href="https://wa.me/905064668981" target="_blank" rel="noopener noreferrer" className="text-[#FFC107] hover:underline font-semibold">
                WhatsApp&apos;tan ulaşın
              </a>
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
