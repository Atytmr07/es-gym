"use client";

import { motion } from "framer-motion";
import { Lock, CreditCard, CheckCircle2, Star, Zap, Package, Heart, Baby, Sparkles } from "lucide-react";

const packages = [
  {
    id: "standard",
    icon: Package,
    name: "Standart GYM",
    subtitle: "Temel Üyelik",
    price: "499",
    period: "ay",
    color: "default",
    features: [
      "Sınırsız GYM erişimi",
      "Kardio & ağırlık alanı",
      "Soyunma odası & duş",
      "Fitness değerlendirmesi",
      "Mobil uygulama erişimi",
    ],
  },
  {
    id: "premium-pt",
    icon: Star,
    name: "Premium PT",
    subtitle: "Personal Training",
    price: "1.299",
    period: "ay",
    color: "gold",
    highlight: true,
    badge: "En Popüler",
    features: [
      "Standart GYM tüm özellikleri",
      "Haftada 3 PT seansı",
      "Kişiye özel beslenme planı",
      "Aylık vücut analizi",
      "Öncelikli eğitmen atama",
      "WhatsApp destek hattı",
    ],
  },
  {
    id: "pilates",
    icon: Sparkles,
    name: "Reformer Pilates",
    subtitle: "Stüdyo Üyeliği",
    price: "899",
    period: "ay",
    color: "default",
    features: [
      "Haftada 3 reformer pilates",
      "Grup veya özel ders seçeneği",
      "GYM alanına ücretsiz erişim",
      "Sertifikalı pilates eğitmeni",
      "Esneklik & postür programı",
    ],
  },
  {
    id: "bolgesel",
    icon: Heart,
    name: "Bölgesel İncelme",
    subtitle: "Hedefli Program",
    price: "749",
    period: "ay",
    color: "default",
    features: [
      "Hedef odaklı antrenman planı",
      "EMS & kardio kombinasyonu",
      "Haftada 2 grup dersi",
      "Beslenme rehberi",
      "Motivasyon takip uygulaması",
    ],
  },
  {
    id: "kids",
    icon: Baby,
    name: "Çocuk Gelişim",
    subtitle: "4–15 Yaş",
    price: "399",
    period: "ay",
    color: "default",
    features: [
      "Çocuklara özel ekipman",
      "Uzman çocuk antrenörü",
      "Motor gelişim programı",
      "Oyun tabanlı egzersiz",
      "Ebeveyn ilerleme raporu",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FFF8E1] rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFF8E1] border border-[#FFC107]/30 rounded-full px-4 py-1.5 mb-4">
            <Zap className="w-3.5 h-3.5 text-[#FFC107]" />
            <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-widest">Üyelik Paketleri</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
            Hedefine Uygun{" "}
            <span className="text-[#FFC107]">Paketi Seç.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Tüm paketlerimizde güvenli online ödeme imkânı. 3D Secure altyapısıyla kartınız koruma altında.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1.5 text-gray-500 text-sm">
              <Lock className="w-4 h-4 text-[#FFC107]" />
              <span>3D Secure Ödeme</span>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-1.5 text-gray-500 text-sm">
              <CreditCard className="w-4 h-4 text-[#FFC107]" />
              <span>Visa · Mastercard · Troy</span>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-1.5 text-gray-500 text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#FFC107]" />
              <span>Anlık Aktivasyon</span>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            const isGold = pkg.color === "gold";
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  isGold
                    ? "bg-[#FFC107] shadow-2xl shadow-[#FFC107]/25"
                    : "bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#FFC107]/20"
                }`}
              >
                {pkg.badge && (
                  <div className="bg-gray-900 text-[#FFC107] text-xs font-black text-center py-1.5 uppercase tracking-widest">
                    ⭐ {pkg.badge}
                  </div>
                )}

                <div className={`flex flex-col flex-1 p-7 ${pkg.badge ? "pt-6" : ""}`}>
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${isGold ? "bg-white/20" : "bg-[#FFF8E1]"}`}>
                        <Icon className={`w-5 h-5 ${isGold ? "text-white" : "text-[#FFC107]"}`} />
                      </div>
                      <h3 className={`text-xl font-black ${isGold ? "text-white" : "text-gray-900"}`}>{pkg.name}</h3>
                      <p className={`text-sm ${isGold ? "text-white/70" : "text-gray-400"}`}>{pkg.subtitle}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl font-black ${isGold ? "text-white" : "text-gray-900"}`}>
                        ₺{pkg.price}
                      </span>
                      <span className={`text-sm ${isGold ? "text-white/70" : "text-gray-400"}`}>/ {pkg.period}</span>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 mt-2 text-xs px-2.5 py-1 rounded-lg ${
                      isGold ? "bg-white/15 text-white" : "bg-[#FFF8E1] text-[#B8860B]"
                    }`}>
                      <Lock className="w-3 h-3" />
                      <span className="font-semibold">🔒 3D Secure Güvenli Ödeme</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${isGold ? "text-white" : "text-[#FFC107]"}`} />
                        <span className={`text-sm ${isGold ? "text-white/80" : "text-gray-500"}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex flex-col gap-2">
                    <button
                      className={`w-full flex items-center justify-center gap-2 font-black text-sm py-3.5 rounded-xl transition-all duration-200 active:scale-95 ${
                        isGold
                          ? "bg-white text-[#FFC107] hover:bg-gray-50"
                          : "bg-[#FFC107] text-white hover:bg-[#FFB300] hover:shadow-lg hover:shadow-[#FFC107]/20"
                      }`}
                    >
                      <Lock className="w-3.5 h-3.5" />
                      Hemen Satın Al
                    </button>
                    <div className={`flex items-center justify-center gap-2 text-xs ${isGold ? "text-white/50" : "text-gray-300"}`}>
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Visa · Mastercard · Troy</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            Paket hakkında sorun mu var?{" "}
            <a href="#contact" className="text-[#FFC107] hover:underline font-semibold">Bize ulaşın</a>{" "}
            — Hemen yanıtlıyoruz.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
