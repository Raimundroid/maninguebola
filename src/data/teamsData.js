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
  sportNhachotaFc: {
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
  //   eagles: {
  //     id: "eagles", // Unique identifier
  //     name: "FC Eagles", // Full team name
  //     abbr: "FE", // Abbreviation for logos
  //     // position: "1",
  //     // points: "99", /////
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
  //   },
  // lions: {
  //   id: "lions",
  //   name: "United Lions",
  //   abbr: "UL",
  //   // position: "2",
  //   // points: "75", /////
  //   founded: 2015,
  //   stadium: "Lions Den",

  //   logo: "/images/teams/shield-golden.jpg",
  //   colors: { primary: "#FF0000", secondary: "#14ca14ff" },
  //   contact: {
  //     coach: "Lino Papagaio",
  //     captain: "Borge Papalo",
  //     phone: "+258 82 12 34 568",
  //     email: "lions@example.com",
  //   },
  // },
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
  },
};

export default teamsData;
