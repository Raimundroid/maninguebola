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

// const standings = [
//   { position: 1, teamId: "eagles", played: 12, won: 9, drawn: 2, lost: 1, goalsFor: 34, goalsAgainst: 12, goalDifference: 22, points: 29, form: ["W", "W", "D", "W", "W"] },
//   { position: 2, teamId: "lions", played: 12, won: 8, drawn: 1, lost: 3, goalsFor: 28, goalsAgainst: 15, goalDifference: 13, points: 25, form: ["L", "W", "W", "W", "D"] },
//   { position: 3, teamId: "tigers", played: 11, won: 5, drawn: 3, lost: 3, goalsFor: 22, goalsAgainst: 18, goalDifference: 4, points: 18, form: ["D", "L", "W", "D", "W"] }
// ];

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
  },
  tigers: {
    id: "tigers",
    name: "Sporting Tigers",
    abbr: "ST",
    // position: "3",
    // points: "50", /////
    founded: 2012,
    stadium: "Tigers Cave",
    logo: "/images/teams/shield-png-1.png",
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
    logo: "/images/teams/shield-png-2.png",
    colors: { primary: "#003cffff", secondary: "#df0c0cff" },
    contact: {
      coach: "Marcus Fontes",
      captain: "Rafael Montes",
      phone: "+258 82 12 34 560",
      email: "cats@example.com",
    },
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
    teamId: "eagles", //new
    number: 10, //new

    position: "Forward", //new Defender || Midfielder || Forward
    photo: "/images/players/default-player-1.png", //new
    stats: {
      //new
      appearances: 12,
      goals: 18,
      assists: 7,
      yellowCards: 2,
      redCards: 0,
    },
  },
  {
    id: 2,
    name: "José Lima",
    teamId: "lions",
    number: 7,
    position: "Forward",
    photo: "/images/players/default-player-2.png",
    stats: {
      appearances: 14,
      goals: 15,
      assists: 9,
      yellowCards: 3,
      redCards: 0,
    },
  },
  {
    id: 3,
    name: "Rui Almeida",
    teamId: "tigers",
    number: 10,
    position: "Forward",
    photo: "/images/players/default-player-2.png",
    stats: {
      appearances: 11,
      goals: 14,
      assists: 5,
      yellowCards: 2,
      redCards: 0,
    },
  },
  {
    id: 4,
    name: "Tomás Ferreira",
    teamId: "eagles",
    number: 9,
    position: "Midfielder",
    photo: "/images/players/default-player-4.png",
    stats: {
      appearances: 10,
      goals: 12,
      assists: 4,
      yellowCards: 1,
      redCards: 0,
    },
  },
  {
    id: 5,
    name: "Ricardo Nunes",
    teamId: "lions",
    number: 11,
    position: "Midfielder",
    photo: "/images/players/default-player-1.png",
    stats: {
      appearances: 13,
      goals: 10,
      assists: 3,
      yellowCards: 1,
      redCards: 1,
    },
  },
  {
    id: 6,
    name: "Jaime Paraiso",
    teamId: "tigers",
    number: 1,
    position: "Midfielder",
    photo: "/images/players/default-player-2.png",
    stats: {
      appearances: 12,
      goals: 3,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 7,
    name: "Pablo Picasso",
    teamId: "eagles",
    number: 4,
    position: "Defender",
    photo: "/images/players/default-player-3.png",
    stats: {
      appearances: 12,
      goals: 0,
      assists: 0,
      yellowCards: 1,
      redCards: 0,
    },
  },
  {
    id: 8,
    name: "Domingos Samuel",
    teamId: "lions",
    number: 1,
    position: "Defender",
    photo: "/images/players/default-player-4.png",
    stats: {
      appearances: 10,
      goals: 5,
      assists: 2,
      yellowCards: 2,
      redCards: 1,
    },
  },
  {
    id: 9,
    name: "Armando Titos",
    teamId: "tigers",
    number: 1,
    position: "Defender",
    photo: "/images/players/default-player-1.png",
    stats: {
      appearances: 12,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 10,
    name: "Carlos Mendes",
    teamId: "eagles",
    number: 1,
    position: "Goalkeeper",
    photo: "/images/players/default-player-2.png",
    stats: {
      appearances: 12,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 11,
    name: "Manuel Paredes",
    teamId: "lions",
    number: 1,
    position: "Goalkeeper",
    photo: "/images/players/default-player-3.png",
    stats: {
      appearances: 10,
      goals: 5,
      assists: 2,
      yellowCards: 2,
      redCards: 1,
    },
  },
  {
    id: 12,
    name: "Alfredo Maestro",
    teamId: "tigers",
    number: 1,
    position: "Goalkeeper",
    photo: "/images/players/default-player-4.png",
    stats: {
      appearances: 12,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 13,
    name: "Peter Parker",
    teamId: "cats",
    number: 2,
    position: "Goalkeeper",
    photo: "/images/players/default-player-1.png",
    stats: {
      appearances: 10,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 14,
    name: "Tony Stark",
    teamId: "cats",
    number: 4,
    position: "Midfielder",
    photo: "/images/players/default-player-2.png",
    stats: {
      appearances: 11,
      goals: 5,
      assists: 8,
      yellowCards: 2,
      redCards: 1,
    },
  },
  {
    id: 15,
    name: "Clark Kent",
    teamId: "cats",
    number: 9,
    position: "Forward",
    photo: "/images/players/default-player-3.png",
    stats: {
      appearances: 9,
      goals: 20,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 16,
    name: "Bruce Wayne",
    teamId: "cats",
    number: 3,
    position: "Defender",
    photo: "/images/players/default-player-4.png",
    stats: {
      appearances: 12,
      goals: 3,
      assists: 6,
      yellowCards: 0,
      redCards: 0,
    },
  },
  //===========DUP1==========
  {
    id: 17,
    name: "Miguel Santos",
    teamId: "eagles", //new
    number: 10, //new
    position: "Forward", //new Defender || Midfielder || Forward
    photo: "/images/players/default-player-1.png", //new
    stats: {
      //new
      appearances: 12,
      goals: 18,
      assists: 7,
      yellowCards: 2,
      redCards: 0,
    },
  },
  {
    id: 18,
    name: "José Lima",
    teamId: "lions",
    number: 7,
    position: "Forward",
    photo: "/images/players/default-player-2.png",
    stats: {
      appearances: 14,
      goals: 15,
      assists: 9,
      yellowCards: 3,
      redCards: 0,
    },
  },
  {
    id: 19,
    name: "Rui Almeida",
    teamId: "tigers",
    number: 10,
    position: "Forward",
    photo: "/images/players/default-player-2.png",
    stats: {
      appearances: 11,
      goals: 14,
      assists: 5,
      yellowCards: 2,
      redCards: 0,
    },
  },
  {
    id: 20,
    name: "Tomás Ferreira",
    teamId: "eagles",
    number: 9,
    position: "Midfielder",
    photo: "/images/players/default-player-4.png",
    stats: {
      appearances: 10,
      goals: 12,
      assists: 4,
      yellowCards: 1,
      redCards: 0,
    },
  },
  {
    id: 21,
    name: "Ricardo Nunes",
    teamId: "lions",
    number: 11,
    position: "Midfielder",
    photo: "/images/players/default-player-1.png",
    stats: {
      appearances: 13,
      goals: 10,
      assists: 3,
      yellowCards: 1,
      redCards: 1,
    },
  },
  {
    id: 22,
    name: "Jaime Paraiso",
    teamId: "tigers",
    number: 1,
    position: "Midfielder",
    photo: "/images/players/default-player-2.png",
    stats: {
      appearances: 12,
      goals: 3,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 23,
    name: "Pablo Picasso",
    teamId: "eagles",
    number: 4,
    position: "Defender",
    photo: "/images/players/default-player-3.png",
    stats: {
      appearances: 12,
      goals: 0,
      assists: 0,
      yellowCards: 1,
      redCards: 0,
    },
  },
  {
    id: 24,
    name: "Domingos Samuel",
    teamId: "lions",
    number: 1,
    position: "Defender",
    photo: "/images/players/default-player-4.png",
    stats: {
      appearances: 10,
      goals: 5,
      assists: 2,
      yellowCards: 2,
      redCards: 1,
    },
  },
  {
    id: 25,
    name: "Armando Titos",
    teamId: "tigers",
    number: 1,
    position: "Defender",
    photo: "/images/players/default-player-1.png",
    stats: {
      appearances: 12,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 26,
    name: "Carlos Mendes",
    teamId: "eagles",
    number: 1,
    position: "Goalkeeper",
    photo: "/images/players/default-player-2.png",
    stats: {
      appearances: 12,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 27,
    name: "Manuel Paredes",
    teamId: "lions",
    number: 1,
    position: "Goalkeeper",
    photo: "/images/players/default-player-3.png",
    stats: {
      appearances: 10,
      goals: 5,
      assists: 2,
      yellowCards: 2,
      redCards: 1,
    },
  },
  {
    id: 28,
    name: "Alfredo Maestro",
    teamId: "tigers",
    number: 1,
    position: "Goalkeeper",
    photo: "/images/players/default-player-4.png",
    stats: {
      appearances: 12,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 29,
    name: "Peter Parker",
    teamId: "cats",
    number: 2,
    position: "Goalkeeper",
    photo: "/images/players/default-player-1.png",
    stats: {
      appearances: 10,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 30,
    name: "Tony Stark",
    teamId: "cats",
    number: 4,
    position: "Midfielder",
    photo: "/images/players/default-player-2.png",
    stats: {
      appearances: 11,
      goals: 5,
      assists: 8,
      yellowCards: 2,
      redCards: 1,
    },
  },
  {
    id: 31,
    name: "Clark Kent",
    teamId: "cats",
    number: 9,
    position: "Forward",
    photo: "/images/players/default-player-3.png",
    stats: {
      appearances: 9,
      goals: 20,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 32,
    name: "Bruce Wayne",
    teamId: "cats",
    number: 3,
    position: "Defender",
    photo: "/images/players/default-player-4.png",
    stats: {
      appearances: 12,
      goals: 3,
      assists: 6,
      yellowCards: 0,
      redCards: 0,
    },
  },
  //===========DUP2==========
  //=========================
  {
    id: 33,
    name: "Miguel Santos",
    teamId: "eagles", //new
    number: 10, //new
    position: "Forward", //new Defender || Midfielder || Forward
    photo: "/images/players/default-player-1.png", //new
    stats: {
      //new
      appearances: 12,
      goals: 18,
      assists: 7,
      yellowCards: 2,
      redCards: 0,
    },
  },
  {
    id: 34,
    name: "José Lima",
    teamId: "lions",
    number: 7,
    position: "Forward",
    photo: "/images/players/default-player-2.png",
    stats: {
      appearances: 14,
      goals: 15,
      assists: 9,
      yellowCards: 3,
      redCards: 0,
    },
  },
  {
    id: 35,
    name: "Rui Almeida",
    teamId: "tigers",
    number: 10,
    position: "Forward",
    photo: "/images/players/default-player-2.png",
    stats: {
      appearances: 11,
      goals: 14,
      assists: 5,
      yellowCards: 2,
      redCards: 0,
    },
  },
  {
    id: 36,
    name: "Tomás Ferreira",
    teamId: "eagles",
    number: 9,
    position: "Midfielder",
    photo: "/images/players/default-player-4.png",
    stats: {
      appearances: 10,
      goals: 12,
      assists: 4,
      yellowCards: 1,
      redCards: 0,
    },
  },
  {
    id: 37,
    name: "Ricardo Nunes",
    teamId: "lions",
    number: 11,
    position: "Midfielder",
    photo: "/images/players/default-player-1.png",
    stats: {
      appearances: 13,
      goals: 10,
      assists: 3,
      yellowCards: 1,
      redCards: 1,
    },
  },
  {
    id: 38,
    name: "Jaime Paraiso",
    teamId: "tigers",
    number: 1,
    position: "Midfielder",
    photo: "/images/players/default-player-2.png",
    stats: {
      appearances: 12,
      goals: 3,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 39,
    name: "Pablo Picasso",
    teamId: "eagles",
    number: 4,
    position: "Defender",
    photo: "/images/players/default-player-3.png",
    stats: {
      appearances: 12,
      goals: 0,
      assists: 0,
      yellowCards: 1,
      redCards: 0,
    },
  },
  {
    id: 40,
    name: "Domingos Samuel",
    teamId: "lions",
    number: 1,
    position: "Defender",
    photo: "/images/players/default-player-4.png",
    stats: {
      appearances: 10,
      goals: 5,
      assists: 2,
      yellowCards: 2,
      redCards: 1,
    },
  },
  {
    id: 41,
    name: "Armando Titos",
    teamId: "tigers",
    number: 1,
    position: "Defender",
    photo: "/images/players/default-player-1.png",
    stats: {
      appearances: 12,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 42,
    name: "Carlos Mendes",
    teamId: "eagles",
    number: 1,
    position: "Goalkeeper",
    photo: "/images/players/default-player-2.png",
    stats: {
      appearances: 12,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 43,
    name: "Manuel Paredes",
    teamId: "lions",
    number: 1,
    position: "Goalkeeper",
    photo: "/images/players/default-player-3.png",
    stats: {
      appearances: 10,
      goals: 5,
      assists: 2,
      yellowCards: 2,
      redCards: 1,
    },
  },
  {
    id: 44,
    name: "Alfredo Maestro",
    teamId: "tigers",
    number: 1,
    position: "Goalkeeper",
    photo: "/images/players/default-player-4.png",
    stats: {
      appearances: 12,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 45,
    name: "Peter Parker",
    teamId: "cats",
    number: 2,
    position: "Goalkeeper",
    photo: "/images/players/default-player-1.png",
    stats: {
      appearances: 10,
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 46,
    name: "Tony Stark",
    teamId: "cats",
    number: 4,
    position: "Midfielder",
    photo: "/images/players/default-player-2.png",
    stats: {
      appearances: 11,
      goals: 5,
      assists: 8,
      yellowCards: 2,
      redCards: 1,
    },
  },
  {
    id: 47,
    name: "Clark Kent",
    teamId: "cats",
    number: 9,
    position: "Forward",
    photo: "/images/players/default-player-3.png",
    stats: {
      appearances: 9,
      goals: 20,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
    },
  },
  {
    id: 48,
    name: "Bruce Wayne",
    teamId: "cats",
    number: 3,
    position: "Defender",
    photo: "/images/players/default-player-4.png",
    stats: {
      appearances: 12,
      goals: 3,
      assists: 6,
      yellowCards: 0,
      redCards: 0,
    },
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
  {
    id: "eagles",
    // Only spread fields needed for the table display (Name, Abbr, Logo)
    name: teams.eagles.name,
    abbr: teams.eagles.abbr,
    logo: teams.eagles.logo,
    played: 12,
    wins: 9,
    draws: 2,
    losses: 1,
    goalsFor: 34,
    goalsAgainst: 12,
    form: ["W", "W", "W", "W", "W"],
    // goalDiff will be calculated: 34 - 12 = 22
    // points will be calculated: (9 × 3) + (2 × 1) = 29
  },
  {
    id: "lions",
    // Spreading only minimal team details to avoid data bloat.
    // Only spread fields needed for the table display (Name, Abbr, Logo)
    name: teams.lions.name,
    abbr: teams.lions.abbr,
    logo: teams.lions.logo,
    played: 12,
    wins: 8,
    draws: 1,
    losses: 3,
    goalsFor: 28,
    goalsAgainst: 15,
    form: ["W", "D", "W", "L", "W"],
    // goalDiff will be calculated: 28 - 15 = 13
    // points will be calculated: (8 × 3) + (1 × 1) = 25
  },
  {
    id: "tigers",
    // Only spread fields needed for the table display (Name, Abbr, Logo)
    name: teams.tigers.name,
    abbr: teams.tigers.abbr,
    logo: teams.tigers.logo,
    played: 11,
    wins: 5,
    draws: 3,
    losses: 3,
    goalsFor: 22,
    goalsAgainst: 18,
    form: ["L", "W", "D", "W", "L"],
    // goalDiff will be calculated: 22 - 18 = 4
    // points will be calculated: (5 × 3) + (3 × 1) = 18
  },
  {
    id: "cats",
    // Only spread fields needed for the table display (Name, Abbr, Logo)
    name: teams.cats.name,
    abbr: teams.cats.abbr,
    logo: teams.cats.logo,
    played: 11,
    wins: 11,
    draws: 0,
    losses: 0,
    goalsFor: 36,
    goalsAgainst: 8,
    form: ["W", "W", "W", "W", "L"],
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

// ============================================
// MATCHES DATA
// ============================================
// Array of match objects
// 'status' field is CRITICAL for filtering:
//   - 'live': currently playing
//   - 'finished': completed matches
//   - 'upcoming': future matches

export const matchesData = [
  {
    id: 1, // Unique ID for React keys
    // homeTeam: teams.lions, // Reference to team object
    // awayTeam: teams.tigers,
    homeTeamId: "lions", //new
    awayTeamId: "tigers", //new
    homeScore: 1, // Only for live/finished
    awayScore: 1,
    date: "2025-11-16", // ISO Format
    time: "14:00",
    status: "live", // 'live' | 'finished' | 'upcoming'
    // minute: 67, // Current minute (only for live)
    venue: "Campo Principal",
    info: "85 espectadores", // Optional extra info
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["José Lima"],
    awayScorers: ["Rui Almeida"],
  },
  {
    id: 2,
    // homeTeam: teams.eagles,
    // awayTeam: teams.lions,
    homeTeamId: "eagles", //new
    awayTeamId: "lions", //new
    homeScore: 3,
    awayScore: 2,
    date: "2025-11-16", // ISO Format
    time: "15:00",
    status: "finished",
    venue: "Campo A",
    // info: "⚽ Miguel Santos (2), Tomás Ferreira",
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Miguel Santos (2)", "Tomás Ferreira"],
    awayScorers: ["José Lima (2)"],
  },
  {
    id: 3,
    // homeTeam: teams.tigers,
    // awayTeam: teams.eagles,
    homeTeamId: "tigers", //new
    awayTeamId: "eagles", //new
    homeScore: 1,
    awayScore: 1,
    date: "2025-11-03", // ISO Format
    time: "16:00",
    status: "finished",
    venue: "Campo B",
    // 'info' is optional - can be omitted
    // ✅ NEW: Store as Array of Strings
    // Note: You can still keep "(2)" for multiple goals if you want strict string display
    homeScorers: ["Rui Almeida"],
    awayScorers: ["Tomás Ferreira"],
  },
  {
    id: 4,
    // homeTeam: teams.eagles,
    // awayTeam: teams.tigers,
    homeTeamId: "eagles", //new
    awayTeamId: "tigers", //new
    // No scores for upcoming matches
    date: "2025-11-23", // ISO Format
    time: "15:00",
    status: "upcoming",
    venue: "Campo A",
  },
  {
    id: 5,
    // homeTeam: teams.lions,
    // awayTeam: teams.tigers,
    homeTeamId: "lions", //new
    awayTeamId: "tigers", //new
    date: "2025-11-24", // ISO Format
    time: "16:00",
    status: "upcoming",
    venue: "Campo B",
  },
  {
    id: 6,
    // homeTeam: teams.lions,
    // awayTeam: teams.tigers,
    homeTeamId: "cats", //new
    awayTeamId: "tigers", //new
    date: "2025-12-25", // ISO Format
    time: "16:00",
    status: "canceled",
    venue: "Campo Central",
  },
];

// ============================================
// STATS DATA
// ============================================
// Quick statistics for the home page
export const statsData = [
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
