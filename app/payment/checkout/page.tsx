"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2, AlertCircle, Lock, ArrowLeft, CheckSquare, Square } from "lucide-react";

function CheckoutContent() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const packageId = params.get("packageId");
  const tierIndex = params.get("tier");
  const tierName = params.get("name");
  const price = params.get("price");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formHtml, setFormHtml] = useState("");
  const [agreed, setAgreed] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push(`/login?from=/payment/checkout?packageId=${packageId}&tier=${tierIndex}&name=${tierName}&price=${price}`);
    }
  }, [user, authLoading, router, packageId, tierIndex, tierName, price]);

  const handleProceed = () => {
    if (!user || !packageId || tierIndex === null) return;
    if (!agreed) return;

    setLoading(true);
    fetch("/api/payment/initialize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ packageId, tierIndex: Number(tierIndex) }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setFormHtml(data.checkoutFormContent ?? "");
        }
      })
      .catch(() => setError("Ödeme başlatılamadı. Lütfen tekrar deneyin."))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (!formHtml || !formRef.current) return;
    formRef.current.innerHTML = formHtml;
    formRef.current.querySelectorAll("script").forEach((oldScript) => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes).forEach((attr) =>
        newScript.setAttribute(attr.name, attr.value)
      );
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
  }, [formHtml]);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#FFC107] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 py-12 px-4">
      <div className="max-w-xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Geri Dön
        </button>

        {/* Sipariş özeti */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#FFC107]" />
              <span className="text-[#FFC107] text-sm font-semibold">Güvenli 3D Secure Ödeme</span>
            </div>
            <img
              src="/iyzico-logo-pack/checkout_iyzico_ile_ode/TR/Tr_White_Horizontal/iyzico_ile_ode_horizontal_white.svg"
              alt="iyzico ile öde"
              className="h-7"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-bold">{tierName ?? "Paket"}</p>
              <p className="text-zinc-400 text-sm">E&S GYM Üyeliği</p>
            </div>
            <p className="text-2xl font-black text-white">
              ₺{price ? Number(price).toLocaleString("tr-TR") : "—"}
            </p>
          </div>
        </div>

        {/* Ön Bilgilendirme Formu onayı — ödeme başlamadan önce göster */}
        {!formHtml && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-5 space-y-5">
            <h2 className="text-white font-bold text-sm">Ön Bilgilendirme Formu</h2>

            <div className="bg-zinc-800/60 rounded-xl p-4 text-zinc-400 text-sm leading-relaxed space-y-2 max-h-48 overflow-y-auto">
              <p><strong className="text-zinc-200">Satıcı:</strong> E&S GYM Fitness Center — Kepez, Antalya — 0506 466 89 81</p>
              <p><strong className="text-zinc-200">Hizmet:</strong> {tierName ?? "Spor Merkezi Üyelik Paketi"}</p>
              <p><strong className="text-zinc-200">Fiyat:</strong> ₺{price ? Number(price).toLocaleString("tr-TR") : "—"} (KDV dahil)</p>
              <p><strong className="text-zinc-200">Ödeme:</strong> Iyzico altyapısı ile 3D Secure güvenceli kredi/banka kartı.</p>
              <p><strong className="text-zinc-200">Teslimat:</strong> Dijital hizmet. Ödeme onayının ardından üyelik hesabınıza anında tanımlanır.</p>
              <p><strong className="text-zinc-200">Cayma Hakkı:</strong> Hizmetin ifasına başlanmamış olması kaydıyla 14 gün içinde kullanılabilir. Üyeliğin aktive edilmesiyle (tesis girişi/antrenman) cayma hakkı sona erer.</p>
              <p><strong className="text-zinc-200">İade:</strong> Onaylanan iadeler ödeme yönteminize 14 gün içinde yansıtılır.</p>
              <p>Detaylı bilgi için <a href="/mesafeli-satis" target="_blank" className="text-[#FFC107] hover:underline">Mesafeli Satış Sözleşmesi</a> ve <a href="/iptal-iade" target="_blank" className="text-[#FFC107] hover:underline">İptal & İade Politikası</a> sayfalarını inceleyiniz.</p>
            </div>

            <button
              onClick={() => setAgreed(!agreed)}
              className="flex items-start gap-3 text-left w-full group"
            >
              <span className="mt-0.5 shrink-0">
                {agreed
                  ? <CheckSquare className="w-5 h-5 text-[#FFC107]" />
                  : <Square className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                }
              </span>
              <span className="text-zinc-400 text-sm leading-relaxed">
                <strong className="text-zinc-200">Ön Bilgilendirme Formu</strong>&apos;nu,{" "}
                <a href="/mesafeli-satis" target="_blank" className="text-[#FFC107] hover:underline">Mesafeli Satış Sözleşmesi</a>&apos;ni
                ve{" "}
                <a href="/kullanim-kosullari" target="_blank" className="text-[#FFC107] hover:underline">Kullanım Koşulları</a>&apos;nı
                okudum, anladım ve kabul ediyorum.
              </span>
            </button>

            {error && (
              <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl px-4 py-3 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}

            <button
              onClick={handleProceed}
              disabled={!agreed || loading}
              className="w-full bg-[#FFC107] hover:bg-[#FFB300] disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 font-black py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
              {loading ? "Ödeme formu hazırlanıyor..." : "Ödemeye Geç"}
            </button>

            {!agreed && (
              <p className="text-zinc-600 text-xs text-center">
                Devam etmek için sözleşmeleri kabul etmeniz gerekmektedir.
              </p>
            )}

            <div className="flex justify-center pt-1">
              <img
                src="/iyzico-logo-pack/footer_iyzico_ile_ode/White/logo_band_white.svg"
                alt="Güvenli ödeme — iyzico"
                className="h-5 opacity-30"
              />
            </div>
          </div>
        )}

        {/* Iyzico ödeme formu */}
        {formHtml && !loading && (
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div ref={formRef} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#FFC107] animate-spin" />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
