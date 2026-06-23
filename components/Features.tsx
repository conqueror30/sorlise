"use client";

import { motion } from "framer-motion";
import { Shield, Search, MessageCircle, Brain, Award, Users } from "lucide-react";

const features = [
  {
    Icon: Search,
    title: "Akıllı Gönüllü Arama",
    desc: "Lise türü, şehir ve puan aralığına göre sana en uygun gönüllüyü saniyeler içinde bul.",
  },
  {
    Icon: MessageCircle,
    title: "Güvenli Bire-Bir Sohbet",
    desc: "Tüm konuşmalar moderasyonlu. 18 yaş altına özel güvenlik protokolleri ve ebeveyn görünürlüğü.",
  },
  {
    Icon: Shield,
    title: "KVKK Uyumlu & Güvenli",
    desc: "Türkiye veri koruma kanununa tam uyumlu. Kişisel veriler şifreli ve güvence altında.",
  },
  {
    Icon: Brain,
    title: "AI Asistan",
    desc: "Gönüllünüz müsait olmadığı anlarda temel sorularına 7/24 cevap veren yapay zeka rehberi.",
  },
  {
    Icon: Award,
    title: "Rozet & Sertifika",
    desc: "Gönüllülere dijital rozet, gönüllülük sertifikası ve üniversite başvurularında kullanılabilir referans.",
  },
  {
    Icon: Users,
    title: "Lise Toplulukları",
    desc: "Lise bazlı gruplar, soru-cevap akışı ve içerideki öğrencilerden deneyim paylaşımı.",
  },
];

export function Features() {
  return (
    <section id="ozellikler" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-ink mb-4">
            Her şey güvenli, ücretsiz, bire bir
          </h2>
          <p className="text-muted text-lg max-w-lg mx-auto">
            Öğrenci ve aile güvenliğini merkeze alan bir platform tasarladık.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="p-6 rounded-2xl border border-line bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{
                y: -4,
                borderColor: "#B388F5",
                boxShadow: "0 6px 24px rgba(209,175,254,0.2)",
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-brand/20 flex items-center justify-center mb-4">
                <f.Icon className="text-brand-dark" size={20} />
              </div>
              <h3 className="font-bold text-ink text-base mb-2">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
