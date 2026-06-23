import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SorLise — Hedef Liseni Bilen Biriyle Tanış",
  description:
    "LGS'ye hazırlanan 8. sınıf öğrencilerini seçkin liselerdeki gönüllü öğrencilerle buluşturan Türkiye'nin ilk akran-rehberlik platformu. Ücretsiz, güvenli, bire bir.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={geist.variable}>
      <body className="antialiased bg-white text-ink">{children}</body>
    </html>
  );
}
