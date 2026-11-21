import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Workspace kökünü bu projeye sabitle. Aksi halde Turbopack, ana dizindeki
  // (C:\Users\PC) alakasız bir package-lock.json'ı görüp yanlış kökü seçiyor
  // ve sayfalar local'de düzgün derlenmiyordu.
  turbopack: {
    root: path.join(__dirname),
  },
  // /kvkk sayfası kaldırıldı; eski linkler gizlilik politikasına yönlensin.
  async redirects() {
    return [{ source: "/kvkk", destination: "/gizlilik", permanent: true }];
  },
  // Uygulama ve e-postalar bu sayfalara uzantısız adresle link veriyor
  // (sorlise.com/veli-onayi?token=…), dosyalar ise public/ altında .html.
  // Rewrite olduğu için adres çubuğu ve query string aynı kalır.
  async rewrites() {
    return [
      { source: "/veli-onayi", destination: "/veli-onayi.html" },
      { source: "/sifre-sifirla", destination: "/sifre-sifirla.html" },
    ];
  },
};

export default nextConfig;
