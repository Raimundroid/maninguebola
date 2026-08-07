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
    id: -1.01, // Unique ID for React keys
    homeTeamId: "sportingMagumbanaFc", //new
    awayTeamId: "palmeirasMadangelaFc", //new
    homeScore: 2, // Only for live/finished
    awayScore: 2,
    date: "2025-12-14", // ISO Format
    time: "15:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Magumbana",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Raul", "Gaucho"],
    awayScorers: ["Tony", "João"],
  },
  {
    id: -1.02, // Unique ID for React keys
    homeTeamId: "rioSambeFc", //new
    awayTeamId: "novoSclonioMaxixe", //new
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2025-12-14", // ISO Format
    time: "15:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Rio Sambe (Coche Magumbo)",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Mimi", "José"],
    awayScorers: [],
  },
  {
    id: -1.03, // Unique ID for React keys
    homeTeamId: "rioSambeFc", //new
    awayTeamId: "academicaMucucune", //new
    homeScore: 3, // Only for live/finished
    awayScore: 1,
    date: "2025-12-20", // ISO Format
    time: "15:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo do Internacional de Miluge",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["G2 (2)", "Leuss"],
    awayScorers: [],
  },
  {
    id: -1.04, // Unique ID for React keys
    homeTeamId: "slowDownFc", //new
    awayTeamId: "revolutionFc", //new
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2025-12-21", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Golo",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.05, // Unique ID for React keys
    homeTeamId: "sportingNhachotaFc", //new
    awayTeamId: "palmeirasMadangelaFc", //new
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2025-12-21", // ISO Format
    time: "14:00",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Nhachota",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.06, // Unique ID for React keys
    homeTeamId: "rioSambeFc", //new
    awayTeamId: "madangelaFcMorrumbene", //new
    homeScore: 1, // Only for live/finished
    awayScore: 0,
    date: "2025-12-21", // ISO Format
    time: "16:00",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo Desportivo de Guigobane",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["G2"],
    awayScorers: [],
  },
  {
    id: -1.07, // Unique ID for React keys
    homeTeamId: "rioSambeFc", //new
    awayTeamId: "sportingKhundula", //new
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2025-12-28", // ISO Format
    time: "16:00",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Rio Sambe (Coche Magumbo)",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.08, // Unique ID for React keys
    homeTeamId: "rioSambeFc", //new
    awayTeamId: "benficaIlhaInhambane", //new
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-02-07", // ISO Format
    time: "16:00",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo do Internacional de Miluge",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.09, // Unique ID for React keys
    homeTeamId: "santoAntonioMongue", //new
    awayTeamId: "rioSambeFc", //new
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-02-08", // ISO Format
    time: "14:00",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo do Internacional de Miluge",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.1, // Unique ID for React keys
    homeTeamId: "UDChimedje", //new
    awayTeamId: "kakanavasFC", //new
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-02-14", // ISO Format
    time: "06:00",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo Central de Pande",
    // info: "85+ espectadores", // Optional extra info
    competitionId: "wafawafa",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.11, // Unique ID for React keys
    homeTeamId: "rebentaFogo", //new
    awayTeamId: "bingaFC", //new
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-02-14", // ISO Format
    time: "08:00",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo Central de Pande",
    // info: "85+ espectadores", // Optional extra info
    competitionId: "wafawafa",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.12, // Unique ID for React keys
    homeTeamId: "realChibuca", //new
    awayTeamId: "onzeIrmaos", //new
    homeScore: 0, // Only for live/finished
    awayScore: 1,
    date: "2026-02-14", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo Central de Pande",
    // info: "85+ espectadores", // Optional extra info
    competitionId: "wafawafa",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.13, // Unique ID for React keys
    homeTeamId: "teamBebado", //new
    awayTeamId: "associacaoDesportivaPande", //new
    homeScore: 1, // Only for live/finished
    awayScore: 0,
    date: "2026-02-14", // ISO Format
    time: "16:00",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo Central de Pande",
    // info: "85+ espectadores", // Optional extra info
    competitionId: "wafawafa",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -1.14, // Unique ID for React keys
    homeTeamId: "internacionalMiluge", //new
    awayTeamId: "eduardoMondlaneLingaLinga", //new
    homeScore: 0, // Only for live/finished
    awayScore: 1,
    date: "2026-03-07", // ISO Format
    time: "14:00",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Ferroviário de Coche Magumbo (Coche Magumbo)",
    // info: "85+ espectadores", // Optional extra info
    // competitionId: "",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: ["Meck"],
  },
  {
    id: -1.15, // Unique ID for React keys
    homeTeamId: "ferroviarioCocheMagumbo", //new
    awayTeamId: "guihambuaneNhaka", //new
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-03-07", // ISO Format
    time: "15:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Ferroviário de Coche Magumbo (Coche Magumbo)",
    // info: "85+ espectadores", // Optional extra info
    // competitionId: "",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Mateus", "Mimi"],
    awayScorers: [],
  },
  // { // This game's final results are pedding
  //   id: -1.16, // Unique ID for React key  // homeTeamId: "costaSolMagumbo", //new
  //   awayTeamId: "rioSambeFc", //new
  //   homeScore: 2, // Only for live/finished
  //   awayScore: 0,
  //   date: "2026-03-15", // ISO Format
  //   time: "16:00",
  //   status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
  //   status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 6", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Gaúcho", "Mabeza"],
    awayScorers: ["Pastamo"],
  },
  // ---------------------------- CNP 2026 Round 7 ---------------------------------
  {
    id: 37,
    homeTeamId: "UDMaluvane",
    awayTeamId: "UDChimedje",
    homeScore: 2, // Only for live/finished
    awayScore: 3,
    date: "2026-06-13", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Muzazayila Stadium",
    info: "CNP 2026 - Jornada 7", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 38,
    homeTeamId: "teamBebado",
    awayTeamId: "SFCSave",
    homeScore: 4, // Only for live/finished
    awayScore: 0,
    date: "2026-06-13", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 7", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Amade (3x)", "Alexandre"],
    awayScorers: [],
  },
  {
    id: 39,
    homeTeamId: "rebentaFogo",
    awayTeamId: "kingOfJungle",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-06-13", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo Central de Pande",
    info: "CNP 2026 - Jornada 7", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Pastamo", "Quelito (P)"],
    awayScorers: ["Antônio"],
  },
  {
    id: 40,
    homeTeamId: "machacameFC",
    awayTeamId: "realChibuca",
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-06-14", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Save",
    info: "CNP 2026 - Jornada 7", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 41,
    homeTeamId: "bingaFC",
    awayTeamId: "kakanavasFC",
    homeScore: 1, // Only for live/finished
    awayScore: 3,
    date: "2026-06-14", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 7", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 42,
    homeTeamId: "associacaoDesportivaPande",
    awayTeamId: "onzeIrmaos",
    homeScore: 6, // Only for live/finished
    awayScore: 2,
    date: "2026-06-14", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo da Revolução",
    info: "CNP 2026 - Jornada 7", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Tomás (2x)", "Nelson", "Hermílio (2x)", "Naldo"],
    awayScorers: ["Ilordêncio", "Nelson"],
  },
  // ---------------------------- CNP 2026 Round 8 ---------------------------------
  {
    id: 43,
    homeTeamId: "kakanavasFC",
    awayTeamId: "associacaoDesportivaPande",
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-06-20", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 8", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Obsajem", "Titos"],
    awayScorers: [],
  },
  {
    id: 44,
    homeTeamId: "UDChimedje",
    awayTeamId: "machacameFC",
    homeScore: 0, // Only for live/finished
    awayScore: 2,
    date: "2026-06-20", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Muzazayila Stadium",
    info: "CNP 2026 - Jornada 8", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 45,
    homeTeamId: "kingOfJungle",
    awayTeamId: "SFCSave",
    homeScore: 3, // Only for live/finished
    awayScore: 0,
    date: "2026-06-20", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Luído",
    info: "CNP 2026 - Jornada 8 || F. de Comparrência", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 46,
    homeTeamId: "rebentaFogo",
    awayTeamId: "bingaFC",
    homeScore: 3, // Only for live/finished
    awayScore: 2,
    date: "2026-06-20", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo Central de Pande",
    info: "CNP 2026 - Jornada 8", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Samuel", "Pastamo", "AUTO-GOLO"],
    awayScorers: ["Ângelo", "Gesselino (P)"],
  },
  {
    id: 47,
    homeTeamId: "realChibuca",
    awayTeamId: "teamBebado",
    homeScore: 2, // Only for live/finished
    awayScore: 3,
    date: "2026-06-21", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 8", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Lindo (45', 49')"],
    awayScorers: ["Amade 19'", "AUTO-GOLO 74'", "Bavo 77'"],
  },
  {
    id: 48,
    homeTeamId: "onzeIrmaos",
    awayTeamId: "UDMaluvane",
    homeScore: 3, // Only for live/finished
    awayScore: 1,
    date: "2026-06-21", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Colonga",
    info: "CNP 2026 - Jornada 8", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Jose 7'", "Milagre (15', 71')"],
    awayScorers: ["Simone 5'"],
  },
  // ---------------------------- CNP 2026 Round 9 ---------------------------------
  {
    id: 49,
    homeTeamId: "bingaFC",
    awayTeamId: "kingOfJungle",
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-06-27", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 9", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Gesselino 24'"],
    awayScorers: ["Berson (P) 19'", "Raul 46'"],
  },
  {
    id: 50,
    homeTeamId: "machacameFC",
    awayTeamId: "onzeIrmaos",
    homeScore: 0, // Only for live/finished
    awayScore: 1,
    date: "2026-06-27", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Machacame",
    info: "CNP 2026 - Jornada 9", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: ["Imércio"],
  },
  {
    id: 51,
    homeTeamId: "SFCSave",
    awayTeamId: "realChibuca",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-06-27", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Save",
    info: "CNP 2026 - Jornada 9", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["-"],
    awayScorers: ["Armando"],
  },
  {
    id: 52,
    homeTeamId: "teamBebado",
    awayTeamId: "UDChimedje",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-06-28", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 9", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 53,
    homeTeamId: "associacaoDesportivaPande",
    awayTeamId: "rebentaFogo",
    homeScore: 3, // Only for live/finished
    awayScore: 0,
    date: "2026-06-28", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo da Revolução",
    info: "CNP 2026 - Jornada 9", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Tomás (57', 86')", "Hélio 70'"],
    awayScorers: [],
  },
  {
    id: 54,
    homeTeamId: "UDMaluvane",
    awayTeamId: "kakanavasFC",
    homeScore: 1, // Only for live/finished
    awayScore: 0,
    date: "2026-07-18", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Muzazayila Stadium",
    info: "CNP 2026 - Jornada 9", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Bento 25'"],
    awayScorers: [],
  },
  // ---------------------------- CNP 2026 Round 10 ---------------------------------
  {
    id: 55,
    homeTeamId: "rebentaFogo",
    awayTeamId: "UDMaluvane",
    homeScore: 7, // Only for live/finished
    awayScore: 1,
    date: "2026-07-04", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 10", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 56,
    homeTeamId: "bingaFC",
    awayTeamId: "associacaoDesportivaPande",
    homeScore: 0, // Only for live/finished
    awayScore: 6,
    date: "2026-07-04", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo Central de Pande",
    info: "CNP 2026 - Jornada 10", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [
      "Bilton (16', 36')",
      "Tomás (P) 27'",
      "Hélio (68', 81')",
      "Heríilio 90'",
    ],
  },
  {
    id: 57,
    homeTeamId: "UDChimedje",
    awayTeamId: "SFCSave",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-07-04", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Muzazayila Stadium",
    info: "CNP 2026 - Jornada 10", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 58,
    homeTeamId: "kakanavasFC",
    awayTeamId: "machacameFC",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-07-05", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 10", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Pedro 72'", "Titos 78'"],
    awayScorers: ["Isaac 6'"],
  },
  {
    id: 59,
    homeTeamId: "onzeIrmaos",
    awayTeamId: "teamBebado",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-07-05", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Colonga",
    info: "CNP 2026 - Jornada 10", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["AUTO-GOLO 60'"],
    awayScorers: ["Tomás 23'"],
  },
  {
    id: 60,
    homeTeamId: "kingOfJungle",
    awayTeamId: "realChibuca",
    homeScore: 5, // Only for live/finished
    awayScore: 0,
    date: "2026-07-05", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Luído",
    info: "CNP 2026 - Jornada 10", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Raúl (4x)", "Antônio"],
    awayScorers: [],
  },
  // ---------------------------- CNP 2026 Round 11 ---------------------------------
  {
    id: 61,
    homeTeamId: "realChibuca",
    awayTeamId: "UDChimedje",
    homeScore: 3, // Only for live/finished
    awayScore: 1,
    date: "2026-07-11", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo Central de Pande",
    info: "CNP 2026 - Jornada 11", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Miller (2x)", "Armando"],
    awayScorers: ["Kelton"],
  },
  {
    id: 62,
    homeTeamId: "machacameFC",
    awayTeamId: "rebentaFogo",
    homeScore: 0, // Only for live/finished
    awayScore: 3,
    date: "2026-07-11", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Save",
    info: "CNP 2026 - Jornada 11", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: ["Selton (2x)", "Milton"],
  },
  {
    id: 63,
    homeTeamId: "teamBebado",
    awayTeamId: "kakanavasFC",
    homeScore: 3, // Only for live/finished
    awayScore: 2,
    date: "2026-07-11", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 11", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Amade 43'", "Tomás (23', 60')"],
    awayScorers: ["Onelson (1', 90')"],
  },
  {
    id: 64,
    homeTeamId: "associacaoDesportivaPande",
    awayTeamId: "kingOfJungle",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-07-12", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo da Revolução",
    info: "CNP 2026 - Jornada 11", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Hélio 38'", "Hermílio 83'"],
    awayScorers: ["Raúl 51'"],
  },
  {
    id: 65,
    homeTeamId: "SFCSave",
    awayTeamId: "onzeIrmaos",
    homeScore: 0, // Only for live/finished
    awayScore: 2,
    date: "2026-07-12", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Save",
    info: "CNP 2026 - Jornada 11", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: ["Adelto 55'", "Dário 90'+7'"],
  },
  {
    id: 66,
    homeTeamId: "UDMaluvane",
    awayTeamId: "bingaFC",
    homeScore: 3, // Only for live/finished
    awayScore: 0,
    date: "2026-07-12", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Muzazayila Stadium",
    info: "CNP 2026 - Jornada 11", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["José", "Simone", "Salvador"],
    awayScorers: [],
  },
  // ---------------------------- CNP 2026 Round 12 ---------------------------------
    {
    id: 67,
    homeTeamId: "realChibuca",
    awayTeamId: "onzeIrmaos",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-08", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 12", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
   {
    id: 68,
    homeTeamId: "machacameFC",
    awayTeamId: "bingaFC",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-08", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Machacame",
    info: "CNP 2026 - Jornada 12", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
   {
    id: 69,
    homeTeamId: "UDMaluvane",
    awayTeamId: "associacaoDesportivaPande",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-08", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Muzazayila Stadium",
    info: "CNP 2026 - Jornada 12", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
   {
    id: 70,
    homeTeamId: "kingOfJungle",
    awayTeamId: "UDChimedje",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-09", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Luído",
    info: "CNP 2026 - Jornada 12", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 71,
    homeTeamId: "teamBebado",
    awayTeamId: "rebentaFogo",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-09", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CNP 2026 - Jornada 12", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 72,
    homeTeamId: "SFCSave",
    awayTeamId: "kakanavasFC",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-09", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Save",
    info: "CNP 2026 - Jornada 12", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },

  // ---------------------------- CNP 2026 Round 13 ---------------------------------

  // UDChimedje, kakanavasFC, rebentaFogo, bingaFC, realChibuca, onzeIrmaos, teamBebado, associacaoDesportivaPande, SFCSave, kingOfJungle, UDMaluvane, machacameFC

  // da Revolução Luído Mazino Colonga Save Machacame Muzazayila Stadium Central de Pande

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
  //   status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
  //   status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
  //   status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
  //   status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
  //   status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
  //   status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
  //   status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
  //   status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
  //   status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
  //   status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
  //   status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
  //   status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "canceled", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "canceled", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "canceled", // 'live' | 'finished' | 'upcoming' | canceled | postponed
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
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Matasse",
    info: "CFNM 2026 - Jornada 5", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  // ---------------------------- CFNM 2026 Round 6 ---------------------------------
  {
    id: -38,
    homeTeamId: "CDMaxaquene",
    awayTeamId: "sagradoCJesus",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-06-13", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo das Palmeiras",
    info: "CFNM 2026 - Jornada 6", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -39,
    homeTeamId: "juventusMacomba",
    awayTeamId: "desportivoA",
    homeScore: 3, // Only for live/finished
    awayScore: 4,
    date: "2026-06-13", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Macomba",
    info: "CFNM 2026 - Jornada 6", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -40,
    homeTeamId: "FCMahave",
    awayTeamId: "sulSave",
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-06-13", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mahave",
    info: "CFNM 2026 - Jornada 6", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -41,
    homeTeamId: "costaSol",
    awayTeamId: "FCMataula",
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-06-13", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Chimunda",
    info: "CFNM 2026 - Jornada 6", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -42,
    homeTeamId: "primeiroMaio",
    awayTeamId: "PFCMussassa",
    homeScore: 3, // Only for live/finished
    awayScore: 0,
    date: "2026-06-25", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mussanga",
    info: "CFNM 2026 - Jornada 6", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -43,
    homeTeamId: "sportingMaluvane",
    awayTeamId: "desportivoB",
    homeScore: 4, // Only for live/finished
    awayScore: 4,
    date: "2026-06-14", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Muzazayila Stadium",
    info: "CFNM 2026 - Jornada 6", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -44,
    homeTeamId: "ligaDesportiva",
    awayTeamId: "FCBatata",
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-06-14", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo das Palmeiras",
    info: "CFNM 2026 - Jornada 6", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -45,
    homeTeamId: "benficaJenga",
    awayTeamId: "escolaBola",
    homeScore: 4, // Only for live/finished
    awayScore: 0,
    date: "2026-06-14", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Jenga",
    info: "CFNM 2026 - Jornada 6", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  // ---------------------------- CFNM 2026 Round 7 ---------------------------------
  {
    id: -46,
    homeTeamId: "FCBatata",
    awayTeamId: "benficaJenga",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-06-20", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Batata",
    info: "CFNM 2026 - Jornada 7", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -47,
    homeTeamId: "desportivoA",
    awayTeamId: "ligaDesportiva",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-06-25", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Matasse",
    info: "CFNM 2026 - Jornada 7", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -48,
    homeTeamId: "FCMataula",
    awayTeamId: "juventusMacomba",
    homeScore: 1, // Only for live/finished
    awayScore: 3,
    date: "2026-06-20", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mataula",
    info: "CFNM 2026 - Jornada 7", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -49,
    homeTeamId: "PFCMussassa",
    awayTeamId: "CDMaxaquene",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-06-20", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Macomba",
    info: "CFNM 2026 - Jornada 7", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -50,
    homeTeamId: "sulSave",
    awayTeamId: "costaSol",
    homeScore: 6, // Only for live/finished
    awayScore: 1,
    date: "2026-06-21", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Jenga",
    info: "CFNM 2026 - Jornada 7", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -51,
    homeTeamId: "sagradoCJesus",
    awayTeamId: "FCMahave",
    homeScore: 8, // Only for live/finished
    awayScore: 0,
    date: "2026-06-21", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Doane",
    info: "CFNM 2026 - Jornada 7", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -52,
    homeTeamId: "escolaBola",
    awayTeamId: "desportivoB",
    homeScore: 0, // Only for live/finished
    awayScore: 4,
    date: "2026-06-21", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mataula",
    info: "CFNM 2026 - Jornada 7", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -53,
    homeTeamId: "sportingMaluvane",
    awayTeamId: "primeiroMaio",
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-06-21", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Muzazayila Stadium",
    info: "CFNM 2026 - Jornada 7", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  // ---------------------------- CFNM 2026 Round 8 ---------------------------------
  {
    id: -54,
    homeTeamId: "CDMaxaquene",
    awayTeamId: "sportingMaluvane",
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-06-27", // ISO Format
    time: "14:30",
    status: "postponed", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo das Palmeiras",
    info: "CFNM 2026 - Jornada 8", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -55,
    homeTeamId: "costaSol",
    awayTeamId: "sagradoCJesus",
    homeScore: 1, // Only for live/finished
    awayScore: 5,
    date: "2026-06-27", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Chimunda",
    info: "CFNM 2026 - Jornada 8", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -56,
    homeTeamId: "escolaBola",
    awayTeamId: "FCBatata",
    homeScore: 0, // Only for live/finished
    awayScore: 3,
    date: "2026-06-27", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mataula",
    info: "CFNM 2026 - Jornada 8", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -57,
    homeTeamId: "juventusMacomba",
    awayTeamId: "sulSave",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-06-27", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Macomba",
    info: "CFNM 2026 - Jornada 8", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -58,
    homeTeamId: "primeiroMaio",
    awayTeamId: "desportivoB",
    homeScore: 4, // Only for live/finished
    awayScore: 2,
    date: "2026-06-28", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mussanga",
    info: "CFNM 2026 - Jornada 8", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -59,
    homeTeamId: "ligaDesportiva",
    awayTeamId: "FCMataula",
    homeScore: 1, // Only for live/finished
    awayScore: 0,
    date: "2026-06-28", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Macomba",
    info: "CFNM 2026 - Jornada 8", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -60,
    homeTeamId: "benficaJenga",
    awayTeamId: "desportivoA",
    homeScore: 0, // Only for live/finished
    awayScore: 6,
    date: "2026-06-28", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Jenga",
    info: "CFNM 2026 - Jornada 8", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -61,
    homeTeamId: "FCMahave",
    awayTeamId: "PFCMussassa",
    homeScore: 1, // Only for live/finished
    awayScore: 3,
    date: "2026-06-28", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mahave",
    info: "CFNM 2026 - Jornada 8", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  // ---------------------------- CFNM 2026 Round 9 ---------------------------------
  {
    id: -62,
    homeTeamId: "desportivoA",
    awayTeamId: "escolaBola",
    homeScore: 4, // Only for live/finished
    awayScore: 0,
    date: "2026-07-04", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Matasse",
    info: "CFNM 2026 - Jornada 9", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -63,
    homeTeamId: "FCMataula",
    awayTeamId: "benficaJenga",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-07-04", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mataula",
    info: "CFNM 2026 - Jornada 9", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -64,
    homeTeamId: "sulSave",
    awayTeamId: "ligaDesportiva",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-07-04", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Jenga",
    info: "CFNM 2026 - Jornada 9", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -65,
    homeTeamId: "PFCMussassa",
    awayTeamId: "costaSol",
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-07-04", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo das Palmeiras",
    info: "CFNM 2026 - Jornada 9", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -66,
    homeTeamId: "sagradoCJesus",
    awayTeamId: "juventusMacomba",
    homeScore: 1, // Only for live/finished
    awayScore: 0,
    date: "2026-07-05", // ISO Format
    time: "14:30",
    status: "canceled", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Doane",
    info: "CFNM 2026 - Jornada 9", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -67,
    homeTeamId: "desportivoB",
    awayTeamId: "FCBatata",
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-07-05", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Matasse",
    info: "CFNM 2026 - Jornada 9", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -68,
    homeTeamId: "sportingMaluvane",
    awayTeamId: "FCMahave",
    homeScore: 3, // Only for live/finished
    awayScore: 1,
    date: "2026-07-05", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Muzazayila Stadium",
    info: "CFNM 2026 - Jornada 9", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -69,
    homeTeamId: "primeiroMaio",
    awayTeamId: "CDMaxaquene",
    homeScore: 1, // Only for live/finished
    awayScore: 0,
    date: "2026-07-05", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mussanga",
    info: "CFNM 2026 - Jornada 9", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  // ---------------------------- CFNM 2026 Round 10 ---------------------------------
  {
    id: -70,
    homeTeamId: "FCMahave",
    awayTeamId: "primeiroMaio",
    homeScore: 0, // Only for live/finished
    awayScore: 1,
    date: "2026-07-11", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mahave",
    info: "CFNM 2026 - Jornada 10", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -71,
    homeTeamId: "costaSol",
    awayTeamId: "sportingMaluvane",
    homeScore: 0, // Only for live/finished
    awayScore: 1,
    date: "2026-07-11", // ISO Format
    time: "14:30",
    status: "canceled", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Chimunda",
    info: "CFNM 2026 - Jornada 10", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -72,
    homeTeamId: "juventusMacomba",
    awayTeamId: "PFCMussassa",
    homeScore: 2, // Only for live/finished
    awayScore: 3,
    date: "2026-07-11", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Macomba",
    info: "CFNM 2026 - Jornada 10", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -73,
    homeTeamId: "ligaDesportiva",
    awayTeamId: "sagradoCJesus",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-07-11", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo das Palmeiras",
    info: "CFNM 2026 - Jornada 10", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -74,
    homeTeamId: "benficaJenga",
    awayTeamId: "sulSave",
    homeScore: 1, // Only for live/finished
    awayScore: 6,
    date: "2026-07-12", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Jenga",
    info: "CFNM 2026 - Jornada 10", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -75,
    homeTeamId: "escolaBola",
    awayTeamId: "FCMataula",
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-07-12", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mataula",
    info: "CFNM 2026 - Jornada 10", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -76,
    homeTeamId: "FCBatata",
    awayTeamId: "desportivoA",
    homeScore: 0, // Only for live/finished
    awayScore: 4,
    date: "2026-07-12", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Batata",
    info: "CFNM 2026 - Jornada 10", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -77,
    homeTeamId: "desportivoB",
    awayTeamId: "CDMaxaquene",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-07-12", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Matasse",
    info: "CFNM 2026 - Jornada 10", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  // ---------------------------- CFNM 2026 Round 11 ---------------------------------
  {
    id: -78,
    homeTeamId: "FCMataula",
    awayTeamId: "FCBatata",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-07-18", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mataula",
    info: "CFNM 2026 - Jornada 11", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -79,
    homeTeamId: "sulSave",
    awayTeamId: "escolaBola",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-07-18", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Jenga",
    info: "CFNM 2026 - Jornada 11", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -80,
    homeTeamId: "CDMaxaquene",
    awayTeamId: "FCMahave",
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-07-18", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo das Palmeiras",
    info: "CFNM 2026 - Jornada 11", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -81,
    homeTeamId: "PFCMussassa",
    awayTeamId: "ligaDesportiva",
    homeScore: 2, // Only for live/finished
    awayScore: 2,
    date: "2026-07-19", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo das Palmeiras",
    info: "CFNM 2026 - Jornada 11", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -82,
    homeTeamId: "sportingMaluvane",
    awayTeamId: "juventusMacomba",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-07-19", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Muzazayila Stadium",
    info: "CFNM 2026 - Jornada 11", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -83,
    homeTeamId: "primeiroMaio",
    awayTeamId: "costaSol",
    homeScore: 4, // Only for live/finished
    awayScore: 2,
    date: "2026-07-19", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mussanga",
    info: "CFNM 2026 - Jornada 11", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -84,
    homeTeamId: "sagradoCJesus",
    awayTeamId: "benficaJenga",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-07-19", // ISO Format
    time: "14:30",
    status: "postponed", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Doane",
    info: "CFNM 2026 - Jornada 11", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -85,
    homeTeamId: "desportivoA",
    awayTeamId: "desportivoB",
    homeScore: 3, // Only for live/finished
    awayScore: 0,
    date: "2026-07-19", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Matasse",
    info: "CFNM 2026 - Jornada 11", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  // ---------------------------- CFNM 2026 Round 12 ---------------------------------
  {
    id: -86,
    homeTeamId: "FCMahave",
    awayTeamId: "desportivoB",
    homeScore: 0, // Only for live/finished
    awayScore: 2,
    date: "2026-07-25", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mahave",
    info: "CFNM 2026 - Jornada 12", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -87,
    homeTeamId: "primeiroMaio",
    awayTeamId: "juventusMacomba",
    homeScore: 3, // Only for live/finished
    awayScore: 1,
    date: "2026-07-25", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mussanga",
    info: "CFNM 2026 - Jornada 12", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -88,
    homeTeamId: "ligaDesportiva",
    awayTeamId: "sportingMaluvane",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-07-25", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo das Palmeiras",
    info: "CFNM 2026 - Jornada 12", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -89,
    homeTeamId: "benficaJenga",
    awayTeamId: "PFCMussassa",
    homeScore: 2, // Only for live/finished
    awayScore: 2,
    date: "2026-07-25", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Jenga",
    info: "CFNM 2026 - Jornada 12", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -90,
    homeTeamId: "escolaBola",
    awayTeamId: "sagradoCJesus",
    homeScore: 1, // Only for live/finished
    awayScore: 6,
    date: "2026-07-26", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mataula",
    info: "CFNM 2026 - Jornada 12", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -91,
    homeTeamId: "FCBatata",
    awayTeamId: "sulSave",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-07-26", // ISO Format
    time: "14:30",
    status: "postponed", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Batata",
    info: "CFNM 2026 - Jornada 12", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -92,
    homeTeamId: "desportivoA",
    awayTeamId: "FCMataula",
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-07-26", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Matasse",
    info: "CFNM 2026 - Jornada 12", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -93,
    homeTeamId: "costaSol",
    awayTeamId: "CDMaxaquene",
    homeScore: 1, // Only for live/finished
    awayScore: 3,
    date: "2026-07-26", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Doane",
    info: "CFNM 2026 - Jornada 12", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  //  ---------------------------- CFNM 2026 Round 13 ---------------------------------
  {
    id: -94,
    homeTeamId: "sulSave",
    awayTeamId: "desportivoA",
    homeScore: 1, // Only for live/finished
    awayScore: 3,
    date: "2026-08-01", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Jenga",
    info: "CFNM 2026 - Jornada 13", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -95,
    homeTeamId: "PFCMussassa",
    awayTeamId: "escolaBola",
    homeScore: 0, // Only for live/finished
    awayScore: 1,
    date: "2026-08-01", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Batata",
    info: "CFNM 2026 - Jornada 13", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -96,
    homeTeamId: "CDMaxaquene",
    awayTeamId: "juventusMacomba",
    homeScore: 0, // Only for live/finished
    awayScore: 1,
    date: "2026-08-01", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo das Palmeiras",
    info: "CFNM 2026 - Jornada 13", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -97,
    homeTeamId: "primeiroMaio",
    awayTeamId: "ligaDesportiva",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-08-01", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mussanga",
    info: "CFNM 2026 - Jornada 13", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -98,
    homeTeamId: "sagradoCJesus",
    awayTeamId: "FCBatata",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-08-02", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Doane",
    info: "CFNM 2026 - Jornada 13", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -99,
    homeTeamId: "sportingMaluvane",
    awayTeamId: "benficaJenga",
    homeScore: 7, // Only for live/finished
    awayScore: 1,
    date: "2026-08-02", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Muzazayila Stadium",
    info: "CFNM 2026 - Jornada 13", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -100,
    homeTeamId: "desportivoB",
    awayTeamId: "FCMataula",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-08-02", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Matasse",
    info: "CFNM 2026 - Jornada 13", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -101,
    homeTeamId: "FCMahave",
    awayTeamId: "costaSol",
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-08-02", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mahave",
    info: "CFNM 2026 - Jornada 13", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  //  ---------------------------- CFNM 2026 Round 14 ---------------------------------
  {
    id: -102,
    homeTeamId: "costaSol",
    awayTeamId: "desportivoB",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-08", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Chimunda",
    info: "CFNM 2026 - Jornada 14", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
    {
    id: -103,
    homeTeamId: "ligaDesportiva",
    awayTeamId: "CDMaxaquene",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-08", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo das Palmeiras",
    info: "CFNM 2026 - Jornada 14", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
      {
    id: -104,
    homeTeamId: "benficaJenga",
    awayTeamId: "primeiroMaio",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-08", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Jenga",
    info: "CFNM 2026 - Jornada 14", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -105,
    homeTeamId: "escolaBola",
    awayTeamId: "sportingMaluvane",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-08", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mataula",
    info: "CFNM 2026 - Jornada 14", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
   {
    id: -106,
    homeTeamId: "FCBatata",
    awayTeamId: "PFCMussassa",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-09", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Batata",
    info: "CFNM 2026 - Jornada 14", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -107,
    homeTeamId: "desportivoA",
    awayTeamId: "sagradoCJesus",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-09", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Matasse",
    info: "CFNM 2026 - Jornada 14", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
   {
    id: -108,
    homeTeamId: "FCMataula",
    awayTeamId: "sulSave",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-09", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mataula",
    info: "CFNM 2026 - Jornada 14", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
   {
    id: -109,
    homeTeamId: "juventusMacomba",
    awayTeamId: "FCMahave",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-09", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Jenga",
    info: "CFNM 2026 - Jornada 14", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },

  // ---------------------------- CFNM 2026 Round 15 ---------------------------------

  // ligaDesportiva sportingMaluvane benficaJenga CDMaxaquene juventusMacomba sulSave PFCMussassa FCBatata desportivoA  sagradoCJesus primeiroMaio FCMataula costaSol escolaBola FCMahave desportivoB

  // Matasse das Palmeiras Macomba Mahave Chimunda Mussanga Muzazayila Stadium Jenga Batata Mataula Doane

  // ================================================================
  // ================ Jogos do "Campeonato FEMININO do Núcleo de Pande" ================
  // ================================================================

  // ---------------------------- CFNP 2026 Round 1 ---------------------------------
  {
    id: 1.1,
    homeTeamId: "associacaoDesportivaPandeF",
    awayTeamId: "kakanavasFCF",
    homeScore: 1, // Only for live/finished
    awayScore: 3,
    date: "2026-07-11", // ISO Format
    time: "07:00",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CFNP 2026 - Jornada 1", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 1.2,
    homeTeamId: "onzeIrmaosF",
    awayTeamId: "rebentaFogoL",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-07-12", // ISO Format
    time: "07:00",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Colonga",
    info: "CFNP 2026 - Jornada 1", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 1.3,
    homeTeamId: "ondasSaberF",
    awayTeamId: "UDChimedjeF",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-07-12", // ISO Format
    time: "07:00",
    status: "postponed", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Muzazayila Stadium",
    info: "CFNP 2026 - Jornada 1", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 1.4,
    homeTeamId: "FCSaveF",
    awayTeamId: "ESPandeF",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-07-12", // ISO Format
    time: "07:00",
    status: "postponed", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Save",
    info: "CFNP 2026 - Jornada 1", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 1.5,
    homeTeamId: "realChibucaF",
    awayTeamId: "teamBebadoF",
    homeScore: 1, // Only for live/finished
    awayScore: 0,
    date: "2026-07-12", // ISO Format
    time: "07:00",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CFNP 2026 - Jornada 1", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  // ---------------------------- CFNP 2026 Round 2 ---------------------------------
  {
    id: 1.6,
    homeTeamId: "ESPandeF",
    awayTeamId: "ondasSaberF",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-07-18", // ISO Format
    time: "14:30",
    status: "postponed", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo Central de Pande",
    info: "CFNP 2026 - Jornada 2", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 1.7,
    homeTeamId: "UDChimedjeF",
    awayTeamId: "associacaoDesportivaPandeF",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-07-19", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Estádio da Luz",
    info: "CFNP 2026 - Jornada 2", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 1.8,
    homeTeamId: "rebentaFogoL",
    awayTeamId: "realChibucaF",
    homeScore: 0, // Only for live/finished
    awayScore: 3,
    date: "2026-07-18", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CFNP 2026 - Jornada 2", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 1.9,
    homeTeamId: "kakanavasFCF",
    awayTeamId: "onzeIrmaosF",
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-07-19", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CFNP 2026 - Jornada 2", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Linda Sérgio (2x)"],
    awayScorers: [],
  },
  {
    id: 2.0,
    homeTeamId: "teamBebadoF",
    awayTeamId: "FCSaveF",
    homeScore: 3, // Only for live/finished
    awayScore: 0,
    date: "2026-07-19", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo Central de Pande",
    info: "CFNP 2026 - Jornada 2  || F. de Comparrência", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  // ---------------------------- CFNP 2026 Round 3 ---------------------------------
  {
    id: 2.1,
    homeTeamId: "associacaoDesportivaPandeF",
    awayTeamId: "ESPandeF",
    homeScore: 7, // Only for live/finished
    awayScore: 0,
    date: "2026-07-25", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo da Revolução",
    info: "CFNP 2026 - Jornada 3", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 2.2,
    homeTeamId: "realChibucaF",
    awayTeamId: "kakanavasFCF",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-07-25", // ISO Format
    time: "14:30",
    status: "postponed", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CFNP 2026 - Jornada 3", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 2.3,
    homeTeamId: "ondasSaberF",
    awayTeamId: "FCSaveF",
    homeScore: 5, // Only for live/finished
    awayScore: 1,
    date: "2026-07-25", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Muzazayila Stadium",
    info: "CFNP 2026 - Jornada 3", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 2.4,
    homeTeamId: "onzeIrmaosF",
    awayTeamId: "UDChimedjeF",
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2026-07-26", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Colonga",
    info: "CFNP 2026 - Jornada 3", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 2.5,
    homeTeamId: "rebentaFogoL",
    awayTeamId: "teamBebadoF",
    homeScore: 0, // Only for live/finished
    awayScore: 1,
    date: "2026-07-26", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CFNP 2026 - Jornada 3", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  // ---------------------------- CFNP 2026 Round 4 ---------------------------------
  {
    id: 2.6,
    homeTeamId: "UDChimedjeF",
    awayTeamId: "realChibucaF",
    homeScore: 1, // Only for live/finished
    awayScore: 3,
    date: "2026-08-01", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Estádio da Luz",
    info: "CFNP 2026 - Jornada 4", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 2.7,
    homeTeamId: "teamBebadoF",
    awayTeamId: "ondasSaberF",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-08-01", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CFNP 2026 - Jornada 4", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 2.8,
    homeTeamId: "ESPandeF",
    awayTeamId: "onzeIrmaosF",
    homeScore: 0, // Only for live/finished
    awayScore: 2,
    date: "2026-08-02", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo Central de Pande",
    info: "CFNP 2026 - Jornada 4", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: ["Lídia João (46', 84')"],
  },
  {
    id: 2.9,
    homeTeamId: "FCSaveF",
    awayTeamId: "associacaoDesportivaPandeF",
    homeScore: 1, // Only for live/finished
    awayScore: 2,
    date: "2026-08-02", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Save",
    info: "CFNP 2026 - Jornada 4", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 3.0,
    homeTeamId: "kakanavasFCF",
    awayTeamId: "rebentaFogoL",
    homeScore: 3, // Only for live/finished
    awayScore: 0,
    date: "2026-08-02", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Mazino",
    info: "CFNP 2026 - Jornada 4", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  // ---------------------------- CFNP 2026 Round 5 ---------------------------------
  {
    id: 3.1,
    homeTeamId: "ESPandeF",
    awayTeamId: "rebentaFogoL",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-08", // ISO Format
    time: "07:00",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo Central de Pande",
    info: "CFNP 2026 - Jornada 5", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 3.2,
    homeTeamId: "FCSaveF",
    awayTeamId: "realChibucaF",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-08", // ISO Format
    time: "07:00",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Save",
    info: "CFNP 2026 - Jornada 5", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 3.3,
    homeTeamId: "UDChimedjeF",
    awayTeamId: "kakanavasFCF",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-08", // ISO Format
    time: "07:00",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Chimedje",
    info: "CFNP 2026 - Jornada 5", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 3.4,
    homeTeamId: "ondasSaberF",
    awayTeamId: "onzeIrmaosF",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-09", // ISO Format
    time: "07:00",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Maluvane",
    info: "CFNP 2026 - Jornada 5", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 3.5,
    homeTeamId: "teamBebadoF",
    awayTeamId: "associacaoDesportivaPandeF",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-08-09", // ISO Format
    time: "07:00",
    status: "upcoming", // 'live' | 'finished' | 'upcoming' | canceled | postponed
    venue: "Campo de Maluvane",
    info: "CFNP 2026 - Jornada 5", // Optional extra info
    competitionId: "pandeWomen",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },

  // UDChimedjeF kakanavasFCF rebentaFogoL realChibucaF onzeIrmaosF teamBebadoF associacaoDesportivaPandeF FCSaveF ondasSaberF ESPandeF

  // da Revolução Mazino Colonga Save Muzazayila Stadium Central de Pande Estádio da Luz
];

export default matchesData;
// ---------------------------- CFNM 2026 Round x ---------------------------------

// ---------------------------- CFNP 2026 Round y ---------------------------------
{
  /**


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

  */
}
