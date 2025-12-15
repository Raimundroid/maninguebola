import teamsData from "./teamsData";

// ============================================
// HELPER FUNCTION: Calculate Standings Fields
// ============================================
// This function takes raw standings data and automatically calculates:
// 1. goalDiff (goal difference) = goalsFor - goalsAgainst
// 2. points = (wins × 3) + (draws × 1) + (losses × 0)
//
// WHY USE THIS?
// - Eliminates manual calculation errors
// - Clear separation - calculation logic separate from raw data
// - Single source of truth (change wins/draws, points update automatically)
// - Easy to maintain and update - change goalsFor/goalsAgainst, goalDiff updates automatically
// - Clean data structure - raw data doesn't include redundant fields

// BENEFITS:
// ---------
// ✅ No manual calculation errors
// ✅ Change wins/draws/goals → points/goalDiff update automatically
// ✅ Consistent calculations across all teams
// ✅ Easy to add more calculated fields (win rate, form, etc.)
// ✅ Clean separation between raw data and derived data
//
// PARAMETERS:
//   standings - array of team objects with match statistics
//
// RETURNS:
//   New array with calculated fields added to each team

// tigers: {
//     id: "tigers",
//     name: "Sporting Tigers",
//     abbr: "ST",
//     // position: "3",
//     // points: "50", /////
//     founded: 2012,
//     stadium: "Tigers Cave",
//     logo: "/logos/eagles.png",
//     colors: { primary: "#00FF00", secondary: "#000000" },
//     contact: {
//       captain: "Pedro Santos",
//       phone: "+258 82 12 34 569",
//       email: "tigers@example.com",
//     },
//   },

const calculateStandings = (standings) => {
  // Map through each team and add calculated fields
  // .map() creates a NEW array, doesn't modify the original

  const calculated = standings.map((team) => ({
    // Spread operator (...) copies all existing properties from team, ensuring all data points required by the component are present,
    ...team,
    // CALCULATION 1: Goal Difference
    // Formula: Goals Scored - Goals Conceded
    // Example: 34 - 12 = +22
    goalDiff: team.goalsFor - team.goalsAgainst,
    // CALCULATION 2: Points
    // Football points system:
    // - Win = 3 points
    // - Draw = 1 point
    // - Loss = 0 points
    // Formula: (Wins × 3) + (Draws × 1)
    // Example: (9 × 3) + (2 × 1) = 27 + 2 = 29 points
    points: team.wins * 3 + team.draws * 1,
  }));

  // Sort (Rank) the teams
  // Sorting Criteria: Points (highest) > Goal Diff (highest) > Goals For (highest)
  calculated.sort((a, b) => {
    // CRITERIA 1: Points (Highest points first)
    if (b.points !== a.points) return b.points - a.points;
    // CRITERIA 2: Goal Difference (If points are tied, best GD wins)
    if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
    // CRITERIA 3: Goals Scored (If points and GD are tied, most goals wins)
    return b.goalsFor - a.goalsFor;
  });

  //    return calculated.map((team, index) => ({
  //   ...team,
  //   // Assign position (1-based index) after sorting
  //   position: index + 1,
  // }));

  // return calculated.map((team, index) => {
  //   const isUnranked = team.played === 0;

  //   return {
  //     ...team,
  //     // 💡 REFINEMENT: If played is 0, assign position "-", otherwise assign the rank (index + 1)
  //     position: isUnranked ? "-" : index + 1,
  //   };

  // Assign Final Rank/Position (map)
  return calculated.map((team, index) => ({
    ...team,
    // Assign position (1-based index) after sorting
    position: index + 1,
  }));

  // Win percentage
  // winRate: team.played > 0 ? ((team.wins / team.played) * 100).toFixed(1) : 0,

  // Points per game
  // pointsPerGame:
  //   team.played > 0
  //     ? ((team.wins * 3 + team.draws) / team.played).toFixed(2)
  //     : 0,

  // Form (last 5 games) - would need additional data
  // form: calculateForm(team.recentResults),
};
//===========================================================

// /**  BEST SCORERS HEPLER FUNCTION
//  * Filters and sorts players to find top scorers.
//  * @param {Array<Object>} players - The full array of player objects.
//  * @param {number} [limit=10] - The maximum number of top players to return.
//  * @returns {Array<Object>} The sorted list of top goal scorers.
//  */
// const getTopScorers = (players, limit = 10) => {
//   return players
//     // 1. Filter: Only include players with goals recorded
//     .filter(player => player.stats?.goals > 0)

//     // 2. Sort: By goals (descending)
//     .sort((a, b) => b.stats.goals - a.stats.goals)

//     // 3. Limit: Take the top N players
//     .slice(0, limit);
// };*/

//==================OR=================
//======================================

// // ============================================
// // HELPER: Get Top Scorers
// // ============================================
// // This function takes the full list of players and returns a sorted list
// // of the best goal scorers.
// //
// // Parameters:
// // - allPlayers: The array of player objects
// // - limit: How many players to show (default is 5)
// export const getTopScorers = (allPlayers, limit = 5) => {
//   return allPlayers
//     // 1. FILTER: Only keep players who have actually scored (goals > 0)
//     // We use optional chaining (?.) just in case 'stats' is missing
//     .filter((player) => player.stats?.goals > 0)

//     // 2. SORT: Compare goals. 'b - a' sorts Descending (Highest to Lowest)
//     .sort((a, b) => b.stats.goals - a.stats.goals)

//     // 3. SLICE: Cut the array to only return the top 'limit' (e.g., top 5)
//     .slice(0, limit);
// };

// // ============================================
// // HELPER: Get Top Assisters
// // ============================================
// // Exactly the same logic as scorers, but looking at 'assists'
// export const getTopAssisters = (allPlayers, limit = 5) => {
//   return allPlayers
//     // 1. Filter out players with 0 assists
//     .filter((player) => player.stats?.assists > 0)

//     // 2. Sort by assists (Highest to Lowest)
//     .sort((a, b) => b.stats.assists - a.stats.assists)

//     // 3. Keep only the top 'limit'
//     .slice(0, limit);
// };

//===========================================================
//===========================|============================================
//=======================================================

// /** BEST ASSISTS HEPLER FUNCTION
//  * Filters and sorts players to find top assisters.
//  * @param {Array<Object>} players - The full array of player objects.
//  * @param {number} [limit=10] - The maximum number of top players to return.
//  * @returns {Array<Object>} The sorted list of top assisters.
//  */
// const getTopAssisters = (players, limit = 10) => {
//   return players
//     // 1. Filter: Only include players with assists recorded
//     .filter(player => player.stats?.assists > 0)

//     // 2. Sort: By assists (descending)
//     .sort((a, b) => b.stats.assists - a.stats.assists)

//     // 3. Limit: Take the top N players
//     .slice(0, limit);
// };*/

//==================OR=================
//======================================

// // ============================================
// // HELPER: Get Top Scorers
// // ============================================
// // This function takes the full list of players and returns a sorted list
// // of the best goal scorers.
// //
// // Parameters:
// // - allPlayers: The array of player objects
// // - limit: How many players to show (default is 5)
// export const getTopScorers = (allPlayers, limit = 5) => {
//   return allPlayers
//     // 1. FILTER: Only keep players who have actually scored (goals > 0)
//     // We use optional chaining (?.) just in case 'stats' is missing
//     .filter((player) => player.stats?.goals > 0)

//     // 2. SORT: Compare goals. 'b - a' sorts Descending (Highest to Lowest)
//     .sort((a, b) => b.stats.goals - a.stats.goals)

//     // 3. SLICE: Cut the array to only return the top 'limit' (e.g., top 5)
//     .slice(0, limit);
// };

// // ============================================
// // HELPER: Get Top Assisters
// // ============================================
// // Exactly the same logic as scorers, but looking at 'assists'
// export const getTopAssisters = (allPlayers, limit = 5) => {
//   return allPlayers
//     // 1. Filter out players with 0 assists
//     .filter((player) => player.stats?.assists > 0)

//     // 2. Sort by assists (Highest to Lowest)
//     .sort((a, b) => b.stats.assists - a.stats.assists)

//     // 3. Keep only the top 'limit'
//     .slice(0, limit);
// };

// IMPLENTATION
// // Example in App.jsx

// // Assuming 'playersData' is imported
// Players Lists: We pass the raw players array into our helpers
// const topScorers = getTopScorers(players, 5); // Get top 5
// const topAssisters = getTopAssisters(players, 5); // Get top 5

// // ... then pass these arrays down to the relevant components (e.g., StatsPage)

// ============================================
// RAW STANDINGS DATA
// ============================================
// This is the RAW data - only what you input manually
// Notice we DON'T include goalDiff or points here
// Those will be calculated automatically by the helper function
//
// WHAT YOU NEED TO PROVIDE:
// - id: unique team identifier
// - ...teams.X: spreads team name, abbr from teams object (that's above)
// - played: total games played (J - Jogos)
// - wins: number of victories (V - Vitórias)
// - draws: number of draws (E - Empates)
// - losses: number of defeats (D - Derrotas)
// - goalsFor: total goals scored (GM - Golos Marcados)
// - goalsAgainst: total goals conceded (GS - Golos Sofridos)
//
// FIELDS CALCULATED AUTOMATICALLY:
// - goalDiff: goalsFor - goalsAgainst
// - points: (wins × 3) + (draws × 1)

const rawStandings = [
  // {
  //   id: "eagles",
  //   // Spreading only minimal team details to avoid data bloat.
  //   // Only spread fields needed for the table display (Name, Abbr, Logo)
  //   name: teams.eagles.name,
  //   abbr: teams.eagles.abbr,
  //   logo: teams.eagles.logo,
  //   played: 12,
  //   wins: 9,
  //   draws: 2,
  //   losses: 1,
  //   goalsFor: 34,
  //   goalsAgainst: 12,
  //   form: ["W", "W", "W", "W", "W"],
  // },
  // {
  //   id: "lions",
  //   name: teams.lions.name,
  //   abbr: teams.lions.abbr,
  //   logo: teams.lions.logo,
  //   played: 12,
  //   wins: 8,
  //   draws: 1,
  //   losses: 3,
  //   goalsFor: 28,
  //   goalsAgainst: 15,
  //   form: ["W", "D", "W", "L", "W"],
  // },
  //   {
  //     id: "tigers",
  //     name: teamsData.tigers.name,
  //     abbr: teamsData.tigers.abbr,
  //     logo: teamsData.tigers.logo,
  //     played: 11,
  //     wins: 5,
  //     draws: 3,
  //     losses: 3,
  //     goalsFor: 22,
  //     goalsAgainst: 18,
  //     form: ["L", "W", "D", "W", "L"],
  //   },
  //   {
  //     id: "cats",
  //     name: teamsData.cats.name,
  //     abbr: teamsData.cats.abbr,
  //     logo: teamsData.cats.logo,
  //     played: 11,
  //     wins: 11,
  //     draws: 0,
  //     losses: 0,
  //     goalsFor: 36,
  //     goalsAgainst: 8,
  //     form: ["W", "W", "W", "W", "L"],
  //   },
];

// ============================================
// PROCESSED STANDINGS DATA (EXPORT THIS)
// ============================================
// This is what you'll use in your components
// It includes all the raw data PLUS the calculated fields
//
// The calculateStandings() function processes rawStandings and returns
// a new array with goalDiff and points added to each team
//
// RESULT STRUCTURE (for each team):
// {
//   id: "eagles",
//   name: "FC Eagles",
//   abbr: "FE",
//   played: 12,
//   wins: 9,
//   draws: 2,
//   losses: 1,
//   goalsFor: 34,
//   goalsAgainst: 12,
//   goalDiff: 22,        ← CALCULATED
//   points: 29,          ← CALCULATED
// }
const standingsData = calculateStandings(rawStandings);

// // ============================================
// // STANDINGS DATA
// // ============================================
// // League table data - must be sorted by position
// export const standings = [
//   {
//     id: "eagles",
//     ...teams.eagles, // Spread operator copies all properties from teams.eagles
//     played: 12, // Games played (J - Jogos)
//     wins: 9, // Victories (V - Vitórias)
//     draws: 2, // Draws (E - Empates)
//     losses: 1, // Defeats (D - Derrotas)
//     goalsFor: 34, // Goals scored (GM - Golos Marcados)
//     goalsAgainst: 12, // Goals conceded (GS - Golos Sofridos)
//     goalDiff: 22, // Goal difference (DG - Diferença de Golos)
//     points: 29, // Total points (Pts)
//   },
//   {
//     id: "lions",
//     ...teams.lions,
//     played: 12,
//     wins: 8,
//     draws: 1,
//     losses: 3,
//     goalsFor: 28,
//     goalsAgainst: 15,
//     goalDiff: 13,
//     points: 25,
//   },
//   {
//     id: "tigers",
//     ...teams.tigers,
//     played: 11,
//     wins: 5,
//     draws: 3,
//     losses: 3,
//     goalsFor: 22,
//     goalsAgainst: 18,
//     goalDiff: 4,
//     points: 18,
//   },
// ];

export default standingsData;
