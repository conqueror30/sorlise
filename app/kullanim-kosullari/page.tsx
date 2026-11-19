import type { Metadata } from "next";
import { LegalPage, SUPPORT_EMAIL, type LegalSection } from "@/components/LegalPage";

// Kaynak metin: ../legal/kullanim-kosullari.html
export const metadata: Metadata = {
  title: "Kullanım Koşulları | SorLise",
  description:
    "SorLise kullanım koşulları. Hesap doğrulama, kullanım kuralları, abonelik ve ödemeler hakkında bilgi edinin.",
};

const sections: LegalSection[] = [
  {
    title: "1. Kabul",
    body: (
      <p>
        Sorlise uygulamasını (&quot;Uygulama&quot;) kullanarak bu Kullanım
        Koşulları&apos;nı kabul etmiş olursunuz. Uygulama, 18 yaş altı
        öğrenciler tarafından kullanılacağından, öğrenci hesapları yalnızca
        veli/ebeveyn onayı verildikten sonra aktif hale gelir.
      </p>
    ),
  },
  {
    title: "2. Hizmetin tanımı",
    body: (
      <p>
        Sorlise, LGS sınavına hazırlanan orta okul öğrencilerini
        (&quot;Öğrenci&quot;), doğrulanmış lise öğrencileriyle
        (&quot;Buddy&quot;) bir araya getiren, okul seçimi konusunda bilgi
        alışverişini kolaylaştıran bir platformdur. Buddy&apos;ler gönüllü
        olarak katılır ve hizmet karşılığında ücret almaz.
      </p>
    ),
  },
  {
    title: "3. Hesap oluşturma ve doğrulama",
    body: (
      <ul>
        <li>
          Öğrenci hesapları, bir veli/ebeveyn e-postasına gönderilen onay
          bağlantısı tıklanmadan sohbet özelliklerini kullanamaz.
        </li>
        <li>
          Buddy hesapları, gerçek bir lise öğrencisi olduğunuzu doğrulamak
          amacıyla admin ekibi tarafından manuel olarak incelenir (genellikle
          24-48 saat sürer).
        </li>
        <li>Verdiğiniz bilgilerin doğru ve güncel olmasından siz sorumlusunuz.</li>
      </ul>
    ),
  },
  {
    title: "4. Kullanım kuralları",
    body: (
      <>
        <p>Uygulamayı kullanırken aşağıdakileri yapmamayı kabul edersiniz:</p>
        <ul>
          <li>
            İletişim bilgisi (telefon, sosyal medya hesabı, adres vb.)
            paylaşarak platform dışında iletişime geçmeye çalışmak.
          </li>
          <li>
            Taciz edici, tehditkâr, cinsel içerikli veya çocukları hedef alan
            zararlı davranışlarda bulunmak.
          </li>
          <li>Sahte kimlik veya sahte okul bilgisiyle buddy hesabı oluşturmak.</li>
          <li>Küfür, hakaret veya nefret söylemi içeren mesajlar göndermek.</li>
          <li>
            Uygulamanın güvenlik önlemlerini (içerik filtresi, hız sınırlaması
            vb.) aşmaya çalışmak.
          </li>
        </ul>
        <p>
          Tüm mesajlar otomatik bir güvenlik filtresinden geçer. Bu kuralları
          ihlal eden hesaplar uyarılabilir, askıya alınabilir veya kalıcı olarak
          kapatılabilir. Kullanıcılar, uygunsuz davranışları uygulama içinden
          anında raporlayabilir.
        </p>
      </>
    ),
  },
  {
    title: "5. Abonelik ve ödemeler",
    body: (
      <ul>
        <li>
          Bazı özellikler (buddy ile sınırsız sohbet başlatma gibi) yalnızca
          öğrenci hesapları için ücretli abonelik gerektirir.
        </li>
        <li>
          Güncel fiyatlar uygulama içindeki abonelik ekranında gösterilir ve
          önceden haber verilmeden değiştirilebilir; mevcut abonelik dönemi
          süresince fiyat değişikliği geriye dönük uygulanmaz.
        </li>
        <li>
          Ödemeler, PayTR güvenli ödeme altyapısı üzerinden işlenir. Sorlise,
          kart bilgilerinizi saklamaz.
        </li>
        <li>
          Abonelik iptalleri ve iade talepleri için{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> adresinden
          bize ulaşabilirsiniz.
        </li>
      </ul>
    ),
  },
  {
    title: "6. Hesap askıya alma ve fesih",
    body: (
      <p>
        Bu koşulları ihlal ettiğini tespit ettiğimiz hesapları, kullanıcıları
        veya diğer kullanıcıları (özellikle çocuk kullanıcıları) korumak
        amacıyla önceden haber vermeksizin askıya alma veya kapatma hakkımız
        saklıdır. Kullanıcılar, Profil sayfasından hesaplarını istedikleri
        zaman kalıcı olarak silebilir.
      </p>
    ),
  },
  {
    title: "7. Sorumluluk sınırlaması",
    body: (
      <p>
        Sorlise, buddy&apos;ler tarafından paylaşılan bilgilerin doğruluğunu
        garanti etmez; bu bilgiler kişisel deneyime dayalıdır ve resmi okul
        bilgisi yerine geçmez. Uygulama &quot;olduğu gibi&quot; sunulur.
      </p>
    ),
  },
  {
    title: "8. Değişiklikler",
    body: (
      <p>
        Bu koşulları zaman zaman güncelleyebiliriz. Önemli değişikliklerde
        uygulama içinden bilgilendirme yapılır. Değişikliklerden sonra
        uygulamayı kullanmaya devam etmeniz, güncel koşulları kabul ettiğiniz
        anlamına gelir.
      </p>
    ),
  },
  {
    title: "9. İletişim",
    body: (
      <p>
        Sorularınız için:{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    ),
  },
];

export default function KullanimKosullariPage() {
  return (
    <LegalPage
      title="Kullanım Koşulları"
      updated="7 Ağustos 2026"
      sections={sections}
      related={{ href: "/gizlilik", label: "Gizlilik Politikası" }}
    />
  );
}
