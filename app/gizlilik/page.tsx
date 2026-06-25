import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | SorLise",
  description:
    "SorLise uygulaması gizlilik politikası. Kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu öğrenin.",
};

const sections = [
  {
    title: "1. Veri Sorumlusu",
    content: `Bu Gizlilik Politikası, SorLise platformunu ("biz", "bizim") tarafından hazırlanmıştır. SorLise, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla hareket etmektedir.

İletişim: info@sorlise.com`,
  },
  {
    title: "2. Toplanan Kişisel Veriler",
    content: `Platformumuzu kullanırken aşağıdaki kişisel verilerinizi toplayabiliriz:

• **Kimlik Bilgileri:** Ad, soyad, yaş/sınıf bilgisi
• **İletişim Bilgileri:** E-posta adresi, telefon numarası (isteğe bağlı)
• **Eğitim Bilgileri:** Okul adı, hedef lise tercihleri
• **Kullanım Verileri:** Uygulama içi etkileşimler, tercihler
• **Teknik Veriler:** Cihaz bilgisi, IP adresi, tarayıcı türü

18 yaş altı kullanıcıların kişisel verilerini işlerken özel bir dikkat gösteriyor; ebeveyn/vasi onayı gerektiren durumlarda onay mekanizması uyguluyoruz.`,
  },
  {
    title: "3. Kişisel Verilerin İşlenme Amaçları",
    content: `Toplanan veriler aşağıdaki amaçlarla işlenmektedir:

• Platformun temel işlevlerinin sağlanması (öğrenci-gönüllü eşleştirmesi)
• Kullanıcı hesabının oluşturulması ve yönetilmesi
• Güvenli ve moderasyonlu iletişim ortamının sağlanması
• Platform güvenliğinin ve uyumluluğunun korunması
• Yasal yükümlülüklerin yerine getirilmesi
• Hizmet kalitesinin iyileştirilmesi ve teknik destek sağlanması`,
  },
  {
    title: "4. Kişisel Verilerin İşlenme Hukuki Dayanakları",
    content: `Kişisel verilerinizi KVKK madde 5 kapsamında aşağıdaki hukuki dayanaklar ile işliyoruz:

• **Açık Rıza:** Belirli işlemler için açık rızanızı alıyoruz.
• **Sözleşmenin İfası:** Platforma kayıt ve kullanım sözleşmesi kapsamında zorunlu işlemler.
• **Meşru Menfaat:** Platform güvenliği ve doğrulama süreçleri.
• **Hukuki Yükümlülük:** Yürürlükteki mevzuatın gerektirdiği durumlarda.`,
  },
  {
    title: "5. Verilerin Paylaşılması",
    content: `Kişisel verilerinizi üçüncü taraflarla yalnızca aşağıdaki durumlarda paylaşırız:

• **Eşleştirme Amacıyla:** Yalnızca eşleştirildiğiniz gönüllü/öğrenci ile sınırlı profil bilgileri paylaşılır.
• **Hizmet Sağlayıcılar:** Altyapı, hosting ve analitik hizmetleri için güvenilir iş ortakları (gizlilik sözleşmesi kapsamında).
• **Yasal Zorunluluk:** Mahkeme kararı veya yetkili makamlarca talep edilmesi halinde.

Kişisel verilerinizi asla ticari amaçla üçüncü kişilere satmıyoruz.`,
  },
  {
    title: "6. Veri Saklama Süreleri",
    content: `Kişisel verilerinizi, işlenme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen süreler dahilinde saklarız. Hesabınızı silmeniz halinde verileriniz yasal saklama zorunlulukları dışında sistemimizden silinir.`,
  },
  {
    title: "7. Veri Güvenliği",
    content: `Kişisel verilerinizin güvenliğini sağlamak için teknik ve idari tedbirler alıyoruz:

• SSL/TLS şifrelemesi ile güvenli veri iletimi
• Erişim kontrolleri ve yetkilendirme mekanizmaları
• Düzenli güvenlik denetimleri
• Personel gizlilik eğitimleri

Bununla birlikte, internet üzerinden yapılan hiçbir veri iletiminin %100 güvenli olduğunu garanti edemeyiz.`,
  },
  {
    title: "8. Kullanıcı Hakları",
    content: `KVKK madde 11 kapsamında aşağıdaki haklara sahipsiniz:

• Kişisel verilerinizin işlenip işlenmediğini öğrenme
• İşlenmişse buna ilişkin bilgi talep etme
• İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme
• Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
• Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme
• KVKK madde 7'de öngörülen koşullar çerçevesinde silinmesini isteme
• Otomatik sistemler aracılığıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme
• Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde tazminat talep etme

Bu haklarınızı kullanmak için: info@sorlise.com`,
  },
  {
    title: "9. Çerezler (Cookies)",
    content: `Platformumuz oturum yönetimi ve kullanıcı deneyimini iyileştirmek amacıyla zorunlu çerezler kullanmaktadır. Analitik çerezler için ayrıca rızanız alınmaktadır. Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.`,
  },
  {
    title: "10. Politika Değişiklikleri",
    content: `Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz. Önemli değişiklikler yapılması halinde platform üzerinden veya e-posta ile bilgilendirme yapılacaktır. Güncel politikaya her zaman bu sayfadan ulaşabilirsiniz.`,
  },
];

export default function GizlilikPage() {
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
              Gizlilik Politikası
            </h1>
            <p className="text-muted text-sm">
              Son güncelleme: 25 Haziran 2026
            </p>
            <p className="text-muted mt-4 leading-relaxed">
              SorLise olarak kişisel verilerinizin gizliliğine büyük önem
              veriyoruz. Bu politika, hangi verileri topladığımızı, nasıl
              kullandığımızı ve haklarınızı açıklamaktadır.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold text-ink mb-3">
                  {section.title}
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

          {/* Footer note */}
          <div className="mt-12 p-5 rounded-2xl bg-brand/10 border border-brand/20">
            <p className="text-sm text-ink font-medium mb-1">
              Sorularınız mı var?
            </p>
            <p className="text-sm text-muted">
              Gizlilik politikamız hakkında sorularınız için{" "}
              <a
                href="mailto:info@sorlise.com"
                className="text-brand-dark underline underline-offset-2"
              >
                info@sorlise.com
              </a>{" "}
              adresinden bize ulaşabilirsiniz.
            </p>
          </div>

          {/* Related links */}
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link
              href="/kvkk"
              className="text-brand-dark hover:underline underline-offset-2"
            >
              KVKK Aydınlatma Metni →
            </Link>
            <Link
              href="/kullanim-kosullari"
              className="text-brand-dark hover:underline underline-offset-2"
            >
              Kullanım Koşulları →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
