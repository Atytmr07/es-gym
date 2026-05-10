import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, Zap, Clock, Flame, Users, ArrowRight } from "lucide-react";

export const metadata = {
  title: "EMS Fitness Kepez | E&S GYM – Antalya EMS Antrenmanı",
  description:
    "Kepez'de EMS fitness. 25 dakikada 3.000 kalori. Sertifikalı EMS antrenörleriyle birebir antrenman. Antalya Kepez'in en iyi EMS fitness merkezi. Hemen üye ol.",
  keywords: [
    "ems fitness kepez",
    "ems antrenman kepez",
    "ems fitness antalya",
    "elektro müsküler stimülasyon kepez",
    "ems spor salonu kepez",
    "kepez ems",
    "ems fitness fiyatları kepez",
  ],
  alternates: { canonical: "https://esgymfitness.com.tr/ems-fitness-kepez" },
  openGraph: {
    title: "EMS Fitness Kepez | E&S GYM Antalya",
    description:
      "25 dakikada 3.000 kalori yak. Kepez'de sertifikalı EMS antrenmanı. E&S GYM Fitness Center.",
    url: "https://esgymfitness.com.tr/ems-fitness-kepez",
    images: [{ url: "/logo.jpg", width: 1080, height: 1080, alt: "EMS Fitness Kepez E&S GYM" }],
  },
};

const emsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "EMS Fitness Kepez",
  "alternateName": ["EMS Antrenmanı Kepez", "Elektro Müsküler Stimülasyon Kepez"],
  "description":
    "Kepez Antalya'da sertifikalı EMS antrenörleriyle 25 dakikalık EMS fitness seansları. Ayda 4 kg'a kadar yağ yakımı.",
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
    { "@type": "Offer", "name": "12 Seans EMS", "price": "12000", "priceCurrency": "TRY" },
    { "@type": "Offer", "name": "16 Seans EMS", "price": "14000", "priceCurrency": "TRY" },
    { "@type": "Offer", "name": "24 Seans EMS", "price": "16000", "priceCurrency": "TRY" },
    { "@type": "Offer", "name": "32 Seans EMS", "price": "18000", "priceCurrency": "TRY" },
  ],
};

const emsFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kepez'de EMS fitness nerede yapılır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "E&S GYM Fitness Center, Kepez Kanal Mahallesi Halide Edip Caddesi üzerinde EMS fitness hizmeti sunmaktadır.",
      },
    },
    {
      "@type": "Question",
      "name": "EMS fitness ne kadar sürer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Bir EMS seansı 25 dakika sürer. Bu 25 dakika, geleneksel antrenmanın 2 saatine eşdeğerdir.",
      },
    },
    {
      "@type": "Question",
      "name": "EMS fitness kaç kalori yakar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Bir EMS seansında 3.000 kaloriye kadar yakım yapılabilir. Düzenli EMS antrenmanıyla ayda 4 kg'a kadar yağ kaybı mümkündür.",
      },
    },
    {
      "@type": "Question",
      "name": "Kepez'de EMS fitness fiyatları ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "E&S GYM'de EMS fitness fiyatları 12 seans 12.000 TL'den başlamaktadır. 16, 24 ve 32 seanslık paketler de mevcuttur.",
      },
    },
    {
      "@type": "Question",
      "name": "EMS fitness herkes yapabilir mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "EMS fitness genel olarak herkese uygun olmakla birlikte, kalp pili kullananlar, hamile kadınlar ve epilepsi hastaları için uygun değildir. Sertifikalı antrenörümüz size özel değerlendirme yapar.",
      },
    },
  ],
};

export default function EMSFitnessKepezPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(emsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(emsFAQ) }} />

      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#FFC107 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FFC107]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FFC107]/15 border border-[#FFC107]/25 rounded-full px-4 py-1.5 mb-6">
            <Zap className="w-3.5 h-3.5 text-[#FFC107] fill-[#FFC107]" />
            <span className="text-[#FFC107] text-xs font-semibold uppercase tracking-widest">Kepez · Antalya</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            EMS Fitness <span className="text-[#FFC107]">Kepez</span>
          </h1>

          <p className="text-zinc-300 text-xl leading-relaxed mb-4 max-w-2xl">
            <strong className="text-white">25 dakikada 3.000 kalori.</strong> Kepez&apos;in en iyi EMS fitness
            merkezi E&S GYM&apos;de sertifikalı antrenörler eşliğinde az zamanda büyük değişim yaşa.
          </p>
          <p className="text-zinc-400 text-base mb-10 max-w-2xl">
            Elektro Müsküler Stimülasyon (EMS) teknolojisi, kaslarını elektrik impulslarsıyla aktive ederek
            geleneksel antrenmanın 4 katı verim sağlar. Kepez ve Antalya&apos;da EMS fitness için doğru adres.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/packages"
              className="flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black px-8 py-4 rounded-2xl transition-all">
              <Zap className="w-5 h-5" /> Paket Seç & Üye Ol
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
              { icon: Flame, value: "3.000", label: "Kalori / Seans", color: "text-orange-400" },
              { icon: Clock, value: "25", label: "Dakika Yeterli", color: "text-[#FFC107]" },
              { icon: Zap, value: "4 kg", label: "Aylık Yağ Yakımı", color: "text-emerald-400" },
              { icon: Users, value: "2017", label: "Yılından Beri", color: "text-blue-400" },
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

      {/* EMS Nedir */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-6">EMS Fitness Nedir?</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Elektro Müsküler Stimülasyon (EMS)</strong>, kasları düşük frekanslı
              elektrik impulslarsıyla aktive eden yeni nesil bir antrenman teknolojisidir. Geleneksel ağırlık
              antrenmanında kasların yalnızca %30–40&apos;ı aktive olurken, EMS ile bu oran <strong className="text-white">%90&apos;a</strong> ulaşır.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Kepez E&S GYM&apos;de</strong> uygulanan EMS seansları, sertifikalı
              EMS antrenörleri eşliğinde gerçekleştirilir. Her seans kişiye özel program ve vücut analizi içerir.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Haftada 2 EMS seansıyla düzenli antrenman yapan üyelerimiz ortalama <strong className="text-white">ayda 2–4 kg</strong> yağ
              kaybı yaşamaktadır. Kepez&apos;de EMS fitness için E&S GYM&apos;i tercih et.
            </p>
          </div>
        </div>
      </section>

      {/* Paketler */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-3">EMS Fitness Paket Fiyatları — Kepez</h2>
          <p className="text-zinc-400 mb-10">Tüm paketler sertifikalı EMS antrenörü ve vücut analizi içerir.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "12 Seans", price: "12.000", popular: false },
              { label: "16 Seans", price: "14.000", popular: true },
              { label: "24 Seans", price: "16.000", popular: false },
              { label: "32 Seans", price: "18.000", popular: false },
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
                  {["Sertifikalı EMS antrenörü", "Kişiye özel program", "Vücut analizi & takip", "GYM alanına ücretsiz erişim"].map(f => (
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
              { q: "Kepez'de EMS fitness nerede yapılır?", a: "E&S GYM Fitness Center, Kepez Kanal Mahallesi Halide Edip Caddesi üzerinde EMS fitness hizmeti sunmaktadır. 0506 466 89 81 numarasından ulaşabilirsiniz." },
              { q: "EMS fitness kaç dakika sürer?", a: "Bir EMS seansı 25 dakika sürer. Bu 25 dakika geleneksel antrenmanın 2 saatine eşdeğerdir. Haftada 2 seans yeterlidir." },
              { q: "EMS fitness kaç kalori yakar?", a: "Bir EMS seansında 3.000 kaloriye kadar yakım yapılabilir. Düzenli antrenmanla ayda 4 kg'a kadar yağ kaybı mümkündür." },
              { q: "EMS fitness herkes yapabilir mi?", a: "Kalp pili kullananlar, hamile kadınlar ve epilepsi hastaları dışında herkese uygundur. Antrenörümüz ilk seansta size özel değerlendirme yapar." },
              { q: "Kepez'de EMS fitness fiyatları ne kadar?", a: "E&S GYM'de EMS fitness 12 seans 12.000 TL'den başlar. 16, 24 ve 32 seanslık avantajlı paketler de mevcuttur." },
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
          <h2 className="text-4xl font-black text-gray-900 mb-3">Kepez EMS Fitness&apos;e Başla</h2>
          <p className="text-gray-900/70 text-lg mb-8">Kanal Mahallesi Halide Edip Cad. · Kepez, Antalya · 0506 466 89 81</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages"
              className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 rounded-2xl transition-all">
              <Zap className="w-5 h-5" /> Hemen Üye Ol
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
