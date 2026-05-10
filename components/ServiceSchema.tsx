export default function ServiceSchema() {
  const services = [
    {
      name: "GYM Üyeliği",
      description: "Sınırsız GYM erişimi, kardio ve ağırlık alanı, soyunma odası ve duş, fitness değerlendirmesi.",
      price: "3000",
      priceCurrency: "TRY",
      url: "https://esgymfitness.com.tr/packages",
    },
    {
      name: "EMS Fitness",
      description: "Elektro Müsküler Stimülasyon ile 25 dakikada etkili antrenman. Sertifikalı EMS antrenörü eşliğinde.",
      price: "12000",
      priceCurrency: "TRY",
      url: "https://esgymfitness.com.tr/packages",
    },
    {
      name: "Personal Training",
      description: "Birebir sertifikalı kişisel antrenör, beslenme danışmanlığı, vücut analizi ve WhatsApp destek hattı.",
      price: "8000",
      priceCurrency: "TRY",
      url: "https://esgymfitness.com.tr/packages",
    },
    {
      name: "Kickboks",
      description: "Pzt, Çar, Cum grup kickboks dersleri. Çocuk grubu 19:30, yetişkin grubu 20:30. GYM alanına ücretsiz erişim.",
      price: "2500",
      priceCurrency: "TRY",
      url: "https://esgymfitness.com.tr/packages",
    },
    {
      name: "Grup Pilates",
      description: "Sertifikalı pilates eğitmeni eşliğinde reformer pilates grup dersleri. Maksimum 8 kişilik gruplar.",
      price: "3400",
      priceCurrency: "TRY",
      url: "https://esgymfitness.com.tr/packages",
    },
    {
      name: "Bölgesel İncelme",
      description: "G5, WSlim ve Lenf Tulumu cihazlarıyla haftada 3 gün randevulu bölgesel incelme programı.",
      price: "7500",
      priceCurrency: "TRY",
      url: "https://esgymfitness.com.tr/packages",
    },
    {
      name: "Çocuk Hareket Gelişim",
      description: "2–12 yaş arası çocuklar için dikkat, odak, denge ve sosyal gelişim programı. Uzman çocuk antrenörü.",
      price: "7500",
      priceCurrency: "TRY",
      url: "https://esgymfitness.com.tr/packages",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "E&S GYM Fitness Center Hizmetleri",
    "description": "Kepez Antalya'da sunulan spor ve fitness hizmetleri",
    "url": "https://esgymfitness.com.tr/packages",
    "itemListElement": services.map((s, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Service",
        "name": s.name,
        "description": s.description,
        "url": s.url,
        "provider": {
          "@type": "HealthClub",
          "name": "E&S GYM Fitness Center",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kepez",
            "addressRegion": "Antalya",
            "addressCountry": "TR",
          },
        },
        "offers": {
          "@type": "Offer",
          "price": s.price,
          "priceCurrency": s.priceCurrency,
          "availability": "https://schema.org/InStock",
          "url": s.url,
        },
        "areaServed": { "@type": "City", "name": "Kepez, Antalya" },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
