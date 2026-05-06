import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Clock, Star, MapPin, Phone, Target, Heart, Zap, Baby } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda | E&S GYM Fitness Center – Kepez, Antalya",
  description:
    "2017'den bu yana Kepez'de premium spor ve yaşam merkezi. E&S GYM Fitness Center hakkında bilgi edinin — hikayemiz, ekibimiz, hizmetlerimiz ve değerlerimiz.",
  alternates: { canonical: "https://esgymfitness.com.tr/hakkimizda" },
};

const stats = [
  { value: "2017", label: "Kuruluş Yılı" },
  { value: "7+", label: "Yıllık Deneyim" },
  { value: "5.0 ⭐", label: "Üye Memnuniyeti" },
  { value: "6", label: "Farklı Program" },
];

const services = [
  { icon: Award, title: "Premium GYM", desc: "Dünya standartlarında kardio, ağırlık ve makine parkuruyla her seviyeye uygun antrenman ortamı.", color: "text-[#FFC107]", bg: "bg-[#FFC107]/10" },
  { icon: Zap, title: "EMS Fitness", desc: "25 dakikada 3.000 kalori yakan yeni nesil elektro-kas stimülasyon teknolojisi.", color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { icon: Users, title: "Personal Training", desc: "Uluslararası sertifikalı antrenörlerimizle birebir, hedefine özel program ve beslenme desteği.", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: Star, title: "Reformer Pilates", desc: "Sertifikalı pilates eğitmeni eşliğinde esneklik, postür ve güç dengesi.", color: "text-rose-400", bg: "bg-rose-400/10" },
  { icon: Target, title: "Kickboks", desc: "Çocuk ve yetişkin gruplarıyla haftada 3 gün kondisyon, hız ve savunma antrenmanı.", color: "text-orange-400", bg: "bg-orange-400/10" },
  { icon: Baby, title: "Hareket Gelişim", desc: "2–12 yaş çocuklar için dikkat, denge ve sosyal beceri geliştiren oyun tabanlı program.", color: "text-amber-400", bg: "bg-amber-400/10" },
];

const values = [
  { icon: Award, title: "Kalite", desc: "Sürekli güncellenen ekipman parkuru ve uluslararası sertifikalı kadro ile her zaman en iyisini sunuyoruz." },
  { icon: Heart, title: "Kapsayıcılık", desc: "2 yaşından yetişkinliğe, başlangıç seviyesinden profesyonele — herkes için bir program var." },
  { icon: Users, title: "Topluluk", desc: "Sadece spor yapılan bir yer değil; birbirine destek olan, motive eden gerçek bir E&S GYM ailesi." },
  { icon: Target, title: "Sonuç Odaklılık", desc: "Her üyenin hedefine ulaşması için kişiselleştirilmiş takip, analiz ve program revizyonu." },
];

export default function HakkimizdaPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16 lg:pt-20">

        {/* Hero */}
        <section className="bg-zinc-950 py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(#FFC107 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFC107]/6 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#FFC107]/15 border border-[#FFC107]/25 rounded-full px-4 py-1.5 mb-6">
              <Award className="w-3.5 h-3.5 text-[#FFC107]" />
              <span className="text-[#FFC107] text-xs font-semibold uppercase tracking-widest">Hakkımızda</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
              Bir Spor Salonundan<br />
              <span className="text-[#FFC107]">Çok Daha Fazlası.</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
              2017 yılında Kepez, Antalya'da kurulan E&S GYM Fitness Center; premium ekipman, sertifikalı kadro ve sıcak bir topluluk anlayışıyla şehrin en kapsamlı spor ve yaşam merkezlerinden biri haline geldi.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#FFC107] py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-black text-gray-900">{s.value}</p>
                  <p className="text-gray-900/70 text-sm font-semibold mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-white py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#FFF8E1] border border-[#FFC107]/30 rounded-full px-4 py-1.5 mb-5">
                  <Clock className="w-3.5 h-3.5 text-[#FFC107]" />
                  <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-widest">Hikayemiz</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-6">
                  2017'den Bu Yana<br />
                  <span className="text-[#FFC107]">Kepez'deyiz.</span>
                </h2>
                <div className="flex flex-col gap-4 text-gray-500 leading-relaxed">
                  <p>
                    E&S GYM Fitness Center, sporu herkes için erişilebilir, eğlenceli ve sürdürülebilir kılma vizyonuyla Kepez'in Kanal Mahallesi'nde kapılarını açtı. Kuruluşumuzdan bu yana sadece ekipman sunmakla kalmadık; gerçek bir fitness kültürü ve topluluk ruhu oluşturduk.
                  </p>
                  <p>
                    Yıllar içinde büyüyen üye ailemiz, genişleyen ekibimiz ve sürekli yenilenen tesisimizle bugün Antalya'nın en kapsamlı fitness merkezlerinden biri olarak hizmet veriyoruz.
                  </p>
                  <p>
                    Reformer pilates stüdyosundan EMS teknolojisine, kickboks ringinden çocuk hareket gelişim programına kadar her yaştan ve her seviyeden üyemize özel çözümler sunuyoruz.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-950 rounded-2xl p-6 flex flex-col justify-between min-h-[160px]">
                  <MapPin className="w-6 h-6 text-[#FFC107]" />
                  <div>
                    <p className="text-white font-black text-lg leading-tight">Kepez'in Kalbinde</p>
                    <p className="text-zinc-500 text-sm mt-1">Kanal Mah. Halide Edip Cad.</p>
                  </div>
                </div>
                <div className="bg-[#FFC107] rounded-2xl p-6 flex flex-col justify-between min-h-[160px]">
                  <Clock className="w-6 h-6 text-gray-900" />
                  <div>
                    <p className="text-gray-900 font-black text-lg leading-tight">09:00 – 23:00</p>
                    <p className="text-gray-900/70 text-sm mt-1">Pzt – Cuma</p>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col justify-between min-h-[160px]">
                  <Users className="w-6 h-6 text-[#FFC107]" />
                  <div>
                    <p className="text-gray-900 font-black text-lg leading-tight">Sertifikalı Kadro</p>
                    <p className="text-gray-500 text-sm mt-1">Uluslararası lisanslı antrenörler</p>
                  </div>
                </div>
                <div className="bg-zinc-950 rounded-2xl p-6 flex flex-col justify-between min-h-[160px]">
                  <Star className="w-6 h-6 text-[#FFC107] fill-[#FFC107]" />
                  <div>
                    <p className="text-white font-black text-lg leading-tight">5.0 / 5.0</p>
                    <p className="text-zinc-500 text-sm mt-1">100+ değerlendirme</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-zinc-950 py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-[#FFC107]/15 border border-[#FFC107]/25 rounded-full px-4 py-1.5 mb-4">
                <Target className="w-3.5 h-3.5 text-[#FFC107]" />
                <span className="text-[#FFC107] text-xs font-semibold uppercase tracking-widest">Hizmetlerimiz</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                Her İhtiyaca Özel <span className="text-[#FFC107]">Program.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s) => (
                <div key={s.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
                  <div className={`w-11 h-11 ${s.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <s.icon className={`w-5 h-5 ${s.color}`} />
                  </div>
                  <h3 className="text-white font-black text-lg mb-2">{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-[#FFF8E1] border border-[#FFC107]/30 rounded-full px-4 py-1.5 mb-4">
                <Heart className="w-3.5 h-3.5 text-[#FFC107]" />
                <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-widest">Değerlerimiz</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                Bizi <span className="text-[#FFC107]">Farklı Kılan.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="w-11 h-11 bg-[#FFF8E1] rounded-xl flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-[#FFC107]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-black text-lg mb-1">{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-zinc-950 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Bize Ulaşın
            </h2>
            <p className="text-zinc-400 mb-8">Sorularınız için arayın, WhatsApp'tan yazın ya da bizi ziyaret edin.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+905064668981"
                className="flex items-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black text-sm px-7 py-3.5 rounded-xl transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                0506 466 89 81
              </a>
              <a
                href="https://wa.me/905064668981"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all active:scale-95"
              >
                WhatsApp&apos;tan Yaz
              </a>
              <a
                href="/#contact"
                className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors px-4 py-3.5"
              >
                <MapPin className="w-4 h-4" />
                Kanal Mah. Halide Edip Cad. Kepez, Antalya
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
