import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | SorLise",
  description:
    "SorLise platformu kullanım koşulları. Platforma katılım, kabul edilebilir kullanım ve kullanıcı yükümlülükleri hakkında bilgi edinin.",
};

const sections = [
  {
    title: "Sözleşmenin Tarafları ve Kapsamı",
    content: `Bu Kullanım Koşulları ("Koşullar"), SorLise platformu ile Platform'u kullanan gerçek kişi kullanıcılar ("Kullanıcı") arasında akdedilmektedir.

Platform'a kayıt olarak veya Platform'u kullanarak bu Koşulları okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan edersiniz. Bu Koşulları kabul etmiyorsanız Platform'u kullanmayınız.`,
  },
  {
    title: "Platformun Tanımı ve Amacı",
    content: `SorLise, LGS'ye hazırlanan 8. sınıf öğrencilerini ("Aday Öğrenciler") seçkin Türk liselerinde eğitim gören gönüllü öğrencilerle ("Gönüllüler") buluşturan, ücretsiz bir akran-rehberlik platformudur.

Platform:
• Sadece bilgi ve deneyim paylaşımı amacıyla kullanılabilir.
• Ticari amaçla, ücretli ders ya da dershane tanıtımı için kullanılamaz.
• 8-18 yaş arası öğrencilere yönelik güvenli bir ortam olarak tasarlanmıştır.`,
  },
  {
    title: "Kullanıcı Kategorileri ve Kayıt",
    content: `**Aday Öğrenci:** LGS'ye hazırlanan 8. sınıf öğrencisi. Kayıt sırasında ad, soyad, okul bilgisi ve iletişim bilgilerini doğru ve eksiksiz sağlamakla yükümlüdür.

**Gönüllü:** Seçkin bir lisede öğrenim gören ve başvuru sürecinden geçen öğrenci. Gönüllüler; özgeçmişlerinin doğruluğundan, paylaştıkları bilgilerin gerçekliğinden ve rehberlik sürecinin niteliğinden bireysel olarak sorumludur.

Her iki kategori de:
• Gerçek ve doğru bilgi vermeyi,
• Hesabını başkasıyla paylaşmamayı,
• Şifresini gizli tutmayı kabul eder.`,
  },
  {
    title: "18 Yaş Altı Kullanıcılara İlişkin Özel Hükümler",
    content: `Platform öncelikle 18 yaş altı öğrencilere yönelik olduğundan aşağıdaki kurallar uygulanır:

• 8 yaşından küçük çocuklar Platform'u kullanamaz.
• 8-18 yaş arası kullanıcılar, ebeveyn veya yasal vasisinin bilgisi ve onayı ile Platform'a katılabilir.
• Ebeveynler/vasiler, reşit olmayan kullanıcıların Platform kullanımından sorumludur.
• SorLise, şüpheli veya uygunsuz içeriği derhal kaldırma ve ilgili hesabı askıya alma hakkını saklı tutar.`,
  },
  {
    title: "Kabul Edilebilir Kullanım Kuralları",
    content: `Kullanıcılar aşağıdaki kurallara uymayı kabul eder:

**İzin Verilen Kullanımlar:**
• Lise hayatı, sınav hazırlığı ve okul seçimi hakkında bilgi paylaşımı
• Akademik deneyimlerin aktarılması
• Motivasyon ve kariyer odaklı sohbetler

**Kesinlikle Yasak Olan Davranışlar:**
• Taciz, zorbalık, küçük düşürücü veya ayrımcı içerik paylaşımı
• Kişisel iletişim bilgilerinin (telefon, sosyal medya hesabı) platformdaki mesajlaşma sistemi dışında paylaşılması
• Ticari reklam, tanıtım veya satış faaliyetleri
• Siyasi propaganda veya dini telkin
• Sahte kimlik kullanımı
• Platform güvenliğini tehdit eden faaliyetler
• Telif hakkı, marka hakkı veya fikri mülkiyet ihlalleri`,
  },
  {
    title: "İçerik ve Sorumluluk",
    content: `**Kullanıcı İçerikleri:** Kullanıcılar, Platform üzerinden paylaştıkları her türlü içerikten (mesaj, bilgi, fotoğraf vb.) tamamen kendileri sorumludur. SorLise, kullanıcı içeriklerinin doğruluğunu garanti etmez.

**SorLise'nin İçerik Sorumluluğu:** SorLise, Platform üzerindeki kullanıcı içeriklerini önceden denetleme yükümlülüğü taşımamakla birlikte, ihlal bildirilen içerikleri inceleme ve kaldırma hakkını saklı tutar.

**Üçüncü Taraf Bağlantıları:** Platform'da yer alabilecek dış bağlantıların içeriğinden SorLise sorumlu değildir.`,
  },
  {
    title: "Moderasyon ve Hesap Askıya Alma",
    content: `SorLise, aşağıdaki durumlarda önceden bildirim yapmaksızın hesabı askıya alma veya kalıcı olarak kapatma hakkını saklı tutar:

• Bu Koşulların ihlali
• Başka kullanıcıların şikayeti üzerine yapılan inceleme sonucu olumsuz bulgu
• Platforma zarar verici davranış
• Yetkili makamların talebi

Hesabı kapatılan kullanıcı, Platform'a yeni bir hesap açamaz.`,
  },
  {
    title: "Fikri Mülkiyet",
    content: `Platform'un tasarımı, logo, marka adı, yazılım kodu ve tüm özgün içeriği SorLise'ye aittir; Türk ve uluslararası fikri mülkiyet mevzuatı kapsamında korunmaktadır.

Kullanıcılar, Platform içeriğini SorLise'nin yazılı izni olmaksızın kopyalayamaz, dağıtamaz veya ticari amaçla kullanamazlar.

Kullanıcıların Platform üzerinden paylaştığı içerikler için SorLise'ye, hizmetin sunulması amacıyla sınırlı, ücretsiz ve devredilemez bir lisans verilmektedir.`,
  },
  {
    title: "Sorumluluk Sınırlaması",
    content: `SorLise, aşağıdaki durumlardan kaynaklanan zararlardan sorumlu değildir:

• Kullanıcılar arasındaki iletişimden doğan anlaşmazlıklar
• Kullanıcı tarafından sağlanan yanlış veya yanıltıcı bilgiler
• Üçüncü taraf hizmetlerin kesintiye uğraması
• Mücbir sebepler (doğal afet, siber saldırı vb.)
• Platform'un geçici veya kalıcı olarak erişilemez olması

Platform "olduğu gibi" sunulmaktadır. SorLise, belirli bir amaca uygunluk veya kesintisiz erişim garantisi vermez.`,
  },
  {
    title: "Uygulanacak Hukuk ve Uyuşmazlık Çözümü",
    content: `Bu Koşullar Türk Hukuku'na tabidir. Taraflar arasında doğabilecek her türlü uyuşmazlıkta **İstanbul Mahkemeleri ve İcra Daireleri** yetkilidir.

Uyuşmazlıkların yargıya taşınmadan önce SorLise ile doğrudan iletişime geçilerek çözüme kavuşturulması önerilir: info@sorlise.com`,
  },
  {
    title: "Koşulların Değiştirilmesi",
    content: `SorLise, bu Koşulları dilediği zaman güncelleme hakkını saklı tutar. Değişiklikler, Platform üzerinde yayımlandığı tarihten itibaren geçerlidir. Önemli değişiklikler e-posta veya platform bildirimi yoluyla duyurulur.

Değişiklik sonrasında Platform'u kullanmaya devam etmeniz, güncellenmiş Koşulları kabul ettiğiniz anlamına gelir.`,
  },
  {
    title: "İletişim",
    content: `Bu Koşullara ilişkin soru veya geri bildirimleriniz için:

**E-posta:** info@sorlise.com

Kullanıcı güvenliği ile ilgili acil bildirimler için aynı e-posta adresini "ACİL" ibaresiyle kullanabilirsiniz.`,
  },
];

export default function KullanimKosullariPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="text-sm text-muted hover:text-ink transition-colors mb-6 inline-flex items-center gap-1"
            >
              ← Ana Sayfa
            </Link>
            <h1 className="text-4xl font-bold text-ink mt-4 mb-3">
              Kullanım Koşulları
            </h1>
            <p className="text-muted text-sm">
              Son güncelleme: 25 Haziran 2026
            </p>
            <p className="text-muted mt-4 leading-relaxed">
              SorLise platformunu kullanmadan önce lütfen bu Kullanım
              Koşulları'nı dikkatlice okuyun. Platforma kayıt olarak veya
              kullanarak bu koşulları kabul etmiş sayılırsınız.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {sections.map((section, idx) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold text-ink mb-3">
                  Madde {idx + 1} — {section.title}
                </h2>
                <div className="text-muted leading-relaxed whitespace-pre-line text-sm">
                  {section.content.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return (
                        <strong key={i} className="text-ink font-medium">
                          {part.slice(2, -2)}
                        </strong>
                      );
                    }
                    return <span key={i}>{part}</span>;
                  })}
                </div>
                <div className="border-b border-line mt-8" />
              </section>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-12 p-5 rounded-2xl bg-brand/10 border border-brand/20">
            <p className="text-sm text-ink font-medium mb-1">
              Sorularınız mı var?
            </p>
            <p className="text-sm text-muted">
              Kullanım koşullarına ilişkin her türlü soru için{" "}
              <a
                href="mailto:info@sorlise.com"
                className="text-brand-dark underline underline-offset-2"
              >
                info@sorlise.com
              </a>{" "}
              adresine yazabilirsiniz.
            </p>
          </div>

          {/* Related links */}
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link
              href="/gizlilik"
              className="text-brand-dark hover:underline underline-offset-2"
            >
              Gizlilik Politikası →
            </Link>
            <Link
              href="/kvkk"
              className="text-brand-dark hover:underline underline-offset-2"
            >
              KVKK Aydınlatma Metni →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
