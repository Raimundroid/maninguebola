// import teamsData from "./teamsData";

// // ============================================
// // HELPER FUNCTION: Calculate Standings Fields
// // ============================================
// // Logic remains identical to your original, but now exported for use in the Page
// export const calculateStandings = (standings) => {
//   const calculated = standings.map((team) => ({
//     ...team,
//     goalDiff: team.goalsFor - team.goalsAgainst,
//     points: team.wins * 3 + team.draws * 1,
//   }));

//   calculated.sort((a, b) => {
//     if (b.points !== a.points) return b.points - a.points;
//     if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
//     return b.goalsFor - a.goalsFor;
//   });

//   // Assign position based on the index of THIS specific filtered list
//   return calculated.map((team, index) => ({
//     ...team,
//     position: index + 1,
//   }));
// };

// // ============================================
// // RAW STANDINGS DATA
// // ============================================
// export const rawStandings = [
//   {
//     id: "UDChimedje",
//     name: teamsData.UDChimedje.name,
//     abbr: teamsData.UDChimedje.abbr,
//     logo: teamsData.UDChimedje.logo,
//     played: 11,
//     wins: 6,
//     draws: 5,
//     losses: 1,
//     goalsFor: 12,
//     goalsAgainst: 4,
//     form: ["W", "W", "W", "W", "L"],
//     // Updated to Array format as requested
//     // competitions: ["Campeonato de Pande", "Copa Moçambique"],
//   },
//   {
//     id: "kakanavas",
//     name: teamsData.kakanavas.name,
//     abbr: teamsData.kakanavas.abbr,
//     logo: teamsData.kakanavas.logo,
//     played: 11,
//     wins: 1,
//     draws: 5,
//     losses: 5,
//     goalsFor: 19,
//     goalsAgainst: 20,
//     form: ["W", "W", "W", "W", "L"],
//     // competitions: ["Campeonato Distrital de Govuro"],
//   },
//   {
//     id: "rebentaFogo",
//     name: teamsData.rebentaFogo.name,
//     abbr: teamsData.rebentaFogo.abbr,
//     logo: teamsData.rebentaFogo.logo,
//     played: 11,
//     wins: 5,
//     draws: 2,
//     losses: 4,
//     goalsFor: 15,
//     goalsAgainst: 11,
//     form: ["W", "W", "W", "W", "L"],
//     // competitions: ["Campeonato de Pande"],
//   },
//   {
//     id: "bingaFC",
//     name: teamsData.bingaFC.name,
//     abbr: teamsData.bingaFC.abbr,
//     logo: teamsData.bingaFC.logo,
//     played: 11,
//     wins: 3,
//     draws: 5,
//     losses: 3,
//     goalsFor: 18,
//     goalsAgainst: 10,
//     form: ["W", "W", "W", "W", "L"],
//     // competitions: ["Campeonato Distrital de Govuro"],
//   },
//   {
//     id: "realPande",
//     name: teamsData.realPande.name,
//     abbr: teamsData.realPande.abbr,
//     logo: teamsData.realPande.logo,
//     played: 11,
//     wins: 9,
//     draws: 1,
//     losses: 1,
//     goalsFor: 36,
//     goalsAgainst: 8,
//     form: ["W", "W", "W", "W", "L"],
//     // competitions: ["Campeonato de Pande"],
//   },
//   {
//     id: "cats",
//     name: teamsData.cats.name,
//     abbr: teamsData.cats.abbr,
//     logo: teamsData.cats.logo,
//     played: 11,
//     wins: 0,
//     draws: 5,
//     losses: 6,
//     goalsFor: 10,
//     goalsAgainst: 28,
//     form: ["W", "W", "W", "W", "L"],
//     // competitions: ["Campeonato Distrital de Morrumbene"],
//   },
//   {
//     id: "tigers",
//     name: teamsData.tigers.name,
//     abbr: teamsData.tigers.abbr,
//     logo: teamsData.tigers.logo,
//     played: 11,
//     wins: 0,
//     draws: 2,
//     losses: 9,
//     goalsFor: 4,
//     goalsAgainst: 18,
//     form: ["L", "L", "D", "L", "L"],
//     // competitions: ["Campeonato de Morrumbene"],
//   },
// ];

// // Keep default export for backwards compatibility if needed
// const standingsData = calculateStandings(rawStandings);
// export default standingsData;

import teamsData from "./teamsData";
import competitionsData from "./competitionsData";

// ============================================
// HELPER: Calculate standings for one competition
// ============================================
export const calculateStandings = (rawStandings, competitionId) => {
  // 1. Keep only teams that have stats for this competition
  const eligible = rawStandings.filter(
    (team) => team.stats.byCompetition?.[competitionId] != null,
  );

  // 2. Merge team identity with competition-specific stats
  const withStats = eligible.map((team) => ({
    id: team.id,
    name: team.name,
    abbr: team.abbr,
    logo: team.logo,
    ...team.stats.byCompetition[competitionId],
    goalDiff:
      team.stats.byCompetition[competitionId].goalsFor -
      team.stats.byCompetition[competitionId].goalsAgainst,
    points:
      team.stats.byCompetition[competitionId].wins * 3 +
      team.stats.byCompetition[competitionId].draws * 1,
  }));

  // 3. Sort: points → goal diff → goals for
  withStats.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
    return b.goalsFor - a.goalsFor;
  });

  // 4. Assign position relative to THIS competition's table
  return withStats.map((team, index) => ({
    ...team,
    position: index + 1,
  }));
};

// ============================================
// RAW STANDINGS DATA
// ============================================
export const rawStandings = [
  {
    id: "UDChimedje",
    name: teamsData.UDChimedje.name,
    abbr: teamsData.UDChimedje.abbr,
    logo: teamsData.UDChimedje.logo,
    stats: {
      byCompetition: {
        govuro: {
          played: 11,
          wins: 6,
          draws: 5,
          losses: 0,
          goalsFor: 12,
          goalsAgainst: 4,
          form: ["W", "W", "D", "W", "W"],
        },
      },
    },
  },
  {
    id: "kakanavas",
    name: teamsData.kakanavas.name,
    abbr: teamsData.kakanavas.abbr,
    logo: teamsData.kakanavas.logo,
    stats: {
      byCompetition: {
        govuro: {
          played: 11,
          wins: 1,
          draws: 5,
          losses: 5,
          goalsFor: 19,
          goalsAgainst: 20,
          form: ["W", "D", "L", "L", "D"],
        },
      },
    },
  },
  {
    id: "rebentaFogo",
    name: teamsData.rebentaFogo.name,
    abbr: teamsData.rebentaFogo.abbr,
    logo: teamsData.rebentaFogo.logo,
    stats: {
      byCompetition: {
        morrumbene: {
          played: 11,
          wins: 5,
          draws: 2,
          losses: 4,
          goalsFor: 15,
          goalsAgainst: 11,
          form: ["W", "W", "L", "W", "D"],
        },
      },
    },
  },
  {
    id: "bingaFC",
    name: teamsData.bingaFC.name,
    abbr: teamsData.bingaFC.abbr,
    logo: teamsData.bingaFC.logo,
    stats: {
      byCompetition: {
        govuro: {
          played: 11,
          wins: 3,
          draws: 5,
          losses: 3,
          goalsFor: 18,
          goalsAgainst: 10,
          form: ["D", "W", "D", "W", "L"],
        },
      },
    },
  },
  {
    id: "realPande",
    name: teamsData.realPande.name,
    abbr: teamsData.realPande.abbr,
    logo: teamsData.realPande.logo,
    stats: {
      byCompetition: {
        govuro: {
          played: 11,
          wins: 9,
          draws: 1,
          losses: 1,
          goalsFor: 36,
          goalsAgainst: 8,
          form: ["W", "W", "W", "W", "W"],
        },
      },
    },
  },
  {
    id: "cats",
    name: teamsData.cats.name,
    abbr: teamsData.cats.abbr,
    logo: teamsData.cats.logo,
    stats: {
      byCompetition: {
        morrumbene: {
          played: 11,
          wins: 0,
          draws: 5,
          losses: 6,
          goalsFor: 10,
          goalsAgainst: 28,
          form: ["L", "D", "L", "L", "D"],
        },
      },
    },
  },
  {
    id: "rioSambeFc",
    name: teamsData.rioSambeFc.name,
    abbr: teamsData.rioSambeFc.abbr,
    logo: teamsData.rioSambeFc.logo,
    stats: {
      byCompetition: {
        morrumbene: {
          played: 11,
          wins: 0,
          draws: 2,
          losses: 9,
          goalsFor: 4,
          goalsAgainst: 18,
          form: ["L", "L", "D", "L", "L"],
        },
      },
    },
  },
  {
    id: "tigers",
    name: teamsData.tigers.name,
    abbr: teamsData.tigers.abbr,
    logo: teamsData.tigers.logo,
    stats: {
      byCompetition: {
        example: {
          played: 8,
          wins: 4,
          draws: 2,
          losses: 2,
          goalsFor: 10,
          goalsAgainst: 6,
          form: ["W", "L", "W", "D", "W"],
        },
      },
    },
  },
];
