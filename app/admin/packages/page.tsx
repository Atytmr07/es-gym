"use client";

import { useEffect, useState } from "react";
import { Save, Plus, Trash2, Loader2, CheckCircle2, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";

interface PackageTier {
  label: string;
  price: number;
  duration: number | null;
  sessions: number | null;
  description?: string;
}

interface GymPackage {
  id: string;
  name: string;
  description: string;
  type: string;
  tiers: PackageTier[];
  features: string[];
  active: boolean;
  order: number;
}

function TierEditor({
  tiers,
  onChange,
}: {
  tiers: PackageTier[];
  onChange: (t: PackageTier[]) => void;
}) {
  return (
    <div className="space-y-3">
      {tiers.map((tier, i) => (
        <div key={i} className="bg-zinc-800/60 border border-zinc-700 rounded-xl p-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-2">
            <div>
              <label className="block text-zinc-500 text-xs mb-1">Etiket</label>
              <input
                value={tier.label}
                onChange={(e) => {
                  const t = [...tiers];
                  t[i] = { ...t[i], label: e.target.value };
                  onChange(t);
                }}
                className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FFC107]"
              />
            </div>
            <div>
              <label className="block text-zinc-500 text-xs mb-1">Fiyat (₺)</label>
              <input
                type="number"
                value={tier.price}
                onChange={(e) => {
                  const t = [...tiers];
                  t[i] = { ...t[i], price: Number(e.target.value) };
                  onChange(t);
                }}
                className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FFC107]"
              />
            </div>
            <div>
              <label className="block text-zinc-500 text-xs mb-1">Süre (gün)</label>
              <input
                type="number"
                value={tier.duration ?? ""}
                placeholder="—"
                onChange={(e) => {
                  const t = [...tiers];
                  t[i] = { ...t[i], duration: e.target.value ? Number(e.target.value) : null };
                  onChange(t);
                }}
                className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FFC107] placeholder:text-zinc-600"
              />
            </div>
            <div>
              <label className="block text-zinc-500 text-xs mb-1">Seans</label>
              <input
                type="number"
                value={tier.sessions ?? ""}
                placeholder="—"
                onChange={(e) => {
                  const t = [...tiers];
                  t[i] = { ...t[i], sessions: e.target.value ? Number(e.target.value) : null };
                  onChange(t);
                }}
                className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FFC107] placeholder:text-zinc-600"
              />
            </div>
          </div>
          {tier.description !== undefined && (
            <input
              value={tier.description ?? ""}
              onChange={(e) => {
                const t = [...tiers];
                t[i] = { ...t[i], description: e.target.value };
                onChange(t);
              }}
              placeholder="Açıklama (isteğe bağlı)"
              className="w-full bg-zinc-700 border border-zinc-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FFC107] placeholder:text-zinc-600 mb-2"
            />
          )}
          <button
            onClick={() => onChange(tiers.filter((_, j) => j !== i))}
            className="text-red-400 hover:text-red-300 text-xs flex items-center gap-1 transition-colors mt-1"
          >
            <Trash2 className="w-3.5 h-3.5" /> Kaldır
          </button>
        </div>
      ))}
      <button
        onClick={() => onChange([...tiers, { label: "Yeni", price: 0, duration: null, sessions: null }])}
        className="w-full border border-dashed border-zinc-700 hover:border-[#FFC107]/50 text-zinc-500 hover:text-[#FFC107] rounded-xl py-2.5 text-sm flex items-center justify-center gap-2 transition-all"
      >
        <Plus className="w-4 h-4" /> Tier Ekle
      </button>
    </div>
  );
}

function PackageCard({
  pkg,
  onSave,
}: {
  pkg: GymPackage;
  onSave: (updated: GymPackage) => Promise<void>;
}) {
  const [draft, setDraft] = useState<GymPackage>(pkg);
  const [expanded, setExpanded] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const isDirty = JSON.stringify(draft) !== JSON.stringify(pkg);

  const handleSave = async () => {
    setSaving(true);
    setError("");
    try {
      await onSave(draft);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch {
      setError("Kayıt başarısız.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={`bg-zinc-900 border rounded-2xl overflow-hidden transition-all ${isDirty ? "border-[#FFC107]/30" : "border-zinc-800"}`}>
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-zinc-800/30 transition-colors"
      >
        <div className="flex items-center gap-3 text-left">
          <div className={`w-2 h-2 rounded-full ${draft.active ? "bg-emerald-400" : "bg-zinc-600"}`} />
          <div>
            <p className="text-white font-bold">{draft.name}</p>
            <p className="text-zinc-500 text-xs">
              {draft.tiers.length} fiyat seçeneği ·{" "}
              {draft.tiers.map((t) => `₺${t.price.toLocaleString("tr-TR")}`).slice(0, 3).join(", ")}
              {draft.tiers.length > 3 ? "..." : ""}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {isDirty && <span className="text-[#FFC107] text-xs font-semibold">● Değiştirildi</span>}
          {expanded ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
        </div>
      </button>

      {/* Body */}
      {expanded && (
        <div className="px-5 pb-5 border-t border-zinc-800 pt-4 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-zinc-400 text-xs font-medium mb-1.5">Paket Adı</label>
              <input
                value={draft.name}
                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FFC107]"
              />
            </div>
            <div>
              <label className="block text-zinc-400 text-xs font-medium mb-1.5">Alt Başlık</label>
              <input
                value={draft.description}
                onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FFC107]"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-zinc-400 text-xs font-medium">Özellikler</label>
            </div>
            {draft.features.map((f, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input
                  value={f}
                  onChange={(e) => {
                    const feats = [...draft.features];
                    feats[i] = e.target.value;
                    setDraft({ ...draft, features: feats });
                  }}
                  className="flex-1 bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[#FFC107]"
                />
                <button
                  onClick={() => setDraft({ ...draft, features: draft.features.filter((_, j) => j !== i) })}
                  className="text-zinc-500 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button
              onClick={() => setDraft({ ...draft, features: [...draft.features, ""] })}
              className="text-[#FFC107] text-xs flex items-center gap-1 hover:underline"
            >
              <Plus className="w-3.5 h-3.5" /> Özellik ekle
            </button>
          </div>

          <div>
            <label className="block text-zinc-400 text-xs font-medium mb-3">Fiyat Seçenekleri</label>
            <TierEditor tiers={draft.tiers} onChange={(t) => setDraft({ ...draft, tiers: t })} />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => setDraft({ ...draft, active: !draft.active })}
                className={`w-11 h-6 rounded-full relative transition-colors cursor-pointer ${draft.active ? "bg-[#FFC107]" : "bg-zinc-700"}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${draft.active ? "translate-x-6" : "translate-x-1"}`} />
              </div>
              <span className="text-zinc-300 text-sm">{draft.active ? "Aktif" : "Pasif"}</span>
            </label>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
              <AlertCircle className="w-4 h-4 shrink-0" /> {error}
            </div>
          )}

          <button
            onClick={handleSave}
            disabled={saving || !isDirty}
            className="flex items-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] disabled:opacity-50 text-gray-900 font-black text-sm px-5 py-2.5 rounded-xl transition-all"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : saved ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            {saving ? "Kaydediliyor..." : saved ? "Kaydedildi!" : "Değişiklikleri Kaydet"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function AdminPackagesPage() {
  const [packages, setPackages] = useState<GymPackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/packages")
      .then((r) => r.json())
      .then(setPackages)
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async (updated: GymPackage) => {
    const { id, ...data } = updated;
    const res = await fetch("/api/packages", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...data }),
    });
    if (!res.ok) throw new Error("Save failed");
    setPackages((prev) => prev.map((p) => (p.id === id ? updated : p)));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 text-[#FFC107] animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Paket Yönetimi</h1>
        <p className="text-zinc-400 mt-1">
          Üyelik paketlerini ve fiyatlarını düzenle. Değişiklikler anında siteye yansır.
        </p>
      </div>

      <div className="bg-[#FFC107]/10 border border-[#FFC107]/20 rounded-xl px-4 py-3 flex items-center gap-3">
        <CheckCircle2 className="w-4 h-4 text-[#FFC107] shrink-0" />
        <p className="text-[#FFC107] text-sm">
          Fiyat değişiklikleri kaydedildiğinde site üzerindeki paket kartlarına otomatik olarak yansır.
        </p>
      </div>

      <div className="space-y-3">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} onSave={handleSave} />
        ))}
        {packages.length === 0 && (
          <p className="text-zinc-500 text-sm">Paket bulunamadı. Firestore'u seed ettiğinizden emin olun.</p>
        )}
      </div>
    </div>
  );
}
