import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "KVKK Aydınlatma Metni | E&S GYM",
};

export default function KVKKPage() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <h1 className="text-4xl font-black text-white mb-2">KVKK Aydınlatma Metni</h1>
        <p className="text-zinc-500 text-sm mb-10">Son güncelleme: Mayıs 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Veri Sorumlusu</h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca kişisel verileriniz;
              veri sorumlusu sıfatıyla <strong className="text-white">E&S GYM Fitness Center</strong> (bundan
              böyle &quot;Şirket&quot; veya &quot;Spor Merkezi&quot; olarak anılacaktır) tarafından aşağıda
              açıklanan kapsamda işlenecektir.
            </p>
            <p className="mt-2 text-zinc-400 text-sm">
              Adres: Kepez, Antalya · Telefon: 0506 466 89 81 · E-posta: info@esgym.com.tr
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. İşlenen Kişisel Veriler</h2>
            <p>Spor Merkezimiz tarafından aşağıdaki kişisel veriler işlenmektedir:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-zinc-400">
              <li>Kimlik bilgileri (ad, soyad)</li>
              <li>İletişim bilgileri (e-posta adresi, telefon numarası)</li>
              <li>Üyelik ve abonelik bilgileri (paket türü, başlangıç/bitiş tarihi)</li>
              <li>Ödeme bilgileri (işlem tutarı, ödeme tarihi — kart bilgileri Iyzico tarafından işlenir)</li>
              <li>İşlem geçmişi (satın alınan paketler, ödeme kayıtları)</li>
              <li>Teknik veriler (IP adresi, tarayıcı bilgisi, çerez verileri)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Kişisel Verilerin İşlenme Amaçları</h2>
            <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-zinc-400">
              <li>Üyelik sözleşmesinin kurulması ve ifası</li>
              <li>Ödeme işlemlerinin gerçekleştirilmesi ve takibi</li>
              <li>Abonelik yönetimi ve kalan gün/seans bilgisinin sunulması</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Müşteri hizmetleri ve destek taleplerinin karşılanması</li>
              <li>Hizmet kalitesinin artırılması</li>
              <li>İlgili mevzuat kapsamında bildirimlerin yapılması</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Hukuki Dayanaklar</h2>
            <p>Kişisel verileriniz KVKK&apos;nın 5. maddesi kapsamında aşağıdaki hukuki dayanaklar çerçevesinde işlenmektedir:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-zinc-400">
              <li>Sözleşmenin kurulması veya ifası için gerekli olması</li>
              <li>Hukuki yükümlülüğümüzün yerine getirilmesi</li>
              <li>Meşru menfaatlerimizin korunması</li>
              <li>Açık rızanız (pazarlama ve iletişim amaçlı işlemler için)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Kişisel Verilerin Aktarımı</h2>
            <p>Kişisel verileriniz; ödeme hizmetleri kapsamında <strong className="text-white">Iyzico Ödeme Hizmetleri A.Ş.</strong>&apos;ye,
            hizmet alınan teknoloji altyapı sağlayıcılarına (Firebase/Google Cloud) ve yasal yükümlülükler
            çerçevesinde yetkili kamu kurumlarına aktarılabilir.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Saklama Süresi</h2>
            <p>Kişisel verileriniz, ilgili mevzuatta öngörülen süreler ve işleme amacının gerektirdiği
            süre boyunca saklanır. Üyelik sona erdikten sonra ödeme ve muhasebe kayıtları yasal
            zorunluluklar nedeniyle 10 yıl süreyle saklanır.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Haklarınız</h2>
            <p>KVKK&apos;nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-zinc-400">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini isteme</li>
              <li>Silinmesini veya yok edilmesini isteme</li>
              <li>İşlemenin otomatik sistemler vasıtasıyla gerçekleştirilmesi durumunda aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Zararın giderilmesini talep etme</li>
            </ul>
            <p className="mt-3">Haklarınızı kullanmak için <strong className="text-white">info@esgym.com.tr</strong> adresine
            veya <strong className="text-white">0506 466 89 81</strong> numaralı telefona başvurabilirsiniz.</p>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
