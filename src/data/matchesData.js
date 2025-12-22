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
    id: 1, // Unique ID for React keys
    homeTeamId: "sportingMagumbanaFc", //new
    awayTeamId: "palmeirasMadangelaFc", //new
    homeScore: 2, // Only for live/finished
    awayScore: 2,
    date: "2025-12-14", // ISO Format
    time: "15:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    // minute: 67, // Current minute (only for live)
    venue: "Campo de Magumbana",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Raul", "Gaucho"],
    awayScorers: ["Tony", "João"],
  },
  {
    id: 2, // Unique ID for React keys
    homeTeamId: "rioSambeFc", //new
    awayTeamId: "novoSclonioMaxixe", //new
    homeScore: 2, // Only for live/finished
    awayScore: 0,
    date: "2025-12-14", // ISO Format
    time: "15:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    // minute: 67, // Current minute (only for live)
    venue: "Campo de Rio Sambe (Coche Magumbo)",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Mimi", "José"],
    awayScorers: [],
  },
  {
    id: 3, // Unique ID for React keys
    homeTeamId: "rioSambeFc", //new
    awayTeamId: "academicaMucucune", //new
    homeScore: 3, // Only for live/finished
    awayScore: 1,
    date: "2025-12-20", // ISO Format
    time: "15:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    // minute: 67, // Current minute (only for live)
    venue: "Campo Internacional de Miluge",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["G2 (2)", "Leuss"],
    awayScorers: ["-"],
  },
  {
    id: 4, // Unique ID for React keys
    homeTeamId: "slowDownFc", //new
    awayTeamId: "revolutionFc", //new
    homeScore: 0, // Only for live/finished
    awayScore: 0,
    date: "2025-12-21", // ISO Format
    time: "14:30",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    // minute: 67, // Current minute (only for live)
    venue: "Campo de Golo",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: [],
    awayScorers: [],
  },
  {
    id: 5, // Unique ID for React keys
    homeTeamId: "suporteNhachotaFc", //new
    awayTeamId: "palmeirasMadangelaFc", //new
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2025-12-21", // ISO Format
    time: "14:00",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    // minute: 67, // Current minute (only for live)
    venue: "Campo de Nhachota",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["-"],
    awayScorers: ["-"],
  },
  {
    id: 6, // Unique ID for React keys
    homeTeamId: "rioSambeFc", //new
    awayTeamId: "madangelaFcMorrumbene", //new
    homeScore: 1, // Only for live/finished
    awayScore: 0,
    date: "2025-12-21", // ISO Format
    time: "16:00",
    status: "finished", // 'live' | 'finished' | 'upcoming'
    // minute: 67, // Current minute (only for live)
    venue: "Campo Desportivo de Guigobane",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["G2"],
    awayScorers: [],
  },
  {
    id: 7, // Unique ID for React keys
    homeTeamId: "rioSambeFc", //new
    awayTeamId: "sportingKhundula", //new
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2025-12-28", // ISO Format
    time: "16:00",
    status: "upcoming", // 'live' | 'finished' | 'upcoming'
    // minute: 67, // Current minute (only for live)
    venue: "Campo de Rio Sambe (Coche Magumbo)",
    // info: "85+ espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    // homeScorers: ["-"],
    // awayScorers: ["-"],
  },

  //   {
  //     id: 1000, // Unique ID for React keys
  //     // homeTeam: teams.lions, // Reference to team object
  //     // awayTeam: teams.tigers,
  //     homeTeamId: "lions", //new
  //     awayTeamId: "tigers", //new
  //     homeScore: 1, // Only for live/finished
  //     awayScore: 1,
  //     date: "2025-11-16", // ISO Format
  //     time: "14:00",
  //     status: "live", // 'live' | 'finished' | 'upcoming'
  //     // minute: 67, // Current minute (only for live)
  //     venue: "Campo Principal",
  //     info: "85+ espectadores", // Optional extra info
  //     // ✅ NEW: Store as Array of Strings
  //     // Note: You can still keep "(2)" for multiple goals if you want strict string display
  //     homeScorers: ["José Lima"],
  //     awayScorers: ["Rui Almeida"],
  //   },
  // {
  //   id: 2,
  //   // homeTeam: teams.eagles,
  //   // awayTeam: teams.lions,
  //   homeTeamId: "eagles", //new
  //   awayTeamId: "lions", //new
  //   homeScore: 3,
  //   awayScore: 2,
  //   date: "2025-11-16", // ISO Format
  //   time: "15:00",
  //   status: "finished",
  //   venue: "Campo A",
  //   // info: "⚽ Miguel Santos (2), Tomás Ferreira",
  //   // ✅ NEW: Store as Array of Strings
  //   // Note: You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: ["Miguel Santos (2)", "Tomás Ferreira"],
  //   awayScorers: ["José Lima (2)"],
  // },
  // {
  //   id: 001example,
  //   // homeTeam: teams.eagles,
  //   // awayTeam: teams.lions,
  //   homeTeamId: "cats", //new
  //   awayTeamId: "tigers", //new
  //   homeScore: 3,
  //   awayScore: 2,
  //   date: "2025-11-16", // ISO Format
  //   time: "15:00",
  //   status: "finished",
  //   venue: "Campo A",
  //   // info: "⚽ Miguel Santos (2), Tomás Ferreira",
  //   // ✅ NEW: Store as Array of Strings
  //   // Note: You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: ["Miguel Santos(2)", "Tomás Ferreira"],
  //   awayScorers: ["José Lima (2)"],
  // },
  // {
  //   id: 3,
  //   // homeTeam: teams.tigers,
  //   // awayTeam: teams.eagles,
  //   homeTeamId: "tigers", //new
  //   awayTeamId: "eagles", //new
  //   homeScore: 1,
  //   awayScore: 1,
  //   date: "2025-11-03", // ISO Format
  //   time: "16:00",
  //   status: "finished",
  //   venue: "Campo B",
  //   // 'info' is optional - can be omitted
  //   // ✅ NEW: Store as Array of Strings
  //   // Note: You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: ["Rui Almeida"],
  //   awayScorers: ["Tomás Ferreira"],
  // },
  {
    id: "togleForSample",
    // homeTeam: teams.eagles,
    // awayTeam: teams.tigers,
    homeTeamId: "cats", //new
    awayTeamId: "tigers", //new
    // No scores for upcoming matches
    date: "2025-12-28", // ISO Format
    time: "16:15",
    status: "upcoming",
    venue: "Campo Alpha",
  },
  // {
  //   id: 5,
  //   // homeTeam: teams.lions,
  //   // awayTeam: teams.tigers,
  //   homeTeamId: "lions", //new
  //   awayTeamId: "tigers", //new
  //   date: "2025-11-24", // ISO Format
  //   time: "16:00",
  //   status: "upcoming",
  //   venue: "Campo B",
  // },
  // {
  //   id: 6,
  //   // homeTeam: teams.lions,
  //   // awayTeam: teams.tigers,
  //   homeTeamId: "cats", //new
  //   awayTeamId: "tigers", //new
  //   date: "2025-12-25", // ISO Format
  //   time: "16:00",
  //   status: "canceled",
  //   venue: "Campo Central",
  // },
  // {
  //   id: sample001, // Unique ID for React keys
  //   homeTeamId: "rioSambeFc", //new
  //   awayTeamId: "madangelaFcMorrumbene", //new
  //   homeScore: 8, // Only for live/finished
  //   awayScore: 8,
  //   date: "2025-12-22", // ISO Format
  //   time: "16:00",
  //   status: "finished", // 'live' | 'finished' | 'upcoming'
  //   // minute: 67, // Current minute (only for live)
  //   venue: "Campo Desportivo de Guigobane",
  //   // info: "85+ espectadores", // Optional extra info
  //   // ✅ NEW: Store as Array of Strings
  //   // Note: You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: [],
  //   awayScorers: [],
  // },
  // {
  //   id: sample002, // Unique ID for React keys
  //   homeTeamId: "rioSambeFc", //new
  //   awayTeamId: "madangelaFcMorrumbene", //new
  //   homeScore: 10, // Only for live/finished
  //   awayScore: 10,
  //   date: "2025-12-23", // ISO Format
  //   time: "16:00",
  //   status: "finished", // 'live' | 'finished' | 'upcoming'
  //   // minute: 67, // Current minute (only for live)
  //   venue: "Campo Desportivo de Guigobane",
  //   // info: "85+ espectadores", // Optional extra info
  //   // ✅ NEW: Store as Array of Strings
  //   // Note: You can still keep "(2)" for multiple goals if you want strict string display
  //   homeScorers: [],
  //   awayScorers: [],
  // },
];

export default matchesData;
