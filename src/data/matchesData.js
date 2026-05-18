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
    info: "CNP - Jornada 1", // Optional extra info
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
    info: "CNP - Jornada 1", // Optional extra info
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
    info: "CNP - Jornada 1", // Optional extra info
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
    info: "CNP - Jornada 1", // Optional extra info
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
    info: "CNP - Jornada 1", // Optional extra info
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
    info: "CNP - Jornada 1", // Optional extra info
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
    info: "CNP - Jornada 2", // Optional extra info
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
    info: "CNP - Jornada 2", // Optional extra info
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
    info: "CNP - Jornada 2", // Optional extra info
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
    info: "CNP - Jornada 2", // Optional extra info
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
    info: "CNP - Jornada 2", // Optional extra info
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
    info: "CNP - Jornada 2", // Optional extra info
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
    info: "CNP - Jornada 3", // Optional extra info
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
    info: "CNP - Jornada 3", // Optional extra info
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
    info: "CNP - Jornada 3", // Optional extra info
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
    info: "CNP - Jornada 3", // Optional extra info
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
    info: "CNP - Jornada 3", // Optional extra info
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
    info: "CNP - Jornada 3", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },

  // ---------------------------- CNP 2026 Round 4 ---------------------------------

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
  //   info: "CFNM - Jornada 1", // Optional extra info
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
  //   info: "CFNM - Jornada 1", // Optional extra info
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
  //   info: "CFNM - Jornada 1", // Optional extra info
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
  //   info: "CFNM - Jornada 1", // Optional extra info
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
  //   info: "CFNM - Jornada 1", // Optional extra info
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
  //   info: "CFNM - Jornada 1", // Optional extra info
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
  //   info: "CFNM - Jornada 2", // Optional extra info
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
  //   info: "CFNM - Jornada 2", // Optional extra info
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
  //   info: "CFNM - Jornada 2", // Optional extra info
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
  //   info: "CFNM - Jornada 2", // Optional extra info
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
  //   info: "CFNM - Jornada 2", // Optional extra info
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
  //   info: "CFNM - Jornada 2", // Optional extra info
  //   competitionId: "pande",
  //   // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: [],
  //   awayScorers: [],
  // },

  // ---------------------------- CFNM 2026 Round 3 ---------------------------------

  {
    id: -13,
    homeTeamId: "sulSave",
    awayTeamId: "sportingMaluvane",
    homeScore: 2, // Only for live/finished
    awayScore: 2,
    date: "2026-05-16", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Jenga",
    info: "CFNM - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -14,
    homeTeamId: "FCMataula",
    awayTeamId: "primeiroMaio",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-05-16", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mataula",
    info: "CFNM - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },

  {
    id: -15,
    homeTeamId: "FCBatata",
    awayTeamId: "FCMahave",
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2026-05-16", // ISO Format
    time: "14:30",
    status: "canceled", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Batata",
    info: "CFNM - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -16,
    homeTeamId: "desportivoA",
    awayTeamId: "CDMaxaquene",
    homeScore: 3, // Only for live/finished
    awayScore: 2,
    date: "2026-05-16", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Matasse",
    info: "CFNM - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -17,
    homeTeamId: "escolaBola",
    awayTeamId: "costaSol",
    homeScore: 2, // Only for live/finished
    awayScore: 1,
    date: "2026-05-17", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mataula",
    info: "CFNM - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -18,
    homeTeamId: "benficaJenga",
    awayTeamId: "juventosMacomba",
    homeScore: 2, // Only for live/finished
    awayScore: 3,
    date: "2026-05-17", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Jenga",
    info: "CFNM - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: -19,
    homeTeamId: "sagradoCJesus",
    awayTeamId: "PFCMussassa",
    homeScore: 5, // Only for live/finished
    awayScore: 0,
    date: "2026-05-17", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Doane",
    info: "CFNM - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
  },
  {
    id: -20,
    homeTeamId: "ligaDesportiva",
    awayTeamId: "desportivoB",
    homeScore: 3, // Only for live/finished
    awayScore: 0,
    date: "2026-05-17", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    venue: "Campo das Palmeiras",
    info: "CFNM - Jornada 3", // Optional extra info
    competitionId: "novaMambone",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },

  // ---------------------------- CFNM 2026 Round 4 ---------------------------------

  // ligaDesportiva sportingMaluvane benficaJenga CDMaxaquene juventosMacomba sulSave PFCMussassa FCBatata desportivoA  sagradoCJesus primeiroMaio FCMataula costaSol escolaBola FCMahave desportivoB
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
