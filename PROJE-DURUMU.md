# SorLise — Proje Durumu

> Bu dosyayı Claude'a göster: "Bu dosyayı oku ve kaldığımız yerden devam et" de.

---

## Proje Nedir?

LGS'ye hazırlanan 8. sınıf öğrencilerini seçkin liselerdeki **gönüllü** öğrencilerle buluşturan Türkiye'nin ilk akran-rehberlik platformu.

- "Mentör" değil **"gönüllü"** terminolojisi kullanılıyor (peer-connection modeli)
- Unibuddy.com'un Türkçe LGS versiyonu olarak konumlandırılıyor
- Kurucu: Ahmet Fatih Caliskan — ahmetfatihcaliskan02@gmail.com

---

## Teknik Stack

| Teknoloji | Versiyon / Not |
|-----------|----------------|
| Next.js | 16.2.9 — App Router, Turbopack |
| Tailwind CSS | v4 — `tailwind.config.ts` YOK, `@theme {}` CSS'de |
| TypeScript | ✅ |
| Framer Motion | Animasyonlar için |
| Lucide React | İkonlar (Twitter/Instagram/Linkedin YOK — X, Globe, Mail kullan) |
| Geist | `next/font/google` ile yükleniyor |

---

## Renk Paleti (`app/globals.css`)

```css
--color-brand: #D1AFFE
--color-brand-dark: #B388F5
--color-ink: #0A0A0A
--color-surface: #1A1A1A
--color-muted: #6B7280
--color-line: #E5E5E5
--color-bg: #F5F5F5
```

---

## Proje Dizini

```
C:\Users\x_user\OneDrive\Masaüstü\sorlise_website\sorlise\
```

### Dosya Yapısı

```
app/
  globals.css          — Tailwind v4 @theme tanımları + marquee animasyonu
  layout.tsx           — Geist font, lang="tr", SEO metadata
  page.tsx             — Tüm section'ları sırayla render eder
  kayit/page.tsx       — Aday öğrenci kayıt formu (formType: "aday")
  mentor-ol/page.tsx   — Gönüllü başvuru formu (formType: "mentor")
  api/submit-form/route.ts — Google Apps Script proxy

components/
  Navbar.tsx           — Sticky, scroll blur, hamburger menu
  Hero.tsx             — Floating kartlar, animasyonlar, CTA
  HowItWorks.tsx       — 4 adımlı grid
  SocialProof.tsx      — İstatistikler + okul logoları marquee
  MentorShowcase.tsx   — Filtreli gönüllü kartları (Tümü/Fen/Anadolu/Özel)
  Features.tsx         — 6 özellik grid
  ForMentors.tsx       — Gönüllüler için split layout + rozet mockup
  ForSchools.tsx       — Okullar için dark section
  Testimonials.tsx     — 3 yorum kartı
  CTASection.tsx       — Full-width CTA block
  Footer.tsx           — 4 kolon link + sosyal medya
  SchoolCrest.tsx      — SVG kalkan placeholder

lib/
  data.ts              — 6 gönüllü profili + 3 testimonial
  schools.ts           — 30 seçkin Türk lisesi verisi

server.js              — Plesk deploy için custom server
.env.local             — APPS_SCRIPT_URL (git'e push edilmedi, gizli)
.env.local.example     — Template
```

---

## Google Apps Script

Form submit backend olarak kullanılıyor.

```
URL: https://script.google.com/macros/s/AKfycbx_R92g1ojIA5xzlYlhzhPU25TuUL1dy2mGUi_IrUO9mtprbSLD4VerVYRe1mHpb75XQA/exec
```

`.env.local` dosyasında:
```
APPS_SCRIPT_URL=https://script.google.com/macros/s/...
```

---

## GitHub

- **Repo:** https://github.com/conqueror30/sorlise (private)
- **GitHub kullanıcı adı:** conqueror30
- **gh CLI:** `C:\Program Files\GitHub CLI\gh.exe` — kurulu ve giriş yapılmış
- **Branch:** main

### Güncellemeleri Push Etmek İçin:
```powershell
cd "C:\Users\x_user\OneDrive\Masaüstü\sorlise_website\sorlise"
git add .
git commit -m "açıklama"
git push
```

---

## Deploy Durumu — Plesk

`server.js` oluşturuldu ve GitHub'a push edildi. Plesk'te yapılması gerekenler:

### Plesk → Domains → Alan adı → Node.js Ayarları:

| Alan | Değer |
|------|-------|
| Node.js version | 18.x veya 20.x |
| Application root | `/sorlise` (GitHub'dan çekilen klasör) |
| Application startup file | `server.js` |
| Document root | `/sorlise/public` |

### Environment Variables:
```
NODE_ENV = production
APPS_SCRIPT_URL = https://script.google.com/macros/s/AKfycbx_R92g1ojIA5xzlYlhzhPU25TuUL1dy2mGUi_IrUO9mtprbSLD4VerVYRe1mHpb75XQA/exec
```

### Sırayla Çalıştır:
1. `npm install`
2. `npm run build`
3. Restart / Enable

> **Not:** "dist klasörü bulunamadı" hatası alıyorsan Document Root'u `/sorlise/public` olarak ayarla, `dist` yazma.

---

## Yapılanlar ✅

- [x] Next.js projesi kuruldu
- [x] 10 section tasarlandı ve kodlandı
- [x] Google Sheets form entegrasyonu
- [x] Tüm "mentör" → "gönüllü" değiştirildi
- [x] GitHub private repo oluşturuldu (conqueror30/sorlise)
- [x] Kod push edildi
- [x] README oluşturuldu
- [x] Plesk için server.js hazırlandı

## Yapılacaklar ⏳

- [ ] Plesk deploy tamamlanacak
- [ ] Canlı URL test edilecek
- [ ] Form submit Plesk'te test edilecek
- [ ] Gerçek logo eklenecek (şu an text-based wordmark var)
- [ ] Gerçek okul logoları eklenecek (şu an SVG placeholder)

---

*Son güncelleme: 2026-06-23*
