"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const benefits = [
  "CV'nde gönüllülük deneyimi — üniversite başvurularında öne çık",
  "Dijital rozet ve resmi gönüllülük sertifikası",
  "Lider tablosunda yer al, toplulukta itibar kazan",
  "Sunum ve iletişim becerilerini geliştir",
  "Fark yaratmanın verdiği tatmini yaşa",
];

function BadgeMockup() {
  return (
    <div className="flex flex-col items-center gap-5">
      <motion.div
        className="bg-white rounded-2xl p-8 shadow-xl border border-line flex flex-col items-center text-center w-64"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/logo.png"
          alt="SorLise Badge"
          width={120}
          height={120}
          className="w-24 h-24 mb-5 object-contain"
        />
        <p className="font-bold text-ink text-sm">Aktif Gönüllü</p>
        <p className="text-xs text-muted mt-1">SorLise Gönüllüsü</p>
        <div className="mt-4 flex gap-1.5">
          {[0, 1, 2].map((n) => (
            <div key={n} className="w-2 h-2 rounded-full bg-brand-dark" />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-ink rounded-2xl px-6 py-4 text-white text-center w-56 shadow-lg"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        <p className="text-xs font-semibold text-brand mb-1">
          GÖNÜLLÜLÜK SERTİFİKASI
        </p>
        <p className="text-sm font-bold">SorLise Gönüllüsü</p>
        <p className="text-xs text-gray-400 mt-1">2025–2026 Akademik Yılı</p>
      </motion.div>
    </div>
  );
}

export function ForMentors() {
  return (
    <section id="hakkinda" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-dark mb-4 block">
            Gönüllüler için
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-ink mb-6">
            Deneyimini paylaş,
            <br />
            <span className="text-brand-dark">fark yarat.</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-8 max-w-md">
            LGS yolculuğunu tamamladın. Şimdi sıra, bu yolu henüz yürüyenlere
            ışık tutmakta. Gönüllü ol, dijital rozet ve sertifika kazan.
          </p>

          <ul className="space-y-3 mb-10">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-ink">
                <CheckCircle
                  size={17}
                  className="text-brand-dark flex-shrink-0 mt-0.5"
                />
                {b}
              </li>
            ))}
          </ul>

          <Link href="/mentor-ol">
            <motion.button
              className="bg-ink text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-surface transition-colors cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Gönüllü Ol →
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BadgeMockup />
        </motion.div>
      </div>
    </section>
  );
}
