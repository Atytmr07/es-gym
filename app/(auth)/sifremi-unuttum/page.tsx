"use client";

import { useState, FormEvent, Suspense } from "react";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";
import { Loader2, AlertCircle, CheckCircle2, ArrowLeft } from "lucide-react";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setSent(true);
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code;
      if (code === "auth/user-not-found") {
        setError("Bu e-posta adresiyle kayıtlı hesap bulunamadı.");
      } else {
        setError("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Image src="/logo.jpg" alt="E&S GYM" width={120} height={120} className="h-20 w-auto rounded-2xl" />
        </div>
        <h1 className="text-3xl font-black text-white">Şifremi Unuttum</h1>
        <p className="text-zinc-400 mt-1">E-postana sıfırlama bağlantısı göndereceğiz</p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        {sent ? (
          <div className="text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-500/15 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">Mail Gönderildi!</p>
              <p className="text-zinc-400 text-sm mt-2">
                <strong className="text-white">{email}</strong> adresine şifre sıfırlama bağlantısı gönderildi. Spam klasörünü de kontrol et.
              </p>
            </div>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-[#FFC107] hover:underline text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> Giriş sayfasına dön
            </Link>
          </div>
        ) : (
          <>
            {error && (
              <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl px-4 py-3 mb-6 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-zinc-400 text-sm font-medium mb-2">E-posta Adresi</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFC107] transition-colors placeholder:text-zinc-600"
                  placeholder="ornek@mail.com"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FFC107] hover:bg-[#FFB300] disabled:opacity-60 text-gray-900 font-black py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? "Gönderiliyor..." : "Sıfırlama Maili Gönder"}
              </button>
            </form>
          </>
        )}
      </div>

      <p className="text-center mt-6">
        <Link href="/login" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors flex items-center justify-center gap-1.5">
          <ArrowLeft className="w-3.5 h-3.5" /> Giriş Yap
        </Link>
      </p>
    </div>
  );
}

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={null}>
      <ForgotPasswordForm />
    </Suspense>
  );
}
