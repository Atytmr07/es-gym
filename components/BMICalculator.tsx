"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, ChevronRight, RotateCcw, TrendingUp } from "lucide-react";

type BMICategory = {
  label: string;
  color: string;
  bg: string;
  border: string;
  desc: string;
  tip: string;
};

const categories: Record<string, BMICategory> = {
  underweight: {
    label: "Zayıf",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    desc: "Vücut kitle indeksiniz düşük. Kas kazanımı ve sağlıklı kilo artışı için destek alabiliriz.",
    tip: "Kişisel antrenörümüzle görüş →",
  },
  normal: {
    label: "Normal Kilolu",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    desc: "Tebrikler! Sağlıklı kilo aralığındasınız. Şimdi hedef kilonuzu ve formunuzu koruma zamanı.",
    tip: "Kondisyon programlarını incele →",
  },
  overweight: {
    label: "Fazla Kilolu",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    desc: "Hedefli antrenman ve beslenme planıyla ideal kilonuza ulaşmak çok yakın.",
    tip: "Bölgesel İncelme paketine bak →",
  },
  obese: {
    label: "Obez",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    desc: "Uzman eğitmenlerimiz, sağlıklı ve kalıcı kilo verme sürecinizde yanınızda olacak.",
    tip: "Ücretsiz ilk seans için ara →",
  },
};

function getBMICategory(bmi: number): string {
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "normal";
  if (bmi < 30) return "overweight";
  return "obese";
}

function getBMIPosition(bmi: number): number {
  const clamped = Math.max(15, Math.min(40, bmi));
  return ((clamped - 15) / (40 - 15)) * 100;
}

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [calculated, setCalculated] = useState(false);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (!w || !h || w <= 0 || h <= 0) return;
    const result = w / (h * h);
    setBmi(parseFloat(result.toFixed(1)));
    setCalculated(true);
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCalculated(false);
  };

  const category = bmi ? categories[getBMICategory(bmi)] : null;

  return (
    <section id="bmi" className="py-24 lg:py-32 bg-zinc-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFC107]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFC107]/15 border border-[#FFC107]/25 rounded-full px-4 py-1.5 mb-4">
            <Scale className="w-3.5 h-3.5 text-[#FFC107]" />
            <span className="text-[#FFC107] text-xs font-semibold uppercase tracking-widest">Ücretsiz Araç</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Vücut Kitle İndeksi{" "}
            <span className="text-[#FFC107]">Hesapla.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Boy ve kilonu gir, sağlık durumunu öğren. Uzmanlarımız sana özel bir program önerir.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-zinc-800/60 border border-zinc-700/50 rounded-3xl overflow-hidden backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Input panel */}
            <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-zinc-700/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#FFC107]/15 rounded-xl flex items-center justify-center">
                  <Scale className="w-5 h-5 text-[#FFC107]" />
                </div>
                <h3 className="text-white font-black text-xl">Bilgilerini Gir</h3>
              </div>

              <div className="flex flex-col gap-5">
                {/* Height */}
                <div>
                  <label className="block text-zinc-400 text-sm font-medium mb-2">
                    Boy <span className="text-zinc-600">(cm)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="Örn: 175"
                      min="100"
                      max="250"
                      className="w-full bg-zinc-900/80 border border-zinc-700 focus:border-[#FFC107] focus:ring-2 focus:ring-[#FFC107]/20 rounded-2xl px-5 py-4 text-white font-semibold text-lg outline-none transition-all placeholder:text-zinc-600"
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-600 text-sm font-medium">cm</span>
                  </div>
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-zinc-400 text-sm font-medium mb-2">
                    Kilo <span className="text-zinc-600">(kg)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="Örn: 70"
                      min="20"
                      max="300"
                      className="w-full bg-zinc-900/80 border border-zinc-700 focus:border-[#FFC107] focus:ring-2 focus:ring-[#FFC107]/20 rounded-2xl px-5 py-4 text-white font-semibold text-lg outline-none transition-all placeholder:text-zinc-600"
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-600 text-sm font-medium">kg</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={calculate}
                    disabled={!weight || !height}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#FFC107] hover:bg-[#FFB300] disabled:bg-zinc-700 disabled:text-zinc-500 text-gray-900 font-black text-base py-4 rounded-2xl transition-all duration-200 active:scale-95 disabled:cursor-not-allowed shadow-md shadow-[#FFC107]/20 disabled:shadow-none"
                  >
                    Hesapla
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  {calculated && (
                    <button
                      onClick={reset}
                      className="w-14 flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 text-zinc-300 rounded-2xl transition-all duration-200"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* BMI scale info */}
              <div className="mt-8 pt-6 border-t border-zinc-700/50">
                <p className="text-zinc-500 text-xs font-medium mb-3 uppercase tracking-widest">BMI Skalası</p>
                <div className="flex flex-col gap-2">
                  {[
                    { range: "< 18.5", label: "Zayıf", color: "bg-blue-400" },
                    { range: "18.5 – 24.9", label: "Normal", color: "bg-green-400" },
                    { range: "25 – 29.9", label: "Fazla Kilolu", color: "bg-amber-400" },
                    { range: "≥ 30", label: "Obez", color: "bg-red-400" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                      <span className="text-zinc-500 text-xs w-20">{item.range}</span>
                      <span className="text-zinc-300 text-xs font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Result panel */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!calculated ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <div className="w-32 h-32 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-dashed border-zinc-700">
                      <TrendingUp className="w-12 h-12 text-zinc-600" />
                    </div>
                    <p className="text-zinc-500 font-medium text-lg">Sonucun burada görünecek</p>
                    <p className="text-zinc-600 text-sm mt-1">Boy ve kilonu girerek başla</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* BMI Score */}
                    <div className="text-center mb-8">
                      <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest mb-3">Vücut Kitle İndeksin</p>
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                        className="text-7xl font-black text-white mb-2"
                      >
                        {bmi}
                      </motion.div>
                      {category && (
                        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-black border ${category.color} ${category.bg} ${category.border}`}>
                          {category.label}
                        </span>
                      )}
                    </div>

                    {/* BMI Bar */}
                    <div className="mb-8">
                      <div className="relative h-3 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 via-green-400 via-amber-400 to-red-400">
                        <motion.div
                          initial={{ left: "0%" }}
                          animate={{ left: `${getBMIPosition(bmi!)}%` }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white border-2 border-zinc-900 rounded-full shadow-lg z-10"
                        />
                      </div>
                      <div className="flex justify-between text-zinc-600 text-xs mt-1.5">
                        <span>15</span>
                        <span>25</span>
                        <span>40</span>
                      </div>
                    </div>

                    {/* Category card */}
                    {category && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`rounded-2xl p-5 border ${category.bg} ${category.border}`}
                      >
                        <p className={`text-sm leading-relaxed mb-3 ${category.color} font-medium`}>
                          {category.desc}
                        </p>
                        <a
                          href="/packages"
                          className="inline-flex items-center gap-1.5 text-[#FFC107] text-sm font-bold hover:underline"
                        >
                          {category.tip}
                          <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-zinc-600 text-xs mt-6">
          Bu hesaplama yalnızca bilgi amaçlıdır. Profesyonel tıbbi tavsiye için doktorunuza başvurun.
        </p>
      </div>
    </section>
  );
}
