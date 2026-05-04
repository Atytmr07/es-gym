export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "name": "E&S GYM Fitness Center",
    "alternateName": ["E&S Gym", "ES Gym Kepez", "E&S Spor Salonu", "E&S GYM Kepez"],
    "description": "Kepez Kanal Mahallesi'nde premium spor salonu. Reformer pilates, kickboks, EMS fitness, personal training, bölgesel incelme ve çocuk hareket gelişim programları.",
    "url": "https://esgymfitness.com.tr",
    "telephone": "+905064668981",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kanal Mah. Halide Edip Cad.",
      "addressLocality": "Kepez",
      "addressRegion": "Antalya",
      "postalCode": "07070",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.920137,
      "longitude": 30.676416
    },
    "hasMap": "https://maps.app.goo.gl/esgymkepez",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "₺₺",
    "currenciesAccepted": "TRY",
    "paymentAccepted": "Cash, Credit Card",
    "areaServed": [
      { "@type": "City", "name": "Kepez" },
      { "@type": "City", "name": "Antalya" }
    ],
    "sameAs": [
      "https://www.instagram.com/esgymfitness",
      "https://www.tiktok.com/@esgymfitness",
      "https://wa.me/905064668981"
    ],
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Reformer Pilates", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Kickboks", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "EMS Fitness", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Personal Training", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Bölgesel İncelme", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Çocuk Spor Programı", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Soyunma Odası", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Duş", "value": true }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
