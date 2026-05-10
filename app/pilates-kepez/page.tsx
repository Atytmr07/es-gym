import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, Clock, Users, ArrowRight, Flower2, Star } from "lucide-react";

export const metadata = {
  title: "Pilates Kepez | E&S GYM – Reformer Pilates Antalya Kepez",
  description:
    "Kepez'de reformer pilates. Uzman pilates eğitmenleriyle bölgesel incelme, postür düzeltme ve güç antrenmanı. Antalya Kepez'in en iyi pilates merkezi. Hemen üye ol.",
  keywords: [
    "pilates kepez",
    "reformer pilates kepez",
    "kepez pilates merkezi",
    "kepez reformer pilates",
    "pilates antalya kepez",
    "kepez pilates fiyatları",
    "kepez bölgesel incelme pilates",
  ],
  alternates: { canonical: "https://esgymfitness.com.tr/pilates-kepez" },
  openGraph: {
    title: "Pilates Kepez | E&S GYM Antalya",
    description:
      "Reformer pilates ile bölgesel incelme ve postür düzeltme. Kepez'de uzman eğitmenlerle pilates. E&S GYM Fitness Center.",
    url: "https://esgymfitness.com.tr/pilates-kepez",
    images: [{ url: "/logo.jpg", width: 1080, height: 1080, alt: "Pilates Kepez E&S GYM" }],
  },
};

const pilatesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Reformer Pilates Kepez",
  "alternateName": ["Kepez Pilates", "Pilates Antalya Kepez"],
  "description":
    "Kepez Antalya'da uzman pilates eğitmenleriyle reformer pilates dersleri. Bölgesel incelme, postür düzeltme ve güçlendirme programları.",
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
    { "@type": "Offer", "name": "8 Seans Pilates", "price": "6000", "priceCurrency": "TRY" },
    { "@type": "Offer", "name": "12 Seans Pilates", "price": "8000", "priceCurrency": "TRY" },
    { "@type": "Offer", "name": "16 Seans Pilates", "price": "10000", "priceCurrency": "TRY" },
    { "@type": "Offer", "name": "24 Seans Pilates", "price": "13000", "priceCurrency": "TRY" },
  ],
};

const pilatesFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kepez'de pilates nerede yapılır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "E&S GYM Fitness Center, Kepez Kanal Mahallesi Halide Edip Caddesi üzerinde reformer pilates hizmeti sunmaktadır. 0506 466 89 81'den bilgi alabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      "name": "Reformer pilates ile bölgesel incelme mümkün mü?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Evet. Reformer pilates, karın, basen ve kalça bölgesinde hedefli incelme sağlar. Düzenli programla 4–8 haftada görünür sonuçlar alınır.",
      },
    },
    {
      "@type": "Question",
      "name": "Kepez pilates fiyatları ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "E&S GYM'de pilates paketleri 8 seans 6.000 TL'den başlamaktadır. 12, 16 ve 24 seanslık paketler de mevcuttur.",
      },
    },
    {
      "@type": "Question",
      "name": "Pilates başlangıç seviyesi için uygun mu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Evet. E&S GYM'de başlangıç, orta ve ileri seviye pilates programları mevcuttur. İlk derste eğitmenimiz seviyenizi belirler.",
      },
    },
    {
      "@type": "Question",
      "name": "Pilates haftada kaç gün yapılmalı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Optimum sonuç için haftada 2–3 seans pilates önerilir. Postür düzeltme hedefleri için haftada 2 seans yeterlidir.",
      },
    },
  ],
};

export default function PilatesKepezPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pilatesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pilatesFAQ) }} />

      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#FFC107 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FFC107]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FFC107]/15 border border-[#FFC107]/25 rounded-full px-4 py-1.5 mb-6">
            <Flower2 className="w-3.5 h-3.5 text-[#FFC107]" />
            <span className="text-[#FFC107] text-xs font-semibold uppercase tracking-widest">Kepez · Antalya</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Reformer Pilates <span className="text-[#FFC107]">Kepez</span>
          </h1>

          <p className="text-zinc-300 text-xl leading-relaxed mb-4 max-w-2xl">
            <strong className="text-white">Kepez&apos;de reformer pilates</strong> ile bölgesel incelme, postür
            düzeltme ve güç kazanımı. E&S GYM&apos;de uzman eğitmenlerle kişiye özel pilates programları.
          </p>
          <p className="text-zinc-400 text-base mb-10 max-w-2xl">
            Reformer pilates, tüm vücut kaslarını doğru hizalamada çalıştırarak hem estetik hem sağlıksal
            hedeflere ulaştırır. Kepez ve Antalya&apos;da pilates için doğru adres.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/packages"
              className="flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black px-8 py-4 rounded-2xl transition-all">
              <Flower2 className="w-5 h-5" /> Paket Seç & Üye Ol
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
              { icon: Flower2, value: "Reformer", label: "Profesyonel Alet", color: "text-pink-400" },
              { icon: Clock, value: "50", label: "Dakika / Seans", color: "text-[#FFC107]" },
              { icon: Star, value: "2–3×", label: "Haftalık Öneri", color: "text-emerald-400" },
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

      {/* Reformer Pilates Nedir */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-6">Reformer Pilates Nedir?</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Reformer pilates</strong>, yay sistemiyle çalışan özel bir alet
              üzerinde yapılan, tüm vücut kaslarını hedef alan gelişmiş bir egzersiz sistemidir. Mat pilatese
              kıyasla daha fazla direnç ve çok daha geniş hareket açısı sunar.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Kepez E&S GYM&apos;de</strong> uygulanan reformer pilates seansları,
              sertifikalı pilates eğitmenleri eşliğinde gerçekleştirilir. Karın, sırt, basen ve bacak kasları
              hedefli çalışılır.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Düzenli reformer pilates; bel ve boyun ağrılarını azaltır, duruşu düzeltir ve vücudu
              uzun ve ince gösterir. Kepez&apos;de pilates için E&S GYM&apos;i tercih et.
            </p>
          </div>
        </div>
      </section>

      {/* Paketler */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-3">Pilates Paket Fiyatları — Kepez</h2>
          <p className="text-zinc-400 mb-10">Tüm paketler uzman pilates eğitmeni ve kişiye özel program içerir.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "8 Seans", price: "6.000", popular: false },
              { label: "12 Seans", price: "8.000", popular: true },
              { label: "16 Seans", price: "10.000", popular: false },
              { label: "24 Seans", price: "13.000", popular: false },
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
                  {["Sertifikalı pilates eğitmeni", "Kişiye özel program", "Postür analizi", "GYM alanına ücretsiz erişim"].map(f => (
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
              { q: "Kepez'de pilates nerede yapılır?", a: "E&S GYM Fitness Center, Kepez Kanal Mahallesi Halide Edip Caddesi üzerinde reformer pilates hizmeti sunmaktadır. 0506 466 89 81 numarasından ulaşabilirsiniz." },
              { q: "Reformer pilates ile bölgesel incelme mümkün mü?", a: "Evet. Reformer pilates karın, basen ve kalça bölgesinde hedefli incelme sağlar. Düzenli programla 4–8 haftada görünür sonuçlar alınır." },
              { q: "Kepez pilates fiyatları ne kadar?", a: "E&S GYM'de pilates paketleri 8 seans 6.000 TL'den başlar. 12, 16 ve 24 seanslık avantajlı paketler de mevcuttur." },
              { q: "Pilates başlangıç seviyesi için uygun mu?", a: "Evet. Başlangıç, orta ve ileri seviye programlarımız mevcuttur. İlk derste eğitmenimiz seviyenizi belirleyerek uygun programı başlatır." },
              { q: "Pilates haftada kaç gün yapılmalı?", a: "Optimum sonuç için haftada 2–3 seans önerilir. Postür düzeltme ve bel ağrısı hedefleri için haftada 2 seans yeterlidir." },
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
          <h2 className="text-4xl font-black text-gray-900 mb-3">Kepez&apos;de Pilates&apos;e Başla</h2>
          <p className="text-gray-900/70 text-lg mb-8">Kanal Mahallesi Halide Edip Cad. · Kepez, Antalya · 0506 466 89 81</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages"
              className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 rounded-2xl transition-all">
              <Flower2 className="w-5 h-5" /> Hemen Üye Ol
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
