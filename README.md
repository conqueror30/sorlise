# SorLise

**LGS'ye hazırlanan 8. sınıf öğrencilerini seçkin liselerdeki gönüllü öğrencilerle buluşturan Türkiye'nin ilk akran-rehberlik platformu.**

Ücretsiz · Güvenli · Bire bir

---

## Teknoloji

- [Next.js](https://nextjs.org/) — App Router
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- Google Sheets (form backend)

## Kurulum

```bash
npm install
npm run dev
```

Uygulama `http://localhost:3000` adresinde çalışır.

## Ortam Değişkenleri

`.env.local.example` dosyasını `.env.local` olarak kopyala ve değerleri doldur:

```bash
cp .env.local.example .env.local
```

| Değişken | Açıklama |
|----------|----------|
| `APPS_SCRIPT_URL` | Google Apps Script web app URL'i |

## Sayfalar

| Sayfa | Açıklama |
|-------|----------|
| `/` | Ana sayfa |
| `/kayit` | Aday öğrenci kayıt formu |
| `/mentor-ol` | Gönüllü başvuru formu |

---

© 2025 SorLise
