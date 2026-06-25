"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    initials: "AF",
    name: "A**** F****",
    school: "İstanbul Atatürk Fen Lisesi",
    type: "Fen Lisesi",
    subjects: ["Matematik", "Fizik"],
    color: "#B388F5",
    style: { top: "4%", left: "6%" } as React.CSSProperties,
    floatDuration: 3,
    floatDelay: 0,
  },
  {
    initials: "SK",
    name: "S*** K****",
    school: "Galatasaray Lisesi",
    type: "Anadolu",
    subjects: ["Türkçe", "Tarih"],
    color: "#D1AFFE",
    style: { top: "36%", right: "2%" } as React.CSSProperties,
    floatDuration: 3.6,
    floatDelay: 0.4,
  },
  {
    initials: "KM",
    name: "K*** M*****",
    school: "Ankara Fen Lisesi",
    type: "Fen Lisesi",
    subjects: ["Kimya", "Biyoloji"],
    color: "#7C3AED",
    style: { bottom: "8%", left: "12%" } as React.CSSProperties,
    floatDuration: 4.2,
    floatDelay: 0.8,
  },
];

function FloatingCard({ card }: { card: (typeof cards)[0] }) {
  return (
    <motion.div
      className="absolute bg-white rounded-2xl shadow-xl border border-line p-4 w-52 z-10"
      style={card.style}
      initial={{ opacity: 0, scale: 0.88, y: 16 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: { delay: card.floatDelay + 0.3, duration: 0.6 },
        scale: { delay: card.floatDelay + 0.3, duration: 0.6 },
        y: {
          delay: card.floatDelay + 0.9,
          duration: card.floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ backgroundColor: card.color }}
        >
          {card.initials}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-ink truncate">{card.name}</p>
          <p className="text-xs text-muted truncate">{card.school}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-2.5">
        {card.subjects.map((s) => (
          <span
            key={s}
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ backgroundColor: card.color + "22", color: card.color }}
          >
            {s}
          </span>
        ))}
      </div>
      <span
        className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
        style={{ backgroundColor: card.color + "18", color: card.color }}
      >
        {card.type}
      </span>
    </motion.div>
  );
}

const avatarColors = ["#B388F5", "#D1AFFE", "#7C3AED", "#A78BFA"];
const avatarInitials = ["AY", "SK", "KM", "EÖ"];

export function Hero() {
  return (
    <section className="pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-brand/20 text-brand-dark text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-dark" />
            Türkiye'nin ilk akran-rehberlik platformu
          </motion.div>

          <h1 className="text-5xl lg:text-[3.6rem] font-extrabold tracking-tight leading-[1.08] text-ink mb-6">
            Hedef liseni bilen
            <br />
            biriyle{" "}
            <span className="text-brand-dark">tanış.</span>
          </h1>

          <p className="text-lg text-muted leading-relaxed mb-8 max-w-md">
            Seçkin liselerdeki öğrencilerle bire bir konuş, gerçek deneyimle
            hedefini belirle.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/indir">
              <motion.button
                className="flex items-center gap-3 bg-brand text-ink font-semibold px-6 py-3.5 rounded-xl hover:bg-brand-dark transition-colors cursor-pointer shadow-md"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Hemen İndir

                {/* App icon box — scales slightly on cursor tap */}
                <motion.div
                  className="relative w-9 h-9 bg-white rounded-xl flex items-center justify-center flex-shrink-0"
                  animate={{ scale: [1, 1, 1, 0.88, 1.06, 1] }}
                  transition={{
                    duration: 2.6, repeat: Infinity, repeatDelay: 1.8,
                    times: [0, 0.3, 0.44, 0.54, 0.66, 1], ease: "easeInOut"
                  }}
                >
                  <Image src="/logo.png" alt="SorLise" width={26} height={26} className="object-contain" />

                  {/* Ripple ring expanding from tap */}
                  <motion.span
                    style={{
                      position: "absolute", inset: 0, borderRadius: "inherit",
                      border: "2px solid rgba(179,136,245,0.7)", pointerEvents: "none"
                    }}
                    animate={{ scale: [1, 1, 1, 1.8, 1.8], opacity: [0, 0, 0.8, 0, 0] }}
                    transition={{
                      duration: 2.6, repeat: Infinity, repeatDelay: 1.8,
                      times: [0, 0.44, 0.52, 0.72, 1], ease: "easeOut"
                    }}
                  />

                  {/* Cursor: glides in from bottom-right, taps, fades out */}
                  <motion.div
                    style={{ position: "absolute", bottom: -2, right: -2, pointerEvents: "none", zIndex: 20 }}
                    animate={{
                      x: [22, 22, 2, 2, 2, 22],
                      y: [22, 22, 2, 2, 2, 22],
                      scale: [1, 1, 1, 0.7, 1, 1],
                      opacity: [0, 0, 1, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      repeatDelay: 1.8,
                      times: [0, 0.1, 0.38, 0.54, 0.65, 1],
                      ease: "easeInOut",
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M3.5 2L18 11L11.8 13L9.2 19.5L3.5 2Z"
                        fill="white" stroke="#111827" strokeWidth="1.4" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.button>
            </Link>
            <Link href="/gonullu-ol">
              <motion.button
                className="bg-white text-ink font-semibold px-6 py-3.5 rounded-xl border-2 border-ink hover:bg-brand/10 transition-colors shadow-sm cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Gönüllü Ol →
              </motion.button>
            </Link>
          </div>

          {/* Mini social proof */}
          <motion.div
            className="mt-9 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex -space-x-2">
              {avatarInitials.map((init, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: avatarColors[i] }}
                >
                  {init}
                </div>
              ))}
            </div>
            <span className="text-sm text-muted">
              <strong className="text-ink">300+</strong> gönüllü ·{" "}
              <strong className="text-ink">30+</strong> seçkin lise · ücretsiz
            </span>
          </motion.div>
        </motion.div>

        {/* Right — Floating Cards */}
        <div className="relative h-[480px] hidden lg:block">
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 rounded-full bg-brand/25 blur-3xl" />
          </div>
          <div className="absolute top-1/4 right-1/3 w-48 h-48 rounded-full bg-brand-dark/15 blur-2xl pointer-events-none" />

          {cards.map((card) => (
            <FloatingCard key={card.name} card={card} />
          ))}

          {/* Chat bubble */}
          <motion.div
            className="absolute bottom-14 right-3 bg-white border border-line rounded-2xl shadow-lg p-3.5 max-w-[190px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <p className="text-xs text-ink font-medium leading-relaxed">
              "Fen Lisesi gerçekten zor mu? İçeride yaşayan biri olarak anlat 😊"
            </p>
            <p className="text-[11px] text-muted mt-1.5">Yeni sohbet başladı</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
