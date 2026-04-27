"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Selin K.",
    role: "Pilates Üyesi · 8 Ay",
    avatar: "SK",
    color: "from-pink-400 to-rose-500",
    rating: 5,
    text: "Antalya'da bu kalitede bir stüdyo bulmayı hiç beklemiyordum. Reformer pilates ekipmanları ve eğitmen kalitesi şehrin herhangi bir lüks merkeziyle yarışıyor. Artık buradan ayrılamıyorum.",
  },
  {
    id: 2,
    name: "Mehmet A.",
    role: "Premium PT Üyesi · 1 Yıl",
    avatar: "MA",
    color: "from-blue-400 to-indigo-500",
    rating: 5,
    text: "Önce şüpheyle geldim, çok şaşırdım. Ekipman kalitesi, eğitmen profesyonelliği ve genel atmosfer beklentimin çok üzerinde. 1 yılda 18 kg verdim. Artık tavsiye etmeden geçemiyorum.",
  },
  {
    id: 3,
    name: "Ayşe T.",
    role: "Bölgesel İncelme · 6 Ay",
    avatar: "AT",
    color: "from-amber-400 to-orange-500",
    rating: 5,
    text: "Şehrin merkezindeki pahalı salonları denedim ama E&S'deki kişisel ilgi ve program kalitesini hiçbirinde bulamadım. Eğitmenler gerçekten takip ediyor, sonuçlar konuşuyor.",
  },
  {
    id: 4,
    name: "Can B.",
    role: "Standart GYM · 2 Yıl",
    avatar: "CB",
    color: "from-green-400 to-emerald-500",
    rating: 5,
    text: "Boks ringinden bilardoya kadar her şey burada. Sabah antrenman, akşam sosyal alan — tam bir yaşam alanı. Şehirde bu kadar kapsamlı başka bir yer yok.",
  },
  {
    id: 5,
    name: "Zeynep M.",
    role: "Çocuk Gelişim Programı",
    avatar: "ZM",
    color: "from-purple-400 to-violet-500",
    rating: 5,
    text: "Çocuğum için güvenli ve profesyonel bir ortam arıyordum. E&S'deki çocuk programı mükemmel — hem eğleniyor hem gelişiyor. Eğitmenler gerçekten çocuklarla ilgileniyor.",
  },
  {
    id: 6,
    name: "Burak S.",
    role: "Premium PT Üyesi · 9 Ay",
    avatar: "BS",
    color: "from-red-400 to-rose-500",
    rating: 5,
    text: "Antalya'nın en iyi bilinen salonlarını denedim. E&S'nin ekipman kalitesi ve PT kadrosu onlarla birebir aynı seviyede, hatta daha kişisel. Keşke daha önce gelseyim.",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        posRef.current -= speed;
        const half = track.scrollWidth / 2;
        if (Math.abs(posRef.current) >= half) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [isPaused]);

  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFF8E1] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFF8E1] border border-[#FFC107]/30 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-3.5 h-3.5 text-[#FFC107] fill-[#FFC107]" />
            <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-widest">Üye Yorumları</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
            Onlar Geldi,{" "}
            <span className="text-[#FFC107]">Gördü, İkna Oldu.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Önyargıyla gelen, hayran kalarak çıkan üyelerimizin gerçek deneyimleri.
          </p>
          {/* Stars summary */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-5 h-5 text-[#FFC107] fill-[#FFC107]" />
            ))}
            <span className="text-gray-900 font-black ml-1">5.0</span>
            <span className="text-gray-400 text-sm">· 100+ değerlendirme</span>
          </div>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div ref={trackRef} className="flex gap-5 w-max">
            {doubled.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="w-80 shrink-0 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default"
              >
                {/* Quote icon */}
                <Quote className="w-6 h-6 text-[#FFC107] mb-4 opacity-60" />

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-3.5 h-3.5 text-[#FFC107] fill-[#FFC107]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-black shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mt-12"
      >
        <a
          href="#packages"
          className="inline-flex items-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-white font-black text-sm px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#FFC107]/25 active:scale-95"
        >
          Sen de Katıl
          <Star className="w-4 h-4 fill-white" />
        </a>
      </motion.div>
    </section>
  );
}
