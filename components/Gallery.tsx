"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import Image from "next/image";

const photos = [
  {
    id: 1,
    src: "/gallery/pilates.jpg",
    label: "Reformer Pilates",
    category: "Pilates Stüdyo",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    src: "/gallery/gym.jpg",
    label: "Premium GYM",
    category: "Ağırlık & Kardio",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "/gallery/boxing.jpg",
    label: "Boks Eğitimi",
    category: "Combat Sport",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "/gallery/ropes.jpg",
    label: "Battle Ropes",
    category: "Fonksiyonel Antrenman",
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: "/gallery/community.jpg",
    label: "Topluluk Ruhu",
    category: "E&S GYM Ailesi",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: "/gallery/exterior.jpg",
    label: "E&S GYM",
    category: "Fitness Center",
    span: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: "/gallery/interior.jpg",
    label: "GYM Atmosferi",
    category: "Premium Ekipman",
    span: "col-span-1 row-span-1",
  },
  {
    id: 8,
    src: "/gallery/ems-device.jpg",
    label: "EMS Fitness",
    category: "Yeni Nesil Teknoloji",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFC107]/15 border border-[#FFC107]/25 rounded-full px-4 py-1.5 mb-4">
              <Camera className="w-3.5 h-3.5 text-[#FFC107]" />
              <span className="text-[#FFC107] text-xs font-semibold uppercase tracking-widest">Galeri</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Sınırlarını Zorlayacağın{" "}
              <span className="text-[#FFC107]">Alanı Keşfet.</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/esgymfitness"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200 whitespace-nowrap"
          >
            <span className="text-base">📸</span>
            @esgymfitness&apos;ta Daha Fazlası
          </a>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[200px] lg:auto-rows-[260px]">

          {/* Photo 1 — Pilates, tall (spans 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative rounded-2xl overflow-hidden group row-span-2"
          >
            <Image
              src="/gallery/pilates.jpg"
              alt="Reformer Pilates"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white font-black text-sm">Reformer Pilates</p>
              <p className="text-white/60 text-xs">Pilates Stüdyo</p>
            </div>
          </motion.div>

          {/* Photo 2 — GYM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.07 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <Image
              src="/gallery/gym.jpg"
              alt="Premium GYM"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white font-black text-sm">Premium GYM</p>
              <p className="text-white/60 text-xs">Ağırlık & Kardio</p>
            </div>
          </motion.div>

          {/* Photo 3 — Boxing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <Image
              src="/gallery/boxing.jpg"
              alt="Boks Eğitimi"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white font-black text-sm">Boks Eğitimi</p>
              <p className="text-white/60 text-xs">Combat Sport</p>
            </div>
          </motion.div>

          {/* Photo 4 — Battle Ropes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.21 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <Image
              src="/gallery/ropes.jpg"
              alt="Battle Ropes"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white font-black text-sm">Battle Ropes</p>
              <p className="text-white/60 text-xs">Fonksiyonel</p>
            </div>
          </motion.div>

          {/* Photo 5 — Community */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <Image
              src="/gallery/community.jpg"
              alt="Topluluk Ruhu"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white font-black text-sm">Topluluk Ruhu</p>
              <p className="text-white/60 text-xs">E&S GYM Ailesi</p>
            </div>
          </motion.div>

          {/* Photo 6 — Exterior */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <Image
              src="/gallery/exterior.jpg"
              alt="E&S GYM Fitness Center"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white font-black text-sm">E&S GYM</p>
              <p className="text-white/60 text-xs">Fitness Center</p>
            </div>
          </motion.div>

          {/* Photo 7 — Interior */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.42 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <Image
              src="/gallery/interior.jpg"
              alt="GYM Atmosferi"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white font-black text-sm">GYM Atmosferi</p>
              <p className="text-white/60 text-xs">Premium Ekipman</p>
            </div>
          </motion.div>

          {/* Photo 8 — EMS Device */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.49 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <Image
              src="/gallery/ems-device.jpg"
              alt="EMS Fitness Teknolojisi"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white font-black text-sm">EMS Fitness</p>
              <p className="text-white/60 text-xs">Yeni Nesil Teknoloji</p>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-zinc-500 text-sm">
            Daha fazlası için{" "}
            <a href="https://www.instagram.com/esgymfitness" target="_blank" rel="noopener noreferrer" className="text-[#FFC107] hover:underline font-semibold">
              @esgymfitness
            </a>{" "}
            ve{" "}
            <a href="https://www.tiktok.com/@esgymfitness" target="_blank" rel="noopener noreferrer" className="text-[#FFC107] hover:underline font-semibold">
              TikTok
            </a>
            &apos;umuzu takip edin.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
