import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import MusicPlayer from "@/components/MusicPlayer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const SITE_URL = "https://esgymfitness.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "E&S GYM Fitness Center | Kepez, Antalya – Spor Salonu & Pilates",
    template: "%s | E&S GYM Fitness Center",
  },

  description:
    "Kepez Kanal Mahallesi'nde premium spor salonu. Reformer pilates, kickboks, EMS fitness, personal training, bölgesel incelme. Hemen üye ol, online ödeme yap.",

  keywords: [
    // Konum odaklı
    "spor salonu kepez",
    "gym kepez",
    "fitness kepez",
    "kepez spor salonu",
    "kanal mahallesi spor salonu",
    "halide edip cad spor salonu",
    "kepez antalya spor",
    "antalya kepez gym",
    // Hizmet odaklı
    "pilates kepez",
    "reformer pilates kepez",
    "reformer pilates antalya",
    "kickboks kepez",
    "boks kepez antalya",
    "ems fitness kepez",
    "ems fitness antalya",
    "personal trainer kepez",
    "personal training antalya",
    "bölgesel incelme kepez",
    "çocuk spor programı kepez",
    "çocuk hareket gelişim antalya",
    // Genel
    "e&s gym",
    "esgym",
    "es gym fitness center",
    "spor salonu antalya",
    "premium gym antalya",
    "fitness merkezi kepez",
  ],

  authors: [{ name: "E&S GYM Fitness Center" }],
  creator: "E&S GYM Fitness Center",
  publisher: "E&S GYM Fitness Center",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "E&S GYM Fitness Center",
    title: "E&S GYM Fitness Center | Kepez'in Premium Spor Salonu",
    description:
      "Kepez Kanal Mahallesi'nde reformer pilates, kickboks, EMS fitness, personal training ve daha fazlası. Kepez'in en iyi gym'i.",
    images: [
      {
        url: "/gallery/workout.webp",
        width: 1200,
        height: 630,
        alt: "E&S GYM Fitness Center Kepez Antalya",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "E&S GYM Fitness Center | Kepez, Antalya",
    description:
      "Kepez Kanal Mahallesi'nde premium spor salonu. Pilates, kickboks, EMS, PT.",
    images: ["/gallery/workout.webp"],
  },

  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
    shortcut: "/logo.jpg",
  },

  other: {
    "geo.region": "TR-07",
    "geo.placename": "Kepez, Antalya",
    "geo.position": "36.920137;30.676416",
    "ICBM": "36.920137, 30.676416",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          {children}
          <MusicPlayer />
        </AuthProvider>
      </body>
    </html>
  );
}
