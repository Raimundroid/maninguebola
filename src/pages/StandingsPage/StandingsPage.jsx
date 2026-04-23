// // CLAUDE CODE Last Version

// import { useState, useMemo } from "react";
// // Import both the raw data and the helper function
// import { rawStandings, calculateStandings } from "../../data/standingsData";
// import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
// import FilterButtons from "../../components/atoms/filterButtons/FilterButtons";
// import StandingsTable from "../../components/StandingsTable/StandingsTable";
// import TableCaption from "../../components/atoms/tableCaption/TableCaption";
// import "./StandingsPage.css";

// // ─── StandingsIcon (unchanged) ───────────────────────────────────────────────
// const StandingsIcon = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 491.52 491.52"
//     height="16px"
//     width="16px"
//     fill="currentColor"
//     stroke="currentColor"
//     className={className}
//   >
//     <g>
//       <polygon points="266.24,143.36 245.76,81.92 226.427,143.36 163.84,143.36 214.467,178.217 195.133,237.732 245.76,204.8 296.387,237.732 277.053,178.217 327.68,143.36 "></polygon>
//       <path d="M433.355,62.149l-3.275-0.1V20.48C430.08,9.169,420.911,0,409.6,0H81.92C70.609,0,61.44,9.169,61.44,20.48v41.56 l-3.892,0.117C26.118,62.149,0.002,89.195,0.002,121.295v70.451c0,36.984,19.681,71.675,51.423,90.701l3.617,1.712l53.518,19.186 c20.689,23.439,46.858,42.159,75.759,53.443v32.332h-14.725c-37.116,0-67.195,30.079-67.195,67.195v14.725 c0,11.311,9.169,20.48,20.48,20.48h245.76c11.311,0,20.48-9.169,20.48-20.48v-14.725c0-37.116-30.079-67.195-67.195-67.195H307.2 v-32.332c28.901-11.284,55.07-30.005,75.759-53.443l53.518-19.186l3.617-1.712c31.742-19.025,51.423-53.716,51.423-90.701 v-70.451C491.518,89.195,465.402,62.149,433.355,62.149z M70.891,246.328c-18.473-11.825-29.929-32.626-29.929-54.582v-70.451 c0-9.793,8.105-18.186,17.203-18.186l3.275-0.098v81.862c0,21.569,4.435,42.698,12.384,62.506L70.891,246.328z M347.527,450.56 H143.993c2.622-11.724,13.085-20.48,25.602-20.48H204.8h81.92h35.205C334.442,430.08,344.906,438.836,347.527,450.56z M266.24,367.408v21.712h-40.96v-21.807c5.036,0.644,10.109,1.062,15.211,1.231c0.074,0.003,0.148,0.007,0.222,0.009 c1.68,0.053,3.362,0.087,5.047,0.087c1.563,0,3.123-0.025,4.682-0.071c1.414-0.039,2.83-0.105,4.246-0.18 c0.027-0.002,0.054-0.002,0.081-0.004C258.587,368.182,262.411,367.865,266.24,367.408z M252.855,327.465 c-0.242,0.013-0.483,0.025-0.725,0.037c-0.854,0.046-1.708,0.084-2.563,0.112c-1.271,0.038-2.541,0.066-3.807,0.066 c-1.402,0-2.81-0.029-4.224-0.084c-0.051-0.002-0.101-0.005-0.152-0.007c-10.007-0.405-20.289-2.188-30.802-5.281 c-0.866-0.255-1.732-0.446-2.595-0.585C149.915,303.436,102.4,245.622,102.4,184.873V40.96h286.72v143.913 C389.12,256.059,323.876,323.22,252.855,327.465z M450.558,191.746c0,21.956-11.457,42.757-29.929,54.582l-2.932,1.051 c7.948-19.808,12.384-40.937,12.384-62.506v-81.854l2.657,0.08c9.716,0.009,17.821,8.403,17.821,18.196V191.746z"></path>
//     </g>
//   </svg>
// );

// const FALLBACK_COMPETITION = "Geral";

// const StandingsPage = () => {
//   // 1. Derive unique competition names (Handling both Arrays and Strings)
//   const competitionFilters = useMemo(() => {
//     const allNames = rawStandings.flatMap((entry) => {
//       if (Array.isArray(entry.competitions)) return entry.competitions;
//       return [entry.competition || FALLBACK_COMPETITION];
//     });

//     const uniqueCompetitions = new Set(allNames);

//     return [...uniqueCompetitions].map((name) => ({
//       value: name,
//       label: name,
//     }));
//   }, []);

//   const [activeCompetition, setActiveCompetition] = useState(
//     () => competitionFilters[0]?.value ?? "",
//   );

//   // 2. THE FIX: Filter the raw data first, THEN calculate rankings
//   const processedStandings = useMemo(() => {
//     // A. Filter only teams belonging to the active competition
//     const subset = rawStandings.filter((entry) => {
//       if (Array.isArray(entry.competitions)) {
//         return entry.competitions.includes(activeCompetition);
//       }
//       return (entry.competition || FALLBACK_COMPETITION) === activeCompetition;
//     });

//     // B. Calculate points and ranking positions for ONLY this subset
//     return calculateStandings(subset);
//   }, [activeCompetition]);

//   return (
//     <div className="standigs-page-container">
//       <PageIndicator icon={<StandingsIcon />} title="Classificação" />

//       {competitionFilters.length > 1 && (
//         <FilterButtons
//           filters={competitionFilters}
//           activeFilter={activeCompetition}
//           onFilterChange={setActiveCompetition}
//         />
//       )}

//       {/* Table now receives data where position #1 is relative to the competition */}
//       <StandingsTable standings={processedStandings} />

//       <TableCaption
//         dash={"-"}
//         items={[
//           { abbr: "J", text: "Jogos" },
//           { abbr: "V", text: "Vitórias" },
//           { abbr: "E", text: "Empates" },
//           { abbr: "D", text: "Derrotas" },
//           { abbr: "GM", text: "Golos Marcados" },
//           { abbr: "GS", text: "Golos Sofridos" },
//           { abbr: "DG", text: "Diferença de Golos" },
//           { abbr: "Pts", text: "Pontos" },
//         ]}
//       />
//     </div>
//   );
// };

// export default StandingsPage;

import { useState, useMemo } from "react";
import { rawStandings, calculateStandings } from "../../data/standingsData";
import competitionsData from "../../data/competitionsData";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import FilterButtons from "../../components/atoms/filterButtons/FilterButtons";
import StandingsTable from "../../components/StandingsTable/StandingsTable";
import TableCaption from "../../components/atoms/tableCaption/TableCaption";
import "./StandingsPage.css";

// ─── StandingsIcon ───────────────────────────────────────────────
const StandingsIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 491.52 491.52"
    height="16px"
    width="16px"
    fill="currentColor"
    stroke="currentColor"
    className={className}
  >
    <g>
      <polygon points="266.24,143.36 245.76,81.92 226.427,143.36 163.84,143.36 214.467,178.217 195.133,237.732 245.76,204.8 296.387,237.732 277.053,178.217 327.68,143.36 "></polygon>
      <path d="M433.355,62.149l-3.275-0.1V20.48C430.08,9.169,420.911,0,409.6,0H81.92C70.609,0,61.44,9.169,61.44,20.48v41.56 l-3.892,0.117C26.118,62.149,0.002,89.195,0.002,121.295v70.451c0,36.984,19.681,71.675,51.423,90.701l3.617,1.712l53.518,19.186 c20.689,23.439,46.858,42.159,75.759,53.443v32.332h-14.725c-37.116,0-67.195,30.079-67.195,67.195v14.725 c0,11.311,9.169,20.48,20.48,20.48h245.76c11.311,0,20.48-9.169,20.48-20.48v-14.725c0-37.116-30.079-67.195-67.195-67.195H307.2 v-32.332c28.901-11.284,55.07-30.005,75.759-53.443l53.518-19.186l3.617-1.712c31.742-19.025,51.423-53.716,51.423-90.701 v-70.451C491.518,89.195,465.402,62.149,433.355,62.149z M70.891,246.328c-18.473-11.825-29.929-32.626-29.929-54.582v-70.451 c0-9.793,8.105-18.186,17.203-18.186l3.275-0.098v81.862c0,21.569,4.435,42.698,12.384,62.506L70.891,246.328z M347.527,450.56 H143.993c2.622-11.724,13.085-20.48,25.602-20.48H204.8h81.92h35.205C334.442,430.08,344.906,438.836,347.527,450.56z M266.24,367.408v21.712h-40.96v-21.807c5.036,0.644,10.109,1.062,15.211,1.231c0.074,0.003,0.148,0.007,0.222,0.009 c1.68,0.053,3.362,0.087,5.047,0.087c1.563,0,3.123-0.025,4.682-0.071c1.414-0.039,2.83-0.105,4.246-0.18 c0.027-0.002,0.054-0.002,0.081-0.004C258.587,368.182,262.411,367.865,266.24,367.408z M252.855,327.465 c-0.242,0.013-0.483,0.025-0.725,0.037c-0.854,0.046-1.708,0.084-2.563,0.112c-1.271,0.038-2.541,0.066-3.807,0.066 c-1.402,0-2.81-0.029-4.224-0.084c-0.051-0.002-0.101-0.005-0.152-0.007c-10.007-0.405-20.289-2.188-30.802-5.281 c-0.866-0.255-1.732-0.446-2.595-0.585C149.915,303.436,102.4,245.622,102.4,184.873V40.96h286.72v143.913 C389.12,256.059,323.876,323.22,252.855,327.465z M450.558,191.746c0,21.956-11.457,42.757-29.929,54.582l-2.932,1.051 c7.948-19.808,12.384-40.937,12.384-62.506v-81.854l2.657,0.08c9.716,0.009,17.821,8.403,17.821,18.196V191.746z"></path>
    </g>
  </svg>
);

const StandingsPage = () => {
  // 1. Only show competitions that have at least one team with stats for them
  const competitionFilters = useMemo(() => {
    const activeIds = new Set(
      rawStandings.flatMap((team) =>
        Object.keys(team.stats?.byCompetition ?? {}),
      ),
    );

    return competitionsData
      .filter((comp) => activeIds.has(comp.id))
      .map((comp) => ({ value: comp.id, label: comp.name }));
  }, []);

  const [activeCompetition, setActiveCompetition] = useState(
    () => competitionFilters[0]?.value ?? "",
  );

  // 2. Calculate standings for the selected competition ID
  const processedStandings = useMemo(
    () => calculateStandings(rawStandings, activeCompetition),
    [activeCompetition],
  );

  return (
    <div className="standigs-page-container">
      <PageIndicator icon={<StandingsIcon />} title="Classificação" />

      {competitionFilters.length > 1 && (
        <FilterButtons
          filters={competitionFilters}
          activeFilter={activeCompetition}
          onFilterChange={setActiveCompetition}
        />
      )}

      <StandingsTable standings={processedStandings} />

      <TableCaption
        dash={"-"}
        items={[
          { abbr: "J", text: "Jogos" },
          { abbr: "V", text: "Vitórias" },
          { abbr: "E", text: "Empates" },
          { abbr: "D", text: "Derrotas" },
          { abbr: "GM", text: "Golos Marcados" },
          { abbr: "GS", text: "Golos Sofridos" },
          { abbr: "DG", text: "Diferença de Golos" },
          { abbr: "Pts", text: "Pontos" },
        ]}
      />
    </div>
  );
};

export default StandingsPage;
