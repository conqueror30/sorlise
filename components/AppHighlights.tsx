"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Zap, Target } from "lucide-react";

const points = [
  {
    Icon: MessageCircle,
    title: "Aklındaki her şeyi sor",
    desc: "Fen mi, Anadolu mu? Günlük hayat nasıl? İçerideki biri sana tarafsızca anlatır.",
  },
  {
    Icon: Zap,
    title: "Hızlı cevap al",
    desc: "Gönüllü müsait değilse AI asistanımız 7/24 yanında.",
  },
  {
    Icon: Target,
    title: "Doğru kararı ver",
    desc: "Google'da bulamayacağın bilgiyi, senden önce o yolu yürümüş birinden öğren.",
  },
];

function ChatMockup() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-line p-5 w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-line">
        <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white text-sm font-bold">
          SK
        </div>
        <div>
          <p className="text-sm font-bold text-ink">Salih K.</p>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <p className="text-xs text-muted">Çevrimiçi · Ankara Fen</p>
          </div>
        </div>
      </div>
      {/* Messages */}
      <div className="space-y-3">
        <div className="flex gap-2">
          <div className="w-7 h-7 rounded-full flex-shrink-0 bg-brand-dark flex items-center justify-center text-white text-[10px] font-bold mt-0.5">
            SK
          </div>
          <div className="bg-bg rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[190px]">
            <p className="text-xs text-ink leading-relaxed">
              Merhaba nasıl yardımcı olabilirim?
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-row-reverse">
          <div className="w-7 h-7 rounded-full flex-shrink-0 bg-brand/30 flex items-center justify-center text-brand-dark text-[10px] font-bold mt-0.5">
            BN
          </div>
          <div className="bg-brand/15 rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[190px]">
            <p className="text-xs text-brand-dark leading-relaxed">
              Fen Lisesi gerçekten bu kadar zor mu? Sosyal hayat nasıl?
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-7 h-7 rounded-full flex-shrink-0 bg-brand-dark flex items-center justify-center text-white text-[10px] font-bold mt-0.5">
            SK
          </div>
          <div className="bg-bg rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[190px]">
            <p className="text-xs text-ink leading-relaxed">
              İlk ay zor geliyor, sonra alışıyorsun 😊
            </p>
          </div>
        </div>
      </div>
      {/* Input */}
      <div className="mt-4 flex items-center gap-2">
        <div className="flex-1 bg-bg rounded-xl px-3.5 py-2.5 text-xs text-muted">
          Mesaj yaz...
        </div>
        <div className="w-8 h-8 rounded-xl bg-brand-dark flex items-center justify-center text-white text-sm flex-shrink-0">
          ↑
        </div>
      </div>
    </div>
  );
}

export function AppHighlights() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Chat mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-brand/20 blur-3xl pointer-events-none" />
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChatMockup />
              </motion.div>
            </div>
          </div>

          {/* Points */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-dark mb-4">
              Nasıl çalışır?
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-ink mb-8 leading-tight">
              İçerideki biriyle{" "}
              <span className="text-brand-dark">bire bir konuş.</span>
            </h2>

            <div className="space-y-6">
              {points.map((p, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand/20 flex items-center justify-center flex-shrink-0">
                    <p.Icon size={18} className="text-brand-dark" />
                  </div>
                  <div>
                    <p className="font-bold text-ink mb-1">{p.title}</p>
                    <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/indir">
                <motion.button
                  className="bg-brand text-ink font-semibold px-6 py-3.5 rounded-xl hover:bg-brand-dark transition-colors cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Ücretsiz Başla →
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
