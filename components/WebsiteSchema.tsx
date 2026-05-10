export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "E&S GYM Fitness Center",
    "url": "https://esgymfitness.com.tr",
    "description": "Kepez Antalya'nın premium spor salonu. Online üyelik ve 3D Secure güvenli ödeme.",
    "inLanguage": "tr-TR",
    "publisher": {
      "@type": "HealthClub",
      "name": "E&S GYM Fitness Center",
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://esgymfitness.com.tr/packages",
      },
      "query": "spor salonu kepez",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
