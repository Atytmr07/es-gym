"use client";

import { useEffect, Suspense } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

function SuccessContent() {
  const { user, refreshProfile } = useAuth();

  useEffect(() => {
    // Kısa gecikme — Firestore yazma işleminin tamamlanmasını bekle
    const t = setTimeout(() => refreshProfile(), 1500);
    return () => clearTimeout(t);
  }, [refreshProfile]);

  const handleGoToDashboard = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-emerald-500/15 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        </div>

        <h1 className="text-3xl font-black text-white mb-2">Ödeme Başarılı!</h1>
        <p className="text-zinc-400 mb-8">
          Üyeliğin aktive edildi. Hesabın üzerinden abonelik detaylarını takip edebilirsin.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-6 flex items-center gap-4 text-left">
          <Image src="/logo.jpg" alt="E&S GYM" width={48} height={48} className="h-12 w-auto rounded-xl shrink-0" />
          <div>
            <p className="text-white font-bold text-sm">E&S GYM Fitness Center</p>
            <p className="text-zinc-400 text-xs">Kepez, Antalya · 0506 466 89 81</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleGoToDashboard}
            className="w-full bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            Hesabıma Git <ArrowRight className="w-4 h-4" />
          </button>

          {!user && (
            <p className="text-zinc-500 text-xs">
              Oturum açık değil?{" "}
              <a href="/login" className="text-[#FFC107] hover:underline">
                Giriş yap
              </a>
            </p>
          )}

          <a
            href="/"
            className="w-full border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white font-semibold py-3.5 rounded-xl transition-all text-sm"
          >
            Ana Sayfaya Dön
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={null}>
      <SuccessContent />
    </Suspense>
  );
}
