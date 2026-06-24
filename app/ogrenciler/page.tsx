"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Zap, Target, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhoneAnimation } from "@/components/PhoneAnimation";
import { CTASection } from "@/components/CTASection";

const features = [
  {
    Icon: MessageCircle,
    title: "Aklındaki soruyu sor",
    desc: "Fen mi, Anadolu mu? Günlük hayat nasıl? Neyi keşke önceden bilseydim? Seçkin liselerdeki gönüllüler sana içerideki gerçeği anlatır.",
  },
  {
    Icon: Zap,
    title: "Hızlı cevap, bekleme yok",
    desc: "Gönüllün müsait olmadığı anlarda AI asistanımız 7/24 yanında. Sınav öncesi gece de, sabah erken de.",
  },
  {
    Icon: Target,
    title: "Doğru kararı güvenle ver",
    desc: "Öğretmene soramadığın, Google'da bulamadığın bilgiyi — o yolu bizzat yürümüş birinden öğren.",
  },
];

const testimonials = [
  {
    text: "Fen Lisesi'nde gerçekte neler yaşandığını öğrenmek istiyordum. SorLise sayesinde direkt içerideki birinden öğrendim.",
    name: "E*** K.",
    role: "LGS Adayı",
    stars: 5,
  },
  {
    text: "Ailem de dinledi sohbeti. Velinin de güvende hissetmesi önemliydi, çok memnun kaldık.",
    name: "M*** Y.",
    role: "Veli",
    stars: 5,
  },
];

function StoreButton({ src, alt, store }: { src: string; alt: string; store: string }) {
  return (
    <Link href="/kayit">
      <motion.div
        className="flex items-center gap-3 bg-ink text-white px-6 py-3.5 rounded-2xl hover:bg-surface transition-all cursor-pointer shadow-md hover:shadow-lg"
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.97 }}
      >
        <Image src={src} alt={alt} width={36} height={36} className="w-9 h-9 object-contain" />
        <div className="text-left">
          <p className="text-[10px] opacity-60 leading-none">Hemen İndir</p>
          <p className="text-base font-bold leading-tight">{store}</p>
        </div>
      </motion.div>
    </Link>
  );
}

export default function OgrencilerPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section className="pt-28 pb-20 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-brand/20 text-brand-dark text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-dark animate-pulse" />
                Öğrenciler için
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-[3.6rem] font-extrabold tracking-tight leading-[1.08] text-ink mb-5"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                SorLise Uygulamasını
                <br />
                <span className="text-brand-dark">Hemen İndir</span>
              </motion.h1>

              <motion.p
                className="text-lg text-muted leading-relaxed mb-9 max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                Seçkin liselerdeki öğrencilerle bire bir bağlan. Gerçek
                deneyim, tarafsız tavsiye — ücretsiz ve güvenli.
              </motion.p>

              {/* Download buttons */}
              <motion.div
                className="flex flex-wrap gap-3 mb-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <StoreButton src="/appstore.png" alt="App Store" store="App Store" />
                <StoreButton src="/playstore.png" alt="Google Play" store="Google Play" />
              </motion.div>

              <motion.p
                className="text-xs text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
              >
                Ücretsiz · Güvenli · KVKK Uyumlu
              </motion.p>
            </motion.div>

            {/* Right — Phone Animation (top on mobile, right on desktop) */}
            <div className="flex justify-center order-first lg:order-last">
              <PhoneAnimation />
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-ink mb-3">
                Neden SorLise?
              </h2>
              <p className="text-muted text-lg max-w-md mx-auto">
                Öğretmenden değil, akrandan — tarafsız, ücretsiz, bire bir.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-7 border border-line shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 32px rgba(209,175,254,0.18)" }}
                >
                  <div className="w-11 h-11 rounded-xl bg-brand/20 flex items-center justify-center mb-5">
                    <f.Icon size={20} className="text-brand-dark" />
                  </div>
                  <h3 className="font-bold text-ink text-lg mb-2">{f.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-extrabold tracking-tight text-ink">
                Öğrenciler ne diyor?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-7 border border-line shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  whileHover={{ y: -4, boxShadow: "0 8px 28px rgba(0,0,0,0.07)" }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={14} className="fill-brand-dark text-brand-dark" />
                    ))}
                  </div>
                  <p className="text-ink text-sm leading-relaxed mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-brand/20 flex items-center justify-center text-xs font-bold text-brand-dark">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{t.name}</p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}
