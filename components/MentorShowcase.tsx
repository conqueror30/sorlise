"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { mentors, anonymizeName, type MentorType } from "@/lib/data";

type FilterValue = "Tümü" | MentorType;

const filters: { label: string; value: FilterValue }[] = [
  { label: "Tümü", value: "Tümü" },
  { label: "Fen Lisesi", value: "Fen" },
  { label: "Anadolu Lisesi", value: "Anadolu" },
  { label: "Özel Lise", value: "Özel" },
];

export function MentorShowcase() {
  const [active, setActive] = useState<FilterValue>("Tümü");

  const filtered =
    active === "Tümü" ? mentors : mentors.filter((m) => m.type === active);

  return (
    <section id="mentorlar" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-ink mb-4">
            Gönüllülerimizle tanış
          </h2>
          <p className="text-muted text-lg">
            Senden önce o yolu yürümüş, deneyimini paylaşmak isteyen gönüllü öğrenciler.
          </p>
        </motion.div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                active === f.value
                  ? "bg-brand text-ink shadow-sm"
                  : "bg-white border border-line text-muted hover:border-brand-dark"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((mentor, i) => (
              <motion.div
                key={mentor.id}
                layout
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.22, delay: i * 0.04 }}
                whileHover={{ y: -5, boxShadow: "0 10px 32px rgba(0,0,0,0.09)" }}
                className="bg-white rounded-2xl p-6 border border-line shadow-sm"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 bg-brand/15 overflow-hidden flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="gönüllü"
                      width={48}
                      height={48}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-ink">{anonymizeName(mentor.name)}</p>
                    <p className="text-sm text-muted truncate">{mentor.school}</p>
                    <p className="text-xs text-muted">{mentor.grade}</p>
                  </div>
                  <span className="text-xs font-semibold bg-brand/20 text-brand-dark px-2.5 py-1 rounded-full flex-shrink-0">
                    {mentor.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {mentor.subjects.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-bg text-ink px-2 py-0.5 rounded-full border border-line font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
                  {mentor.bio}
                </p>

                <button className="w-full flex items-center justify-center gap-2 bg-brand/20 text-brand-dark font-semibold text-sm py-2.5 rounded-xl hover:bg-brand hover:text-ink transition-colors cursor-pointer">
                  <MessageCircle size={15} />
                  Sohbet Et
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
