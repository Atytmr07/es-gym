import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mesafeli Satış Sözleşmesi | E&S GYM",
};

export default function MesafeliSatisPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <h1 className="text-4xl font-black text-white mb-2">Mesafeli Satış Sözleşmesi</h1>
        <p className="text-zinc-500 text-sm mb-10">Son güncelleme: Mayıs 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">MADDE 1 — TARAFLAR</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3 text-sm">
              <div>
                <p className="text-zinc-400 font-medium uppercase tracking-wider text-xs mb-1">SATICI</p>
                <p><strong className="text-white">Ünvan:</strong> E&S GYM Fitness Center</p>
                <p><strong className="text-white">Adres:</strong> Kepez, Antalya</p>
                <p><strong className="text-white">Telefon:</strong> 0506 466 89 81</p>
                <p><strong className="text-white">E-posta:</strong> info@esgym.com.tr</p>
              </div>
              <div className="border-t border-zinc-800 pt-3">
                <p className="text-zinc-400 font-medium uppercase tracking-wider text-xs mb-1">ALICI</p>
                <p>Sisteme kayıtlı üye (ad, soyad, e-posta ve iletişim bilgileri üyelik formunda belirtilmiştir).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">MADDE 2 — KONU</h2>
            <p>
              İşbu sözleşme; ALICI&apos;nın, SATICI&apos;ya ait <strong className="text-white">esgym.com.tr</strong> internet
              sitesi üzerinden elektronik ortamda sipariş verdiği aşağıda nitelikleri ve satış fiyatı belirtilen
              spor merkezi üyelik paketinin satışı ve ifasına ilişkin olarak 6502 sayılı Tüketicinin Korunması
              Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve
              yükümlülüklerini düzenlemektedir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">MADDE 3 — HİZMET BİLGİLERİ</h2>
            <p>Satışa konu hizmet; E&S GYM Fitness Center bünyesinde sunulan spor merkezi üyelik paketleridir.
            Paket türü, süresi ve ücreti satın alma anında seçilen pakete göre belirlenir ve ödeme onayı
            sonrasında kullanıcı hesabına tanımlanır.</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-zinc-400">
              <li>GYM Üyeliği (1 Ay — 12 Ay arası seçenekler)</li>
              <li>EMS Fitness (12 — 32 seans arası seçenekler)</li>
              <li>Personal Training (8 — 16 seans arası seçenekler)</li>
              <li>Kickboks (Aylık)</li>
              <li>Grup Pilates (8 — 100 seans arası seçenekler)</li>
              <li>Bölgesel İncelme (3 aylık program)</li>
              <li>Çocuk Hareket Gelişim (Aylık)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">MADDE 4 — ÖDEME VE TESLİMAT</h2>
            <p>
              Ödeme; Iyzico Ödeme Hizmetleri A.Ş. altyapısı üzerinden 3D Secure güvencesiyle kredi/banka kartı
              ile gerçekleştirilir. Ödemenin başarıyla tamamlanmasının ardından üyelik hakkı, ALICI&apos;nın
              hesabına anında tanımlanır. Dijital hizmet niteliğinde olduğundan fiziksel teslimat söz konusu değildir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">MADDE 5 — CAYMA HAKKI</h2>
            <p>
              6502 sayılı Kanun&apos;un 15. maddesi ve Mesafeli Sözleşmeler Yönetmeliği&apos;nin 16. maddesi uyarınca;
              ALICI, hizmetin ifasına başlanmadan önce 14 (on dört) gün içinde herhangi bir gerekçe
              göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mt-3">
              <p className="text-amber-400 text-sm font-semibold">Önemli:</p>
              <p className="text-zinc-400 text-sm mt-1">
                ALICI&apos;nın talebi veya açık onayı ile hizmetin ifasına başlanmış olması hâlinde cayma hakkı
                kullanılamaz. Üyeliğin aktive edilmesinden (sisteme giriş yapılmasından veya antrenman
                başlatılmasından) itibaren cayma hakkı sona erer.
              </p>
            </div>
            <p className="mt-3">
              Cayma hakkı kullanmak için <strong className="text-white">info@esgym.com.tr</strong> adresine
              veya <strong className="text-white">0506 466 89 81</strong> numaralı telefona bildirim yapılması yeterlidir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">MADDE 6 — GİZLİLİK VE KİŞİSEL VERİLER</h2>
            <p>
              ALICI&apos;ya ait kişisel veriler, KVKK kapsamında işlenir. Ayrıntılı bilgi için{" "}
              <a href="/kvkk" className="text-[#FFC107] hover:underline">KVKK Aydınlatma Metni</a>&apos;ni inceleyebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">MADDE 7 — UYUŞMAZLIKLARIN ÇÖZÜMÜ</h2>
            <p>
              İşbu sözleşmeden doğan uyuşmazlıklarda Türkiye Cumhuriyeti mahkemeleri ve icra daireleri yetkilidir.
              Tüketici şikâyetleri için Antalya İl Tüketici Hakem Heyeti ve Tüketici Mahkemeleri yetkilidir.
              Ayrıca <strong className="text-white">e-Devlet</strong> üzerinden Tüketici Hakem Heyeti&apos;ne
              başvurabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">MADDE 8 — YÜRÜRLÜK</h2>
            <p>
              ALICI, online olarak onayladığı anda işbu sözleşme yürürlüğe girer. Sözleşme, ALICI tarafından
              elektronik ortamda okunup kabul edildikten sonra ödemenin gerçekleştirilmesiyle birlikte
              her iki taraf açısından bağlayıcı hâle gelir.
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
