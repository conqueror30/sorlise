"use client";

import { motion } from "framer-motion";
import { Building2, BarChart3, Users, Mail } from "lucide-react";

const perks = [
  {
    Icon: Users,
    label: "Gönüllü Yönetimi",
    desc: "Okulunuzun gönüllülerini tek panelden kolayca yönetin.",
  },
  {
    Icon: BarChart3,
    label: "Aday Analitiği",
    desc: "Hangi soruların sorulduğunu, hangi liselerin ilgi gördüğünü gerçek zamanlı takip edin.",
  },
  {
    Icon: Building2,
    label: "Kurumsal Profil",
    desc: "Listenizi resmi SorLise sayfasında öne çıkarın, adaylarla doğrudan bağlantı kurun.",
  },
];

export function ForSchools() {
  return (
    <section id="okullar" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-4 block">
            Okullar için
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4">
            SorLise × Okulunuz
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Yakında: Liseler ve dershaneler için özel panel. Gönüllü yönetimi,
            aday analizi, kurumsal profil.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {perks.map((p, i) => (
            <motion.div
              key={p.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{
                backgroundColor: "rgba(209,175,254,0.06)",
                borderColor: "rgba(209,175,254,0.3)",
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-brand/20 flex items-center justify-center mx-auto mb-4">
                <p.Icon className="text-brand" size={20} />
              </div>
              <p className="font-bold text-white text-sm mb-2">{p.label}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href="mailto:okullar@sorlise.com">
            <motion.button
              className="inline-flex items-center gap-2 bg-brand text-ink font-semibold px-6 py-3.5 rounded-xl hover:bg-brand-dark transition-colors cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={17} />
              Bilgi Al
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
