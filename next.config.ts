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
};

export default nextConfig;
