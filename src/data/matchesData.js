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
    id: -1, // Unique ID for React keys
    homeTeamId: "sportingMagumbanaFc", //new
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
    id: -2, // Unique ID for React keys
    homeTeamId: "rioSambeFc", //new
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
    id: -3, // Unique ID for React keys
    homeTeamId: "rioSambeFc", //new
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
    id: -4, // Unique ID for React keys
    homeTeamId: "slowDownFc", //new
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
    id: -5, // Unique ID for React keys
    homeTeamId: "sportingNhachotaFc", //new
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
    id: -6, // Unique ID for React keys
    homeTeamId: "rioSambeFc", //new
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
    id: -7, // Unique ID for React keys
    homeTeamId: "rioSambeFc", //new
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
    id: -8, // Unique ID for React keys
    homeTeamId: "rioSambeFc", //new
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
    id: -9, // Unique ID for React keys
    homeTeamId: "santoAntonioMongue", //new
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
    id: -10, // Unique ID for React keys
    homeTeamId: "UDChimedje", //new
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
    id: -11, // Unique ID for React keys
    homeTeamId: "rebentaFogo", //new
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
    id: -12, // Unique ID for React keys
    homeTeamId: "realChibuca", //new
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
    id: -13, // Unique ID for React keys
    homeTeamId: "teamBebado", //new
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
    id: -14, // Unique ID for React keys
    homeTeamId: "internacionalMiluge", //new
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
    id: -15, // Unique ID for React keys
    homeTeamId: "ferroviarioCocheMagumbo", //new
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
  //   id: -16, // Unique ID for React keys
  //   homeTeamId: "costaSolMagumbo", //new
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
  //   //UDChimedje, kakanavasFC, rebentaFogo, bingaFC, realChibuca, onzeIrmaos, teamBebado, associacaoDesportivaPande, SFCSave, kingOfTheJungle, UDMaluvane, MachacameFC
  //   homeTeamId: "",
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

  {
    id: 1,
    //UDChimedje, kakanavasFC, rebentaFogo, bingaFC, realChibuca, onzeIrmaos, teamBebado, associacaoDesportivaPande, SFCSave, kingOfTheJungle, UDMaluvane, MachacameFC
    homeTeamId: "kakanavasFC",
    awayTeamId: "SFCSave",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-05-02", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mazino",
    info: "CNP - Jornada 1", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 2,
    //UDChimedje, kakanavasFC, rebentaFogo, bingaFC, realChibuca, onzeIrmaos, teamBebado, associacaoDesportivaPande, SFCSave, kingOfTheJungle, UDMaluvane, MachacameFC
    homeTeamId: "UDChimedje",
    awayTeamId: "kingOfTheJungle",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-05-03", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Chimedje",
    info: "CNP - Jornada 1", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 3,
    //UDChimedje, kakanavasFC, rebentaFogo, bingaFC, realChibuca, onzeIrmaos, teamBebado, associacaoDesportivaPande, SFCSave, kingOfTheJungle, UDMaluvane, MachacameFC
    homeTeamId: "onzeIrmaos",
    awayTeamId: "realChibuca",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-05-03", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Colonga",
    info: "CNP - Jornada 1", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 4,
    //UDChimedje, kakanavasFC, rebentaFogo, bingaFC, realChibuca, onzeIrmaos, teamBebado, associacaoDesportivaPande, SFCSave, kingOfTheJungle, UDMaluvane, MachacameFC
    homeTeamId: "rebentaFogo",
    awayTeamId: "teamBebado",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-05-03", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming'
    venue: "Campo de Mazino",
    info: "CNP - Jornada 1", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },

  {
    id: 5,
    //UDChimedje, kakanavasFC, rebentaFogo, bingaFC, realChibuca, onzeIrmaos, teamBebado, associacaoDesportivaPande, SFCSave, kingOfTheJungle, UDMaluvane, MachacameFC
    homeTeamId: "associacaoDesportivaPande",
    awayTeamId: "UDMaluvane",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-05-03", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming'
    venue: "Campo da Revolução",
    info: "CNP - Jornada 1", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 6,
    //UDChimedje, kakanavasFC, rebentaFogo, bingaFC, realChibuca, onzeIrmaos, teamBebado, associacaoDesportivaPande, SFCSave, kingOfTheJungle, UDMaluvane, MachacameFC
    homeTeamId: "bingaFC",
    awayTeamId: "machacameFC",
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2026-05-03", // ISO Format
    time: "14:30",
    status: "upcoming", // 'live' | 'finished' | 'upcoming'
    venue: "Campo Central de Pande",
    info: "CNP - Jornada 1", // Optional extra info
    competitionId: "pande",
    // Note:  Store as Array of Strings; You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
];

export default matchesData;

{
  /**


// ================ // ------DEMO DATA--------================
  {
    id: 1000, // Unique ID for React keys
    homeTeamId: "onzeIrmaos", //new
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
    id: 1001, // Unique ID for React keys
    homeTeamId: "rioSambeFc", //new
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
    id: 1002, // Unique ID for React keys
    homeTeamId: "guihambuaneNhaka", //new
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
    id: 1003, // Unique ID for React keys
    homeTeamId: "realPande", //new
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
    id: 1004, // Unique ID for React keys
    homeTeamId: "ferroviarioCocheMagumbo", //new
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
    // awayTeam: teams.tigers,
    homeTeamId: "cats", //new
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
