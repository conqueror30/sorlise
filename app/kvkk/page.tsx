import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | SorLise",
  description:
    "SorLise KVKK aydınlatma metni. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında haklarınız ve veri işleme süreçleri hakkında bilgi edinin.",
};

const sections = [
  {
    title: "Aydınlatma Metninin Amacı",
    content: `Bu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun ("KVKK") 10. maddesi ve "Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ" uyarınca, SorLise platformunu kullanan kişilerin kişisel verilerinin işlenmesine ilişkin olarak hazırlanmıştır.`,
  },
  {
    title: "Veri Sorumlusunun Kimliği",
    content: `**Veri Sorumlusu:** Sorlise Topluluğu
**E-posta:** info@sorlise.com

KVKK kapsamında "veri sorumlusu" sıfatını haiz olan SorLise, kişisel verilerinizi aşağıda açıklanan amaçlar doğrultusunda işlemektedir.`,
  },
  {
    title: "İşlenen Kişisel Veriler",
    content: `Platformumuz aracılığıyla aşağıdaki kişisel veriler işlenmektedir:

**Kimlik Verileri**
Ad, soyad, doğum yılı/sınıf bilgisi

**İletişim Verileri**
E-posta adresi, telefon numarası (isteğe bağlı)

**Eğitim Verileri**
Okul adı, hedef lise tercihleri, akademik ilgi alanları

**İşlem Güvenliği Verileri**
Giriş kayıtları, IP adresi, cihaz bilgisi

**Kullanım Verileri**
Uygulama içi etkileşimler, mesajlaşma kayıtları (yalnızca güvenlik ve moderasyon amaçlı)`,
  },
  {
    title: "Kişisel Verilerin İşlenme Amaçları",
    content: `Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:

• Platforma üyelik ve hesap oluşturma işlemlerinin yürütülmesi
• Öğrenci-gönüllü eşleştirme hizmetinin sağlanması
• Platformun güvenli ve moderasyonlu biçimde işletilmesi
• 18 yaş altı kullanıcıların korunmasına yönelik önlemlerin uygulanması
• Yasal yükümlülüklerin yerine getirilmesi
• Yetkili kamu kurum ve kuruluşlarına bilgi verilmesi
• Hizmetin geliştirilmesi ve kalite kontrolü`,
  },
  {
    title: "Hukuki Dayanaklar",
    content: `Kişisel verileriniz KVKK Madde 5/2 kapsamında aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:

• **Madde 5/2(a):** Kanunlarda açıkça öngörülmesi
• **Madde 5/2(c):** Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması
• **Madde 5/2(ç):** Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi
• **Madde 5/2(f):** İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için zorunlu olması

Açık rıza gerektiren durumlarda (pazarlama iletişimi vb.) ayrıca rızanız alınmaktadır.`,
  },
  {
    title: "Kişisel Verilerin Aktarılması",
    content: `**Yurt İçi Aktarım**
Kişisel verileriniz; altyapı hizmet sağlayıcıları, teknik destek sağlayıcıları ve gerektiğinde yetkili kamu kurum ve kuruluşlarıyla KVKK Madde 8 kapsamında paylaşılabilmektedir.

**Yurt Dışı Aktarım**
Verileriniz, KVKK Madde 9 kapsamında yeterli korumayı sağladığı Kişisel Verileri Koruma Kurulu tarafından kabul edilen ülkelere veya açık rızanız dahilinde yurt dışına aktarılabilir.

Kişisel verileriniz ticari amaçla üçüncü kişilere satılmaz veya kiralanmaz.`,
  },
  {
    title: "Veri Saklama Süresi",
    content: `Kişisel verileriniz, ilgili mevzuatta öngörülen veya işleme amacının gerektirdiği saklama süreleri boyunca muhafaza edilir. Bu sürelerin sona ermesiyle birlikte verileriniz silinir, yok edilir veya anonim hale getirilir.

Hesabınızı kapatmanız durumunda, yasal yükümlülüklerimiz kapsamındaki veriler saklama süreleri boyunca muhafaza edilmeye devam eder; diğer verileriniz ise en geç 30 gün içinde sistemlerimizden temizlenir.`,
  },
  {
    title: "İlgili Kişinin Hakları",
    content: `KVKK Madde 11 kapsamında aşağıdaki haklara sahipsiniz:

**(a)** Kişisel verilerinizin işlenip işlenmediğini öğrenme
**(b)** İşlenmişse buna ilişkin bilgi talep etme
**(c)** İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme
**(ç)** Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
**(d)** Eksik veya yanlış işlenmişse düzeltilmesini isteme
**(e)** Kanunun 7. maddesinde öngörülen koşullar çerçevesinde silinmesini veya yok edilmesini isteme
**(f)** (d) ve (e) bentleri uyarınca yapılan işlemlerin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme
**(g)** Münhasıran otomatik sistemler aracılığıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme
**(ğ)** Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde tazminat talep etme`,
  },
  {
    title: "Başvuru Yöntemi",
    content: `Haklarınızı kullanmak için aşağıdaki yollardan başvurabilirsiniz:

**E-posta:** info@sorlise.com (kayıtlı e-posta adresinizden gönderiniz)

Başvurularınızda kimliğinizi doğrulayabilmek için ad, soyad ve kayıtlı e-posta adresinizi belirtmeniz gerekmektedir. Talebiniz, KVKK Madde 13 uyarınca en geç **30 gün** içinde sonuçlandırılacaktır.

Başvurunuzun reddedilmesi veya cevabın yetersiz bulunması halinde, cevabın tebliğinden itibaren 30 gün ve her halükarda başvuru tarihinden itibaren 60 gün içinde **Kişisel Verileri Koruma Kurulu**'na şikayette bulunabilirsiniz.`,
  },
];

export default function KVKKPage() {
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
            <div className="mt-4 mb-2 inline-block px-3 py-1 rounded-full bg-brand/15 text-brand-dark text-xs font-semibold tracking-wide">
              Resmi Yasal Belge
            </div>
            <h1 className="text-4xl font-bold text-ink mt-2 mb-3">
              KVKK Aydınlatma Metni
            </h1>
            <p className="text-muted text-sm">
              6698 Sayılı Kişisel Verilerin Korunması Kanunu Kapsamında &nbsp;|&nbsp; Son güncelleme: 25 Haziran 2026
            </p>
            <p className="text-muted mt-4 leading-relaxed">
              SorLise olarak kişisel verilerinizin işlenmesi hususunda sizi
              bilgilendirmek ve KVKK kapsamındaki haklarınızı hatırlatmak
              amacıyla bu aydınlatma metnini hazırladık.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {sections.map((section, idx) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold text-ink mb-3">
                  {idx + 1}. {section.title}
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
              KVKK Başvuruları
            </p>
            <p className="text-sm text-muted">
              Kişisel verilerinize ilişkin her türlü soru ve başvurunuz için{" "}
              <a
                href="mailto:info@sorlise.com"
                className="text-brand-dark underline underline-offset-2"
              >
                info@sorlise.com
              </a>{" "}
              adresine kayıtlı e-postanızdan ulaşabilirsiniz. Talebiniz en geç
              30 gün içinde yanıtlanacaktır.
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
