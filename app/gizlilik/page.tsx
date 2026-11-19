import type { Metadata } from "next";
import { LegalPage, SUPPORT_EMAIL, type LegalSection } from "@/components/LegalPage";

// Kaynak metin: ../legal/gizlilik.html
export const metadata: Metadata = {
  title: "Gizlilik Politikası | SorLise",
  description:
    "SorLise gizlilik politikası. Hangi verileri topladığımızı, neden kullandığımızı, kimlerle paylaştığımızı ve KVKK kapsamındaki haklarınızı öğrenin.",
};

const sections: LegalSection[] = [
  {
    title: "1. Bu politika kimin için",
    body: (
      <p>
        Sorlise, LGS&apos;ye hazırlanan orta okul öğrencilerini
        (&quot;Öğrenci&quot;/&quot;Seeker&quot;) doğrulanmış lise
        öğrencileriyle (&quot;Buddy&quot;) güvenli bir sohbet ortamında
        buluşturan bir mobil uygulamadır. Kullanıcılarımızın büyük bölümü 10-14
        yaş arasındaki reşit olmayan öğrencilerdir; bu nedenle bu politika,
        verilerin nasıl toplandığını, kullanıldığını ve korunduğunu özellikle
        bu grup gözetilerek açıklar.
      </p>
    ),
  },
  {
    title: "2. Topladığımız veriler",
    body: (
      <ul>
        <li>
          <strong>Hesap bilgileri:</strong> e-posta adresi ve şifre (Supabase
          Auth üzerinden güvenli şekilde saklanır, şifreniz bizim tarafımızdan
          okunamaz).
        </li>
        <li>
          <strong>Profil bilgileri:</strong> görünen ad, şehir, rol
          (öğrenci/buddy), öğrenciler için sınıf seviyesi ve ilgi alanları;
          buddy&apos;ler için okul, mezuniyet yılı, telefon numarası, biyografi
          ve hobiler.
        </li>
        <li>
          <strong>Veli e-postası (öğrenciler için):</strong> ebeveyn onayı
          almak amacıyla toplanır ve yalnızca onay süreci için kullanılır.
        </li>
        <li>
          <strong>Mesajlar:</strong> uygulama içi sohbetler, sunucu tarafında
          üretilen anahtarlarla AES-256 şifrelemesiyle saklanır. Güvenlik
          filtresi tarafından şüpheli bulunan mesajlar, inceleme amacıyla
          moderasyon ekibi tarafından görülebilir.
        </li>
        <li>
          <strong>Ödeme bilgileri:</strong> abonelik ödemeleri PayTR üzerinden
          işlenir. Kredi kartı bilgileriniz Sorlise sunucularında saklanmaz;
          yalnızca abonelik durumu ve plan bilgisi bizde tutulur.
        </li>
        <li>
          <strong>Bildirim ve oturum verisi:</strong> anlık bildirim
          gönderebilmek için cihaz push token&apos;ı ve uygulamayı aktif
          kullanıp kullanmadığınız bilgisi.
        </li>
        <li>
          <strong>Avatar:</strong> avatarlar tamamen uygulama içinde, cihazda
          üretilen bir yapılandırmadan oluşturulur; fotoğraf yüklemesi
          gerektirmez.
        </li>
      </ul>
    ),
  },
  {
    title: "3. Verileri neden kullanıyoruz",
    body: (
      <ul>
        <li>Hesabınızı oluşturmak, doğrulamak ve güvenliğini sağlamak.</li>
        <li>Öğrenci hesaplarında veli onayı sürecini yürütmek.</li>
        <li>
          Buddy hesaplarının gerçek lise öğrencisi olduğunu doğrulamak (manuel
          admin incelemesi).
        </li>
        <li>
          Okul arama, filtreleme ve buddy eşleştirme özelliklerini sunmak.
        </li>
        <li>
          Mesajlaşmayı mümkün kılmak ve zararlı/uygunsuz içerikleri (taciz
          girişimleri, iletişim bilgisi paylaşımı, küfür vb.) otomatik filtreyle
          tespit edip engellemek.
        </li>
        <li>Abonelik ve ödeme süreçlerini yönetmek.</li>
        <li>
          Yasal yükümlülüklere uymak ve kullanıcıları/çocukları zarardan
          korumak.
        </li>
      </ul>
    ),
  },
  {
    title: "4. Verileri kimlerle paylaşıyoruz",
    body: (
      <>
        <p>
          Verileriniz aşağıdaki hizmet sağlayıcılarla, yalnızca belirtilen
          amaçlarla sınırlı olarak paylaşılır:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong> — veritabanı, kimlik doğrulama ve
            barındırma altyapısı.
          </li>
          <li>
            <strong>PayTR</strong> — abonelik ödemelerinin işlenmesi.
          </li>
          <li>
            <strong>Resend</strong> — veli onay e-postaları ve bildirim
            e-postalarının gönderilmesi.
          </li>
          <li>
            <strong>Expo</strong> — anlık bildirim (push notification)
            altyapısı.
          </li>
        </ul>
        <p>
          Verileriniz hiçbir şekilde reklam amacıyla üçüncü taraflarla satılmaz
          veya paylaşılmaz.
        </p>
      </>
    ),
  },
  {
    title: "5. Çocukların korunması",
    body: (
      <p>
        Sorlise, 18 yaş altı kullanıcılara yönelik özel koruma önlemleri
        uygular: öğrenci hesapları veli onayı olmadan aktif olmaz, buddy
        hesapları admin tarafından doğrulanır, tüm mesajlar otomatik içerik
        filtresinden geçer, kullanıcı adları kısmen gizlenir ve kullanıcılar
        diledikleri an rapor edip engelleyebilir.
      </p>
    ),
  },
  {
    title: "6. Haklarınız (KVKK kapsamında)",
    body: (
      <>
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
          uyarınca aşağıdaki haklara sahipsiniz:
        </p>
        <ul>
          <li>Verilerinizin işlenip işlenmediğini öğrenme.</li>
          <li>İşlenen verileriniz hakkında bilgi talep etme.</li>
          <li>Verilerinizin düzeltilmesini veya silinmesini talep etme.</li>
          <li>
            Hesabınızı ve tüm verilerinizi uygulama içinden tek adımda silme
            (Profil &gt; Hesabı Sil).
          </li>
        </ul>
        <p>
          Bu haklarınızı kullanmak için{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> adresinden
          bizimle iletişime geçebilirsiniz.
        </p>
      </>
    ),
  },
  {
    title: "7. Veri saklama süresi",
    body: (
      <p>
        Verileriniz, hesabınız aktif olduğu sürece saklanır. Hesabınızı
        sildiğinizde profil, mesaj ve abonelik verileriniz sistemlerimizden
        kalıcı olarak silinir.
      </p>
    ),
  },
  {
    title: "8. Bu politikadaki değişiklikler",
    body: (
      <p>
        Bu politikayı zaman zaman güncelleyebiliriz. Önemli değişikliklerde
        uygulama içinden bilgilendirme yapılır.
      </p>
    ),
  },
];

export default function GizlilikPage() {
  return (
    <LegalPage
      title="Gizlilik Politikası"
      updated="7 Ağustos 2026"
      sections={sections}
      related={{ href: "/kullanim-kosullari", label: "Kullanım Koşulları" }}
    />
  );
}
