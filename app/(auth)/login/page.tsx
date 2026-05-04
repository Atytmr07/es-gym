"use client";

import { useState, FormEvent, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import { Loader2, AlertCircle, Eye, EyeOff } from "lucide-react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const from = params.get("from") ?? null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      // Rol bilgisini cookie'den oku (login() session'ı kurdu)
      const role = document.cookie
        .split("; ")
        .find((r) => r.startsWith("user_role="))
        ?.split("=")[1];
      router.push(from ?? (role === "admin" ? "/admin" : "/dashboard"));
    } catch {
      setError("E-posta veya şifre hatalı. Lütfen tekrar deneyin.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Image src="/logo.jpg" alt="E&S GYM" width={120} height={120} className="h-20 w-auto rounded-2xl" />
        </div>
        <h1 className="text-3xl font-black text-white">Hoş Geldin</h1>
        <p className="text-zinc-400 mt-1">Hesabına giriş yap</p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        {error && (
          <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl px-4 py-3 mb-6 text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
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
                autoComplete="current-password"
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:border-[#FFC107] transition-colors placeholder:text-zinc-600"
                placeholder="••••••••"
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
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>

      <p className="text-center text-zinc-500 text-sm mt-6">
        Hesabın yok mu?{" "}
        <Link href="/register" className="text-[#FFC107] hover:underline font-semibold">
          Kayıt ol
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

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="w-full max-w-md" />}>
      <LoginForm />
    </Suspense>
  );
}
