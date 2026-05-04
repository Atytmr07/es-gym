import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kullanım Koşulları | E&S GYM",
};

export default function KullanimKosullariPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <h1 className="text-4xl font-black text-white mb-2">Kullanım Koşulları</h1>
        <p className="text-zinc-500 text-sm mb-10">Son güncelleme: Mayıs 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Kabul</h2>
            <p>
              Bu web sitesini kullanarak ve/veya üyelik satın alarak işbu Kullanım Koşulları&apos;nı
              okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan edersiniz.
              Koşulları kabul etmiyorsanız lütfen siteyi kullanmayınız.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Hizmet Tanımı</h2>
            <p>
              E&S GYM Fitness Center, Kepez/Antalya&apos;da faaliyet gösteren bir spor merkezidir.
              Bu web sitesi aracılığıyla çeşitli üyelik paketleri dijital olarak satın alınabilmektedir.
              Sunulan hizmetler; GYM üyeliği, EMS fitness, kişisel antrenman, kickboks, pilates,
              bölgesel incelme ve çocuk hareket gelişim programlarını kapsar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Üyelik ve Hesap Güvenliği</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>Hesap oluştururken doğru ve güncel bilgi sağlamakla yükümlüsünüz.</li>
              <li>Hesap şifrenizin gizliliğini korumak sizin sorumluluğunuzdadır.</li>
              <li>Hesabınızda gerçekleşen tüm işlemlerden siz sorumlusunuz.</li>
              <li>Hesabınızın yetkisiz kullanıldığını fark etmeniz hâlinde derhal bizimle iletişime geçiniz.</li>
              <li>Bir kişi yalnızca bir hesap oluşturabilir.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Ödeme ve Fiyatlandırma</h2>
            <p>
              Tüm ödemeler Türk Lirası (TRY) cinsinden alınır. Fiyatlara KDV dahildir.
              Ödemeler, Iyzico Ödeme Hizmetleri A.Ş. altyapısı üzerinden 3D Secure güvencesiyle işlenir.
              Kart bilgileriniz sitemizde saklanmaz. Fiyatlar önceden haber vermeksizin değiştirilebilir;
              ancak satın alınan paketlerin fiyatı değişmez.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Üyelik Kullanım Kuralları</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>Üyelik kişiseldir; başkasına devredilemez veya kullandırılamaz.</li>
              <li>Tesis kurallarına ve personelin yönlendirmelerine uymak zorunludur.</li>
              <li>Seans randevuları en az 6 saat öncesinden iptal edilmelidir.</li>
              <li>Tesis güvenlik kameraları ile izlenmektedir.</li>
              <li>Kural ihlali hâlinde üyelik askıya alınabilir veya sonlandırılabilir.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Sorumluluk Sınırlaması</h2>
            <p>
              Spor merkezimiz, üyelerin tesis kullanımından kaynaklanan kaza veya yaralanmalara karşı
              gerekli önlemleri almaktadır. Üyeler, kendi sağlık durumlarını değerlendirerek programlara
              katılmakla yükümlüdür. Varsa sağlık sorunlarını personele bildirmeleri zorunludur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Fikri Mülkiyet</h2>
            <p>
              Bu web sitesindeki tüm içerikler (logo, metin, görsel, tasarım) E&S GYM&apos;e aittir
              ve izinsiz kullanılamaz, kopyalanamaz veya dağıtılamaz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Değişiklikler</h2>
            <p>
              E&S GYM, bu koşulları önceden haber vermeksizin değiştirme hakkını saklı tutar.
              Değişiklikler sitede yayımlandığı andan itibaren geçerlidir. Kullanımınıza devam
              etmeniz, değişiklikleri kabul ettiğiniz anlamına gelir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. İletişim</h2>
            <p>
              Sorularınız için: <strong className="text-white">info@esgym.com.tr</strong> ·{" "}
              <strong className="text-white">0506 466 89 81</strong> · Kepez, Antalya
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
