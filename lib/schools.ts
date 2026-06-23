export type SchoolType = "Fen" | "Anadolu" | "Özel";

export interface School {
  name: string;
  short: string;
  color: string;
  type: SchoolType;
  logo?: string;
}

export const schools: School[] = [
  { name: "Galatasaray Lisesi", short: "GL", color: "#A4123F", type: "Anadolu" },
  { name: "İstanbul Erkek Lisesi", short: "İEL", color: "#1B3A6B", type: "Anadolu" },
  { name: "Kabataş Erkek Lisesi", short: "KEL", color: "#0E5C3A", type: "Anadolu" },
  { name: "İst. Atatürk Fen Lisesi", short: "AFL", color: "#B5121B", type: "Fen" },
  { name: "Ankara Fen Lisesi", short: "AFL", color: "#15356B", type: "Fen" },
  { name: "İzmir Fen Lisesi", short: "İFL", color: "#0B6E5F", type: "Fen" },
  { name: "Robert Koleji", short: "RC", color: "#7A1F2B", type: "Özel" },
  { name: "Çapa Fen Lisesi", short: "ÇFL", color: "#1D4ED8", type: "Fen" },
  { name: "Cağaloğlu Anadolu Lisesi", short: "CAL", color: "#5B2A86", type: "Anadolu" },
  { name: "Kadıköy Anadolu Lisesi", short: "KAL", color: "#0F766E", type: "Anadolu" },
  { name: "Hüseyin Avni Sözen A.L.", short: "HAS", color: "#9A3412", type: "Anadolu" },
  { name: "Beşiktaş Atatürk A.L.", short: "BAL", color: "#1E3A8A", type: "Anadolu" },
  { name: "Haydarpaşa Lisesi", short: "HL", color: "#7C2D12", type: "Anadolu" },
  { name: "Tofaş Fen Lisesi", short: "TFL", color: "#0C4A6E", type: "Fen" },
  { name: "Bursa Anadolu Lisesi", short: "BAL", color: "#166534", type: "Anadolu" },
  { name: "Saint Joseph Lisesi", short: "SJ", color: "#1E40AF", type: "Özel" },
  { name: "Notre Dame de Sion", short: "NDS", color: "#831843", type: "Özel" },
  { name: "Tarsus Amerikan Koleji", short: "TAC", color: "#155E75", type: "Özel" },
  { name: "Bornova Anadolu Lisesi", short: "BAL", color: "#3730A3", type: "Anadolu" },
  { name: "Fenerbahçe Anadolu Lisesi", short: "FAL", color: "#1E3A8A", type: "Anadolu" },
  { name: "Terakki Vakfı Okulları", short: "TEV", color: "#B91C1C", type: "Özel" },
  { name: "Aziz Sancar Fen Lisesi", short: "ASF", color: "#0E7490", type: "Fen" },
  { name: "Pursaklar Fen Lisesi", short: "PFL", color: "#15803D", type: "Fen" },
  { name: "Atatürk Anadolu Lisesi", short: "AAL", color: "#1D4ED8", type: "Anadolu" },
  { name: "Adana Fen Lisesi", short: "AFL", color: "#9F1239", type: "Fen" },
  { name: "Antalya Anadolu Lisesi", short: "AAL", color: "#0F766E", type: "Anadolu" },
  { name: "Samsun G.Z.Y. Fen Lisesi", short: "GZY", color: "#0C4A6E", type: "Fen" },
  { name: "Eskişehir Fen Lisesi", short: "EFL", color: "#5B21B6", type: "Fen" },
  { name: "Konya Meram Fen Lisesi", short: "MFL", color: "#166534", type: "Fen" },
  { name: "Diyarbakır Fen Lisesi", short: "DFL", color: "#9A3412", type: "Fen" },
];
