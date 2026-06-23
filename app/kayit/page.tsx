"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";

interface FormData {
  name: string;
  email: string;
  grade: string;
  targetSchoolType: string;
  city: string;
}

const empty: FormData = {
  name: "",
  email: "",
  grade: "",
  targetSchoolType: "",
  city: "",
};

const inputCls =
  "w-full border border-line rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-brand-dark focus:ring-2 focus:ring-brand/30 transition";

export default function KayitPage() {
  const [form, setForm] = useState<FormData>(empty);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function update(k: keyof FormData) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => setForm((p) => ({ ...p, [k]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "aday", ...form }),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
      else throw new Error();
    } catch {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-6 flex items-center justify-center bg-bg">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-10 text-center shadow-sm border border-line"
              >
                <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-brand-dark" size={32} />
                </div>
                <h2 className="text-2xl font-extrabold text-ink mb-3">
                  Kaydın alındı!
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-8">
                  Seni en kısa sürede sistemimize ekleyeceğiz. Gönüllülerle
                  buluşmak için biraz daha bekle!
                </p>
                <Link
                  href="/"
                  className="text-sm font-semibold text-brand-dark hover:underline inline-flex items-center gap-2"
                >
                  <ArrowLeft size={14} /> Ana sayfaya dön
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-line"
              >
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-muted text-sm mb-6 hover:text-ink transition-colors"
                >
                  <ArrowLeft size={14} /> Geri
                </Link>
                <h1 className="text-3xl font-extrabold tracking-tight text-ink mb-2">
                  Gönüllü Bul
                </h1>
                <p className="text-muted text-sm mb-8">
                  Ücretsiz kayıt ol, bugün başla.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-ink mb-1.5 block">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Ahmet Yılmaz"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink mb-1.5 block">
                      E-posta
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      placeholder="ahmet@email.com"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink mb-1.5 block">
                      Sınıf
                    </label>
                    <select
                      required
                      value={form.grade}
                      onChange={update("grade")}
                      className={inputCls + " appearance-none bg-white"}
                    >
                      <option value="">Seç...</option>
                      <option value="7">7. Sınıf</option>
                      <option value="8">8. Sınıf</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink mb-1.5 block">
                      Hedef Lise Türü
                    </label>
                    <select
                      required
                      value={form.targetSchoolType}
                      onChange={update("targetSchoolType")}
                      className={inputCls + " appearance-none bg-white"}
                    >
                      <option value="">Seç...</option>
                      <option value="Fen Lisesi">Fen Lisesi</option>
                      <option value="Anadolu Lisesi">Anadolu Lisesi</option>
                      <option value="Sosyal Bilimler Lisesi">
                        Sosyal Bilimler Lisesi
                      </option>
                      <option value="Özel Lise">Özel Lise</option>
                      <option value="Henüz karar vermedim">
                        Henüz karar vermedim
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink mb-1.5 block">
                      Şehir
                    </label>
                    <input
                      type="text"
                      required
                      value={form.city}
                      onChange={update("city")}
                      placeholder="İstanbul"
                      className={inputCls}
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-xs">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand text-ink font-semibold py-3.5 rounded-xl hover:bg-brand-dark transition-colors disabled:opacity-60 mt-2 cursor-pointer"
                  >
                    {loading ? "Gönderiliyor..." : "Kayıt Ol →"}
                  </button>
                </form>

                <p className="text-xs text-muted text-center mt-6">
                  Kayıt olarak{" "}
                  <span className="underline cursor-pointer">
                    Gizlilik Politikamızı
                  </span>{" "}
                  ve{" "}
                  <span className="underline cursor-pointer">
                    KVKK Aydınlatma Metnini
                  </span>{" "}
                  kabul etmiş olursunuz.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
