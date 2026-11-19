import type { ReactNode } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const SUPPORT_EMAIL = "destek@sorlise.com";

export type LegalSection = { title: string; body: ReactNode };

type Props = {
  title: string;
  updated: string;
  sections: LegalSection[];
  related: { href: string; label: string };
};

/** Gizlilik ve Kullanım Koşulları sayfalarının ortak düzeni. */
export function LegalPage({ title, updated, sections, related }: Props) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <Link
              href="/"
              className="text-sm text-muted hover:text-ink transition-colors mb-6 inline-flex items-center gap-1"
            >
              ← Ana Sayfa
            </Link>
            <h1 className="text-4xl font-bold text-ink mt-4 mb-3">{title}</h1>
            <p className="text-muted text-sm">Son güncelleme: {updated}</p>
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold text-ink mb-3">
                  {section.title}
                </h2>
                <div className="text-muted leading-relaxed text-sm space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:text-ink [&_strong]:font-medium [&_a]:text-brand-dark [&_a]:underline [&_a]:underline-offset-2">
                  {section.body}
                </div>
                <div className="border-b border-line mt-8" />
              </section>
            ))}
          </div>

          <div className="mt-12 p-5 rounded-2xl bg-brand/10 border border-brand/20">
            <p className="text-sm text-ink font-medium mb-1">
              Sorularınız mı var?
            </p>
            <p className="text-sm text-muted">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-brand-dark underline underline-offset-2"
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              adresinden bize ulaşabilirsiniz.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link
              href={related.href}
              className="text-brand-dark hover:underline underline-offset-2"
            >
              {related.label} →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
