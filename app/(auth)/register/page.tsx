"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import { Loader2, AlertCircle, Eye, EyeOff, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (password.length < 6) {
      setError("Şifre en az 6 karakter olmalıdır.");
      return;
    }
    setLoading(true);
    try {
      await register(email, password, name, phone);
      router.push("/dashboard");
    } catch (err: unknown) {
      const msg = (err as { code?: string })?.code;
      if (msg === "auth/email-already-in-use") {
        setError("Bu e-posta adresi zaten kullanımda.");
      } else {
        setError("Kayıt oluşturulamadı. Lütfen tekrar deneyin.");
      }
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    "Aktif aboneliğini anlık takip et",
    "Online ödeme ile hızlı kayıt",
    "Kalan gün & seans bilgisi",
  ];

  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Image src="/logo.jpg" alt="E&S GYM" width={120} height={120} className="h-20 w-auto rounded-2xl" />
        </div>
        <h1 className="text-3xl font-black text-white">Üye Ol</h1>
        <p className="text-zinc-400 mt-1">Hesabını oluştur ve başla</p>
      </div>

      <div className="flex flex-col gap-3 mb-6">
        {benefits.map((b) => (
          <div key={b} className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#FFC107] shrink-0" />
            <span className="text-zinc-400 text-sm">{b}</span>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        {error && (
          <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl px-4 py-3 mb-6 text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-zinc-400 text-sm font-medium mb-2">Ad Soyad</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFC107] transition-colors placeholder:text-zinc-600"
                placeholder="Ahmet Yılmaz"
              />
            </div>
            <div>
              <label className="block text-zinc-400 text-sm font-medium mb-2">Telefon</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFC107] transition-colors placeholder:text-zinc-600"
                placeholder="0532 000 00 00"
              />
            </div>
          </div>

          <div>
            <label className="block text-zinc-400 text-sm font-medium mb-2">E-posta</label>
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

          <div>
            <label className="block text-zinc-400 text-sm font-medium mb-2">Şifre</label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:border-[#FFC107] transition-colors placeholder:text-zinc-600"
                placeholder="En az 6 karakter"
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
              >
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FFC107] hover:bg-[#FFB300] disabled:opacity-60 text-gray-900 font-black py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            {loading ? "Hesap oluşturuluyor..." : "Üye Ol"}
          </button>
        </form>
      </div>

      <p className="text-center text-zinc-500 text-sm mt-6">
        Zaten hesabın var mı?{" "}
        <Link href="/login" className="text-[#FFC107] hover:underline font-semibold">
          Giriş yap
        </Link>
      </p>
      <p className="text-center mt-4">
        <Link href="/" className="text-zinc-600 hover:text-zinc-400 text-sm transition-colors">
          ← Ana sayfaya dön
        </Link>
      </p>
    </div>
  );
}
