import Navbar from "@/components/Navbar";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Üyelik Paketleri | E&S GYM Fitness Center",
  description: "E&S GYM üyelik paketleri — GYM, EMS, Personal Training, Grup Pilates, Bölgesel İncelme ve Çocuk Hareket Gelişim.",
};

export default function PackagesPage() {
  return (
    <main className="bg-zinc-950 min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Page header */}
      <div className="bg-zinc-950 pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#FFC107 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFC107]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-[#FFC107] text-xs font-semibold uppercase tracking-widest mb-3">E&S GYM</p>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Üyelik <span className="text-[#FFC107]">Paketleri</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl">
            Hedefine uygun paketi seç, bugün başla. Tüm ödemeler 3D Secure güvencesiyle.
          </p>
        </div>
      </div>

      <Packages />
      <Footer />
    </main>
  );
}
