import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, Clock, Users, ArrowRight, Dumbbell, Trophy } from "lucide-react";

export const metadata = {
  title: "Fitness Kepez | E&S GYM – Kepez Spor Salonu Antalya",
  description:
    "Kepez spor salonu E&S GYM. Premium ekipman, uzman kadro, 09:00–23:00 açık. Kepez ve Antalya'nın en iyi fitness merkezi. Aylık, 3 aylık ve yıllık üyelik paketleri. Hemen üye ol.",
  keywords: [
    "fitness kepez",
    "kepez spor salonu",
    "kepez gym",
    "kepez fitness merkezi",
    "spor salonu kepez antalya",
    "kepez gym üyelik",
    "kepez fitness fiyatları",
    "kepez ağırlık salonu",
  ],
  alternates: { canonical: "https://esgymfitness.com.tr/fitness-kepez" },
  openGraph: {
    title: "Fitness Kepez | E&S GYM Spor Salonu Antalya",
    description:
      "Kepez'in en iyi spor salonu. Premium ekipman, uzman kadro. 09:00–23:00 açık. E&S GYM Fitness Center.",
    url: "https://esgymfitness.com.tr/fitness-kepez",
    images: [{ url: "/logo.jpg", width: 1080, height: 1080, alt: "Fitness Kepez E&S GYM Spor Salonu" }],
  },
};

const fitnessSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kepez Spor Salonu – Fitness Merkezi",
  "alternateName": ["Kepez Gym", "Fitness Kepez", "Kepez Ağırlık Salonu"],
  "description":
    "Kepez Antalya'da premium fitness merkezi. Ağırlık antrenmanı, kardio, grup dersleri ve kişisel antrenör desteğiyle tam kapsamlı spor salonu.",
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
    "openingHours": ["Mo-Fr 09:00-23:00", "Sa 09:00-20:00"],
  },
  "areaServed": { "@type": "City", "name": "Kepez, Antalya" },
  "offers": [
    { "@type": "Offer", "name": "Aylık Gym Üyeliği", "price": "2000", "priceCurrency": "TRY" },
    { "@type": "Offer", "name": "3 Aylık Gym Üyeliği", "price": "5000", "priceCurrency": "TRY" },
    { "@type": "Offer", "name": "6 Aylık Gym Üyeliği", "price": "8000", "priceCurrency": "TRY" },
    { "@type": "Offer", "name": "Yıllık Gym Üyeliği", "price": "13000", "priceCurrency": "TRY" },
  ],
};

const fitnessFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kepez'de en iyi spor salonu hangisi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "E&S GYM Fitness Center, Kepez Kanal Mahallesi'nde 2017'den bu yana hizmet veren premium bir spor merkezidir. Ağırlık, kardio, EMS fitness, pilates ve kickboks alanlarıyla tam kapsamlı bir spor deneyimi sunar.",
      },
    },
    {
      "@type": "Question",
      "name": "Kepez gym saatleri nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "E&S GYM Pazartesi–Cuma 09:00–23:00, Cumartesi 09:00–20:00 açıktır. Pazar günleri kapalıdır.",
      },
    },
    {
      "@type": "Question",
      "name": "Kepez spor salonu üyelik fiyatları ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "E&S GYM'de aylık üyelik 2.000 TL'den başlamaktadır. 3 aylık, 6 aylık ve yıllık avantajlı paketler de mevcuttur.",
      },
    },
    {
      "@type": "Question",
      "name": "Kepez'de hangi fitness programları var?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "E&S GYM'de ağırlık antrenmanı, kardio, reformer pilates, kickboks, EMS fitness, personal training, çocuk gelişim ve beslenme danışmanlığı programları mevcuttur.",
      },
    },
    {
      "@type": "Question",
      "name": "Kepez gym'e nasıl gidilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "E&S GYM Fitness Center, Kepez Kanal Mahallesi Halide Edip Caddesi üzerindedir. 0506 466 89 81'den yol tarifi alabilirsiniz.",
      },
    },
  ],
};

export default function FitnessKepezPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fitnessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fitnessFAQ) }} />

      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#FFC107 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FFC107]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FFC107]/15 border border-[#FFC107]/25 rounded-full px-4 py-1.5 mb-6">
            <Dumbbell className="w-3.5 h-3.5 text-[#FFC107]" />
            <span className="text-[#FFC107] text-xs font-semibold uppercase tracking-widest">Kepez · Antalya · 2017&apos;den Beri</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Kepez <span className="text-[#FFC107]">Spor Salonu</span>
          </h1>

          <p className="text-zinc-300 text-xl leading-relaxed mb-4 max-w-2xl">
            <strong className="text-white">Kepez&apos;in en kapsamlı fitness merkezi</strong> E&S GYM&apos;de
            premium ekipman, uzman kadro ve 5+ farklı program seni bekliyor.
          </p>
          <p className="text-zinc-400 text-base mb-10 max-w-2xl">
            Ağırlık antrenmanı, kardio, EMS fitness, reformer pilates, kickboks ve personal training — hepsi
            tek çatı altında. Kepez&apos;de gym üyeliği için doğru adres.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/packages"
              className="flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black px-8 py-4 rounded-2xl transition-all">
              <Dumbbell className="w-5 h-5" /> Paket Seç & Üye Ol
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
              { icon: Trophy, value: "5+", label: "Uzman Program", color: "text-[#FFC107]" },
              { icon: Clock, value: "09–23", label: "Açık Saatler", color: "text-emerald-400" },
              { icon: Dumbbell, value: "Premium", label: "Ekipman", color: "text-blue-400" },
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

      {/* Programlar */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-6">Kepez&apos;de Fitness Programları</h2>
          <div className="prose prose-invert max-w-none mb-10">
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">E&S GYM Fitness Center</strong>, Kepez&apos;de 2017&apos;den bu yana
              premium spor salonu hizmeti sunmaktadır. Ağırlık antrenmanından kardio programlarına, EMS
              fitness&apos;ten reformer pilates&apos;e kadar geniş bir yelpazede hizmet verilir.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Uzman antrenör kadrosu, kişiye özel programlar ve modern ekipmanla Kepez ve Antalya&apos;da
              fitness deneyimini zirveye taşıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Ağırlık & Güç Antrenmanı", desc: "Profesyonel ağırlık ekipmanlarıyla kas kazanımı ve güç antrenmanı programları." },
              { title: "Kardio & Kondisyon", desc: "Koşu bandı, bisiklet ve eliptik ile kalp-damar sağlığını güçlendir." },
              { title: "EMS Fitness", desc: "25 dakikada 3.000 kalori. Elektro Müsküler Stimülasyon teknolojisi." },
              { title: "Reformer Pilates", desc: "Bölgesel incelme, postür düzeltme ve esneklik için reformer pilates." },
              { title: "Kickboks & Boks", desc: "Kondisyon, savunma sanatları ve yağ yakımı için kickboks programları." },
              { title: "Personal Training", desc: "Sertifikalı personal trainer ile birebir, kişiye özel antrenman." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-bold text-sm mb-1">{title}</p>
                    <p className="text-zinc-400 text-sm">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paketler */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-3">Gym Üyelik Fiyatları — Kepez</h2>
          <p className="text-zinc-400 mb-10">Tüm üyelikler GYM alanı, kardio ve grup derslerine erişim içerir.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Aylık Üyelik", price: "2.000", popular: false },
              { label: "3 Aylık Üyelik", price: "5.000", popular: true },
              { label: "6 Aylık Üyelik", price: "8.000", popular: false },
              { label: "Yıllık Üyelik", price: "13.000", popular: false },
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
                  {["Ağırlık & kardio alanı", "Grup derslerine erişim", "Ücretsiz vücut analizi", "Uzman antrenör danışmanlığı"].map(f => (
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
              { q: "Kepez'de en iyi spor salonu hangisi?", a: "E&S GYM Fitness Center, Kepez Kanal Mahallesi'nde 2017'den bu yana hizmet veren premium bir spor merkezidir. Ağırlık, kardio, EMS, pilates ve kickboks alanlarıyla tam kapsamlı spor deneyimi sunar." },
              { q: "Kepez gym saatleri nedir?", a: "E&S GYM Pazartesi–Cuma 09:00–23:00, Cumartesi 09:00–20:00 açıktır. Pazar günleri kapalıdır." },
              { q: "Kepez spor salonu üyelik fiyatları ne kadar?", a: "E&S GYM'de aylık üyelik 2.000 TL'den başlar. 3 aylık, 6 aylık ve yıllık avantajlı paketler de mevcuttur." },
              { q: "Kepez'de hangi fitness programları var?", a: "Ağırlık antrenmanı, kardio, reformer pilates, kickboks, EMS fitness, personal training ve beslenme danışmanlığı programları mevcuttur." },
              { q: "Kepez gym'e nasıl gidilir?", a: "E&S GYM Fitness Center, Kepez Kanal Mahallesi Halide Edip Caddesi üzerindedir. 0506 466 89 81'den yol tarifi alabilirsiniz." },
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
          <h2 className="text-4xl font-black text-gray-900 mb-3">Kepez&apos;de Fitness&apos;e Başla</h2>
          <p className="text-gray-900/70 text-lg mb-8">Kanal Mahallesi Halide Edip Cad. · Kepez, Antalya · 0506 466 89 81</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages"
              className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 rounded-2xl transition-all">
              <Dumbbell className="w-5 h-5" /> Hemen Üye Ol
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
