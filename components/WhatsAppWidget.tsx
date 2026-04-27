"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send } from "lucide-react";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const phone = "905064668981";
  const defaultMsg = encodeURIComponent("Merhaba, E&S GYM hakkında bilgi almak istiyorum.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 w-72 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-black text-sm">E&S GYM</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <p className="text-white/80 text-xs">Genellikle hemen yanıtlar</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="px-4 py-5 bg-[#ECE5DD]">
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
                <p className="text-gray-700 text-sm leading-relaxed">
                  👋 Merhaba! E&S GYM&apos;e hoş geldiniz.
                  <br /><br />
                  Üyelik, paketler veya deneme dersi hakkında sormak istediğiniz bir şey var mı?
                </p>
                <p className="text-gray-300 text-[10px] mt-1.5 text-right">10:00 – 22:00</p>
              </div>
            </div>

            {/* CTA */}
            <div className="px-4 py-4 bg-white">
              <a
                href={`https://wa.me/${phone}?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#22C35E] text-white font-bold text-sm py-3 rounded-xl transition-all duration-200 active:scale-95"
              >
                <Send className="w-4 h-4" />
                WhatsApp&apos;tan Yaz
              </a>
              <p className="text-center text-gray-300 text-[10px] mt-2">
                Kişisel verileriniz paylaşılmaz.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#22C35E] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 transition-colors duration-200"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        )}

        {/* Notification dot */}
        {!open && (
          <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white text-[7px] font-black">1</span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
