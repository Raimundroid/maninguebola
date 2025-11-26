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

// ============================================
// TEAMS DATA
// ============================================
// Base team objects - reused in other data structures
// Using an object (not array) for easy lookup by key
export const teams = {
  eagles: {
    id: "eagles", // Unique identifier
    name: "FC Eagles", // Full team name
    abbr: "FE", // Abbreviation for logos
    position: "1",
    points: "100",
  },
  lions: {
    id: "lions",
    name: "United Lions",
    abbr: "UL",
  },
  tigers: {
    id: "tigers",
    name: "Sporting Tigers",
    abbr: "ST",
  },
};

// ============================================
// PLAYERS DATA
// ============================================
// Top scorers list - should be sorted by goals (descending)
// before: playerData
export const players = [
  {
    id: 1,
    name: "Miguel Santos",
    team: "FC Eagles",
    goals: 18,
    assists: 7,
    matches: 12,
  },
  {
    id: 2,
    name: "José Lima",
    team: "United Lions",
    goals: 15,
    assists: 9,
    matches: 14,
  },
  {
    id: 3,
    name: "Rui Almeida",
    team: "Sporting Tigers",
    goals: 14,
    assists: 5,
    matches: 11,
  },
  {
    id: 4,
    name: "Tomás Ferreira",
    team: "FC Eagles",
    goals: 12,
    assists: 4,
    matches: 10,
  },
  {
    id: 5,
    name: "Ricardo Nunes",
    team: "United Lions",
    goals: 10,
    assists: 3,
    matches: 13,
  },
  {
    id: 6,
    name: "Jaime Bonde",
    team: "Sporting Tigers",
    goals: 8,
    assists: 6,
    matches: 12,
  },
];

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

const calculateStandings = (standings) => {
  // Map through each team and add calculated fields
  // .map() creates a NEW array, doesn't modify the original
  return standings.map((team) => ({
    // Spread operator (...) copies all existing properties from team
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

    // Win percentage
    // winRate: team.played > 0 ? ((team.wins / team.played) * 100).toFixed(1) : 0,

    // Points per game
    // pointsPerGame:
    //   team.played > 0
    //     ? ((team.wins * 3 + team.draws) / team.played).toFixed(2)
    //     : 0,

    // Form (last 5 games) - would need additional data
    // form: calculateForm(team.recentResults),
  }));
};

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
  {
    id: "eagles",
    ...teams.eagles, // Copies: name, abbr from teams.eagles
    played: 12,
    wins: 9,
    draws: 2,
    losses: 1,
    goalsFor: 34,
    goalsAgainst: 12,
    // goalDiff will be calculated: 34 - 12 = 22
    // points will be calculated: (9 × 3) + (2 × 1) = 29
  },
  {
    id: "lions",
    ...teams.lions,
    played: 12,
    wins: 8,
    draws: 1,
    losses: 3,
    goalsFor: 28,
    goalsAgainst: 15,
    // goalDiff will be calculated: 28 - 15 = 13
    // points will be calculated: (8 × 3) + (1 × 1) = 25
  },
  {
    id: "tigers",
    ...teams.tigers,
    played: 11,
    wins: 5,
    draws: 3,
    losses: 3,
    goalsFor: 22,
    goalsAgainst: 18,
    // goalDiff will be calculated: 22 - 18 = 4
    // points will be calculated: (5 × 3) + (3 × 1) = 18
  },
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
export const standings = calculateStandings(rawStandings);

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
