@AGENTS.md

# SorLise — Proje Rehberi

## Stack
- **Next.js** (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion
- Deploy: Plesk (server.js ile)

## Renk Paleti (globals.css)
- `brand` → pembe/mor (#B388F5 bölgesi) — buton, vurgu
- `brand-dark` → koyu mor
- `ink` → siyah metin
- `muted` → gri metin
- `line` → kenarlık rengi
- `bg` → arka plan

## Kritik Dosyalar

### `components/PhoneAnimation.tsx`
iPhone animasyonu — home → tapping → splash → chatlist → chat fazları.
- PNG (`/iphone_mockup.png`) 1032×1182 → 360×412 CSS
- Ekran alanı: `left:30, top:26, width:300, height:374` (piksel analizi ile bulundu)
- Köşe: `borderTopLeftRadius:34, borderTopRightRadius:34` (bottom: 0)
- `mixBlendMode` KULLANMA — PNG zaten transparan, beyaz bg div da olmasın
- Responsive: dış wrapper `scale-[0.82] min-[360px]:scale-[0.92] sm:scale-100 origin-top`
- Chat isimleri: EA (Ece A.) = Ankara Fen Lisesi mentor (cevap veren, sol); soru soran sağ taraf (mine:true, isimsiz)

### `components/Hero.tsx`
Ana sayfa hero. Buton sırası: **Hemen İndir** (pembe, brand) → **Gönüllü Ol** (beyaz, siyah border-2).
- Hemen İndir: içinde app icon kutusu + ripple ring + cursor animasyonu
- İki buton da `px-6 py-3.5` — aynı boyut

### `components/CTASection.tsx`
Paylaşılan CTA bölümü (hem `/` hem `/indir` kullanır).
- App icon: float animasyonu + scale tap + ripple ring + cursor animasyonu
- Cursor: `bottom:-4, right:-4` başlangıç, içeri girer, tıklar, çıkar

### `app/indir/page.tsx`
Öğrenciler (Uygulama İndirme) sayfası. Grid: `lg:grid-cols-2`, telefon `order-first lg:order-last` (mobilde üstte, masaüstünde sağda).
CTA: `<CTASection />` (özel blok değil).

### `app/gonullu-ol/page.tsx`
Gönüllüler sayfası.

### Yasal Sayfalar
- `/gizlilik`: Gizlilik Politikası
- `/kvkk`: KVKK Aydınlatma Metni
- `/kullanim-kosullari`: Kullanım Koşulları

### `lib/data.ts` · `lib/schools.ts`
Statik veriler.

## Bugün Yapılanlar (2026-06-25)

### Yasal Sayfalar ve İletişim
- Footer'daki yasal linkler için 3 yeni sayfa oluşturuldu (`/gizlilik`, `/kvkk`, `/kullanim-kosullari`).
- İlgili sayfalara KVKK ve mevzuata uygun detaylı Türkçe içerikler eklendi.
- Projedeki tüm `merhaba@sorlise.com` adresleri `info@sorlise.com` olarak güncellendi.
- Footer'daki linklerin `#` hedefleri, oluşturulan gerçek yasal sayfa URL'leri ile güncellendi.

### Rota ve Adlandırma Güncellemeleri
- `app/mentor-ol` klasörü `app/gonullu-ol` olarak değiştirildi.
- `app/ogrenciler` klasörü `app/indir` olarak değiştirildi.
- Navbar, Hero, CTASection, MentorShowcase, AppHighlights, Footer ve ForMentors bileşenlerindeki eski `/mentor-ol` ve `/ogrenciler` linkleri `/gonullu-ol` ve `/indir` olarak güncellendi.
- Mentorlar bölümünün `#mentorlar` olan ID'si `#gonulluler` olarak değiştirildi. Linkler de aynı şekilde `#gonulluler` oldu.

### Navbar Düzenlemeleri
- "Öğrenciler İçin" ve sonrasında "Uygulama" linki Navbar'dan kaldırıldı. Navigasyon artık: Nasıl Çalışır · Gönüllüler · Okullar İçin.
- `/indir` sayfası navbar'ı genişletildi ve diğer section'lar için yönlendirme eklendi (`/#nasil-calisir`, `/#gonulluler`, `/#okullar`).

### Diğer Düzeltmeler
- Hero komponentindeki "Ahmet Fatih" ismi "A**** F****" olarak anonimleştirildi.

## Geçmiş Yapılanlar (2026-06-24)
- PhoneAnimation: beyaz boşluk sorunu çözüldü, ekran pozisyonu kesinleştirildi, responsive yapıldı. Chat isimleri güncellendi (AK → EA).
- Hero: "Ücretsiz Başla" → "Hemen İndir" buton tasarımı güncellendi.
- CTASection: Ripple animasyonu eklendi, paylaşılan yapıya geçirildi.

## Framer Motion — Cursor+Ripple Animasyonu Şablonu
```tsx
// Dış kutu (tap animasyonu)
animate={{ scale: [1, 1, 1, 0.88, 1.06, 1] }}
transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.8,
  times: [0, 0.3, 0.44, 0.54, 0.66, 1] }}

// Ripple
animate={{ scale:[1,1,1,1.8,1.8], opacity:[0,0,0.8,0,0] }}
transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.8,
  times:[0,0.44,0.52,0.72,1] }}

// Cursor (başlangıç: bottom:-2, right:-2 konumunda)
animate={{ x:[22,22,2,2,2,22], y:[22,22,2,2,2,22],
  scale:[1,1,1,0.7,1,1], opacity:[0,0,1,1,1,0] }}
transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.8,
  times:[0,0.1,0.38,0.54,0.65,1] }}
```
