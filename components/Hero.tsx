"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown, ShieldCheck, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-4xl">

          {/* Premium badge — konumdan değil kaliteden bahset */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-[#FFC107]/15 border border-[#FFC107]/30 backdrop-blur-sm rounded-full px-4 py-2">
              <Award className="w-3.5 h-3.5 text-[#FFC107]" />
              <span className="text-[#FFC107] text-xs font-semibold uppercase tracking-widest">Antalya&apos;nın Premium Fitness Merkezi</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <ShieldCheck className="w-3.5 h-3.5 text-white/80" />
              <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">2017&apos;den Bu Yana</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6"
          >
            Bir Spor
            <br />
            <span className="text-[#FFC107]">Salonundan</span>
            <br />
            Çok Daha Fazlası.
          </motion.h1>

          {/* Subheadline — lokasyon önyargısını kıran mesaj */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
          >
            Profesyonel ekipman, sertifikalı kadro ve lüks atmosfer — şehrin herhangi bir premium merkezinden farkı olmayan, üstelik gerçek bir topluluk hissi sunan yaşam alanı.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#packages"
              className="group flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-white font-black text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-2xl hover:shadow-[#FFC107]/40 active:scale-95"
            >
              Paketleri İncele
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#testimonials"
              className="group flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200"
            >
              <div className="w-7 h-7 bg-[#FFC107] rounded-full flex items-center justify-center">
                <Play className="w-3 h-3 text-white fill-white ml-0.5" />
              </div>
              Üye Yorumları
            </a>
          </motion.div>

          {/* Stats — kalite odaklı, lokasyon yok */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { value: "5+", label: "Uzman Program" },
              { value: "10-22", label: "Çalışma Saati" },
              { value: "Profesyonel", label: "Personal Trainer" },
              { value: "5.0 ⭐", label: "Üye Memnuniyeti" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black text-[#FFC107]">{stat.value}</p>
                <p className="text-white/60 text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#FFC107] overflow-hidden py-3">
        <div className="flex w-max animate-marquee gap-0">
          {[...Array(3)].map((_, rep) => (
            <div key={rep} className="flex items-center gap-0 shrink-0">
              {[
                { icon: "🥊", label: "Boks & Kickboks" },
                { icon: "🏋️", label: "Ağırlık Antrenmanı" },
                { icon: "🧘", label: "Reformer Pilates" },
                { icon: "💪", label: "Personal Training" },
                { icon: "🎱", label: "Bilardo & Dart" },
                { icon: "🏃", label: "Kardio Programları" },
                { icon: "👶", label: "Çocuk Gelişim" },
                { icon: "🔥", label: "Bölgesel İncelme" },
                { icon: "🤸", label: "Fonksiyonel Antrenman" },
                { icon: "🥗", label: "Beslenme Danışmanlığı" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-6 px-6">
                  <span className="flex items-center gap-2 text-gray-900 font-black text-sm uppercase tracking-wider whitespace-nowrap">
                    <span>{icon}</span>
                    {label}
                  </span>
                  <span className="text-gray-900/30 font-black text-lg">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
