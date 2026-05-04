"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { XCircle, ArrowLeft, MessageCircle } from "lucide-react";

function FailContent() {
  const params = useSearchParams();
  const error = params.get("error");

  const messages: Record<string, string> = {
    no_token: "Ödeme oturumu bulunamadı.",
    tx_not_found: "İşlem kaydı bulunamadı.",
  };

  const friendlyMsg = error ? (messages[error] ?? "Ödeme işlemi tamamlanamadı.") : "Ödeme işlemi iptal edildi veya başarısız oldu.";

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-red-500/15 rounded-full flex items-center justify-center mx-auto mb-6">
          <XCircle className="w-10 h-10 text-red-400" />
        </div>

        <h1 className="text-3xl font-black text-white mb-2">Ödeme Başarısız</h1>
        <p className="text-zinc-400 mb-8">{friendlyMsg}</p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-6 text-left">
          <p className="text-zinc-300 text-sm font-semibold mb-1">Ne yapabilirsiniz?</p>
          <ul className="text-zinc-500 text-sm space-y-1.5 list-disc list-inside">
            <li>Kart bilgilerinizi kontrol edip tekrar deneyin</li>
            <li>Farklı bir kart ile ödeme yapın</li>
            <li>WhatsApp üzerinden bizimle iletişime geçin</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/packages"
            className="w-full bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-black py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Tekrar Dene
          </Link>
          <a
            href="https://wa.me/905064668981"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-zinc-800 hover:border-[#FFC107]/40 text-zinc-400 hover:text-white font-semibold py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Destek
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PaymentFailPage() {
  return (
    <Suspense fallback={null}>
      <FailContent />
    </Suspense>
  );
}
