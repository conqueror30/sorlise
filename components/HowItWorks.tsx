"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, MessageCircle, CheckCircle } from "lucide-react";

const steps = [
  {
    num: 1,
    Icon: UserPlus,
    title: "Profil oluştur",
    desc: "Hedef liseni ve ilgi alanlarını seç. 2 dakikada tamamlıyorsun.",
  },
  {
    num: 2,
    Icon: Search,
    title: "Gönüllü bul",
    desc: "Hedef liseye giden gönüllüleri lise türü, şehir ve derse göre filtrele.",
  },
  {
    num: 3,
    Icon: MessageCircle,
    title: "Sohbet et",
    desc: "Gerçek deneyim ve tarafsız tavsiye al. Güvenli, moderasyonlu ortamda.",
  },
  {
    num: 4,
    Icon: CheckCircle,
    title: "Karar ver",
    desc: "Hangi liseye hedef koyacağını güvenle seç. Ailenle birlikte değerlendir.",
  },
];

export function HowItWorks() {
  return (
    <section id="nasil-calisir" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-ink mb-4">
            Nasıl çalışır?
          </h2>
          <p className="text-muted text-lg max-w-md mx-auto">
            Dört adımda doğru lise kararını ver.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="bg-white rounded-2xl p-6 shadow-sm border border-line"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-ink font-extrabold text-sm">
                  {step.num}
                </div>
                <step.Icon className="text-muted" size={20} />
              </div>
              <h3 className="font-bold text-ink text-lg mb-2">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
