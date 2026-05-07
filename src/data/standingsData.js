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

export const calculateStandings = (
  rawStandings,
  // matches,
  competitionId,
) => {
  // =========================================================
  // 1. Filter only teams participating in this competition
  // =========================================================

  const eligible = rawStandings.filter(
    (team) => team.stats.byCompetition?.[competitionId] != null,
  );

  // =========================================================
  // 2. Merge identity + competition stats
  // =========================================================

  const withStats = eligible.map((team) => {
    const stats = team.stats.byCompetition[competitionId];

    return {
      id: team.id,
      name: team.name,
      abbr: team.abbr,
      logo: team.logo,

      ...stats,

      // Goal Difference (GF - GA)
      goalDiff: stats.goalsFor - stats.goalsAgainst,

      // Standard football points system
      points: stats.wins * 3 + stats.draws,

      // -----------------------------------------
      // FAIR PLAY SCORE
      // Lower is BETTER
      //
      // FIFA-style example:
      // yellow = 1
      // indirect red = 3
      // direct red = 4
      // yellow + direct red = 5
      //
      // Here we use a simplified version.
      // -----------------------------------------

      fairPlay:
        (stats.yellowCards || 0) +
        (stats.redCards || 0) * 3,
    };
  });

  // =========================================================
  // 3. HEAD-TO-HEAD HELPER
  // =========================================================
  //
  // This function compares ONLY matches
  // between two tied teams.
  //
  // Real football apps usually:
  // - build a mini-league
  // - recalculate standings only
  //   for tied teams
  //
  // Here we implement the simpler
  // 2-team version first.
  // =========================================================

  const headToHead = (teamA, teamB) => {
    const relevantMatches = matches.filter((match) => {
      return (
        match.competitionId === competitionId &&
        (
          (
            match.homeTeamId === teamA.id &&
            match.awayTeamId === teamB.id
          ) ||
          (
            match.homeTeamId === teamB.id &&
            match.awayTeamId === teamA.id
          )
        )
      );
    });

    let teamAPoints = 0;
    let teamBPoints = 0;

    relevantMatches.forEach((match) => {
      const isTeamAHome = match.homeTeamId === teamA.id;

      const teamAGoals = isTeamAHome
        ? match.homeGoals
        : match.awayGoals;

      const teamBGoals = isTeamAHome
        ? match.awayGoals
        : match.homeGoals;

      // Win
      if (teamAGoals > teamBGoals) {
        teamAPoints += 3;
      }

      // Loss
      else if (teamBGoals > teamAGoals) {
        teamBPoints += 3;
      }

      // Draw
      else {
        teamAPoints += 1;
        teamBPoints += 1;
      }
    });

    // Return comparison result
    return teamBPoints - teamAPoints;
  };

  // =========================================================
  // 4. MAIN SORTING LOGIC
  // =========================================================
  //
  // ORDER:
  //
  // 1. Points
  // 2. Goal Difference
  // 3. Goals Scored
  // 4. Head-to-Head
  // 5. Fair Play
  // 6. Alphabetical (final fallback)
  //
  // This follows common FIFA-style systems.
  // =========================================================

  withStats.sort((a, b) => {

    // -----------------------------------------
    // 1. POINTS
    // -----------------------------------------

    if (b.points !== a.points) {
      return b.points - a.points;
    }

    // -----------------------------------------
    // 2. GOAL DIFFERENCE
    // -----------------------------------------

    if (b.goalDiff !== a.goalDiff) {
      return b.goalDiff - a.goalDiff;
    }

    // -----------------------------------------
    // 3. GOALS SCORED
    // -----------------------------------------

    if (b.goalsFor !== a.goalsFor) {
      return b.goalsFor - a.goalsFor;
    }

{
  /**
    // -----------------------------------------
    // 4. HEAD-TO-HEAD
    // -----------------------------------------
    //
    // Only meaningful if teams are
    // still tied after overall stats.
    //
    // FIFA applies head-to-head AFTER
    // goal difference and goals scored.
    // -----------------------------------------

    const h2hResult = headToHead(a, b);

    if (h2hResult !== 0) {
      return h2hResult;
    }

    // -----------------------------------------
    // 5. FAIR PLAY
    // -----------------------------------------
    //
    // Lower disciplinary score wins.
    //
    // Fewer cards = better ranking.
    // -----------------------------------------

    if (a.fairPlay !== b.fairPlay) {
      return a.fairPlay - b.fairPlay;
    }

    */
}

    // -----------------------------------------
    // 6. FINAL FALLBACK
    // -----------------------------------------
    //
    // Alphabetical sorting guarantees:
    //
    // - deterministic UI
    // - stable sorting
    // - prevents random rendering order
    //
    // Real apps ALWAYS use a final fallback.
    // -----------------------------------------

    return a.name.localeCompare(
      b.name,
      undefined,
      {
        numeric: true,
        sensitivity: "base",
      },
    );
  });

  // =========================================================
  // 5. ASSIGN POSITIONS
  // =========================================================

  return withStats.map((team, index) => ({
    ...team,
    position: index + 1,
  }));
};

// ============================================
// HELPER: Calculate standings for one competition
// ============================================
// export const calculateStandings = (rawStandings, competitionId) => {
//   // 1. Keep only teams that have stats for this competition
//   const eligible = rawStandings.filter(
//     (team) => team.stats.byCompetition?.[competitionId] != null,
//   );

//   // 2. Merge team identity with competition-specific stats
//   const withStats = eligible.map((team) => ({
//     id: team.id,
//     name: team.name,
//     abbr: team.abbr,
//     logo: team.logo,
//     ...team.stats.byCompetition[competitionId],
//     goalDiff:
//       team.stats.byCompetition[competitionId].goalsFor -
//       team.stats.byCompetition[competitionId].goalsAgainst,
//     points:
//       team.stats.byCompetition[competitionId].wins * 3 +
//       team.stats.byCompetition[competitionId].draws * 1,
//   }));

//   // 3. Sort: points → goal diff → goals for
//   withStats.sort((a, b) => {
//     if (b.points !== a.points) return b.points - a.points;
//     if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
//     return a.name.localeCompare(b.name, undefined, {
//       numeric: true,
//       sensitivity: "base",
//     });

//     // return b.goalsFor - a.goalsFor;
//   });

//   // 4. Assign position relative to THIS competition's table
//   return withStats.map((team, index) => ({
//     ...team,
//     position: index + 1,
//   }));
// };

// ============================================
// RAW STANDINGS DATA
// ============================================
export const rawStandings = [
  // ================================================================
  // ================ Classificação do "Campeonato do Núcleo de Pande" ================
  // ================================================================

  //UDChimedje, kakanavasFC, rebentaFogo, bingaFC, realChibuca, onzeIrmaos, teamBebado, associacaoDesportivaPande, SFCSave, kingOfTheJungle, UDMaluvane, MachacameFC
  {
    id: "UDChimedje",
    name: teamsData.UDChimedje.name,
    abbr: teamsData.UDChimedje.abbr,
    logo: teamsData.UDChimedje.logo,
    stats: {
      byCompetition: {
        pande: {
          played: 1,
          wins: 0,
          draws: 1,
          losses: 0,
          goalsFor: 2,
          goalsAgainst: 2,
          // form: ["W", "W", "D", "W", "W"],
        },
      },
    },
  },
  {
    id: "kakanavasFC",
    name: teamsData.kakanavasFC.name,
    abbr: teamsData.kakanavasFC.abbr,
    logo: teamsData.kakanavasFC.logo,
    stats: {
      byCompetition: {
        pande: {
          played: 1,
          wins: 1,
          draws: 0,
          losses: 0,
          goalsFor: 2,
          goalsAgainst: 1,
          // form: ["W", "W", "D", "W", "W"],
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
        pande: {
          played: 1,
          wins: 0,
          draws: 0,
          losses: 1,
          goalsFor: 1,
          goalsAgainst: 2,
          // form: ["W", "W", "D", "W", "W"],
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
        pande: {
          played: 1,
          wins: 0,
          draws: 0,
          losses: 1,
          goalsFor: 1,
          goalsAgainst: 3,
          // form: ["W", "W", "D", "W", "W"],
        },
      },
    },
  },
  {
    id: "realChibuca",
    name: teamsData.realChibuca.name,
    abbr: teamsData.realChibuca.abbr,
    logo: teamsData.realChibuca.logo,
    stats: {
      byCompetition: {
        pande: {
          played: 1,
          wins: 0,
          draws: 1,
          losses: 0,
          goalsFor: 0,
          goalsAgainst: 0,
          // form: ["W", "W", "D", "W", "W"],
        },
      },
    },
  },

  {
    id: "onzeIrmaos",
    name: teamsData.onzeIrmaos.name,
    abbr: teamsData.onzeIrmaos.abbr,
    logo: teamsData.onzeIrmaos.logo,
    stats: {
      byCompetition: {
        pande: {
          played: 1,
          wins: 0,
          draws: 1,
          losses: 0,
          goalsFor: 0,
          goalsAgainst: 0,
          // form: ["W", "W", "D", "W", "W"],
        },
      },
    },
  },
  {
    id: "teamBebado",
    name: teamsData.teamBebado.name,
    abbr: teamsData.teamBebado.abbr,
    logo: teamsData.teamBebado.logo,
    stats: {
      byCompetition: {
        pande: {
          played: 1,
          wins: 1,
          draws: 0,
          losses: 0,
          goalsFor: 2,
          goalsAgainst: 1,
          // form: ["W", "W", "D", "W", "W"],
        },
      },
    },
  },

  {
    id: "associacaoDesportivaPande",
    name: teamsData.associacaoDesportivaPande.name,
    abbr: teamsData.associacaoDesportivaPande.abbr,
    logo: teamsData.associacaoDesportivaPande.logo,
    stats: {
      byCompetition: {
        pande: {
          played: 1,
          wins: 1,
          draws: 0,
          losses: 0,
          goalsFor: 2,
          goalsAgainst: 1,
          // form: ["W", "W", "D", "W", "W"],
        },
      },
    },
  },
  {
    id: "SFCSave",
    name: teamsData.SFCSave.name,
    abbr: teamsData.SFCSave.abbr,
    logo: teamsData.SFCSave.logo,
    stats: {
      byCompetition: {
        pande: {
          played: 1,
          wins: 0,
          draws: 0,
          losses: 1,
          goalsFor: 1,
          goalsAgainst: 2,
          // form: ["W", "W", "D", "W", "W"],
        },
      },
    },
  },
  {
    id: "kingOfTheJungle",
    name: teamsData.kingOfTheJungle.name,
    abbr: teamsData.kingOfTheJungle.abbr,
    logo: teamsData.kingOfTheJungle.logo,
    stats: {
      byCompetition: {
        pande: {
          played: 1,
          wins: 0,
          draws: 1,
          losses: 0,
          goalsFor: 2,
          goalsAgainst: 2,
          // form: ["W", "W", "D", "W", "W"],
        },
      },
    },
  },

  {
    id: "UDMaluvane",
    name: teamsData.UDMaluvane.name,
    abbr: teamsData.UDMaluvane.abbr,
    logo: teamsData.UDMaluvane.logo,
    stats: {
      byCompetition: {
        pande: {
          played: 1,
          wins: 0,
          draws: 0,
          losses: 1,
          goalsFor: 1,
          goalsAgainst: 2,
          // form: ["W", "W", "D", "W", "W"],
        },
      },
    },
  },
  {
    id: "machacameFC",
    name: teamsData.machacameFC.name,
    abbr: teamsData.machacameFC.abbr,
    logo: teamsData.machacameFC.logo,
    stats: {
      byCompetition: {
        pande: {
          played: 1,
          wins: 1,
          draws: 0,
          losses: 0,
          goalsFor: 3,
          goalsAgainst: 1,
          // form: ["W", "W", "D", "W", "W"],
        },
      },
    },
  },
  //UDChimedje, kakanavasFC, rebentaFogo, bingaFC, realChibuca, onzeIrmaos, teamBebado, associacaoDesportivaPande, SFCSave, kingOfTheJungle, UDMaluvane, MachacameFC
];

// // Keep default export for backwards compatibility if needed
const standingsData = calculateStandings(rawStandings);
export default standingsData;

{
  /**
Your current logic is already very clean and follows a good real-world structure.
What you are missing now is a professional multi-layer tie-breaker system similar to what FIFA-style competition managers and football apps use.

Your intended order:

Points
Goal Difference
Goals Scored
Head-to-Head
Fair Play

is excellent and matches many real football tournament systems.

The important thing now is implementing it in a scalable and maintainable way.

IMPORTANT ARCHITECTURE DECISION
Why your current approach needs restructuring

Your current sorting works because:

points
goal difference
goals scored

are all team-level stats.

BUT:

Head-to-head is NOT a team-level stat.

It depends on:

matches between tied teams only.

That means:

a.headToHead

does NOT exist naturally.

Professional football systems solve this by:

passing match data into the standings calculator,
then computing mini-leagues dynamically.

This is how FIFA, UEFA, FotMob, SofaScore, Flashscore, etc. handle it.

BEST PRACTICE APPROACH

Instead of:

calculateStandings(rawStandings, competitionId)

Use:

calculateStandings(rawStandings, matches, competitionId)

because:

standings depend on matches,
especially head-to-head and fair play.
RECOMMENDED DATA STRUCTURE

You should eventually have match data like:

const matches = [
  {
    competitionId: "liga-1",
    homeTeamId: 1,
    awayTeamId: 2,

    homeGoals: 2,
    awayGoals: 1,

    homeYellowCards: 1,
    awayYellowCards: 3,

    homeRedCards: 0,
    awayRedCards: 1,
  },
];

This is the professional approach.

IMPROVED VERSION

Below is a scalable real-world implementation.

// ============================================
// HELPER: Calculate standings for one competition
// ============================================

export const calculateStandings = (
  rawStandings,
  matches,
  competitionId,
) => {
  // =========================================================
  // 1. Filter only teams participating in this competition
  // =========================================================

  const eligible = rawStandings.filter(
    (team) => team.stats.byCompetition?.[competitionId] != null,
  );

  // =========================================================
  // 2. Merge identity + competition stats
  // =========================================================

  const withStats = eligible.map((team) => {
    const stats = team.stats.byCompetition[competitionId];

    return {
      id: team.id,
      name: team.name,
      abbr: team.abbr,
      logo: team.logo,

      ...stats,

      // Goal Difference (GF - GA)
      goalDiff: stats.goalsFor - stats.goalsAgainst,

      // Standard football points system
      points: stats.wins * 3 + stats.draws,

      // -----------------------------------------
      // FAIR PLAY SCORE
      // Lower is BETTER
      //
      // FIFA-style example:
      // yellow = 1
      // indirect red = 3
      // direct red = 4
      // yellow + direct red = 5
      //
      // Here we use a simplified version.
      // -----------------------------------------

      fairPlay:
        (stats.yellowCards || 0) +
        (stats.redCards || 0) * 3,
    };
  });

  // =========================================================
  // 3. HEAD-TO-HEAD HELPER
  // =========================================================
  //
  // This function compares ONLY matches
  // between two tied teams.
  //
  // Real football apps usually:
  // - build a mini-league
  // - recalculate standings only
  //   for tied teams
  //
  // Here we implement the simpler
  // 2-team version first.
  // =========================================================

  const headToHead = (teamA, teamB) => {
    const relevantMatches = matches.filter((match) => {
      return (
        match.competitionId === competitionId &&
        (
          (
            match.homeTeamId === teamA.id &&
            match.awayTeamId === teamB.id
          ) ||
          (
            match.homeTeamId === teamB.id &&
            match.awayTeamId === teamA.id
          )
        )
      );
    });

    let teamAPoints = 0;
    let teamBPoints = 0;

    relevantMatches.forEach((match) => {
      const isTeamAHome = match.homeTeamId === teamA.id;

      const teamAGoals = isTeamAHome
        ? match.homeGoals
        : match.awayGoals;

      const teamBGoals = isTeamAHome
        ? match.awayGoals
        : match.homeGoals;

      // Win
      if (teamAGoals > teamBGoals) {
        teamAPoints += 3;
      }

      // Loss
      else if (teamBGoals > teamAGoals) {
        teamBPoints += 3;
      }

      // Draw
      else {
        teamAPoints += 1;
        teamBPoints += 1;
      }
    });

    // Return comparison result
    return teamBPoints - teamAPoints;
  };

  // =========================================================
  // 4. MAIN SORTING LOGIC
  // =========================================================
  //
  // ORDER:
  //
  // 1. Points
  // 2. Goal Difference
  // 3. Goals Scored
  // 4. Head-to-Head
  // 5. Fair Play
  // 6. Alphabetical (final fallback)
  //
  // This follows common FIFA-style systems.
  // =========================================================

  withStats.sort((a, b) => {

    // -----------------------------------------
    // 1. POINTS
    // -----------------------------------------

    if (b.points !== a.points) {
      return b.points - a.points;
    }

    // -----------------------------------------
    // 2. GOAL DIFFERENCE
    // -----------------------------------------

    if (b.goalDiff !== a.goalDiff) {
      return b.goalDiff - a.goalDiff;
    }

    // -----------------------------------------
    // 3. GOALS SCORED
    // -----------------------------------------

    if (b.goalsFor !== a.goalsFor) {
      return b.goalsFor - a.goalsFor;
    }

    // -----------------------------------------
    // 4. HEAD-TO-HEAD
    // -----------------------------------------
    //
    // Only meaningful if teams are
    // still tied after overall stats.
    //
    // FIFA applies head-to-head AFTER
    // goal difference and goals scored.
    // -----------------------------------------

    const h2hResult = headToHead(a, b);

    if (h2hResult !== 0) {
      return h2hResult;
    }

    // -----------------------------------------
    // 5. FAIR PLAY
    // -----------------------------------------
    //
    // Lower disciplinary score wins.
    //
    // Fewer cards = better ranking.
    // -----------------------------------------

    if (a.fairPlay !== b.fairPlay) {
      return a.fairPlay - b.fairPlay;
    }

    // -----------------------------------------
    // 6. FINAL FALLBACK
    // -----------------------------------------
    //
    // Alphabetical sorting guarantees:
    //
    // - deterministic UI
    // - stable sorting
    // - prevents random rendering order
    //
    // Real apps ALWAYS use a final fallback.
    // -----------------------------------------

    return a.name.localeCompare(
      b.name,
      undefined,
      {
        numeric: true,
        sensitivity: "base",
      },
    );
  });

  // =========================================================
  // 5. ASSIGN POSITIONS
  // =========================================================

  return withStats.map((team, index) => ({
    ...team,
    position: index + 1,
  }));
};
WHY THIS IS A PROFESSIONAL IMPLEMENTATION

This version follows real football software principles:

1. Stable deterministic sorting

Very important in React.

Without final fallback sorting:

rows can jump unexpectedly,
React rendering may become inconsistent.

Professional apps ALWAYS include a final fallback.

2. Head-to-head computed dynamically

This is how:

FIFA
UEFA
FotMob
SofaScore
Flashscore

handle standings internally.

3. Fair play uses penalty scoring

This follows FIFA methodology:

fewer cards = better rank.
4. Scalable architecture

Your future features become MUCH easier:

live tables,
home/away tables,
form tables,
playoff qualification,
mini-leagues,
group-stage simulations,
tie-break previews.
IMPORTANT FUTURE IMPROVEMENT

Your current head-to-head works best for:

2 tied teams.

But FIFA/UEFA also support:

3-way ties,
4-way ties.

Professional systems solve this by:

building a mini-table ONLY for tied teams,
recalculating standings recursively.

That is a much bigger algorithm.

But your current version is already excellent for:

local leagues,
amateur tournaments,
most practical use cases,
MVP football apps.
FINAL RECOMMENDATION

Your chosen order is excellent because:

It rewards:
consistency,
attacking football,
overall performance.

instead of:

isolated head-to-head luck.

This is one reason FIFA-style systems prefer:

overall GD first,
then goals scored,
then H2H.
*/
}
