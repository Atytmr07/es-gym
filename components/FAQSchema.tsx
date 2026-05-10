export default function FAQSchema() {
  const faqs = [
    {
      q: "E&S GYM nerede?",
      a: "E&S GYM Fitness Center, Antalya Kepez ilçesi Kanal Mahallesi Halide Edip Caddesi üzerinde yer almaktadır.",
    },
    {
      q: "E&S GYM üyelik fiyatları ne kadar?",
      a: "GYM üyeliği aylık 3.000 TL'den başlamaktadır. EMS fitness 12 seans 12.000 TL, Personal Training 8 seans 8.000 TL, Grup Pilates 8 seans 3.400 TL'den başlamaktadır. Tüm paket fiyatları için online üyelik sayfamızı ziyaret edebilirsiniz.",
    },
    {
      q: "Kepez'de reformer pilates nerede yapılır?",
      a: "E&S GYM Fitness Center'da sertifikalı pilates eğitmeni eşliğinde reformer pilates dersleri verilmektedir. Gruplar maksimum 8 kişiyle oluşturulur.",
    },
    {
      q: "EMS fitness nedir?",
      a: "EMS (Elektro Müsküler Stimülasyon) fitness, vücudunuzu elektrik impulslarsıyla aktive ederek 25 dakikada 3.000 kaloriye kadar yakmanızı sağlayan yeni nesil antrenman yöntemidir. E&S GYM'de sertifikalı EMS antrenörleri eşliğinde uygulanmaktadır.",
    },
    {
      q: "Kepez'de kickboks dersleri var mı?",
      a: "Evet, E&S GYM'de Pazartesi, Çarşamba ve Cuma günleri çocuklar için 19:30'da, yetişkinler için 20:30'da kickboks dersleri düzenlenmektedir.",
    },
    {
      q: "Çocuklar için spor programı var mı?",
      a: "Evet, E&S GYM'de 2–12 yaş arası çocuklar için Hareket Gelişim Programı mevcuttur. Program dikkat, odak, denge, sürat ve sosyal gelişimi desteklemektedir.",
    },
    {
      q: "Online üyelik nasıl yapılır?",
      a: "esgymfitness.com.tr adresinden hesap oluşturup istediğiniz paketi seçebilir, Iyzico 3D Secure güvencesiyle kredi kartıyla ödeme yapabilirsiniz. Üyeliğiniz ödeme anında aktive edilir.",
    },
    {
      q: "E&S GYM çalışma saatleri nelerdir?",
      a: "E&S GYM Pazartesi–Cuma 09:00–23:00, Cumartesi 09:00–20:00 saatleri arasında hizmet vermektedir. Pazar günleri kapalıdır.",
    },
    {
      q: "Bölgesel incelme seansları nedir?",
      a: "E&S GYM'de G5, WSlim ve Lenf Tulumu cihazlarıyla bölgesel incelme programları uygulanmaktadır. Haftada 3 gün, randevulu sistem ile 3 aylık programlar sunulmaktadır.",
    },
    {
      q: "E&S GYM'de personal trainer var mı?",
      a: "Evet, E&S GYM'de sertifikalı kişisel antrenörlerle birebir personal training seansları mevcuttur. Beslenme danışmanlığı ve vücut analizi de programa dahildir.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": a,
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
