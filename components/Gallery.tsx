"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const photos = [
  {
    id: 1,
    src: "/gallery/pilates.jpg",
    label: "Reformer Pilates",
    category: "Pilates Stüdyo",
    rowSpan: true,
  },
  {
    id: 2,
    src: "/gallery/pilates2.jpg",
    label: "Pilates Stüdyo",
    category: "Reformer Ekipman",
    rowSpan: false,
  },
  {
    id: 3,
    src: "/gallery/boxing.webp",
    label: "Boks Eğitimi",
    category: "Combat Sport",
    rowSpan: false,
  },
  {
    id: 4,
    src: "/gallery/ropes.webp",
    label: "Battle Ropes",
    category: "Fonksiyonel Antrenman",
    rowSpan: false,
  },
  {
    id: 5,
    src: "/gallery/community.webp",
    label: "Topluluk Ruhu",
    category: "E&S GYM Ailesi",
    rowSpan: false,
  },
  {
    id: 6,
    src: "/gallery/exterior.jpg",
    label: "E&S GYM",
    category: "Fitness Center",
    rowSpan: false,
  },
  {
    id: 7,
    src: "/gallery/interior.jpg",
    label: "GYM Atmosferi",
    category: "Premium Ekipman",
    rowSpan: false,
  },
  {
    id: 8,
    src: "/gallery/ems-device.jpg",
    label: "EMS Fitness",
    category: "Yeni Nesil Teknoloji",
    rowSpan: false,
  },
  {
    id: 9,
    src: "/gallery/workout.webp",
    label: "Güç Antrenmanı",
    category: "Premium GYM",
    rowSpan: false,
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const selectedIndex = selected !== null ? photos.findIndex((p) => p.id === selected) : -1;

  const close = useCallback(() => setSelected(null), []);

  const prev = useCallback(() => {
    if (selectedIndex > 0) setSelected(photos[selectedIndex - 1].id);
  }, [selectedIndex]);

  const next = useCallback(() => {
    if (selectedIndex < photos.length - 1) setSelected(photos[selectedIndex + 1].id);
  }, [selectedIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, prev, next]);

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const selectedPhoto = selected !== null ? photos.find((p) => p.id === selected) : null;

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

          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`relative rounded-2xl overflow-hidden group cursor-zoom-in${photo.rowSpan ? " row-span-2" : ""}`}
              onClick={() => setSelected(photo.id)}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-black text-sm">{photo.label}</p>
                <p className="text-white/60 text-xs">{photo.category}</p>
              </div>
            </motion.div>
          ))}

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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm"
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            {selectedIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 z-10 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next */}
            {selectedIndex < photos.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 z-10 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={selectedPhoto.id}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-[90vw] h-[85vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.label}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-1.5">
                <p className="text-white text-sm font-semibold">{selectedPhoto.label} <span className="text-white/50">· {selectedPhoto.category}</span></p>
              </div>
            </motion.div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {photos.map((p, i) => (
                <button
                  key={p.id}
                  onClick={(e) => { e.stopPropagation(); setSelected(p.id); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${p.id === selected ? "bg-[#FFC107] w-4" : "bg-white/30"}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
