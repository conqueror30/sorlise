export type MentorType = "Fen" | "Anadolu" | "Özel";

export interface Mentor {
  id: number;
  name: string;
  initials: string;
  avatarColor: string;
  school: string;
  grade: string;
  type: MentorType;
  subjects: string[];
  bio: string;
}

export const mentors: Mentor[] = [
  {
    id: 1,
    name: "Arda Yılmaz",
    initials: "AY",
    avatarColor: "#B388F5",
    school: "İstanbul Fen Lisesi",
    grade: "10. Sınıf",
    type: "Fen",
    subjects: ["Matematik", "Fizik"],
    bio: "LGS'de %98'lik dilime girdim. Matematik olimpiyatlarına katılıyorum. Fen lisesi hayatı, yurt sistemi ve hazırlık süreci hakkında her şeyi sorabilirsin.",
  },
  {
    id: 2,
    name: "Selin Kaya",
    initials: "SK",
    avatarColor: "#D1AFFE",
    school: "Galatasaray Lisesi",
    grade: "11. Sınıf",
    type: "Anadolu",
    subjects: ["Türkçe", "Tarih", "Fransızca"],
    bio: "Galatasaray Lisesi'nin sosyal ortamı, dil eğitimi ve okul kültürü hakkında konuşalım. Hazırlık sınıfının nasıl geçtiğini tüm detaylarıyla anlatabilirim.",
  },
  {
    id: 3,
    name: "Kaan Müftüoğlu",
    initials: "KM",
    avatarColor: "#7C3AED",
    school: "Ankara Fen Lisesi",
    grade: "10. Sınıf",
    type: "Fen",
    subjects: ["Kimya", "Biyoloji"],
    bio: "Ankara'dan gelip yatılı okumaya başladım. Şehir değiştirme, yurt hayatı ve fen lisesi temposuna alışma hakkında içtenlikle konuşabiliriz.",
  },
  {
    id: 4,
    name: "Elif Öztürk",
    initials: "EÖ",
    avatarColor: "#A78BFA",
    school: "Notre Dame de Sion",
    grade: "11. Sınıf",
    type: "Özel",
    subjects: ["İngilizce", "Matematik"],
    bio: "Yoğun dil eğitimi ve uluslararası program hakkında bilgi vermekten memnuniyet duyarım. Burs ve ücret sistemi hakkında da konuşabiliriz.",
  },
  {
    id: 5,
    name: "Mert Şahin",
    initials: "MŞ",
    avatarColor: "#8B5CF6",
    school: "İzmir Fen Lisesi",
    grade: "12. Sınıf",
    type: "Fen",
    subjects: ["Matematik", "Fizik", "Kimya"],
    bio: "TYT/AYT sürecinde Fen Lisesi avantajı nedir? %99'luk dilimdeyim. Sınav odaklı bir fen lisesinin gerçek temposunu anlatabilir, yönlendirebilirim.",
  },
  {
    id: 6,
    name: "Zeynep Arslan",
    initials: "ZA",
    avatarColor: "#C4B5FD",
    school: "Kadıköy Anadolu Lisesi",
    grade: "10. Sınıf",
    type: "Anadolu",
    subjects: ["Türkçe", "Coğrafya"],
    bio: "İstanbul'da sıradan bir mahalle çocuğuyken KAL'a girdim. Anadolu lisesinde sosyal hayat, ders temposu ve sınıf dinamikleri hakkında dürüstçe konuşabiliriz.",
  },
];

export interface Testimonial {
  id: number;
  text: string;
  name: string;
  initials: string;
  role: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Gönüllüm sayesinde hedef lisem hakkında çok daha gerçekçi bir fikir edindim. Anlattıkları hem motive etti hem de gerçekten ne beklememem gerektiğini öğretti.",
    name: "Zeynep K.",
    initials: "ZK",
    role: "Aday Öğrenci",
    stars: 5,
  },
  {
    id: 2,
    text: "Oğlum sormaktan çekindiği şeyleri gönüllüsüne sorabildi. İçerideki biri olarak verdiği cevaplar inanılmaz değerliydi. Platform çok güvenli ve sezgisel.",
    name: "Ahmet Bey",
    initials: "AB",
    role: "Veli",
    stars: 5,
  },
  {
    id: 3,
    text: "Gönüllü olmak bana da çok şey kattı. Kendi deneyimimi aktarırken bazı şeyleri daha iyi anladım. Gönüllülük sertifikası üniversite başvurumda çok işe yarayacak.",
    name: "Selin Y.",
    initials: "SY",
    role: "Gönüllü — Galatasaray Lisesi",
    stars: 5,
  },
];
