import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sorlise.com"),
  title: "SorLise | Hedef Liseni Bilen Biriyle Tanış",
  description:
    "Liseye hazırlanan öğrencileri seçkin liselerdeki gönüllü öğrencilerle buluşturan Türkiye'nin ilk akran-rehberlik platformu. Ücretsiz, güvenli, bire bir.",
  keywords: [
    "lgs", "lise", "lise tercihleri", "akran rehberlik", "mentor", "fen lisesi",
    "anadolu lisesi", "sorlise", "lgs tercih", "lise hazırlık"
  ],
  authors: [{ name: "SorLise" }],
  openGraph: {
    title: "SorLise | Hedef Liseni Bilen Biriyle Tanış",
    description: "Liseye hazırlanan öğrencileri seçkin liselerdeki gönüllü öğrencilerle buluşturan Türkiye'nin ilk akran-rehberlik platformu.",
    url: "https://sorlise.com",
    siteName: "SorLise",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SorLise | Hedef Liseni Bilen Biriyle Tanış",
    description: "Liseye hazırlanan öğrencileri seçkin liselerdeki gönüllü öğrencilerle buluşturan Türkiye'nin ilk akran-rehberlik platformu.",
  },
  verification: {
    google: "XedknfgHHDaLcDAdWcBc5tfgc_30NNV7luBxvkcBO3A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={geist.variable}>
      <body className="antialiased bg-white text-ink">
        {children}
      </body>
      <GoogleAnalytics gaId="G-LWBWGYMTQX" />
    </html>
  );
}
