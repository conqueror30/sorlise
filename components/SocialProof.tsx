"use client";

import { motion } from "framer-motion";
import { schools } from "@/lib/schools";
import { SchoolCrest } from "@/components/SchoolCrest";

export function SocialProof() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-[44px] font-extrabold tracking-tight text-ink leading-tight">
            100+ nitelikli lise
          </h2>
          <h2 className="text-4xl md:text-[44px] font-extrabold tracking-tight leading-tight mt-1">
            <span className="text-brand-dark">300+</span>{" "}
            <span className="text-ink">liseli gönüllü</span>
          </h2>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted mb-8">
            Gönüllülerimizin okuduğu seçkin liseler
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
            {schools.map((s, i) => (
              <motion.div
                key={s.name}
                className="flex flex-col items-center gap-2 rounded-xl p-3 transition-colors hover:bg-[#FAF7FF] cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.025, duration: 0.3 }}
              >
                <SchoolCrest school={s} />
                <span className="text-center text-[10px] font-semibold leading-tight text-gray-700 max-w-[90px]">
                  {s.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex gap-10 w-max animate-marquee">
            {[...schools, ...schools].map((s, i) => (
              <div key={i} className="flex items-center gap-3 flex-shrink-0">
                <SchoolCrest school={s} size={28} />
                <span className="text-sm font-semibold text-muted whitespace-nowrap">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
