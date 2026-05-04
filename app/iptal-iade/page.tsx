import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "İptal & İade Politikası | E&S GYM",
};

export default function IptalIadePage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <h1 className="text-4xl font-black text-white mb-2">İptal & İade Politikası</h1>
        <p className="text-zinc-500 text-sm mb-10">Son güncelleme: Mayıs 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Cayma Hakkı (14 Günlük İade Hakkı)</h2>
            <p>
              6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında; üyelik paketinizi satın
              aldıktan sonra <strong className="text-white">14 (on dört) gün</strong> içinde,
              hizmet ifasına başlanmamış olması koşuluyla, hiçbir gerekçe göstermeksizin cayma
              hakkınızı kullanabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Cayma Hakkının İstisnaları</h2>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
              <p className="text-zinc-300 text-sm">
                Aşağıdaki durumlarda cayma hakkı kullanılamaz:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-zinc-400 text-sm">
                <li>Üyeliğin aktive edilmesi (spor salonuna ilk girişin yapılması veya antrenmanın başlatılması)</li>
                <li>Seans bazlı paketlerde herhangi bir seans kullanılmış olması</li>
                <li>Hizmetin tüketici talebi/açık onayı ile ifa edilmeye başlanmış olması</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">İade Süreci</h2>
            <p>Cayma hakkınızı kullanmak için:</p>
            <ol className="list-decimal list-inside mt-3 space-y-2 text-zinc-400">
              <li>
                <strong className="text-zinc-200">Bildirim yapın:</strong> info@esgym.com.tr adresine e-posta
                gönderin veya 0506 466 89 81 numaralı telefonu arayın.
              </li>
              <li>
                <strong className="text-zinc-200">Değerlendirme:</strong> Talebiniz 2 iş günü içinde
                değerlendirilir.
              </li>
              <li>
                <strong className="text-zinc-200">İade:</strong> Onaylanan iadeler, ödemenin yapıldığı karta
                <strong className="text-zinc-200"> 14 gün</strong> içinde yansıtılır (bankanıza göre değişir).
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Seans Bazlı Paketlerde Kısmi İade</h2>
            <p>
              EMS Fitness, Personal Training ve Grup Pilates gibi seans bazlı paketlerde;
              kullanılmayan seanslar için kısmi iade değerlendirmesi yapılabilir. Her durum
              ayrıca incelenir ve müşteri hizmetleri ekibimiz tarafından bilgilendirme yapılır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Tıbbi Nedenlerle İptal</h2>
            <p>
              Doktor raporu ile belgelenen sağlık sorunları nedeniyle üyeliğinizi kullanamıyor iseniz,
              raporu ibraz etmeniz durumunda <strong className="text-white">kalan süre/seans için kısmi iade</strong> değerlendirmesi yapılır.
              Detaylı bilgi için bizimle iletişime geçiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">İletişim</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-sm space-y-2">
              <p><strong className="text-white">E-posta:</strong> info@esgym.com.tr</p>
              <p><strong className="text-white">Telefon / WhatsApp:</strong> 0506 466 89 81</p>
              <p><strong className="text-white">Adres:</strong> Kepez, Antalya</p>
              <p><strong className="text-white">Çalışma Saatleri:</strong> Pazartesi–Cumartesi 08:00–22:00</p>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
