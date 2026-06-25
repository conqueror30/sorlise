import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gönüllü Ol | SorLise",
  description: "Seçkin bir lisede öğrenci misin? Deneyimlerini paylaşarak LGS adaylarına yol göster, sertifika ve rozet kazan.",
  openGraph: {
    title: "SorLise - Gönüllü Ol",
    description: "Seçkin bir lisede öğrenci misin? Deneyimlerini paylaşarak LGS adaylarına yol göster.",
    url: "https://sorlise.com/gonullu-ol",
  },
};

export default function GonulluOlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
