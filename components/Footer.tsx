import Link from "next/link";
import Image from "next/image";
import { X, Globe, Mail } from "lucide-react";

const links: Record<string, { label: string; href: string }[]> = {
  Platform: [
    { label: "Nasıl Çalışır", href: "#nasil-calisir" },
    { label: "Gönüllüler", href: "#mentorlar" },
    { label: "Özellikler", href: "#ozellikler" },
  ],
  Gönüllüler: [
    { label: "Gönüllü Ol", href: "/mentor-ol" },
    { label: "Rozet & Sertifika", href: "#hakkinda" },

  ],
  Okullar: [
    { label: "Okullar İçin", href: "#okullar" },
    { label: "İletişim", href: "mailto:okullar@sorlise.com" },
  ],
  Yasal: [
    { label: "Gizlilik Politikası", href: "#" },
    { label: "KVKK", href: "#" },
    { label: "Kullanım Koşulları", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center select-none">
              <Image
                src="/beyaz_logo.png"
                alt="SorLise"
                width={240}
                height={240}
                className="h-[120px] w-auto -my-[30px] -ml-4"
              />
            </Link>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-xs">
              LGS adaylarını seçkin liselerin öğrencileriyle buluşturan
              Türkiye&apos;nin ilk akran-rehberlik platformu.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-gray-500 hover:text-brand transition-colors"
                aria-label="X (Twitter)"
              >
                <X size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-brand transition-colors"
                aria-label="Web sitesi"
              >
                <Globe size={18} />
              </a>
              <a
                href="mailto:merhaba@sorlise.com"
                className="text-gray-500 hover:text-brand transition-colors"
                aria-label="E-posta"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                {cat}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} SorLise. Tüm hakları saklıdır.</p>
          <p>18 yaş altı öğrencilere yönelik, güvenli ve moderasyonlu platform.</p>
        </div>
      </div>
    </footer>
  );
}
