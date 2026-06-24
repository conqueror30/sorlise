"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-dark/30 blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/25 blur-2xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10">
            <motion.div
              className="flex justify-center mb-6"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* App icon box with tap cursor animation */}
              <motion.div
                className="relative w-24 h-24 bg-white rounded-[22px] shadow-xl flex items-center justify-center"
                animate={{ scale: [1, 1, 1, 0.9, 1.05, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2.2,
                  times: [0, 0.3, 0.46, 0.56, 0.68, 1], ease: "easeInOut" }}
              >
                <Image src="/logo.png" alt="SorLise" width={80} height={80} className="w-16 h-16 object-contain" />

                {/* Ripple ring */}
                <motion.span
                  style={{ position:"absolute", inset:0, borderRadius:"22px",
                    border:"3px solid rgba(179,136,245,0.65)", pointerEvents:"none" }}
                  animate={{ scale:[1,1,1,1.7,1.7], opacity:[0,0,0.9,0,0] }}
                  transition={{ duration:2.8, repeat:Infinity, repeatDelay:2.2,
                    times:[0,0.46,0.54,0.72,1], ease:"easeOut" }}
                />

                {/* Cursor */}
                <motion.div
                  style={{ position:"absolute", bottom:-4, right:-4, pointerEvents:"none", zIndex:20 }}
                  animate={{
                    x:       [30,  30,   4,   4,   4,  30],
                    y:       [30,  30,   4,   4,   4,  30],
                    scale:   [1,    1,   1, 0.65,  1,   1],
                    opacity: [0,    0,   1,   1,   1,   0],
                  }}
                  transition={{ duration:2.8, repeat:Infinity, repeatDelay:2.2,
                    times:[0, 0.1, 0.38, 0.56, 0.68, 1], ease:"easeInOut" }}
                >
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M4 2.5L22 13.5L14.5 16L11.5 23.5L4 2.5Z"
                      fill="white" stroke="#111827" strokeWidth="1.6" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-extrabold tracking-tight text-ink mb-3 max-w-2xl mx-auto leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Geleceğinin lisesini bugün keşfet.
            </motion.h2>

            <motion.p
              className="text-ink/70 text-xl font-semibold mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22, duration: 0.5 }}
            >
              Uygulamamızı hemen indir.
            </motion.p>

            {/* Store buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <Link href="/ogrenciler">
                <motion.div
                  className="flex items-center gap-3 bg-white text-ink px-6 py-3.5 rounded-2xl hover:shadow-xl transition-all cursor-pointer shadow-md border border-black/10"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Image
                    src="/appstore.png"
                    alt="App Store"
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain"
                  />
                  <div className="text-left">
                    <p className="text-[10px] text-muted leading-none">Hemen İndir</p>
                    <p className="text-base font-bold leading-tight text-ink">App Store</p>
                  </div>
                </motion.div>
              </Link>

              <Link href="/ogrenciler">
                <motion.div
                  className="flex items-center gap-3 bg-white text-ink px-6 py-3.5 rounded-2xl hover:shadow-xl transition-all cursor-pointer shadow-md border border-black/10"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Image
                    src="/playstore.png"
                    alt="Google Play"
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain"
                  />
                  <div className="text-left">
                    <p className="text-[10px] text-muted leading-none">Hemen İndir</p>
                    <p className="text-base font-bold leading-tight text-ink">Google Play</p>
                  </div>
                </motion.div>
              </Link>

            </motion.div>

            <motion.p
              className="text-xs text-ink/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Ücretsiz · Güvenli · KVKK Uyumlu
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
