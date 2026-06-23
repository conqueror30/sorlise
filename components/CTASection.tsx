"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="bg-brand rounded-3xl px-8 py-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-brand-dark/30 blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/25 blur-2xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-ink mb-4 max-w-2xl mx-auto leading-tight">
              Geleceğin lisesini bugün keşfet.
            </h2>
            <p className="text-ink/70 text-lg mb-10 max-w-md mx-auto">
              300+ gönüllü seni bekliyor. Ücretsiz kaydol, bugün sohbet başlat.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/kayit">
                <motion.button
                  className="bg-ink text-white font-semibold px-8 py-4 rounded-xl hover:bg-surface transition-colors text-lg cursor-pointer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Ücretsiz Başla →
                </motion.button>
              </Link>
              <Link href="/mentor-ol">
                <motion.button
                  className="bg-white/40 backdrop-blur-sm text-ink font-semibold px-8 py-4 rounded-xl hover:bg-white/60 transition-colors text-lg border border-black/10 cursor-pointer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Gönüllü Ol
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
