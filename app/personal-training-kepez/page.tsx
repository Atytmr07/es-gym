import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, Clock, Users, ArrowRight, Target, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Personal Training Kepez | E&S GYM – Kişisel Antrenör Antalya",
  description:
    "Kepez'de personal training. Sertifikalı kişisel antrenörlerle birebir antrenman programı. Hedefine odaklan, hızlı sonuç al. Antalya Kepez'in en iyi personal trainer merkezi.",
  keywords: [
    "personal training kepez",
    "personal trainer kepez",
    "kişisel antrenör kepez",
    "kepez personal training",
    "kepez personal trainer fiyatları",
    "birebir antrenman kepez",
    "özel antrenör antalya kepez",
  ],
  alternates: { canonical: "https://esgymfitness.com.tr/personal-training-kepez" },
  openGraph: {
    title: "Personal Training Kepez | E&S GYM Antalya",
    description:
      "Sertifikalı personal trainer ile birebir antrenman. Kepez'de hedefine özel program. E&S GYM Fitness Center.",
    url: "https://esgymfitness.com.tr/personal-training-kepez",
    images: [{ url: "/logo.jpg", width: 1080, height: 1080, alt: "Personal Training Kepez E&S GYM" }],
  },
};

const ptSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Personal Training Kepez",
  "alternateName": ["Kişisel Antrenör Kepez", "Personal Trainer Antalya Kepez"],
  "description":
    "Kepez Antalya'da sertifikalı personal trainer ile birebir antrenman. Kilo verme, kas kazanımı ve performans hedeflerine özel programlar.",
  "provider": {
    "@type": "HealthClub",
    "name": "E&S GYM Fitness Center",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kanal Mah. Halide Edip Cad.",
      "addressLocality": "Kepez",
      "addressRegion": "Antalya",
      "addressCountry": "TR",
    },
    "telephone": "+905064668981",
    "url": "https://esgymfitness.com.tr",
  },
  "areaServed": { "@type": "City", "name": "Kepez, Antalya" },
  "offers": [
    { "@type": "Offer", "name": "8 Seans Personal Training", "price": "8000", "priceCurrency": "TRY" },
    { "@type": "Offer", "name": "12 Seans Personal Training", "price": "11000", "priceCurrency": "TRY" },
    { "@type": "Offer", "name": "16 Seans Personal Training", "price": "14000", "priceCurrency": "TRY" },
    { "@type": "Offer", "name": "24 Seans Personal Training", "price": "19000", "priceCurrency": "TRY" },
  ],
};

const ptFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kepez'de personal trainer nerede bulunur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "E&S GYM Fitness Center, Kepez Kanal Mahallesi Halide Edip Caddesi üzerinde sertifikalı personal training hizmeti sunmaktadır. 0506 466 89 81'den ulaşabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      "name": "Personal training ile ne kadar sürede sonuç alınır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Kişisel antrenör eşliğinde düzenli antrenmanla genellikle 4–6 haftada görünür değişimler yaşanır. Beslenme desteğiyle bu süre kısalabilir.",
      },
    },
    {
      "@type": "Question",
      "name": "Kepez'de personal training fiyatları ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "E&S GYM'de personal training paketleri 8 seans 8.000 TL'den başlamaktadır. 12, 16 ve 24 seanslık paketler de mevcuttur.",
      },
    },
    {
      "@type": "Question",
      "name": "Personal trainer ile normal spor salonu farkı nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Personal trainer ile çalışırken program size özel tasarlanır, teknikler sürekli denetlenir ve motivasyon sağlanır. Bu sayede normal spor salonuna göre 3 kat daha hızlı ilerleme sağlanır.",
      },
    },
    {
      "@type": "Question",
      "name": "Personal training başlangıç seviyesi için uygun mu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Evet. Personal training özellikle spora yeni başlayanlar için idealdir. Antrenörünüz doğru tekniği sıfırdan öğreterek sakatlanma riskini sıfıra indirir.",
      },
    },
  ],
};

export default function PersonalTrainingKepezPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ptSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ptFAQ) }} />

      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#FFC107 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FFC107]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FFC107]/15 border border-[#FFC107]/25 rounded-full px-4 py-1.5 mb-6">
            <Target className="w-3.5 h-3.5 text-[#FFC107]" />
            <span className="text-[#FFC107] text-xs font-semibold uppercase tracking-widest">Kepez · Antalya</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Personal Training <span className="text-[#FFC107]">Kepez</span>
          </h1>

          <p className="text-zinc-300 text-xl leading-relaxed mb-4 max-w-2xl">
            <strong className="text-white">Kepez&apos;de sertifikalı personal trainer</strong> ile hedefine özel
            birebir antrenman. Kilo verme, kas kazanımı veya performans — hepsinde uzman rehberlik.
          </p>
          <p className="text-zinc-400 text-base mb-10 max-w-2xl">
            Personal training; yanlış teknik, platolar ve motivasyon eksikliğini ortadan kaldırır.
            Kepez ve Antalya&apos;da kişisel antrenör için doğru adres E&S GYM.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/packages"
              className="flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black px-8 py-4 rounded-2xl transition-all">
              <Target className="w-5 h-5" /> Paket Seç & Üye Ol
            </Link>
            <a href="https://wa.me/905064668981" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-zinc-700 hover:border-[#FFC107]/50 text-zinc-300 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all">
              WhatsApp&apos;tan Bilgi Al
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, value: "3×", label: "Daha Hızlı İlerleme", color: "text-emerald-400" },
              { icon: Clock, value: "60", label: "Dakika / Seans", color: "text-[#FFC107]" },
              { icon: Target, value: "%100", label: "Kişiye Özel Program", color: "text-blue-400" },
              { icon: Users, value: "2017", label: "Yılından Beri", color: "text-orange-400" },
            ].map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-center">
                <Icon className={`w-6 h-6 ${color} mx-auto mb-3`} />
                <p className={`text-3xl font-black ${color}`}>{value}</p>
                <p className="text-zinc-400 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PT Nedir */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-6">Personal Training Neden Önemli?</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Personal training</strong>, spor salonuna tek başına gitmekten
              çok farklıdır. Antrenörünüz her egzersizde tekniğinizi denetler, programı hedefinize göre
              günceller ve plato dönemlerinde motivasyonunuzu canlı tutar.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Kepez E&S GYM&apos;de</strong> personal training seansları, sertifikalı
              antrenörlerimiz tarafından vücut analizi, hedef belirleme ve haftalık ilerleme takibiyle yürütülür.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Araştırmalar, personal trainer eşliğinde çalışan kişilerin tek başına çalışanlara kıyasla
              <strong className="text-white"> 3 kat daha hızlı</strong> sonuç aldığını göstermektedir.
              Kepez&apos;de personal training için E&S GYM&apos;i tercih et.
            </p>
          </div>
        </div>
      </section>

      {/* Paketler */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-3">Personal Training Paket Fiyatları — Kepez</h2>
          <p className="text-zinc-400 mb-10">Tüm paketler sertifikalı personal trainer, vücut analizi ve haftalık takip içerir.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "8 Seans", price: "8.000", popular: false },
              { label: "12 Seans", price: "11.000", popular: true },
              { label: "16 Seans", price: "14.000", popular: false },
              { label: "24 Seans", price: "19.000", popular: false },
            ].map(({ label, price, popular }) => (
              <div key={label}
                className={`border rounded-2xl p-6 relative ${popular ? "border-[#FFC107]/50 bg-[#FFC107]/5" : "border-zinc-800 bg-zinc-900"}`}>
                {popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFC107] text-gray-900 text-xs font-black px-3 py-1 rounded-full">
                    En Çok Tercih
                  </span>
                )}
                <p className="text-zinc-400 text-sm mb-2">{label}</p>
                <p className="text-3xl font-black text-white">₺{price}</p>
                <ul className="mt-4 space-y-2">
                  {["Sertifikalı personal trainer", "Kişiye özel program", "Vücut analizi & haftalık takip", "GYM alanına ücretsiz erişim"].map(f => (
                    <li key={f} className="flex items-center gap-2 text-zinc-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#FFC107] shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/packages"
              className="flex items-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black px-8 py-4 rounded-2xl transition-all">
              Online Satın Al <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-10">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {[
              { q: "Kepez'de personal trainer nerede bulunur?", a: "E&S GYM Fitness Center, Kepez Kanal Mahallesi Halide Edip Caddesi üzerinde sertifikalı personal training hizmeti sunmaktadır. 0506 466 89 81 numarasından ulaşabilirsiniz." },
              { q: "Personal training ile ne kadar sürede sonuç alınır?", a: "Düzenli antrenmanda genellikle 4–6 haftada görünür değişimler yaşanır. Beslenme desteğiyle bu süre kısalır." },
              { q: "Kepez'de personal training fiyatları ne kadar?", a: "E&S GYM'de personal training paketleri 8 seans 8.000 TL'den başlar. 12, 16 ve 24 seanslık avantajlı paketler de mevcuttur." },
              { q: "Personal trainer ile normal spor salonu farkı nedir?", a: "Personal trainer ile program size özel tasarlanır, teknikler sürekli denetlenir ve motivasyon sağlanır. Bu sayede 3 kat daha hızlı ilerleme sağlanır." },
              { q: "Personal training başlangıç seviyesi için uygun mu?", a: "Evet. Özellikle yeni başlayanlar için idealdir. Antrenörünüz doğru tekniği öğreterek sakatlanma riskini ortadan kaldırır." },
            ].map(({ q, a }) => (
              <details key={q} className="bg-zinc-900 border border-zinc-800 rounded-2xl group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="text-white font-semibold text-sm pr-4">{q}</span>
                  <span className="text-[#FFC107] shrink-0 text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-6 pb-5 text-zinc-400 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FFC107]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-3">Kepez Personal Training&apos;e Başla</h2>
          <p className="text-gray-900/70 text-lg mb-8">Kanal Mahallesi Halide Edip Cad. · Kepez, Antalya · 0506 466 89 81</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages"
              className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 rounded-2xl transition-all">
              <Target className="w-5 h-5" /> Hemen Üye Ol
            </Link>
            <a href="https://wa.me/905064668981" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-gray-900 font-bold px-8 py-4 rounded-2xl transition-all">
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
