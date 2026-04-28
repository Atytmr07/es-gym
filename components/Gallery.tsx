"use client";

import { motion } from "framer-motion";
import { Camera, ZoomIn } from "lucide-react";
import { useState } from "react";

const photos = [
  { id: 1, label: "Premium Ekipman Alanı", category: "Gym Floor",    bg: "from-amber-50 to-orange-100",   icon: "🏋️", aspect: "tall" },
  { id: 2, label: "Boks Ringi",            category: "Combat",        bg: "from-yellow-50 to-amber-100",   icon: "🥊", aspect: "short" },
  { id: 3, label: "Personal Training",     category: "PT Session",    bg: "from-orange-50 to-yellow-100",  icon: "💪", aspect: "short" },
  { id: 4, label: "Kardio Bölümü",         category: "Cardio",        bg: "from-amber-50 to-yellow-100",   icon: "🏃", aspect: "tall" },
  { id: 5, label: "Sosyal Lounge",         category: "Lounge",        bg: "from-yellow-50 to-orange-50",   icon: "🎱", aspect: "wide" },
  { id: 6, label: "Pilates Stüdyo",        category: "Pilates",       bg: "from-pink-50 to-rose-100",      icon: "🧘", aspect: "short" },
  { id: 7, label: "Çocuk Bölümü",          category: "Kids Zone",     bg: "from-sky-50 to-blue-100",       icon: "⭐", aspect: "short" },
  { id: 8, label: "Güç Bölümü",            category: "Strength",      bg: "from-amber-100 to-orange-100",  icon: "🔥", aspect: "tall" },
];

export default function Gallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
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
            <p className="text-zinc-400 text-lg mt-4 max-w-xl">
              Modern tasarım, premium ekipman ve enerjik atmosfer — hepsi bir arada.
            </p>
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

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="break-inside-avoid"
              onMouseEnter={() => setHovered(photo.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`relative group rounded-2xl overflow-hidden bg-gradient-to-br ${photo.bg} border border-zinc-800 hover:border-[#FFC107]/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-[#FFC107]/10 ${
                  photo.aspect === "tall" ? "h-64 sm:h-80" : photo.aspect === "wide" ? "h-36 sm:h-44" : "h-44 sm:h-52"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-5xl transition-all duration-300 ${hovered === photo.id ? "scale-110" : "scale-100"}`}>
                    {photo.icon}
                  </span>
                </div>

                <div className={`absolute top-3 right-3 z-20 w-8 h-8 bg-[#FFC107] rounded-lg flex items-center justify-center transition-all duration-200 shadow-md ${hovered === photo.id ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-20 p-3">
                  <p className="text-gray-900 text-xs font-bold leading-tight">{photo.label}</p>
                  <p className="text-gray-600 text-[10px] mt-0.5">{photo.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-500 text-sm">
            Daha fazla fotoğraf ve video için{" "}
            <a href="https://www.instagram.com/esgymfitness" target="_blank" rel="noopener noreferrer" className="text-[#FFC107] hover:underline font-semibold">
              @esgymfitness
            </a>{" "}
            hesabımızı takip edin.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
