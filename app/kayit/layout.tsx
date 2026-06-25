import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ücretsiz Kayıt Ol | SorLise",
  description: "SorLise'ye ücretsiz kayıt ol, hedefindeki lisede okuyan gönüllü öğrencilerle bire bir eşleş ve doğrudan bilgi al.",
  openGraph: {
    title: "SorLise - Ücretsiz Kayıt Ol",
    description: "SorLise'ye ücretsiz kayıt ol, hedefindeki lisede okuyan gönüllü öğrencilerle bire bir eşleş.",
    url: "https://sorlise.com/kayit",
  },
};

export default function KayitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
