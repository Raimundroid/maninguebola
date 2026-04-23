// import React, { useState, useMemo } from "react";
// import "./StatisticsPage.css";
// import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
// import PlayerStatsTable from "../../components/PlayerStatsTable/PlayerStatsTable";
// import TableCaption from "../../components/atoms/tableCaption/TableCaption";
// import FilterButtons from "../../components/atoms/filterButtons/FilterButtons"; // Import FilterButtons

// const FALLBACK_COMPETITION = "Geral";

// const PlayersStatsIcon = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 -0.5 21 21"
//     height="18px"
//     width="16px"
//     fill="currentColor"
//     stroke="currentColor"
//     strokeWidth="0.5"
//     className={className}
//   >
//     <g transform="translate(-419.000000, -800.000000)">
//       <g transform="translate(56.000000, 160.000000)">
//         <path d="M374.55,657 C374.55,657.552 374.0796,658 373.5,658 C372.9204,658 372.45,657.552 372.45,657 L372.45,643 C372.45,642.448 372.9204,642 373.5,642 C374.0796,642 374.55,642.448 374.55,643 L374.55,657 Z M374.55,640 L372.45,640 C371.28975,640 370.35,640.895 370.35,642 L370.35,658 C370.35,659.105 371.28975,660 372.45,660 L374.55,660 C375.71025,660 376.65,659.105 376.65,658 L376.65,642 C376.65,640.895 375.71025,640 374.55,640 L374.55,640 Z M367.2,657 C367.2,657.552 366.7296,658 366.15,658 C365.5704,658 365.1,657.552 365.1,657 L365.1,647 C365.1,646.448 365.5704,646 366.15,646 C366.7296,646 367.2,646.448 367.2,647 L367.2,657 Z M367.2,644 L365.1,644 C363.93975,644 363,644.895 363,646 L363,658 C363,659.105 363.93975,660 365.1,660 L367.2,660 C368.36025,660 369.3,659.105 369.3,658 L369.3,646 C369.3,644.895 368.36025,644 367.2,644 L367.2,644 Z M381.9,657 C381.9,657.552 381.4296,658 380.85,658 C380.2704,658 379.8,657.552 379.8,657 L379.8,653 C379.8,652.448 380.2704,652 380.85,652 C381.4296,652 381.9,652.448 381.9,653 L381.9,657 Z M381.9,650 L379.8,650 C378.63975,650 377.7,650.895 377.7,652 L377.7,658 C377.7,659.105 378.63975,660 379.8,660 L381.9,660 C383.06025,660 384,659.105 384,658 L384,652 C384,650.895 383.06025,650 381.9,650 L381.9,650 Z"></path>
//       </g>
//     </g>
//   </svg>
// );

// const StatisticsPage = ({ players = [] }) => {
//   // 1. Extract unique competitions from the enriched player data
//   const competitionFilters = useMemo(() => {
//     const allNames = players.flatMap((player) => {
//       const teamComps = player.team?.competitions;
//       if (Array.isArray(teamComps)) return teamComps;
//       // Fallback if team only has a single competition string or nothing
//       return [player.team?.competition || FALLBACK_COMPETITION];
//     });

//     const uniqueNames = new Set(allNames);
//     return [...uniqueNames].map((name) => ({ value: name, label: name }));
//   }, [players]);

//   // 2. State for the active competition
//   const [activeCompetition, setActiveCompetition] = useState(
//     () => competitionFilters[0]?.value ?? "",
//   );

//   // 3. Filter players based on the selected competition
//   const filteredPlayers = useMemo(() => {
//     return players.filter((player) => {
//       const teamComps = player.team?.competitions;

//       if (Array.isArray(teamComps)) {
//         return teamComps.includes(activeCompetition);
//       }
//       return (
//         (player.team?.competition || FALLBACK_COMPETITION) === activeCompetition
//       );
//     });
//   }, [players, activeCompetition]);

//   return (
//     <div className="statistics-page">
//       <PageIndicator
//         icon={<PlayersStatsIcon />}
//         title={"Estatísticas dos Jogadores"}
//       />

//       {/* ── Competition filter row ─────────────────────────────────────────── */}
//       {competitionFilters.length > 1 && (
//         <FilterButtons
//           filters={competitionFilters}
//           activeFilter={activeCompetition}
//           onFilterChange={setActiveCompetition}
//         />
//       )}

//       {/* Pass the filtered list to the table */}
//       <PlayerStatsTable players={filteredPlayers} />

//       <TableCaption
//         dash={"-"}
//         items={[
//           { abbr: "J", text: "Jogos" },
//           { abbr: "Assists", text: "Assistências" },
//         ]}
//       />
//     </div>
//   );
// };

// export default StatisticsPage;

import React, { useState, useMemo } from "react";
// import "./StatisticsPage.css";
// import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
// import PlayerStatsTable from "../../components/PlayerStatsTable/PlayerStatsTable";
// import TableCaption from "../../components/atoms/tableCaption/TableCaption";
// import FilterButtons from "../../components/atoms/filterButtons/FilterButtons"; // Import FilterButtons

// const PlayersStatsIcon = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 -0.5 21 21"
//     height="18px"
//     width="16px"
//     // fill="currentColor"
//     // stroke="currentColor"
//     // strokeWidth="0.5"
//     className={className}
//   >
//     <g transform="translate(-419.000000, -800.000000)">
//       <g transform="translate(56.000000, 160.000000)">
//         <path d="M374.55,657 C374.55,657.552 374.0796,658 373.5,658 C372.9204,658 372.45,657.552 372.45,657 L372.45,643 C372.45,642.448 372.9204,642 373.5,642 C374.0796,642 374.55,642.448 374.55,643 L374.55,657 Z M374.55,640 L372.45,640 C371.28975,640 370.35,640.895 370.35,642 L370.35,658 C370.35,659.105 371.28975,660 372.45,660 L374.55,660 C375.71025,660 376.65,659.105 376.65,658 L376.65,642 C376.65,640.895 375.71025,640 374.55,640 L374.55,640 Z M367.2,657 C367.2,657.552 366.7296,658 366.15,658 C365.5704,658 365.1,657.552 365.1,657 L365.1,647 C365.1,646.448 365.5704,646 366.15,646 C366.7296,646 367.2,646.448 367.2,647 L367.2,657 Z M367.2,644 L365.1,644 C363.93975,644 363,644.895 363,646 L363,658 C363,659.105 363.93975,660 365.1,660 L367.2,660 C368.36025,660 369.3,659.105 369.3,658 L369.3,646 C369.3,644.895 368.36025,644 367.2,644 L367.2,644 Z M381.9,657 C381.9,657.552 381.4296,658 380.85,658 C380.2704,658 379.8,657.552 379.8,657 L379.8,653 C379.8,652.448 380.2704,652 380.85,652 C381.4296,652 381.9,652.448 381.9,653 L381.9,657 Z M381.9,650 L379.8,650 C378.63975,650 377.7,650.895 377.7,652 L377.7,658 C377.7,659.105 378.63975,660 379.8,660 L381.9,660 C383.06025,660 384,659.105 384,658 L384,652 C384,650.895 383.06025,650 381.9,650 L381.9,650 Z"></path>
//       </g>
//     </g>
//   </svg>
// );

// const StatisticsPage = ({ players = [] }) => {
//   // 1. Extract Unique Competitions from the enriched players
//   const competitionFilters = useMemo(() => {
//     const allComps = players.flatMap((p) => p.team?.competitions || []);
//     const unique = [...new Set(allComps)];

//     return unique.map((name) => ({
//       value: name,
//       label: name,
//     }));
//   }, [players]);

//   // 2. Set default active filter to the first available competition
//   const [activeCompetition, setActiveCompetition] = useState(
//     () => competitionFilters[0]?.value ?? "",
//   );

//   // 3. Filter players based on selected competition
//   const filteredPlayers = useMemo(() => {
//     if (!activeCompetition) return players;

//     return players.filter((player) =>
//       player.team?.competitions?.includes(activeCompetition),
//     );
//   }, [players, activeCompetition]);

//   return (
//     <div className="statistics-page">
//       <PageIndicator
//         icon={<PlayersStatsIcon />}
//         title="Estatísticas dos Jogadores"
//       />

//       {/* 4. Display the buttons if we found competitions in teamsData */}
//       {competitionFilters.length > 0 && (
//         <FilterButtons
//           filters={competitionFilters}
//           activeFilter={activeCompetition}
//           onFilterChange={setActiveCompetition}
//         />
//       )}

//       <PlayerStatsTable players={filteredPlayers} />

//       <TableCaption
//         dash={"-"}
//         items={[
//           { abbr: "J", text: "Jogos" },
//           { abbr: "Assists", text: "Assistências" },
//         ]}
//       />
//     </div>
//   );
// };

// export default StatisticsPage;

// GTP working code

import "./StatisticsPage.css";

import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import PlayerStatsTable from "../../components/PlayerStatsTable/PlayerStatsTable";
import TableCaption from "../../components/atoms/tableCaption/TableCaption";
import FilterButtons from "../../components/atoms/filterButtons/FilterButtons";

import competitionsData from "../../data/competitionsData";

/**
 * 📊 Icon Component (unchanged)
 */

const PlayersStatsIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -0.5 21 21"
    height="18px"
    width="16px"
    // fill="currentColor"
    // stroke="currentColor"
    // strokeWidth="0.5"
    className={className}
  >
    <g transform="translate(-419.000000, -800.000000)">
      <g transform="translate(56.000000, 160.000000)">
        <path d="M374.55,657 C374.55,657.552 374.0796,658 373.5,658 C372.9204,658 372.45,657.552 372.45,657 L372.45,643 C372.45,642.448 372.9204,642 373.5,642 C374.0796,642 374.55,642.448 374.55,643 L374.55,657 Z M374.55,640 L372.45,640 C371.28975,640 370.35,640.895 370.35,642 L370.35,658 C370.35,659.105 371.28975,660 372.45,660 L374.55,660 C375.71025,660 376.65,659.105 376.65,658 L376.65,642 C376.65,640.895 375.71025,640 374.55,640 L374.55,640 Z M367.2,657 C367.2,657.552 366.7296,658 366.15,658 C365.5704,658 365.1,657.552 365.1,657 L365.1,647 C365.1,646.448 365.5704,646 366.15,646 C366.7296,646 367.2,646.448 367.2,647 L367.2,657 Z M367.2,644 L365.1,644 C363.93975,644 363,644.895 363,646 L363,658 C363,659.105 363.93975,660 365.1,660 L367.2,660 C368.36025,660 369.3,659.105 369.3,658 L369.3,646 C369.3,644.895 368.36025,644 367.2,644 L367.2,644 Z M381.9,657 C381.9,657.552 381.4296,658 380.85,658 C380.2704,658 379.8,657.552 379.8,657 L379.8,653 C379.8,652.448 380.2704,652 380.85,652 C381.4296,652 381.9,652.448 381.9,653 L381.9,657 Z M381.9,650 L379.8,650 C378.63975,650 377.7,650.895 377.7,652 L377.7,658 C377.7,659.105 378.63975,660 379.8,660 L381.9,660 C383.06025,660 384,659.105 384,658 L384,652 C384,650.895 383.06025,650 381.9,650 L381.9,650 Z"></path>
      </g>
    </g>
  </svg>
);

/**
 * 📊 Statistics Page (UI ONLY)
 */
const StatisticsPage = ({
  players = [],
  teams = [],
  selectedCompetition,
  onCompetitionChange,
}) => {
  /**
   * Convert competitions into filter buttons format
   */
  const competitionFilters = competitionsData.map((comp) => ({
    value: comp.id,
    label: comp.name,
  }));

  return (
    <div className="statistics-page">
      {/* 🏷 Page Title */}
      <PageIndicator
        icon={<PlayersStatsIcon />}
        title={"Estatísticas dos Jogadores"}
      />

      {/* 🔘 Competition Filters */}
      <FilterButtons
        filters={competitionFilters}
        activeFilter={selectedCompetition}
        onFilterChange={onCompetitionChange}
      />

      {/* 📊 Stats Table */}
      <PlayerStatsTable
        players={players}
        teams={teams}
        selectedCompetition={selectedCompetition}
      />

      {/* 📘 Table Legend */}
      <TableCaption
        dash={"-"}
        items={[
          { abbr: "J", text: "Jogos" },
          { abbr: "Assists", text: "Assistências" },
        ]}
      />
    </div>
  );
};

export default StatisticsPage;
