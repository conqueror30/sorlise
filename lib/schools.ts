export type SchoolType = "Fen" | "Anadolu" | "Özel";

export interface School {
  name: string;
  short: string;
  color: string;
  type: SchoolType;
  logo?: string;
}

export const schools: School[] = [
  { name: "Galatasaray Lisesi", short: "GL", color: "#A4123F", type: "Anadolu", logo: "/liselogolar/Galatasaray_Lisesi_logo.png" },
  { name: "İstanbul Erkek Lisesi", short: "İEL", color: "#1B3A6B", type: "Anadolu", logo: "/liselogolar/Istanbul_Erkek_Lisesi_Logo.png" },
  { name: "Kabataş Erkek Lisesi", short: "KEL", color: "#0E5C3A", type: "Anadolu", logo: "/liselogolar/Kabatas_Erkek_Lisesi_logo.png" },
  { name: "İst. Atatürk Fen Lisesi", short: "AFL", color: "#B5121B", type: "Fen", logo: "/liselogolar/Istanbul_Ataturk_Fen_Lisesi_logo.png" },
  { name: "Ankara Fen Lisesi", short: "AFL", color: "#15356B", type: "Fen", logo: "/liselogolar/Ankara_Fen_Lisesi_Logo.png" },
  { name: "İzmir Fen Lisesi", short: "İFL", color: "#0B6E5F", type: "Fen", logo: "/liselogolar/Izmir_Fen_Lisesi.png" },
  { name: "Robert Koleji", short: "RC", color: "#7A1F2B", type: "Özel", logo: "/liselogolar/istanbul_amerikan_robert_lisesi_robert_college_logo.png" },
  { name: "Çapa Fen Lisesi", short: "ÇFL", color: "#1D4ED8", type: "Fen", logo: "/liselogolar/Capa_Fen_Lisesi_Logo.png" },
  { name: "Cağaloğlu Anadolu Lisesi", short: "CAL", color: "#5B2A86", type: "Anadolu", logo: "/liselogolar/Cagaloğlu_logo.png" },
  { name: "Kadıköy Anadolu Lisesi", short: "KAL", color: "#0F766E", type: "Anadolu", logo: "/liselogolar/Kadikoy_Anadolu_logo.png" },
  { name: "Hüseyin Avni Sözen A.L.", short: "HAS", color: "#9A3412", type: "Anadolu", logo: "/liselogolar/huseyin_avni_logo.png" },
  { name: "Beşiktaş Atatürk A.L.", short: "BAL", color: "#1E3A8A", type: "Anadolu", logo: "/liselogolar/Besiktas_Ataturk_Anadolu_Logo.png" },
  { name: "Haydarpaşa Lisesi", short: "HL", color: "#7C2D12", type: "Anadolu", logo: "/liselogolar/haydarpasa_lisesi_logo.png" },
  { name: "Tofaş Fen Lisesi", short: "TFL", color: "#0C4A6E", type: "Fen", logo: "/liselogolar/Tofas_Fen_Lisesi_Logo.png" },
  { name: "Bursa Anadolu Lisesi", short: "BAL", color: "#166534", type: "Anadolu", logo: "/liselogolar/Bursa_Anadolu_logo.svg" },
  { name: "Saint Joseph Lisesi", short: "SJ", color: "#1E40AF", type: "Özel", logo: "/liselogolar/Saint_Joseph_Lisesi_Logo.png" },
  { name: "Notre Dame de Sion", short: "NDS", color: "#831843", type: "Özel", logo: "/liselogolar/Notre_Dame_de_Sion_Logo.png" },
  { name: "Tarsus Amerikan Koleji", short: "TAC", color: "#155E75", type: "Özel", logo: "/liselogolar/Tarsus_Amerikan_Koleji_Logo.png" },
  { name: "Bornova Anadolu Lisesi", short: "BAL", color: "#3730A3", type: "Anadolu", logo: "/liselogolar/bornova_anadolu_lisesi_logo.jpg" },
  { name: "Fenerbahçe Anadolu Lisesi", short: "FAL", color: "#1E3A8A", type: "Anadolu", logo: "/liselogolar/Fenerbahce_anadolu_lisesi_logo.png" },
  { name: "Terakki Vakfı Okulları", short: "TEV", color: "#B91C1C", type: "Özel", logo: "/liselogolar/Terakki_Vakfı_Okulları_logo.png" },
  { name: "Aziz Sancar Fen Lisesi", short: "ASF", color: "#0E7490", type: "Fen", logo: "/liselogolar/Aziz_Sancar_Fen_Lisesi_Logo.png" },
  { name: "Pursaklar Fen Lisesi", short: "PFL", color: "#15803D", type: "Fen", logo: "/liselogolar/Pursaklar_Fen_Lisesi_Logo.png" },
  { name: "Atatürk Anadolu Lisesi", short: "AAL", color: "#1D4ED8", type: "Anadolu", logo: "/liselogolar/Ankara_Ataturk_Lisesi.png" },
  { name: "Adana Fen Lisesi", short: "AFL", color: "#9F1239", type: "Fen", logo: "/liselogolar/Adana_Fen_Lisesi.png" },
  { name: "Antalya Anadolu Lisesi", short: "AAL", color: "#0F766E", type: "Anadolu", logo: "/liselogolar/Antalya_Anadolu_Lisesi_Logo.png" },
  { name: "Samsun G.Z.Y. Fen Lisesi", short: "GZY", color: "#0C4A6E", type: "Fen", logo: "/liselogolar/Samsun_Garip_Zeycan_Yildirim_Fen_Lisesi_Logo.png" },
  { name: "Eskişehir Fen Lisesi", short: "EFL", color: "#5B21B6", type: "Fen", logo: "/liselogolar/Eskisehir_Fatih_Fen_Lisesi.png" },
  { name: "Konya Meram Fen Lisesi", short: "MFL", color: "#166534", type: "Fen", logo: "/liselogolar/Meram_Fen_Lisesi_Logo.png" },
  { name: "Diyarbakır Fen Lisesi", short: "DFL", color: "#9A3412", type: "Fen", logo: "/liselogolar/Diyarbakir_Rekabet_Kurumu_Cumhuriyet_Fen_Lisesi_Logo.png" },
];
