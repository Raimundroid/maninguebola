// ============================================
// data/sampleData.js
// ============================================
//
// This file contains sample data for the football app.
// In a real app, this data would come from an API.
//
// DATA STRUCTURE EXPLANATION:
// ---------------------------
// Each data type has a specific shape (structure) that components expect.
// Keep this consistent when connecting to your real API.

// Sample data
// const teams = [
//   {
//     id: "eagles",
//     name: "FC Eagles",
//     shortName: "Eagles",/////not added
//     logo: "https://via.placeholder.com/100/FF0000/FFFFFF?text=E",
//     founded: 2015,
//     stadium: "Campo A",
//     colors: { primary: "#FF0000", secondary: "#FFFFFF" },
//     contact: { captain: "João Silva", phone: "+258 84 123 4567" }
//   },
//   {
//     id: "lions",
//     name: "United Lions",
//     shortName: "Lions",
//     logo: "https://via.placeholder.com/100/0000FF/FFFFFF?text=L",
//     founded: 2018,
//     stadium: "Campo Principal",
//     colors: { primary: "#0000FF", secondary: "#FFFF00" }
//   },
//   {
//     id: "tigers",
//     name: "Sporting Tigers",
//     shortName: "Tigers",
//     logo: "https://via.placeholder.com/100/00FF00/FFFFFF?text=T",
//     founded: 2020,
//     stadium: "Campo B",
//     colors: { primary: "#00FF00", secondary: "#000000" }
//   }
// ];

// const matches = [
//   {
//     id: 1,
//     date: "2025-11-09",
//     time: "15:00",
//     homeTeamId: "eagles",
//     awayTeamId: "lions",
//     homeScore: 3,
//     awayScore: 2,
//     status: "finished",
//     location: "Campo A",
//   },
//   {
//     id: 2,
//     date: "2025-11-16",
//     time: "16:30",
//     homeTeamId: "tigers",
//     awayTeamId: "eagles",
//     homeScore: null,
//     awayScore: null,
//     status: "upcoming",
//     location: "Campo B",
//   },
//   {
//     id: 3,
//     date: "2025-11-02",
//     time: "14:00",
//     homeTeamId: "eagles",
//     awayTeamId: "tigers",
//     homeScore: 2,
//     awayScore: 1,
//     status: "finished",
//     location: "Campo A",
//   },
// ];

// ============================================
// TEAMS DATA
// ============================================
// Base team objects - reused in other data structures
// Using an object (not array) for easy lookup by key
const teamsData = {
  sportingMagumbanaFc: {
    id: "sportingMagumbanaFc", // Unique identifier
    name: "Sporting de Magumbana", // Full team name
    shortName: "Sport. de Magumbana", // ✅ NEW
    abbr: "SM", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Campo de Magumbana",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "blue", secondary: "red" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  palmeirasMadangelaFc: {
    id: "palmeirasMadangelaFc", // Unique identifier
    name: "Palmeiras de Madangela", // Full team name
    shortName: "Palm. de Madangela", // ✅ NEW
    abbr: "PM", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "red", secondary: "blue" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },

  rioSambeFc: {
    id: "rioSambeFc", // Unique identifier
    name: "Rio Sambe FC", // Full team name [Associação do Rio Sambe]
    shortName: "Rio Sambe FC", // ✅ NEW
    abbr: "RS", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Campo de Rio Sambe (Coche Magumbo)",
    logo: "/images/teams/rioSambeFc/rioSambeFc.jpg",
    colors: { primary: "red", secondary: "green" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  novoSclonioMaxixe: {
    id: "novoSclonioMaxixe", // Unique identifier
    name: "Novo Sclonio da Maxixe", // Full team name
    shortName: "N. Sclonio da Maxixe", // ✅ NEW
    abbr: "NSM", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "green", secondary: "blue" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  academicaMucucune: {
    id: "academicaMucucune", // Unique identifier
    name: "Acadêmica de Mucucune", // Full team name
    shortName: "Acad. de Mucucune", // ✅ NEW
    abbr: "AM", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "blue", secondary: "green" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  slowDownFc: {
    id: "slowDownFc", // Unique identifier
    name: "Slow Down FC", // Full team name
    shortName: "Slow Down FC", // ✅ NEW
    abbr: "SDFC", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    logo: "/images/teams/slowDownFc/slowDownFc.jpg",
    colors: { primary: "yellow", secondary: "red" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  revolutionFc: {
    id: "revolutionFc", // Unique identifier
    name: "Revolution FC", // Full team name
    shortName: "Revolution FC", // ✅ NEW
    abbr: "RFC", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "red", secondary: "yellow" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  // costaCoelhoFc: {
  //   id: "costaCoelhoFc", // Unique identifier
  //   name: "Costa de Coelho Fc", // Full team name
  //   shortName: "Costa de Coelho FC", // ✅ NEW
  //   abbr: "CC", // Abbreviation for logos
  //   // position: "1",
  //   // points: "99", /////
  //   // founded: 1000,
  //   stadium: "Campo de Coelho",
  //   // logo: "/images/teams/shield-gold.jpg",
  //   colors: { primary: "blue", secondary: "yellow" },
  //   // contact: {
  //   //   coach: "John Dalton",
  //   //   captain: "Jaime Paulo",
  //   //   phone: "+258 82 12 34 567",
  //   //   email: "eagles@example.com",
  //   // },
  // },
  sportingNhachotaFc: {
    id: "sportingNhachotaFc", // Unique identifier
    name: "Sporting de Nhachota", // Full team name
    shortName: " Sport. de Nhachota", // ✅ NEW
    abbr: "SN", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Campo de Nhachota",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "yellow", secondary: "blue" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  madangelaFcMorrumbene: {
    id: "madangelaFcMorrumbene", // Unique identifier
    name: "Madangela FC de Morrumbene", // Full team name
    shortName: "Madangela FC", // ✅ NEW
    abbr: "MFC", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Campo Desportivo Guigobane",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "yellow", secondary: "orange" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  sportingKhundula: {
    id: "sportingKhundula", // Unique identifier
    name: "Sporting de Khundula", // Full team name
    shortName: "Sport. de Khundula", // ✅ NEW
    abbr: "SK", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "yellow", secondary: "green" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  benficaIlhaInhambane: {
    id: "benficaIlhaInhambane", // Unique identifier
    name: "Benfica da Ilha de Inhambane", // Full team name
    shortName: "Benf. d' Ilha d' I'mbane", // ✅ NEW
    abbr: "BII", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "orange", secondary: "green" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  santoAntonioMongue: {
    id: "santoAntonioMongue", // Unique identifier
    name: "Santo Antônio de Mongue", // Full team name
    shortName: "S. Antônio de Mongue", // ✅ NEW
    abbr: "SAM", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "green", secondary: "orange" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  UDChimedje: {
    id: "UDChimedje", // Unique identifier
    name: "UD de Chimedje", // Full team name
    shortName: "UD de Chimedje", // ✅ NEW
    abbr: "UDC", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "red", secondary: "orange" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  kakanavas: {
    id: "kakanavas", // Unique identifier
    name: "Kakanavas", // Full team name
    shortName: "Kakanavas", // ✅ NEW
    abbr: "KKV", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "red", secondary: "blue" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  rebentaFogo: {
    id: "rebentaFogo", // Unique identifier
    name: "Rebenta Fogo", // Full team name
    shortName: "Rebenta Fogo", // ✅ NEW
    abbr: "RB", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "orange", secondary: "blue" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  bingaFC: {
    id: "bingaFC", // Unique identifier
    name: "Binga FC", // Full team name
    shortName: "Binga FC", // ✅ NEW
    abbr: "BFC", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "orange", secondary: "pink" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  realPande: {
    id: "realPande", // Unique identifier
    name: "Real de Pande", // Full team name
    shortName: "Real de Pande", // ✅ NEW
    abbr: "RP", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "orange", secondary: "grey" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  onzeIrmaos: {
    id: "onzeIrmaos", // Unique identifier
    name: "Onze Irmãos", // Full team name
    shortName: "Onze Irmãos", // ✅ NEW
    abbr: "11i", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "black", secondary: "pink" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  teamBebado: {
    id: "teamBebado", // Unique identifier
    name: "Team Bêbado", // Full team name
    shortName: "Team Bêbado", // ✅ NEW
    abbr: "TB", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "red", secondary: "black" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  associacaoDesortivaPande: {
    id: "associacaoDesortivaPande", // Unique identifier
    name: "Associação Desortiva de Pande", // Full team name
    shortName: "ADP", // ✅ NEW
    abbr: "APD", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "pink", secondary: "green" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  internacionalMiluge: {
    id: "internacionalMiluge", // Unique identifier
    name: "Internacional de Miluge", // Full team name
    shortName: "Inter de Miluge", // ✅ NEW
    abbr: "IM", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Campo do Internacional de Miluge",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "red", secondary: "brown" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  eduardoMondlaneLingaLinga: {
    id: "eduardoMondlaneLingaLinga", // Unique identifier
    name: "Eduardo Mondlane de Linga-Linga", // Full team name
    shortName: "E.M. de Linga-Linga", // ✅ NEW
    abbr: "EML", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "brown", secondary: "red" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  ferroviarioCocheMagumbo: {
    id: "ferroviarioCocheMagumbo", // Unique identifier
    name: "Ferroviário de Coche Magumbo", // Full team name
    shortName: "Ferroviário de Coche", // ✅ NEW
    abbr: "FCM", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Campo de Ferroviário de Coche Magumbo (Coche Magumbo)",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "brown", secondary: "gold" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  guihambuaneNhaka: {
    id: "guihambuaneNhaka", // Unique identifier
    name: "Guihambuane de Nhaka", // Full team name
    shortName: "Guihambuane de Nhaka", // ✅ NEW
    abbr: "GN", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Indefinido",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "gold", secondary: "red" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  costaSolMagumbo: {
    id: "costaSolMagumbo", // Unique identifier
    name: "Costa do Sol de Magumbo", // Full team name
    shortName: "Costa d'Sol d'Magumbo", // ✅ NEW
    abbr: "CSM", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    // founded: 1000,
    stadium: "Campo do Costa do Sol de Magumbo (Beito)",
    // logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "aqua", secondary: "red" },
    // contact: {
    //   coach: "John Dalton",
    //   captain: "Jaime Paulo",
    //   phone: "+258 82 12 34 567",
    //   email: "eagles@example.com",
    // },
  },
  //================ // ------DEMO DATA--------================
  eagles: {
    id: "eagles", // Unique identifier
    name: "FC Eagles", // Full team name
    abbr: "FE", // Abbreviation for logos
    // position: "1",
    // points: "99", /////
    founded: 2010,
    stadium: "Eagles Arena A",
    logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "#0033cc", secondary: "#ffcc00" },
    contact: {
      coach: "John Dalton",
      captain: "Jaime Paulo",
      phone: "+258 82 12 34 567",
      email: "eagles@example.com",
    },
    competitions: ["morrumbene"],
  },
  lions: {
    id: "lions",
    name: "United Lions",
    abbr: "UL",
    // position: "2",
    // points: "75", /////
    founded: 2015,
    stadium: "Lions Den",

    logo: "/images/teams/shield-golden.jpg",
    colors: { primary: "#FF0000", secondary: "#14ca14ff" },
    contact: {
      coach: "Lino Papagaio",
      captain: "Borge Papalo",
      phone: "+258 82 12 34 568",
      email: "lions@example.com",
    },
    competitions: ["morrumbene"],
  },
  tigers: {
    id: "tigers",
    name: "Sporting Tigers",
    abbr: "ST",
    // position: "3",
    // points: "50", /////
    founded: 2012,
    stadium: "Tigers Cave",
    logo: "/images/teams/shield-golden.jpg",
    colors: { primary: "#00FF00", secondary: "#000000" },
    contact: {
      coach: "Gomes Boavista",
      captain: "Pedro Santos",
      phone: "+258 82 12 34 569",
      email: "tigers@example.com",
    },
    competitions: ["govuro"],
  },
  cats: {
    id: "cats",
    name: "Thunder Cats",
    abbr: "TC",
    // position: "3",
    // points: "50", /////
    founded: 2009,
    stadium: "Cats House",
    logo: "/images/teams/shield-gold.jpg",
    colors: { primary: "#003cffff", secondary: "#df0c0cff" },
    contact: {
      coach: "Marcus Fontes",
      captain: "Rafael Montes",
      phone: "+258 82 12 34 560",
      email: "cats@example.com",
    },
    competitions: ["govuro"],
  },
};

export default teamsData;

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// // ============================================
// // data/teamsData.js
// // ============================================
// //
// // ARCHITECTURE NOTE — competitions field:
// // ----------------------------------------
// // `competitions` is the SINGLE SOURCE OF TRUTH for which competition(s)
// // a team participates in. It must NOT be duplicated in standingsData or
// // matchesData — those files derive competition context from here via enrichment.
// //
// // Format: always an array of strings, even if the team is in only one competition.
// // Example: competitions: ["Campeonato Distrital de Govuro"]
// //
// // WHY an array and not a string?
// // A team can participate in multiple competitions (league + cup).
// // An array handles both the single and multi-competition cases uniformly.

// const teamsData = {
//   // ── Campeonato Distrital de Govuro ───────────────────────────────────────

//   UDChimedje: {
//     id: "UDChimedje",
//     name: "UD de Chimedje",
//     shortName: "UD de Chimedje",
//     abbr: "UDC",
//     stadium: "Indefinido",
//     colors: { primary: "red", secondary: "orange" },
//     competitions: ["govuro"],
//   },
//   kakanavas: {
//     id: "kakanavas",
//     name: "Kakanavas",
//     shortName: "Kakanavas",
//     abbr: "KKV",
//     stadium: "Indefinido",
//     colors: { primary: "red", secondary: "blue" },
//     competitions: ["govuro"],
//   },
//   rebentaFogo: {
//     id: "rebentaFogo",
//     name: "Rebenta Fogo",
//     shortName: "Rebenta Fogo",
//     abbr: "RB",
//     stadium: "Indefinido",
//     colors: { primary: "orange", secondary: "blue" },
//     competitions: ["govuro"],
//   },
//   bingaFC: {
//     id: "bingaFC",
//     name: "Binga FC",
//     shortName: "Binga FC",
//     abbr: "BFC",
//     stadium: "Indefinido",
//     colors: { primary: "orange", secondary: "pink" },
//     competitions: ["govuro"],
//   },
//   realPande: {
//     id: "realPande",
//     name: "Real de Pande",
//     shortName: "Real de Pande",
//     abbr: "RP",
//     stadium: "Indefinido",
//     colors: { primary: "orange", secondary: "grey" },
//     competitions: ["govuro"],
//   },
//   onzeIrmaos: {
//     id: "onzeIrmaos",
//     name: "Onze Irmãos",
//     shortName: "Onze Irmãos",
//     abbr: "11i",
//     stadium: "Indefinido",
//     colors: { primary: "black", secondary: "pink" },
//     competitions: ["govuro"],
//   },
//   teamBebado: {
//     id: "teamBebado",
//     name: "Team Bêbado",
//     shortName: "Team Bêbado",
//     abbr: "TB",
//     stadium: "Indefinido",
//     colors: { primary: "red", secondary: "black" },
//     competitions: ["govuro"],
//   },
//   associacaoDesortivaPande: {
//     id: "associacaoDesortivaPande",
//     name: "Associação Desortiva de Pande",
//     shortName: "ADP",
//     abbr: "APD",
//     stadium: "Indefinido",
//     colors: { primary: "pink", secondary: "green" },
//     competitions: ["govuro"],
//   },
//   internacionalMiluge: {
//     id: "internacionalMiluge",
//     name: "Internacional de Miluge",
//     shortName: "Inter de Miluge",
//     abbr: "IM",
//     stadium: "Campo do Internacional de Miluge",
//     colors: { primary: "red", secondary: "brown" },
//     competitions: ["govuro"],
//   },
//   ferroviarioCocheMagumbo: {
//     id: "ferroviarioCocheMagumbo",
//     name: "Ferroviário de Coche Magumbo",
//     shortName: "Ferroviário de Coche",
//     abbr: "FCM",
//     stadium: "Campo de Ferroviário de Coche Magumbo (Coche Magumbo)",
//     colors: { primary: "brown", secondary: "gold" },
//     competitions: ["govuro"],
//   },
//   guihambuaneNhaka: {
//     id: "guihambuaneNhaka",
//     name: "Guihambuane de Nhaka",
//     shortName: "Guihambuane de Nhaka",
//     abbr: "GN",
//     stadium: "Indefinido",
//     colors: { primary: "gold", secondary: "red" },
//     competitions: ["govuro"],
//   },
//   costaSolMagumbo: {
//     id: "costaSolMagumbo",
//     name: "Costa do Sol de Magumbo",
//     shortName: "Costa d'Sol d'Magumbo",
//     abbr: "CSM",
//     stadium: "Campo do Costa do Sol de Magumbo (Beito)",
//     colors: { primary: "aqua", secondary: "red" },
//     competitions: ["govuro"],
//   },
//   rioSambeFc: {
//     id: "rioSambeFc",
//     name: "Rio Sambe FC",
//     shortName: "Rio Sambe FC",
//     abbr: "RS",
//     stadium: "Campo de Rio Sambe (Coche Magumbo)",
//     logo: "/images/teams/rioSambeFc/rioSambeFc.jpg",
//     colors: { primary: "red", secondary: "green" },
//     competitions: ["govuro"],
//   },

//   // ── Campeonato de Pande ──────────────────────────────────────────────────

//   sportingMagumbanaFc: {
//     id: "sportingMagumbanaFc",
//     name: "Sporting de Magumbana",
//     shortName: "Sport. de Magumbana",
//     abbr: "SM",
//     stadium: "Campo de Magumbana",
//     colors: { primary: "blue", secondary: "red" },
//     competitions: ["govuro"],
//   },
//   palmeirasMadangelaFc: {
//     id: "palmeirasMadangelaFc",
//     name: "Palmeiras de Madangela",
//     shortName: "Palm. de Madangela",
//     abbr: "PM",
//     stadium: "Indefinido",
//     colors: { primary: "red", secondary: "blue" },
//     competitions: ["govuro"],
//   },
//   // ✅ BUG FIX: key was "sportNhachotaFc" but id was "sportingNhachotaFc"
//   // They must match so that teamLookup[team.id] works correctly.
//   sportingNhachotaFc: {
//     id: "sportingNhachotaFc",
//     name: "Sporting de Nhachota",
//     shortName: "Sport. de Nhachota",
//     abbr: "SN",
//     stadium: "Campo de Nhachota",
//     colors: { primary: "yellow", secondary: "blue" },
//     competitions: ["govuro"],
//   },
//   slowDownFc: {
//     id: "slowDownFc",
//     name: "Slow Down FC",
//     shortName: "Slow Down FC",
//     abbr: "SDFC",
//     stadium: "Indefinido",
//     logo: "/images/teams/slowDownFc/slowDownFc.jpg",
//     colors: { primary: "yellow", secondary: "red" },
//     competitions: ["govuro"],
//   },
//   revolutionFc: {
//     id: "revolutionFc",
//     name: "Revolution FC",
//     shortName: "Revolution FC",
//     abbr: "RFC",
//     stadium: "Indefinido",
//     colors: { primary: "red", secondary: "yellow" },
//     competitions: ["govuro"],
//   },
//   academicaMucucune: {
//     id: "academicaMucucune",
//     name: "Acadêmica de Mucucune",
//     shortName: "Acad. de Mucucune",
//     abbr: "AM",
//     stadium: "Indefinido",
//     colors: { primary: "blue", secondary: "green" },
//     competitions: ["govuro"],
//   },

//   // ── Campeonato de Morrumbene ─────────────────────────────────────────────

//   novoSclonioMaxixe: {
//     id: "novoSclonioMaxixe",
//     name: "Novo Sclonio da Maxixe",
//     shortName: "N. Sclonio da Maxixe",
//     abbr: "NSM",
//     stadium: "Indefinido",
//     colors: { primary: "green", secondary: "blue" },
//     competitions: ["govuro"],
//   },
//   madangelaFcMorrumbene: {
//     id: "madangelaFcMorrumbene",
//     name: "Madangela FC de Morrumbene",
//     shortName: "Madangela FC",
//     abbr: "MFC",
//     stadium: "Campo Desportivo Guigobane",
//     colors: { primary: "yellow", secondary: "orange" },
//     competitions: ["govuro"],
//   },
//   sportingKhundula: {
//     id: "sportingKhundula",
//     name: "Sporting de Khundula",
//     shortName: "Sport. de Khundula",
//     abbr: "SK",
//     stadium: "Indefinido",
//     colors: { primary: "yellow", secondary: "green" },
//     competitions: ["govuro"],
//   },
//   benficaIlhaInhambane: {
//     id: "benficaIlhaInhambane",
//     name: "Benfica da Ilha de Inhambane",
//     shortName: "Benf. d' Ilha d' I'mbane",
//     abbr: "BII",
//     stadium: "Indefinido",
//     colors: { primary: "orange", secondary: "green" },
//     competitions: ["govuro"],
//   },
//   santoAntonioMongue: {
//     id: "santoAntonioMongue",
//     name: "Santo Antônio de Mongue",
//     shortName: "S. Antônio de Mongue",
//     abbr: "SAM",
//     stadium: "Indefinido",
//     colors: { primary: "green", secondary: "orange" },
//     competitions: ["govuro"],
//   },
//   eduardoMondlaneLingaLinga: {
//     id: "eduardoMondlaneLingaLinga",
//     name: "Eduardo Mondlane de Linga-Linga",
//     shortName: "E.M. de Linga-Linga",
//     abbr: "EML",
//     stadium: "Indefinido",
//     colors: { primary: "brown", secondary: "red" },
//     competitions: ["govuro"],
//   },

//   // ── Demo / test data ─────────────────────────────────────────────────────
//   // These are placeholder teams used during development. Remove when going live.

//   eagles: {
//     id: "eagles",
//     name: "FC Eagles",
//     abbr: "FE",
//     founded: 2010,
//     stadium: "Eagles Arena A",
//     logo: "/images/teams/shield-gold.jpg",
//     colors: { primary: "#0033cc", secondary: "#ffcc00" },
//     contact: {
//       coach: "John Dalton",
//       captain: "Jaime Paulo",
//       phone: "+258 82 12 34 567",
//       email: "eagles@example.com",
//     },
//     // ✅ BUG FIX: previously had two `competitions` keys — JS kept only the last.
//     // Merged into a single array with both competitions.
//     competitions: ["govuro"],
//   },
//   lions: {
//     id: "lions",
//     name: "United Lions",
//     abbr: "UL",
//     founded: 2015,
//     stadium: "Lions Den",
//     logo: "/images/teams/shield-golden.jpg",
//     colors: { primary: "#FF0000", secondary: "#14ca14ff" },
//     contact: {
//       coach: "Lino Papagaio",
//       captain: "Borge Papalo",
//       phone: "+258 82 12 34 568",
//       email: "lions@example.com",
//     },
//     competitions: ["govuro"],
//   },
//   tigers: {
//     id: "tigers",
//     name: "Sporting Tigers",
//     abbr: "ST",
//     founded: 2012,
//     stadium: "Tigers Cave",
//     logo: "/images/teams/shield-golden.jpg",
//     colors: { primary: "#00FF00", secondary: "#000000" },
//     contact: {
//       coach: "Gomes Boavista",
//       captain: "Pedro Santos",
//       phone: "+258 82 12 34 569",
//       email: "tigers@example.com",
//     },
//     competitions: ["govuro"],
//   },
//   cats: {
//     id: "cats",
//     name: "Thunder Cats",
//     abbr: "TC",
//     founded: 2009,
//     stadium: "Cats House",
//     logo: "/images/teams/shield-gold.jpg",
//     colors: { primary: "#003cffff", secondary: "#df0c0cff" },
//     contact: {
//       coach: "Marcus Fontes",
//       captain: "Rafael Montes",
//       phone: "+258 82 12 34 560",
//       email: "cats@example.com",
//     },
//     competitions: ["govuro"],
//   },
// };

// export default teamsData;
