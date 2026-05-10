import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, Clock, Users, ArrowRight, Shield, Flame } from "lucide-react";

export const metadata = {
  title: "Kickboks Kepez | E&S GYM – Boks & Kickboks Antalya Kepez",
  description:
    "Kepez'de kickboks ve boks antrenmanı. Deneyimli kickboks antrenörleriyle kondisyon, savunma ve yağ yakımı. Antalya Kepez'in en iyi kickboks salonu. Hemen üye ol.",
  keywords: [
    "kickboks kepez",
    "boks kepez",
    "kepez kickboks salonu",
    "kepez boks antrenmanı",
    "kickboks antalya kepez",
    "kepez kickboks fiyatları",
    "kepez muay thai",
  ],
  alternates: { canonical: "https://esgymfitness.com.tr/kickboks-kepez" },
  openGraph: {
    title: "Kickboks Kepez | E&S GYM Antalya",
    description:
      "Deneyimli antrenörlerle kickboks ve boks. Kepez'de savunma sanatları ve kondisyon antrenmanı. E&S GYM Fitness Center.",
    url: "https://esgymfitness.com.tr/kickboks-kepez",
    images: [{ url: "/logo.jpg", width: 1080, height: 1080, alt: "Kickboks Kepez E&S GYM" }],
  },
};

const kickboksSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kickboks Kepez",
  "alternateName": ["Boks Kepez", "Kepez Kickboks Salonu"],
  "description":
    "Kepez Antalya'da deneyimli kickboks antrenörleriyle boks ve kickboks dersleri. Savunma sanatları, kondisyon ve yağ yakımı programları.",
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
    { "@type": "Offer", "name": "8 Seans Kickboks", "price": "5000", "priceCurrency": "TRY" },
    { "@type": "Offer", "name": "12 Seans Kickboks", "price": "7000", "priceCurrency": "TRY" },
    { "@type": "Offer", "name": "16 Seans Kickboks", "price": "9000", "priceCurrency": "TRY" },
    { "@type": "Offer", "name": "24 Seans Kickboks", "price": "12000", "priceCurrency": "TRY" },
  ],
};

const kickboksFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kepez'de kickboks nerede yapılır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "E&S GYM Fitness Center, Kepez Kanal Mahallesi Halide Edip Caddesi üzerinde kickboks ve boks antrenmanı sunmaktadır. 0506 466 89 81'den ulaşabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      "name": "Kickboks kaç kalori yakar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Bir kickboks seansında ortalama 600–900 kalori yakılır. Yoğun tempoda yapılan antrenmanlarda bu rakam 1.000 kaloriye ulaşabilir.",
      },
    },
    {
      "@type": "Question",
      "name": "Kepez kickboks fiyatları ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "E&S GYM'de kickboks paketleri 8 seans 5.000 TL'den başlamaktadır. 12, 16 ve 24 seanslık paketler de mevcuttur.",
      },
    },
    {
      "@type": "Question",
      "name": "Kickboks başlangıç seviyesi için uygun mu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Evet. E&S GYM'de başlangıç seviyesinden ileri seviyeye özel programlar mevcuttur. Deneyim gerektirmez; antrenörümüz temel teknikleri sıfırdan öğretir.",
      },
    },
    {
      "@type": "Question",
      "name": "Kickboks kadınlar için uygun mu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Evet. Kickboks; yağ yakımı, kondisyon artışı ve öz savunma açısından kadınlar için mükemmeldir. E&S GYM'de kadın-erkek karma ve bireysel seanslar mevcuttur.",
      },
    },
  ],
};

export default function KickboksKepezPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kickboksSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kickboksFAQ) }} />

      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#FFC107 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FFC107]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FFC107]/15 border border-[#FFC107]/25 rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-3.5 h-3.5 text-[#FFC107]" />
            <span className="text-[#FFC107] text-xs font-semibold uppercase tracking-widest">Kepez · Antalya</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Kickboks <span className="text-[#FFC107]">Kepez</span>
          </h1>

          <p className="text-zinc-300 text-xl leading-relaxed mb-4 max-w-2xl">
            <strong className="text-white">Kepez&apos;de kickboks ve boks antrenmanı.</strong> Deneyimli
            antrenörler eşliğinde savunma sanatları öğren, kondisyonunu artır ve kalori yak.
          </p>
          <p className="text-zinc-400 text-base mb-10 max-w-2xl">
            Kickboks; kardiovasküler dayanıklılık, refleks, güç ve özgüven geliştiren tam vücut antrenmanıdır.
            Kepez ve Antalya&apos;da kickboks için doğru adres E&S GYM.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/packages"
              className="flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black px-8 py-4 rounded-2xl transition-all">
              <Shield className="w-5 h-5" /> Paket Seç & Üye Ol
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
              { icon: Flame, value: "900", label: "Kalori / Seans", color: "text-orange-400" },
              { icon: Clock, value: "60", label: "Dakika / Seans", color: "text-[#FFC107]" },
              { icon: Shield, value: "Uzman", label: "Kickboks Antrenörü", color: "text-red-400" },
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

      {/* Kickboks Nedir */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-6">Kickboks Neden Tercih Edilmeli?</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Kickboks</strong>, boks tekniklerini bacak vuruşlarıyla birleştiren
              yüksek yoğunluklu bir dövüş sanatı ve kondisyon sporudur. Tek bir seansta hem üst hem alt vücudu
              çalıştırır.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Kepez E&S GYM&apos;de</strong> kickboks seansları, deneyimli
              antrenörler eşliğinde güvenli bir ortamda gerçekleştirilir. Temel tekniklerden ileri seviye
              kombinasyonlara kadar kademeli ilerleme sağlanır.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Düzenli kickboks antrenmanı; vücut yağını azaltır, kalp-damar sağlığını güçlendirir ve
              öz savunma becerileri kazandırır. Kepez&apos;de kickboks için E&S GYM&apos;i tercih et.
            </p>
          </div>
        </div>
      </section>

      {/* Paketler */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-3">Kickboks Paket Fiyatları — Kepez</h2>
          <p className="text-zinc-400 mb-10">Tüm paketler deneyimli kickboks antrenörü ve kişiye özel program içerir.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "8 Seans", price: "5.000", popular: false },
              { label: "12 Seans", price: "7.000", popular: true },
              { label: "16 Seans", price: "9.000", popular: false },
              { label: "24 Seans", price: "12.000", popular: false },
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
                  {["Deneyimli kickboks antrenörü", "Kişiye özel program", "Ekipman kullanımı dahil", "GYM alanına ücretsiz erişim"].map(f => (
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
              { q: "Kepez'de kickboks nerede yapılır?", a: "E&S GYM Fitness Center, Kepez Kanal Mahallesi Halide Edip Caddesi üzerinde kickboks ve boks antrenmanı sunmaktadır. 0506 466 89 81 numarasından ulaşabilirsiniz." },
              { q: "Kickboks kaç kalori yakar?", a: "Bir kickboks seansında ortalama 600–900 kalori yakılır. Yoğun tempoda 1.000 kaloriye ulaşmak mümkündür." },
              { q: "Kepez kickboks fiyatları ne kadar?", a: "E&S GYM'de kickboks paketleri 8 seans 5.000 TL'den başlar. 12, 16 ve 24 seanslık avantajlı paketler de mevcuttur." },
              { q: "Kickboks başlangıç seviyesi için uygun mu?", a: "Evet. Deneyim gerektirmez. Antrenörümüz temel teknikleri sıfırdan öğreterek ilerler." },
              { q: "Kickboks kadınlar için uygun mu?", a: "Evet. Kickboks yağ yakımı, kondisyon ve öz savunma açısından kadınlar için mükemmeldir. Bireysel ve grup seansları mevcuttur." },
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
          <h2 className="text-4xl font-black text-gray-900 mb-3">Kepez&apos;de Kickboks&apos;a Başla</h2>
          <p className="text-gray-900/70 text-lg mb-8">Kanal Mahallesi Halide Edip Cad. · Kepez, Antalya · 0506 466 89 81</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages"
              className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 rounded-2xl transition-all">
              <Shield className="w-5 h-5" /> Hemen Üye Ol
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
