// ============================================
// MATCHES DATA
// ============================================
// Array of match objects
// 'status' field is CRITICAL for filtering:
//   - 'live': currently playing
//   - 'finished': completed matches
//   - 'upcoming': future matches

const matchesData = [
  {
    id: -1.01, // Unique ID for React keys homeTeamId: "sportingMagumbanaFc", //new
    awayTeamId: "palmeirasMadangelaFc", //new
    homeScore: 2, // Only for live/finished
    awayScore: 2,
    date: "2025-12-14", // ISO Format
    time: "15:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Magumbana",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Raul", "Gaucho"],
    awayScorers: ["Tony", "João"],
  },
  {
    id: -1.02, // Unique ID for React keys homeTeamId: "rioSambeFc", //new
    awayTeamId: "novoSclonioMaxixe", //new
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2025-12-14", // ISO Format
    time: "15:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Rio Sambe (Coche Magumbo)",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Mimi", "José"],
    awayScorers: [],
  },
  {
    id: -1.03, // Unique ID for React keys homeTeamId: "rioSambeFc", //new
    awayTeamId: "academicaMucucune", //new
    homeScore: 3, // Only for live/finished
    awayScore: 1,
    date: "2025-12-20", // ISO Format
    time: "15:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo do Internacional de Miluge",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["G2 (2)", "Leuss"],
    awayScorers: [],
  },
  {
    id: -1.04, // Unique ID for React keys homeTeamId: "slowDownFc", //new
    awayTeamId: "revolutionFc", //new
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2025-12-21", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Golo",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.05, // Unique ID for React keys homeTeamId: "sportingNhachotaFc", //new
    awayTeamId: "palmeirasMadangelaFc", //new
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2025-12-21", // ISO Format
    time: "14:00",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Nhachota",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.06, // Unique ID for React keys homeTeamId: "rioSambeFc", //new
    awayTeamId: "madangelaFcMorrumbene", //new
    homeScore: 1, // Only for live/finished
    awayScore: 0,
    date: "2025-12-21", // ISO Format
    time: "16:00",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo Desportivo de Guigobane",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["G2"],
    awayScorers: [],
  },
  {
    id: -1.07, // Unique ID for React keys homeTeamId: "rioSambeFc", //new
    awayTeamId: "sportingKhundula", //new
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2025-12-28", // ISO Format
    time: "16:00",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Rio Sambe (Coche Magumbo)",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.08, // Unique ID for React keys homeTeamId: "rioSambeFc", //new
    awayTeamId: "benficaIlhaInhambane", //new
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-02-07", // ISO Format
    time: "16:00",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo do Internacional de Miluge",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.09, // Unique ID for React keys homeTeamId: "santoAntonioMongue", //new
    awayTeamId: "rioSambeFc", //new
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-02-08", // ISO Format
    time: "14:00",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo do Internacional de Miluge",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.1, // Unique ID for React keys homeTeamId: "UDChimedje", //new
    awayTeamId: "kakanavasFC", //new
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-02-14", // ISO Format
    time: "06:00",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo Central de Pande",
    // info: "85+ espectadores", // Optional extra info
    competitionId: "wafawafa",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.11, // Unique ID for React keys homeTeamId: "rebentaFogo", //new
    awayTeamId: "bingaFC", //new
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-02-14", // ISO Format
    time: "08:00",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo Central de Pande",
    // info: "85+ espectadores", // Optional extra info
    competitionId: "wafawafa",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.12, // Unique ID for React keys homeTeamId: "realChibuca", //new
    awayTeamId: "onzeIrmaos", //new
    homeScore: 0, // Only for live/finished
    awayScore: 1,
    date: "2026-02-14", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo Central de Pande",
    // info: "85+ espectadores", // Optional extra info
    competitionId: "wafawafa",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.13, // Unique ID for React keys homeTeamId: "teamBebado", //new
    awayTeamId: "associacaoDesportivaPande", //new
    homeScore: 1, // Only for live/finished
    awayScore: 0,
    date: "2026-02-14", // ISO Format
    time: "16:00",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo Central de Pande",
    // info: "85+ espectadores", // Optional extra info
    competitionId: "wafawafa",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.14, // Unique ID for React keys homeTeamId: "internacionalMiluge", //new
    awayTeamId: "eduardoMondlaneLingaLinga", //new
    homeScore: 0, // Only for live/finished
    awayScore: 1,
    date: "2026-03-07", // ISO Format
    time: "14:00",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Ferroviário de Coche Magumbo (Coche Magumbo)",
    // info: "85+ espectadores", // Optional extra info
    // competitionId: "",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: ["Meck"],
  },
  {
    id: -1.15, // Unique ID for React keys homeTeamId: "ferroviarioCocheMagumbo", //new
    awayTeamId: "guihambuaneNhaka", //new
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-03-07", // ISO Format
    time: "15:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Ferroviário de Coche Magumbo (Coche Magumbo)",
    // info: "85+ espectadores", // Optional extra info
    // competitionId: "",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Mateus", "Mimi"],
    awayScorers: [],
  },
  // { // This game's final results are pedding
  //   id: -1.16, // Unique ID for React keys
  // homeTeamId: "costaSolMagumbo", //new
  //   awayTeamId: "rioSambeFc", //new
  //   homeScore: 2, // Only for live/finished
  //   awayScore: 0,
  //   date: "2026-03-15", // ISO Format
  //   time: "16:00",
  //   status: "upcoming", // 'live' | 'finished' | 'upcoming'
  //
  //   venue: "Campo do Costa do Sol de Magumbo (Beito)",
  //   // info: "85+ espectadores", // Optional extra info
  //   // competitionId: "",
  //   // ✅ NEW: Store as Array of Strings
  //   // Note: You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: [],
  //   awayScorers: [],
  // },

  // ================================================================
  // ================ Jogos do "Campeonato do Núcleo de Pande" ================
  // ================================================================

  // { TEMPLATE
  //   id: 0,
  // UDChimedje, kakanavasFC, rebentaFogo, bingaFC, realChibuca, onzeIrmaos, teamBebado, associacaoDesportivaPande, SFCSave, kingOfJungle, UDMaluvane, machacameFC
  // homeTeamId: "",
  //   awayTeamId: "",
  //   homeScore: 0, // Only for live/finished
  //   awayScore: 0,
  //   date: "2026-05-02", // ISO Format
  //   time: "14:30",
  //   status: "upcoming", // 'live' | 'finished' | 'upcoming'
  //   venue: "",
  //   // info: "85+ espectadores", // Optional extra info
  //   competitionId: "pande",
  //   // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: [],
  //   awayScorers: [],
  // },
  // ---------------------------- CNP 2026 Round 1 ---------------------------------
  {
    id: 1,
    homeTeamId: "kakanavasFC",
    awayTeamId: "SFCSave",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-05-02", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 1", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Estêvão Alberto", "Edmilson Tomás"],
    awayScorers: ["Alfiado Manave"],
  },
  {
    id: 2,
    homeTeamId: "UDChimedje",
    awayTeamId: "kingOfJungle",
    homeScore: 2, // Only for live/finished
    awayScore: 2,
    date: "2026-05-03", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Estádio da Luz",
    info: "CNP 2026 - Jornada 1", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Delso Artur", "Kelton Paulito"],
    awayScorers: ["António Isac", "AUTO-GOLO"],
  },
  // 842785594 Lourenco
  {
    id: 3,
    homeTeamId: "onzeIrmaos",
    awayTeamId: "realChibuca",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-05-03", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Colonga",
    info: "CNP 2026 - Jornada 1", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 4,
    homeTeamId: "rebentaFogo",
    awayTeamId: "teamBebado",
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-05-03", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 1", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Quelito Amós"],
    awayScorers: ["Tomás Antônio", "Alexandre André"],
  },

  {
    id: 5,
    homeTeamId: "associacaoDesportivaPande",
    awayTeamId: "UDMaluvane",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-05-03", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo da Revolução",
    info: "CNP 2026 - Jornada 1", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Osvaldo Amosse", "Hélio Jaime"],
    awayScorers: ["Salvador Felipe"],
  },
  {
    id: 6,
    homeTeamId: "bingaFC",
    awayTeamId: "machacameFC",
    homeScore: 1, // Only for live/finished
    awayScore: 3,
    date: "2026-05-03", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo Central de Pande",
    info: "CNP 2026 - Jornada 1", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Gesselino da Gilda"],
    awayScorers: ["Inácio Luís (2x)", "Zito Salame"],
  },

  // ---------------------------- CNP 2026 Round 2 ---------------------------------

  {
    id: 7,
    homeTeamId: "UDChimedje",
    awayTeamId: "onzeIrmaos",
    homeScore: 0, // Only for live/finished
    awayScore: 2,
    date: "2026-05-09", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Estádio da Luz",
    info: "CNP 2026 - Jornada 2", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: ["Ilordêncio Massambo", "Joaquim Fabião (P)"],
  },
  {
    id: 8,
    homeTeamId: "teamBebado",
    awayTeamId: "bingaFC",
    homeScore: 6, // Only for live/finished
    awayScore: 0,
    date: "2026-05-09", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 2", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [
      "Picardo Justino",
      "Tomás Antônio (3x)",
      "Alexandre André",
      "-",
    ],
    awayScorers: [],
  },
  {
    id: 9,
    homeTeamId: "machacameFC",
    awayTeamId: "associacaoDesportivaPande",
    homeScore: 2, // Only for live/finished
    awayScore: 2,
    date: "2026-05-10", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Machacame",
    info: "CNP 2026 - Jornada 2", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Inácio Luís (2x)"],
    awayScorers: [],
  },
  {
    id: 10,
    homeTeamId: "kingOfJungle",
    awayTeamId: "UDMaluvane",
    homeScore: 1, // Only for live/finished
    awayScore: 0,
    date: "2026-05-10", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Luido",
    info: "CNP 2026 - Jornada 2", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 11,
    homeTeamId: "realChibuca",
    awayTeamId: "kakanavasFC",
    homeScore: 2, // Only for live/finished
    awayScore: 2,
    date: "2026-05-10", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 2", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Lindo Vasco (P)", "Armando Constantino"],
    awayScorers: [],
  },
  {
    id: 12,
    homeTeamId: "SFCSave",
    awayTeamId: "rebentaFogo",
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-05-10", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Save",
    info: "CNP 2026 - Jornada 2", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },

  // ---------------------------- CNP 2026 Round 3 ---------------------------------

  {
    id: 13,
    homeTeamId: "UDMaluvane",
    awayTeamId: "machacameFC",
    homeScore: 0, // Only for live/finished
    awayScore: 2,
    date: "2026-05-16", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Muzazayila Stadium",
    info: "CNP 2026 - Jornada 3", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 14,
    homeTeamId: "bingaFC",
    awayTeamId: "SFCSave",
    homeScore: 2, // Only for live/finished
    awayScore: 2,
    date: "2026-05-16", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 3", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Paulo", "Gesselino da Gilda"],
    awayScorers: [],
  },
  {
    id: 15,
    homeTeamId: "rebentaFogo",
    awayTeamId: "realChibuca",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-05-16", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo Central de Pande",
    info: "CNP 2026 - Jornada 3", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 16,
    homeTeamId: "onzeIrmaos",
    awayTeamId: "kingOfJungle",
    homeScore: 4, // Only for live/finished
    awayScore: 0,
    date: "2026-05-17", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Colonga",
    info: "CNP 2026 - Jornada 3", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [
      "Ilordêncio Massambo",
      "Dário",
      "Joaquim Fabião",
      "Joaquim Fabião",
    ],
    awayScorers: [],
  },
  {
    id: 17,
    homeTeamId: "associacaoDesportivaPande",
    awayTeamId: "teamBebado",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-05-17", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo da Revolução",
    info: "CNP 2026 - Jornada 3", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 18,
    homeTeamId: "kakanavasFC",
    awayTeamId: "UDChimedje",
    homeScore: 2, // Only for live/finished
    awayScore: 2,
    date: "2026-05-17", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 3", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  // ---------------------------- CNP 2026 Round 4 ---------------------------------
  {
    id: 19,
    homeTeamId: "onzeIrmaos",
    awayTeamId: "kakanavasFC",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-05-23", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Colonga",
    info: "CNP 2026 - Jornada 4", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 20,
    homeTeamId: "SFCSave",
    awayTeamId: "associacaoDesportivaPande",
    homeScore: 0, // Only for live/finished
    awayScore: 1,
    date: "2026-05-23", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Save",
    info: "CNP 2026 - Jornada 4", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 21,
    homeTeamId: "teamBebado",
    awayTeamId: "UDMaluvane",
    homeScore: 2, // Only for live/finished
    awayScore: 2,
    date: "2026-05-23", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 4", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 22,
    homeTeamId: "kingOfJungle",
    awayTeamId: "machacameFC",
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-05-24", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Luido",
    info: "CNP 2026 - Jornada 4", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 23,
    homeTeamId: "UDChimedje",
    awayTeamId: "rebentaFogo",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-05-24", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Estádio da Luz",
    info: "CNP 2026 - Jornada 4", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 24,
    homeTeamId: "realChibuca",
    awayTeamId: "bingaFC",
    homeScore: 3, // Only for live/finished
    awayScore: 1,
    date: "2026-05-24", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 4", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Miller", "Bento", "Milton"],
    awayScorers: ["Gesselino da Gilda"],
  },
  // ---------------------------- CNP 2026 Round 5 ---------------------------------
  {
    id: 25,
    homeTeamId: "machacameFC",
    awayTeamId: "teamBebado",
    homeScore: 0, // Only for live/finished
    awayScore: 1,
    date: "2026-05-30", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Machacame",
    info: "CNP 2026 - Jornada 5", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 26,
    homeTeamId: "bingaFC",
    awayTeamId: "UDChimedje",
    homeScore: 2, // Only for live/finished
    awayScore: 2,
    date: "2026-05-30", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 5", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 27,
    homeTeamId: "kakanavasFC",
    awayTeamId: "kingOfJungle",
    homeScore: 3, // Only for live/finished
    awayScore: 0,
    date: "2026-05-30", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo Central de Pande",
    info: "CNP 2026 - Jornada 5", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Enigma (2x)", "Mabeza"],
    awayScorers: [],
  },
  {
    id: 28,
    homeTeamId: "UDMaluvane",
    awayTeamId: "SFCSave",
    homeScore: 1, // Only for live/finished
    awayScore: 4,
    date: "2026-05-31", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Muzazayila Stadium",
    info: "CNP 2026 - Jornada 5", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 29,
    homeTeamId: "rebentaFogo",
    awayTeamId: "onzeIrmaos",
    homeScore: 0, // Only for live/finished
    awayScore: 3,
    date: "2026-05-31", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 5", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: ["Joaquim Fabião (2x)", "Milagre Almeida"],
  },
  {
    id: 30,
    homeTeamId: "associacaoDesportivaPande",
    awayTeamId: "realChibuca",
    homeScore: 2, // Only for live/finished
    awayScore: 2,
    date: "2026-05-31", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo da Revolução",
    info: "CNP 2026 - Jornada 5", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Osvaldo", "Hermílio"],
    awayScorers: ["Bento", "Lisdon"],
  },
  // ---------------------------- CNP 2026 Round 6 ---------------------------------
  {
    id: 31,
    homeTeamId: "realChibuca",
    awayTeamId: "UDMaluvane",
    homeScore: 4, // Only for live/finished
    awayScore: 2,
    date: "2026-06-06", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 6", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Miller (2x)", "Armando (2x)"],
    awayScorers: ["Simôs (2x)"],
  },
  {
    id: 32,
    homeTeamId: "onzeIrmaos",
    awayTeamId: "bingaFC",
    homeScore: 4, // Only for live/finished
    awayScore: 1,
    date: "2026-06-06", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Colonga",
    info: "CNP 2026 - Jornada 6", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Joaquím", "Dário (2x)", "AUOT-GOLO"],
    awayScorers: ["Maique"],
  },
  {
    id: 33,
    homeTeamId: "SFCSave",
    awayTeamId: "machacameFC",
    homeScore: 0, // Only for live/finished
    awayScore: 1,
    date: "2026-06-06", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Save",
    info: "CNP 2026 - Jornada 6", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 34,
    homeTeamId: "UDChimedje",
    awayTeamId: "associacaoDesportivaPande",
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-06-07", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Estadio da Luz",
    info: "CNP 2026 - Jornada 6", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 35,
    homeTeamId: "kingOfJungle",
    awayTeamId: "teamBebado",
    homeScore: 1, // Only for live/finished
    awayScore: 5,
    date: "2026-06-07", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Luído",
    info: "CNP 2026 - Jornada 6", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["-"],
    awayScorers: ["Costâncio (P)", "Alexandre", "Isco", "Dodô (2x)"],
  },
  {
    id: 36,
    homeTeamId: "kakanavasFC",
    awayTeamId: "rebentaFogo",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-06-07", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 6", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Gaúcho", "Mabeza"],
    awayScorers: ["Pastamo"],
  },
  // UDChimedje, kakanavasFC, rebentaFogo, bingaFC, realChibuca, onzeIrmaos, teamBebado, associacaoDesportivaPande, SFCSave, kingOfJungle, UDMaluvane, machacameFC

  // ================================================================
  // ================ Jogos do "Campeonato de Nova Mambone" ================
  // ================================================================

  // ---------------------------- CFNM 2026 Round 1 ---------------------------------
  // {
  //   id: -1,
  //   homeTeamId: "kakanavasFC",
  //   awayTeamId: "SFCSave",
  //   homeScore: 2, // Only for live/finished
  //   awayScore: 1,
  //   date: "2026-05-02", // ISO Format
  //   time: "14:30",
  //   status: "finished", // 'live' | 'finished' | 'upcoming'
  //   venue: "Campo de Mazino",
  //   info: "CFNM 2026 - Jornada 1", // Optional extra info
  //   competitionId: "pande",
  //   // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: ["Estêvão Alberto", "Edmilson Tomás"],
  //   awayScorers: ["Alfiado Manave"],
  // },
  // {
  //   id: -2,
  //   homeTeamId: "UDChimedje",
  //   awayTeamId: "kingOfJungle",
  //   homeScore: 2, // Only for live/finished
  //   awayScore: 2,
  //   date: "2026-05-03", // ISO Format
  //   time: "14:30",
  //   status: "finished", // 'live' | 'finished' | 'upcoming'
  //   venue: "Estádio da Luz",
  //   info: "CFNM 2026 - Jornada 1", // Optional extra info
  //   competitionId: "pande",
  //   // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: ["Delso Artur", "Kelton Paulito"],
  //   awayScorers: ["António Isac", "AUTO-GOLO"],
  // },
  // // 842785594 Lourenco
  // {
  //   id: -3,
  //   homeTeamId: "onzeIrmaos",
  //   awayTeamId: "realChibuca",
  //   homeScore: 0, // Only for live/finished
  //   awayScore: 0,
  //   date: "2026-05-03", // ISO Format
  //   time: "14:30",
  //   status: "finished", // 'live' | 'finished' | 'upcoming'
  //   venue: "Campo de Colonga",
  //   info: "CFNM 2026 - Jornada 1", // Optional extra info
  //   competitionId: "pande",
  //   // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: [],
  //   awayScorers: [],
  // },
  // {
  //   id: -4,
  //   homeTeamId: "rebentaFogo",
  //   awayTeamId: "teamBebado",
  //   homeScore: 1, // Only for live/finished
  //   awayScore: 2,
  //   date: "2026-05-03", // ISO Format
  //   time: "14:30",
  //   status: "finished", // 'live' | 'finished' | 'upcoming'
  //   venue: "Campo de Mazino",
  //   info: "CFNM 2026 - Jornada 1", // Optional extra info
  //   competitionId: "pande",
  //   // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: ["Quelito Amós"],
  //   awayScorers: ["Tomás Antônio", "Alexandre André"],
  // },

  // {
  //   id: -5,
  //   homeTeamId: "associacaoDesportivaPande",
  //   awayTeamId: "UDMaluvane",
  //   homeScore: 2, // Only for live/finished
  //   awayScore: 1,
  //   date: "2026-05-03", // ISO Format
  //   time: "14:30",
  //   status: "finished", // 'live' | 'finished' | 'upcoming'
  //   venue: "Campo da Revolução",
  //   info: "CFNM 2026 - Jornada 1", // Optional extra info
  //   competitionId: "pande",
  //   // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: ["Osvaldo Amosse", "Hélio Jaime"],
  //   awayScorers: ["Salvador Felipe"],
  // },
  // {
  //   id: -6,
  //   homeTeamId: "bingaFC",
  //   awayTeamId: "machacameFC",
  //   homeScore: 1, // Only for live/finished
  //   awayScore: 3,
  //   date: "2026-05-03", // ISO Format
  //   time: "14:30",
  //   status: "finished", // 'live' | 'finished' | 'upcoming'
  //   venue: "Campo Central de Pande",
  //   info: "CFNM 2026 - Jornada 1", // Optional extra info
  //   competitionId: "pande",
  //   // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: ["Gesselino da Gilda"],
  //   awayScorers: ["Inácio Luís (2x)", "Zito Salame"],
  // },

  // // ---------------------------- CFNM 2026 Round 2 ---------------------------------

  // {
  //   id: -7,
  //   homeTeamId: "UDChimedje",
  //   awayTeamId: "onzeIrmaos",
  //   homeScore: 0, // Only for live/finished
  //   awayScore: 2,
  //   date: "2026-05-09", // ISO Format
  //   time: "14:30",
  //   status: "finished", // 'live' | 'finished' | 'upcoming'
  //   venue: "Estádio da Luz",
  //   info: "CFNM 2026 - Jornada 2", // Optional extra info
  //   competitionId: "pande",
  //   // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: [],
  //   awayScorers: ["Ilordêncio Massambo", "Joaquim Fabião (P)"],
  // },
  // {
  //   id: -8,
  //   homeTeamId: "teamBebado",
  //   awayTeamId: "bingaFC",
  //   homeScore: 6, // Only for live/finished
  //   awayScore: 0,
  //   date: "2026-05-09", // ISO Format
  //   time: "14:30",
  //   status: "finished", // 'live' | 'finished' | 'upcoming'
  //   venue: "Campo de Mazino",
  //   info: "CFNM 2026 - Jornada 2", // Optional extra info
  //   competitionId: "pande",
  //   // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: [
  //     "Picardo Justino",
  //     "Tomás Antônio (3x)",
  //     "Alexandre André",
  //     "-",
  //   ],
  //   awayScorers: [],
  // },
  // {
  //   id: -9,
  //   homeTeamId: "machacameFC",
  //   awayTeamId: "associacaoDesportivaPande",
  //   homeScore: 2, // Only for live/finished
  //   awayScore: 2,
  //   date: "2026-05-10", // ISO Format
  //   time: "14:30",
  //   status: "finished", // 'live' | 'finished' | 'upcoming'
  //   venue: "Campo de Machacame",
  //   info: "CFNM 2026 - Jornada 2", // Optional extra info
  //   competitionId: "pande",
  //   // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: ["Inácio Luís (2x)"],
  //   awayScorers: [],
  // },
  // {
  //   id: -10,
  //   homeTeamId: "kingOfJungle",
  //   awayTeamId: "UDMaluvane",
  //   homeScore: 1, // Only for live/finished
  //   awayScore: 0,
  //   date: "2026-05-10", // ISO Format
  //   time: "14:30",
  //   status: "finished", // 'live' | 'finished' | 'upcoming'
  //   venue: "Campo de Luido",
  //   info: "CFNM 2026 - Jornada 2", // Optional extra info
  //   competitionId: "pande",
  //   // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: [],
  //   awayScorers: [],
  // },
  // {
  //   id: -11,
  //   homeTeamId: "realChibuca",
  //   awayTeamId: "kakanavasFC",
  //   homeScore: 2, // Only for live/finished
  //   awayScore: 2,
  //   date: "2026-05-10", // ISO Format
  //   time: "14:30",
  //   status: "finished", // 'live' | 'finished' | 'upcoming'
  //   venue: "Campo de Mazino",
  //   info: "CFNM 2026 - Jornada 2", // Optional extra info
  //   competitionId: "pande",
  //   // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: ["Lindo Vasco (P)", "Armando Constantino"],
  //   awayScorers: [],
  // },
  // {
  //   id: -12,
  //   homeTeamId: "SFCSave",
  //   awayTeamId: "rebentaFogo",
  //   homeScore: 1, // Only for live/finished
  //   awayScore: 2,
  //   date: "2026-05-10", // ISO Format
  //   time: "14:30",
  //   status: "finished", // 'live' | 'finished' | 'upcoming'
  //   venue: "Campo de Save",
  //   info: "CFNM 2026 - Jornada 2", // Optional extra info
  //   competitionId: "pande",
  //   // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: [],
  //   awayScorers: [],
  // },

  // ---------------------------- CFNM 2026 Round 3 ---------------------------------

  {
    id: -14,
    homeTeamId: "sulSave",
    awayTeamId: "sportingMaluvane",
    homeScore: 2, // Only for live/finished
    awayScore: 2,
    date: "2026-05-16", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Jenga",
    info: "CFNM 2026 - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -15,
    homeTeamId: "FCMataula",
    awayTeamId: "primeiroMaio",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-05-16", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mataula",
    info: "CFNM 2026 - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },

  {
    id: -16,
    homeTeamId: "FCBatata",
    awayTeamId: "FCMahave",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-05-16", // ISO Format
    time: "14:30",
    status: "canceled", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Batata",
    info: "CFNM 2026 - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -17,
    homeTeamId: "desportivoA",
    awayTeamId: "CDMaxaquene",
    homeScore: 3, // Only for live/finished
    awayScore: 2,
    date: "2026-05-16", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Matasse",
    info: "CFNM 2026 - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -18,
    homeTeamId: "escolaBola",
    awayTeamId: "costaSol",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-05-17", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mataula",
    info: "CFNM 2026 - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -19,
    homeTeamId: "benficaJenga",
    awayTeamId: "juventusMacomba",
    homeScore: 2, // Only for live/finished
    awayScore: 3,
    date: "2026-05-17", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Jenga",
    info: "CFNM 2026 - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -20,
    homeTeamId: "sagradoCJesus",
    awayTeamId: "PFCMussassa",
    homeScore: 5, // Only for live/finished
    awayScore: 0,
    date: "2026-05-17", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Doane",
    info: "CFNM 2026 - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
  },
  {
    id: -21,
    homeTeamId: "ligaDesportiva",
    awayTeamId: "desportivoB",
    homeScore: 3, // Only for live/finished
    awayScore: 0,
    date: "2026-05-17", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo das Palmeiras",
    info: "CFNM 2026 - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  // ---------------------------- CFNM 2026 Round 4 ---------------------------------
  {
    id: -22,
    homeTeamId: "primeiroMaio",
    awayTeamId: "sulSave",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-05-23", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mussanga",
    info: "CFNM 2026 - Jornada 4", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -23,
    homeTeamId: "CDMaxaquene",
    awayTeamId: "FCMataula",
    homeScore: 3, // Only for live/finished
    awayScore: 2,
    date: "2026-05-23", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: " Campo das Palmeiras",
    info: "CFNM 2026 - Jornada 4", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -24,
    homeTeamId: "FCMahave",
    awayTeamId: "desportivoA",
    homeScore: 0, // Only for live/finished
    awayScore: 7,
    date: "2026-05-23", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mataula",
    info: "CFNM 2026 - Jornada 4", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -25,
    homeTeamId: "costaSol",
    awayTeamId: "FCBatata",
    homeScore: 1, // Only for live/finished
    awayScore: 7,
    date: "2026-05-23", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Chimunda",
    info: "CFNM 2026 - Jornada 4", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -26,
    homeTeamId: "sportingMaluvane",
    awayTeamId: "sagradoCJesus",
    homeScore: 1, // Only for live/finished
    awayScore: 3,
    date: "2026-05-24", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Muzazayila Stadium",
    info: "CFNM 2026 - Jornada 4", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -27,
    homeTeamId: "desportivoB",
    awayTeamId: "PFCMussassa",
    homeScore: 0, // Only for live/finished
    awayScore: 1,
    date: "2026-05-24", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Matasse",
    info: "CFNM 2026 - Jornada 4", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -28,
    homeTeamId: "juventusMacomba",
    awayTeamId: "escolaBola",
    homeScore: 3, // Only for live/finished
    awayScore: 1,
    date: "2026-05-24", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Macomba",
    info: "CFNM 2026 - Jornada 4", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -29,
    homeTeamId: "ligaDesportiva",
    awayTeamId: "benficaJenga",
    homeScore: 5, // Only for live/finished
    awayScore: 2,
    date: "2026-05-24", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo das Palmeiras",
    info: "CFNM 2026 - Jornada 4", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  // ---------------------------- CFNM 2026 Round 5 ---------------------------------
  {
    id: -30,
    homeTeamId: "FCBatata",
    awayTeamId: "juventusMacomba",
    homeScore: 0, // Only for live/finished
    awayScore: 2,
    date: "2026-05-30", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Batata",
    info: "CFNM 2026 - Jornada 5", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -31,
    homeTeamId: "benficaJenga",
    awayTeamId: "desportivoB",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-05-30", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Macomba",
    info: "CFNM 2026 - Jornada 5", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -32,
    homeTeamId: "sulSave",
    awayTeamId: "CDMaxaquene",
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-05-30", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Jenga",
    info: "CFNM 2026 - Jornada 5", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -33,
    homeTeamId: "PFCMussassa",
    awayTeamId: "sportingMaluvane",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-05-30", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo das Palmeiras",
    info: "CFNM 2026 - Jornada 5", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -34,
    homeTeamId: "escolaBola",
    awayTeamId: "ligaDesportiva",
    homeScore: 0, // Only for live/finished
    awayScore: 3,
    date: "2026-05-30", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mataula",
    info: "CFNM 2026 - Jornada 5", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -35,
    homeTeamId: "FCMataula",
    awayTeamId: "FCMahave",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-05-31", // ISO Format
    time: "14:30",
    status: "canceled", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mataula",
    info: "CFNM 2026 - Jornada 5", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -36,
    homeTeamId: "sagradoCJesus",
    awayTeamId: "primeiroMaio",
    homeScore: 0, // Only for live/finished
    awayScore: 1,
    date: "2026-05-31", // ISO Format
    time: "14:30",
    status: "canceled", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Doane",
    info: "CFNM 2026 - Jornada 5", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -37,
    homeTeamId: "desportivoA",
    awayTeamId: "costaSol",
    homeScore: 6, // Only for live/finished
    awayScore: 0,
    date: "2026-05-31", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Matasse",
    info: "CFNM 2026 - Jornada 5", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },

  // ligaDesportiva sportingMaluvane benficaJenga CDMaxaquene juventusMacomba sulSave PFCMussassa FCBatata desportivoA  sagradoCJesus primeiroMaio FCMataula costaSol escolaBola FCMahave desportivoB
];

export default matchesData;
{
  /**


// ================ // ------DEMO DATA--------================
  {
    id: 1000, // Unique ID for React keys homeTeamId: "onzeIrmaos", //new
    awayTeamId: "bingaFC", //new
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-03-15", // ISO Format
    time: "16:00",
    status: "upcoming", // 'live' | 'finished' | 'upcoming'
    venue: "Hello Stadium",
    // info: "85+ espectadores", // Optional extra info
    competitionId: "govuro",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 1001, // Unique ID for React keys homeTeamId: "rioSambeFc", //new
    awayTeamId: "costaSolMagumbo", //new
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-03-15", // ISO Format
    time: "16:00",
    status: "upcoming", // 'live' | 'finished' | 'upcoming'
    venue: "Hello Stadium",
    // info: "85+ espectadores", // Optional extra info
    competitionId: "morrumbene",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 1002, // Unique ID for React keys homeTeamId: "guihambuaneNhaka", //new
    awayTeamId: "internacionalMiluge", //new
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-03-15", // ISO Format
    time: "16:00",
    status: "live", // 'live' | 'finished' | 'upcoming'
    venue: "Hello Stadium",
    // info: "85+ espectadores", // Optional extra info
    competitionId: "morrumbene",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 1003, // Unique ID for React keys homeTeamId: "realPande", //new
    awayTeamId: "kakanavas", //new
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-03-15", // ISO Format
    time: "16:00",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Hello Stadium",
    // info: "85+ espectadores", // Optional extra info
    competitionId: "govuro",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 1004, // Unique ID for React keys homeTeamId: "ferroviarioCocheMagumbo", //new
    awayTeamId: "sportingMagumbanaFc", //new
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-03-15", // ISO Format
    time: "15:00",
    status: "upcoming", // 'live' | 'finished' | 'upcoming'
    venue: "Hello Stadium",
    // info: "85+ espectadores", // Optional extra info
    competitionId: "morrumbene",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },


   {
    id: "togleForSample",
    // homeTeam: teams.eagles,
    // awayTeam: teams.tigers, homeTeamId: "cats", //new
    awayTeamId: "tigers", //new
    // No scores for upcoming matches
    date: "2026-04-26", // ISO Format
    time: "16:15",
    status: "upcoming",
    venue: "Campo Principal",
  },
  //============================================

  */
}
