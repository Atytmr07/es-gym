import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E&S GYM Fitness Center | Kepez, Antalya",
  description:
    "Kepez'in kalbinde premium spor, pilates, boks ve sosyal yaşam alanı. Online üyelik satışı, 3D Secure güvenli ödeme.",
  keywords: "gym, spor salonu, kepez, antalya, pilates, boks, personal trainer, üyelik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
