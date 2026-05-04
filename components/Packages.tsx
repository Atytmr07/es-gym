"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Lock, CheckCircle2, Zap, Dumbbell, Heart,
  Baby, Sparkles, MessageCircle, Users, Phone, Flame, Loader2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { getPackages, seedPackagesIfEmpty, type GymPackage, type PackageTier } from "@/lib/firestore";

// ─── Sub-components ────────────────────────────────────────────────────────────

type Variant = "dark" | "light" | "gold";

function TierSelector({
  tiers,
  variant = "dark",
  selected,
  onSelect,
}: {
  tiers: PackageTier[];
  variant?: Variant;
  selected: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tiers.map((t, i) => (
          <button
            key={t.label}
            onClick={() => onSelect(i)}
            className={[
              "text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200",
              selected === i
                ? variant === "gold"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "bg-[#FFC107] text-gray-900 shadow-sm"
                : variant === "dark"
                ? "bg-white/10 text-zinc-400 hover:bg-white/15 border border-white/5"
                : variant === "gold"
                ? "bg-white/20 text-white hover:bg-white/30"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200",
            ].join(" ")}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className={`text-4xl font-black ${variant === "light" ? "text-gray-900" : "text-white"}`}>
          ₺{tiers[selected].price.toLocaleString("tr-TR")}
        </span>
        <span className={`text-sm ${variant === "dark" ? "text-zinc-500" : variant === "gold" ? "text-white/60" : "text-gray-400"}`}>
          {tiers[selected].sessions ? `${tiers[selected].sessions} seans` : tiers[selected].duration ? `${tiers[selected].duration} gün` : "toplam"}
        </span>
      </div>
    </div>
  );
}

function DarkFeatures({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((f) => (
        <li key={f} className="flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-[#FFC107] shrink-0" />
          <span className="text-zinc-400 text-sm">{f}</span>
        </li>
      ))}
    </ul>
  );
}

function LightFeatures({ items, gold = false }: { items: string[]; gold?: boolean }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((f) => (
        <li key={f} className="flex items-center gap-2.5">
          <CheckCircle2 className={`w-4 h-4 shrink-0 ${gold ? "text-white" : "text-[#FFC107]"}`} />
          <span className={`text-sm ${gold ? "text-white/80" : "text-gray-500"}`}>{f}</span>
        </li>
      ))}
    </ul>
  );
}

const iconMap: Record<string, React.ElementType> = {
  gym: Dumbbell,
  ems: Zap,
  pt: Users,
  kickboks: Flame,
  pilates: Sparkles,
  bolgesel: Heart,
  cocuk: Baby,
};

// ─── BuyButton ─────────────────────────────────────────────────────────────────

function BuyButton({
  pkg,
  tierIndex,
  variant = "gold",
  label,
  icon: Icon,
  orange = false,
}: {
  pkg: GymPackage;
  tierIndex: number;
  variant?: "gold" | "orange";
  label?: string;
  icon?: React.ElementType;
  orange?: boolean;
}) {
  const { user } = useAuth();
  const router = useRouter();
  const tier = pkg.tiers[tierIndex];

  const handleClick = () => {
    const params = new URLSearchParams({
      packageId: pkg.id,
      tier: tierIndex.toString(),
      name: `${pkg.name} - ${tier.label}`,
      price: tier.price.toString(),
    });
    if (!user) {
      router.push(`/login?from=/payment/checkout?${params}`);
    } else {
      router.push(`/payment/checkout?${params}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`mt-auto pt-7 w-full flex items-center justify-center gap-2 font-black text-sm py-3.5 rounded-xl transition-all duration-200 active:scale-95 ${
        orange
          ? "bg-orange-500 hover:bg-orange-400 text-white"
          : "bg-[#FFC107] hover:bg-[#FFB300] text-gray-900"
      }`}
    >
      {Icon ? <Icon className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
      {label ?? "Hemen Başla"}
    </button>
  );
}

// ─── Package Cards ──────────────────────────────────────────────────────────────

function DarkPackageCard({ pkg, delay = 0 }: { pkg: GymPackage; delay?: number }) {
  const [sel, setSel] = useState(0);
  const Icon = iconMap[pkg.type] ?? Dumbbell;
  const isOrange = pkg.accent === "orange";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className={`relative bg-zinc-900 border rounded-2xl p-7 flex flex-col group transition-all duration-300 overflow-hidden ${
        pkg.badge && !isOrange
          ? "border-[#FFC107]/40 hover:border-[#FFC107]/70 ring-1 ring-[#FFC107]/20"
          : isOrange
          ? "border-zinc-800 hover:border-orange-500/30"
          : "border-zinc-800 hover:border-[#FFC107]/25"
      }`}
    >
      {pkg.badge && !isOrange && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="bg-[#FFC107] text-gray-900 text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-b-xl shadow-lg shadow-[#FFC107]/30 whitespace-nowrap">
            {pkg.badge}
          </span>
        </div>
      )}
      <div className={`absolute -top-10 -right-10 w-44 h-44 rounded-full blur-2xl transition-all duration-500 pointer-events-none ${isOrange ? "bg-orange-500/5 group-hover:bg-orange-500/10" : "bg-[#FFC107]/5 group-hover:bg-[#FFC107]/10"}`} />

      <div className={`relative z-10 flex flex-col flex-1 ${pkg.badge && !isOrange ? "pt-5" : ""}`}>
        {pkg.badge && !isOrange ? null : pkg.badge ? (
          <div className="flex items-start justify-between mb-5">
            <div className={`w-12 h-12 ${isOrange ? "bg-orange-500/15" : "bg-[#FFC107]/15"} rounded-2xl flex items-center justify-center`}>
              <Icon className={`w-6 h-6 ${isOrange ? "text-orange-400" : "text-[#FFC107]"}`} />
            </div>
          </div>
        ) : null}

        {!pkg.badge || isOrange ? (
          <div className={`w-12 h-12 ${isOrange ? "bg-orange-500/15" : "bg-[#FFC107]/15"} rounded-2xl flex items-center justify-center mb-5`}>
            <Icon className={`w-6 h-6 ${isOrange ? "text-orange-400" : "text-[#FFC107]"}`} />
          </div>
        ) : (
          <div className="w-12 h-12 bg-[#FFC107]/15 rounded-2xl flex items-center justify-center mb-5">
            <Icon className="w-6 h-6 text-[#FFC107]" />
          </div>
        )}

        <h3 className="text-2xl font-black text-white mb-1">{pkg.name}</h3>
        <p className="text-zinc-500 text-sm mb-7">{pkg.description}</p>

        {/* Kickboks special layout */}
        {pkg.type === "kickboks" && (
          <div className="flex flex-col gap-3 mb-6">
            <div className="bg-zinc-800/80 border border-zinc-700/50 rounded-xl p-3.5 flex items-center justify-between">
              <div>
                <p className="text-white font-black text-sm">Çocuk Grubu</p>
                <p className="text-zinc-500 text-xs mt-0.5">Pzt · Çar · Cum</p>
              </div>
              <span className="text-orange-400 font-black text-sm bg-orange-500/10 border border-orange-500/20 rounded-lg px-2.5 py-1">19:30</span>
            </div>
            <div className="bg-zinc-800/80 border border-zinc-700/50 rounded-xl p-3.5 flex items-center justify-between">
              <div>
                <p className="text-white font-black text-sm">Yetişkin Grubu</p>
                <p className="text-zinc-500 text-xs mt-0.5">Pzt · Çar · Cum</p>
              </div>
              <span className="text-orange-400 font-black text-sm bg-orange-500/10 border border-orange-500/20 rounded-lg px-2.5 py-1">20:30</span>
            </div>
          </div>
        )}

        <TierSelector tiers={pkg.tiers} variant="dark" selected={sel} onSelect={setSel} />

        <div className="my-7 border-t border-zinc-800" />
        <DarkFeatures items={pkg.features} />

        <BuyButton pkg={pkg} tierIndex={sel} orange={isOrange} icon={isOrange ? Flame : undefined} />
      </div>
    </motion.div>
  );
}

function LightPackageCard({ pkg, delay = 0 }: { pkg: GymPackage; delay?: number }) {
  const [sel, setSel] = useState(0);
  const Icon = iconMap[pkg.type] ?? Sparkles;
  const isChild = pkg.type === "cocuk";
  const isBolgesel = pkg.type === "bolgesel";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className={`relative border rounded-2xl p-7 flex flex-col group hover:shadow-lg transition-all duration-300 overflow-hidden shadow-sm ${
        isChild
          ? "bg-amber-50 border-amber-100 hover:border-[#FFC107]/40"
          : "bg-white border-gray-100 hover:border-[#FFC107]/30"
      }`}
    >
      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-5">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isChild ? "bg-[#FFC107]/15" : "bg-[#FFF8E1]"}`}>
            <Icon className={`w-6 h-6 ${isChild ? "text-[#B8860B]" : "text-[#FFC107]"}`} />
          </div>
          {pkg.badge && (
            <span className={`text-[10px] font-black rounded-full px-3 py-1 ${isChild ? "text-[#B8860B] bg-[#FFC107]/15 border border-[#FFC107]/25" : "text-[#B8860B] bg-[#FFF8E1] border border-[#FFC107]/30"}`}>
              {pkg.badge}
            </span>
          )}
        </div>

        <h3 className="text-2xl font-black text-gray-900 mb-1">{pkg.name}</h3>
        <p className={`text-sm mb-7 ${isChild ? "text-amber-700/60" : "text-gray-400"}`}>{pkg.description}</p>

        {/* Bolgesel: show description under label */}
        {isBolgesel && pkg.tiers[sel].description && (
          <p className="text-gray-400 text-xs mb-3">{pkg.tiers[sel].description} · 3 aylık program</p>
        )}

        <TierSelector tiers={pkg.tiers} variant="light" selected={sel} onSelect={setSel} />

        {isChild && (
          <p className="text-amber-700/60 text-xs mt-1 mb-7">1 ay · 12 ders</p>
        )}

        <div className={`my-7 border-t ${isChild ? "border-amber-100" : "border-gray-100"}`} />
        <LightFeatures items={pkg.features} />

        <BuyButton
          pkg={pkg}
          tierIndex={sel}
          label={pkg.type === "bolgesel" ? "Randevu Al" : pkg.type === "cocuk" ? "Bilgi Al" : "Hemen Başla"}
          icon={pkg.type === "bolgesel" ? MessageCircle : pkg.type === "cocuk" ? Phone : undefined}
        />
      </div>
    </motion.div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────

export default function Packages() {
  const [packages, setPackages] = useState<GymPackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await seedPackagesIfEmpty();
      const pkgs = await getPackages();
      setPackages(pkgs);
      setLoading(false);
    })();
  }, []);

  const darkPkgs = packages.filter((p) => p.variant === "dark");
  const lightPkgs = packages.filter((p) => p.variant !== "dark");

  if (loading) {
    return (
      <section id="packages" className="bg-zinc-950 py-24 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#FFC107] animate-spin" />
      </section>
    );
  }

  return (
    <section id="packages" className="overflow-hidden">
      {/* ══ DARK — GYM · EMS · PT · Kickboks ══ */}
      {darkPkgs.length > 0 && (
        <div className="bg-zinc-950 py-24 lg:py-28 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#FFC107 1px, transparent 1px)", backgroundSize: "36px 36px" }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FFC107]/6 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <div className="inline-flex items-center gap-2 bg-[#FFC107]/15 border border-[#FFC107]/25 rounded-full px-4 py-1.5 mb-4">
                <Zap className="w-3.5 h-3.5 text-[#FFC107] fill-[#FFC107]" />
                <span className="text-[#FFC107] text-xs font-semibold uppercase tracking-widest">Güç & Performans</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                Sınırlarını <span className="text-[#FFC107]">Zorla.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {darkPkgs.map((pkg, i) => (
                <DarkPackageCard key={pkg.id} pkg={pkg} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ══ LIGHT — Pilates · Bölgesel · Çocuk ══ */}
      {lightPkgs.length > 0 && (
        <div className="bg-gray-50 py-24 lg:py-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFF8E1] rounded-full blur-[140px] opacity-70 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <div className="inline-flex items-center gap-2 bg-[#FFF8E1] border border-[#FFC107]/30 rounded-full px-4 py-1.5 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#FFC107]" />
                <span className="text-[#B8860B] text-xs font-semibold uppercase tracking-widest">Sağlık & Yaşam Kalitesi</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Kendine İyi <span className="text-[#FFC107]">Bak.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {lightPkgs.map((pkg, i) => (
                <LightPackageCard key={pkg.id} pkg={pkg} delay={i * 0.1} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 text-center"
            >
              <p className="text-gray-400 text-sm">
                Tüm paketler için 3D Secure güvenli ödeme ·{" "}
                <a href="https://wa.me/905064668981" target="_blank" rel="noopener noreferrer" className="text-[#FFC107] hover:underline font-semibold">
                  WhatsApp&apos;tan ulaşın
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}
