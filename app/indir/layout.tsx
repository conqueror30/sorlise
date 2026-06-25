import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uygulamayı İndir | SorLise",
  description: "SorLise uygulamasını hemen indir. Seçkin liselerdeki gönüllü öğrencilerle bire bir eşleş, merak ettiklerini sor. Ücretsiz, güvenli, KVKK uyumlu.",
  openGraph: {
    title: "SorLise Uygulamasını İndir",
    description: "SorLise uygulamasını hemen indir. Seçkin liselerdeki gönüllü öğrencilerle bire bir eşleş, merak ettiklerini sor.",
    url: "https://sorlise.com/indir",
  },
};

export default function IndirLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
