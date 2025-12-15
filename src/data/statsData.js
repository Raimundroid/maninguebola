// ============================================
// STATS DATA
// ============================================
// Quick statistics for the home page
const statsData = [
  { value: "0", label: "Jogos Realizados" },
  { value: "0", label: "Golos Marcados" },
  { value: "0", label: "Equipas" },
  { value: "0", label: "Golos/Jogo" },
];

// export const statsData = [
//   { value: "36", label: "Jogos Realizados" },
//   { value: "142", label: "Golos Marcados" },
//   { value: "8", label: "Equipas" },
//   { value: "3.9", label: "Golos/Jogo" },
// ];

// // --- NEW HELPER FUNCTION: Calculate Quick Stats ---
// const calculateStats = (matches, teams) => {
//   // 1. Identify matches that have been played (finished or live)
//   const playedMatches = matches.filter(
//     (match) => match.status === "finished" || match.status === "live"
//   );

//   // 2. Total Matches Played
//   const totalMatchesPlayed = playedMatches.length;

//   // 3. Total Goals Scored
//   const totalGoalsScored = playedMatches.reduce((sum, match) => {
//     // Check if scores exist (upcoming matches won't have scores)
//     const home = match.homeScore || 0;
//     const away = match.awayScore || 0;
//     return sum + home + away;
//   }, 0);

//   // 4. Total Teams (using the object keys)
//   const totalTeams = Object.keys(teams).length;

//   // 5. Goals/Game
//   const goalsPerGame =
//     totalMatchesPlayed > 0
//       ? (totalGoalsScored / totalMatchesPlayed).toFixed(1)
//       : "0";

//   // Structure the data for the component display
//   return [
//     { value: String(totalMatchesPlayed), label: "Jogos Realizados" },
//     { value: String(totalGoalsScored), label: "Golos Marcados" },
//     { value: String(totalTeams), label: "Equipas" },
//     { value: goalsPerGame, label: "Golos/Jogo" },
//   ];
// };

// // --- PROCESSED STATS DATA (EXPORT THIS) ---
// // Note: This relies on the teams and matchesData being available in scope.
// export const statsData = calculateStats(matchesData, teams);

export default statsData;
