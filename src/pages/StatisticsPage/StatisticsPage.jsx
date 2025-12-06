import React from "react";
import "./StatisticsPage.css";
import PlayerStatsTable from "../../components/PlayerStatsTable/PlayerStatsTable";

import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import FilterButtons from "../../components/atoms/filterButtons/FilterButtons";

// const MATCH_FILTERS = [
//   { value: "all", label: "Todos" }, // All matches
//   { value: "live", label: "Ao Vivo" }, // Currently playing
//   { value: "finished", label: "Realizados" }, // Finished/completed
//   { value: "upcoming", label: "Próximos" }, // Future matches
//   { value: "canceled", label: "Cancelados" },
// ];

// // 1. Hook to read the URL query parameters
// const [searchParams] = useSearchParams();

// // 2. Get the filter value from the URL, defaulting to 'all' if not present
// const urlFilter = searchParams.get("filter");

// // 3. Determine the initial filter state
// const initialFilter =
//   urlFilter && ["live", "finished", "upcoming", "canceled"].includes(urlFilter)
//     ? urlFilter // Use the valid URL filter
//     : "all"; // Default to 'all'

// const [activeFilter, setActiveFilter] = useState(initialFilter);

// const filteredMatches = useMemo(() => {
//   let resultMatches;

//   // A. Filter Step
//   if (activeFilter === "all") {
//     // If 'all' is selected, start with all matches
//     resultMatches = matches;
//   } else {
//     // Otherwise, filter matches by the active status
//     resultMatches = matches.filter((match) => match.status === activeFilter);
//   }

//   return resultMatches
//     .slice() // Create a shallow copy to sort
//     .sort(complexMatchSorter); // Apply the custom sorting logic
// }, [matches, activeFilter]);

const StatisticsPage = ({ players = {}, teams = [] }) => {
  return (
    <div className="statistics-page">
      <PageIndicator icon={"📊"} title={"Estatísticas dos Jogadores"} />
      {/* <FilterButtons
      // filters={MATCH_FILTERS}
      // activeFilter={activeFilter}
      // onFilterChange={setActiveFilter}
      /> */}
      <PlayerStatsTable players={players} teams={teams} />
    </div>
  );
};

export default StatisticsPage;

//============================================
// OG JSX (PASSED/TYPED VERSION)=================
//============================================

// import React, { useState, useMemo } from "react";
// import { Link } from "react-router-dom";
// import "./StatisticsPage.css";
// import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";

// /**
//  * ============================================
//  * STATISTICS PAGE COMPONENT
//  * ============================================
//  *
//  * PURPOSE:
//  * This page displays player statistics in two tabs:
//  * 1. Goals Tab - Shows top 20 goal scorers
//  * 2. Assists Tab - Shows top 20 assist providers
//  *
//  * FEATURES:
//  * - Sortable columns (click header to sort)
//  * - Filter by team (dropdown)
//  * - Filter by position (dropdown)
//  * - Search by player name (text input)
//  * - Top 3 players highlighted with medals (🥇🥈🥉)
//  * - Responsive: Table on desktop, Cards on mobile
//  *
//  *  * PROPS EXPECTED:
//  * @param {Array} players - Array of player objects with stats
//  *   Example: [{ id: 1, name: "John", teamId: "eagles", position: "Forward",
//  *              stats: { goals: 10, assists: 5, appearances: 12 } }]
//  *
//  * @param {Array|Object} teams - Team data (can be array or object)
//  *   Example Array: [{ id: "eagles", name: "FC Eagles", logo: "/logo.png" }]
//  *   Example Object: { eagles: { id: "eagles", name: "FC Eagles" } }
//  *
//  * HOW TO DISABLE FILTERS:
//  * Comment out the entire <div className="stats-filters"> section (lines ~200-260)
//  */

// const StatisticsPage = ({ players = [], teams = [] }) => {
//   // ============================================
//   // STATE MANAGEMENT
//   // ============================================
//   /**
//    * activeTab: Controls which tab is currently displayed
//    * - 'goals' = Shows goal scorers
//    * - 'assists' = Shows assist providers
//    */
//   const [activeTab, setActiveTab] = useState("goals");

//   /**
//    * sortBy: Which column to sort by
//    * Options: 'value' (goals/assists), 'name', 'team', 'matches', 'average'
//    */
//   const [sortBy, setSortBy] = useState("value");

//   /**
//    * sortOrder: Direction of sorting
//    * - 'asc' = Ascending (low to high)
//    * - 'desc' = Descending (high to low)
//    */
//   const [sortOrder, setSortOrder] = useState("desc");

//   /**
//    * filterTeam: Filter players by team
//    * - 'all' = Show all teams
//    * - team.id = Show only players from that team
//    */
//   const [filterTeam, setFilterTeam] = useState("all");

//   /**
//    * filterPosition: Filter players by position
//    * - 'all' = Show all positions
//    * - position name = Show only that position
//    */
//   const [filterPosition, setFilterPosition] = useState("all");

//   /**
//    * searchQuery: User's search text for player names
//    * Filters players whose names contain this text
//    */

//   const [searchQuery, setSearchQuery] = useState("");

//   // ============================================
//   // DATA CONVERSION & HELPERS
//   // ============================================
//   /**
//    * TEAMS ARRAY CONVERSION
//    *
//    * Problem: teams prop can be either:
//    *   - Array: [{ id: "eagles", ... }, { id: "lions", ... }]
//    *   - Object: { eagles: { id: "eagles", ... }, lions: { ... } }
//    *
//    * Solution: Convert to array for consistent handling
//    * - If already array, use as-is
//    * - If object, convert to array using Object.values()
//    */
//   const teamsArray = Array.isArray(teams) ? teams : Object.values(teams);

//   /**
//    * GET TEAM BY ID
//    *
//    * Purpose: Find a team object by its ID
//    * Used to display team name and logo in the table
//    *
//    * @param {string} teamId - The team's unique identifier
//    * @returns {object} Team object or empty object if not found
//    */
//   const getTeam = (teamId) => {
//     return teamsArray.find((t) => t.id === teamId) || {};
//   };

//   /**
//    * CALCULATE STATISTICS FOR A PLAYER
//    *
//    * Purpose: Extract and calculate player stats for current tab
//    *
//    * Process:
//    * 1. Get the raw stats from player object
//    * 2. Extract goals or assists based on current tab
//    * 3. Calculate average per match
//    * 4. Return enhanced player object with calculated fields
//    *
//    * @param {object} player - Player object with stats
//    * @param {string} statType - 'goals' or 'assists'
//    * @returns {object} Player object with calculated fields added
//    */
//   const calculateStats = (player, statType) => {
//     // Get stats object or use empty object if undefined
//     const stats = player.stats || {};

//     // Get the main stat value based on current tab
//     // If goals tab: get goals, if assists tab: get assists
//     const value =
//       statType === "goals"
//         ? stats.goals || 0 // Goals count
//         : stats.assists || 0; //Assists count

//     // Get matches played (try both field names for compatibility)
//     const matches = stats.appearances || statsmatches || 0;

//     // Calculate average: value divided by matches
//     // Example: 10 goals in 5 matches = 2.00 average
//     // toFixed(2) rounds to 2 decimal places
//     const average = matches > 0 ? (value / matches).toFixed(2) : "0.00";

//     // Return player object with additional calculated fields
//     return {
//       ...player, // Keep all original fields
//       value, // Main stat (goals or assists)
//       matches, // Matches layed
//       average: parseFloat(average), // Convert string back to number
//       yellowCards: stats.yellowCards || 0, // Yellow cards count
//       redCards: stats.redCards || 0, // Red cards count
//     };
//   };

//   // ============================================
//   // FILTERED & SORTED PLAYERS (useMemo)
//   // ============================================

//   /**
//    * WHY useMemo?
//    *
//    * This calculation is expensive (filtering, sorting 100+ players)
//    * useMemo prevents recalculation on every render
//    * Only recalculates when dependencies change
//    *
//    * Dependencies: players, activeTab, sortBy, sortOrder, filters
//    * If any of these change, recalculate. Otherwise, use cached result.
//    */
//   const getFilteredPlayers = useMemo(() => {
//     // Step 1: Determine which stat we're working with
//     const statType = activeTab === "goals" ? "goals" : "assists";

//     // Step 2: Calculate stats for ALL players
//     let processed = players.map((p) => calculateStats(p, statType));

//     // Step 3: Filter out players with 0 in current stat
//     // We only want to show players who have scored/assisted
//     processed = processed.filter((p) => p.value > 0);

//     // ============================================
//     // APPLY FILTERS
//     // ============================================

//     /**
//      * TEAM FILTER
//      * If user selected a specific team, show only players from that team
//      */
//     if (filterTeam !== "all") {
//       processed = processed.filter((p) => p.teamId === filterTeam);
//     }

//     /**
//      * POSITION FILTER
//      * If user selected a specific position, show only that position
//      */
//     if (filterPosition !== "all") {
//       processed = processed.filter((p) => p.position === filterPosition);
//     }
//     /**
//      * SEARCH FILTER
//      * If user typed in search box, filter by name
//      *
//      * Process:
//      * 1. Convert both to lowercase for case-insensitive search
//      * 2. Check if player name includes the search text
//      */
//     if (searchQuery.trim()) {
//       processed = processed.filter((p) =>
//         p.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // ============================================
//     // SORTING
//     // ============================================

//     /**
//      * SORT LOGIC
//      * Different sorting logic for different columns
//      */
//     processed.sort((a, b) => {
//       let aVal, bVal;

//       switch (sortBy) {
//         case "value":
//           // Sort by main stat (goals or assists)
//           aVal = a.value;
//           bVal = b.value;
//           break;

//         case "name":
//           // Sort alphabetically by name
//           // localeCompare handles special characters properly
//           return sortOrder === "asc"
//             ? a.name.localeCompare(b.name)
//             : b.name.localeCompare(a.name);

//         case "team":
//           // Sort by team name
//           const teamA = getTeam(a.teamId).name || "";
//           const teamB = getTeam(b.teamId).name || "";
//           return sortOrder === "asc"
//             ? teamA.localeCompare(teamB)
//             : teamB.localeCompare(teamA);

//         case "matches":
//           // Sort by number of matches played
//           aVal = a.matches;
//           bVal = b.matches;
//           break;

//         case "average":
//           // Sort by average per match
//           aVal = a.average;
//           bVal = b.average;
//           break;

//         default:
//           // Fallback to sorting by main stat
//           aVal = a.value;
//           bVal = b.value;
//       }
//       // Apply sort order (ascending or descending)
//       return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
//     });

//     // ============================================
//     // RETURN TOP 20 ONLY
//     // ============================================
//     // slice(0, 20) gets first 20 items from sorted array
//     return processed.slice(0.2);
//   }, [
//     players,
//     activeTab,
//     sortBy,
//     sortOrder,
//     filterTeam,
//     filterPosition,
//     searchQuery,
//     teamsArray,
//   ]); // ↑ Dependencies: Recalculate when any of these change

//   // ============================================
//   // EVENT HANDLERS
//   // ============================================

//   /**
//    * HANDLE COLUMN SORT
//    *
//    * Called when user clicks a sortable column header
//    *
//    * Logic:
//    * 1. If clicking same column: Toggle sort order (asc ↔ desc)
//    * 2. If clicking new column: Set that column, default to descending
//    *
//    * @param {string} column - Column identifier to sort by
//    */

//   const handleSort = (column) => {
//     if (sortBy === column) {
//       // Same column clicked: toggle order
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     } else {
//       // New column clicked: set column and default to descending
//       setSortBy(column);
//       setSortOrder("desc");
//     }
//   };

//   // ============================================
//   // HELPER FUNCTIONS FOR DISPLAY
//   // ============================================

//   /**
//    * GET UNIQUE POSITIONS
//    *
//    * Purpose: Create list of all positions for filter dropdown
//    *
//    * Process:
//    * 1. Map all players to their positions
//    * 2. Remove undefined/null values with filter(Boolean)
//    * 3. Use Set to get unique values only
//    * 4. Convert back to array with spread operator [...]
//    */

//   const positions = [
//     ...new Set(players.map((p) => p.position).filter(Boolean)),
//   ];

//   /**
//    * GET RANK MEDAL
//    *
//    * Purpose: Return medal emoji for top 3, number for others
//    *
//    * @param {number} index - Player's position in array (0-based)
//    * @returns {string} Medal emoji or rank number
//    */
//   const getRankMedal = (index) => {
//     if (index === 0) return "🥇"; // 1st place: Gold
//     if (index === 1) return "🥈"; // 2nd place: Silver
//     if (index === 2) return "🥉"; // 3rd place: Bronze
//     return `${index + 1}`; // Others: Show number (index+1 because 0-based)
//   };

//   /**
//    * GET RANK CLASS
//    *
//    * Purpose: Return CSS class for styling top 3 rows
//    * Used to apply gold/silver/bronze background colors
//    *
//    * @param {number} index - Player's position in array (0-based)
//    * @returns {string} CSS class name or empty string
//    */

//   const getRankClass = (index) => {
//     if (index === 0) return "gold-rank"; // Gold background
//     if (index === 1) return "silver-rank"; //  Silver background
//     if (index === 2) return "bronze-rank"; //  Bronze background
//     return ""; // No special class for others
//   };

//   return (
//     <div className="statistics-page">
//       <div className="container">
//         <PageIndicator icon={"📊"} title={"Estatísticas dos Jogadores"} />

//         {/* ============================================
//             TABS NAVIGATION
//             ============================================
//             Two tabs: Goals and Assists
//             Clicking a tab changes activeTab state
//             Active tab gets special styling (stats-tab--active)
//         */}
//         <div className="stats-tabs">
//           <button
//             className={`stats-tab ${
//               activeTab === "goals" ? "stats-tab--active" : ""
//             }`}
//             onClick={() => setActiveTab("goals")}
//           >
//             ⚽ Golos
//           </button>

//           <button
//             className={`stats-tab ${
//               activeTab === "assists" ? "stats-tab--active" : ""
//             }`}
//             onClick={() => setActiveTab("assists")}
//           >
//             🎯 Assistências
//           </button>
//         </div>

//         {/* ============================================
//             FILTERS SECTION
//             ============================================

//             TO DISABLE FILTERS:
//             Comment out this entire section (from here to closing </div>)
//                         Contains:
//             - Search input (filter by player name)
//             - Team dropdown (filter by team)
//             - Position dropdown (filter by position)
//             - Reset button (clear all filters)
//         */}
//         <div className="stats-filters">
//           {/* SEARCH INPUT
//               onChange updates searchQuery state on every keystroke
//               Value is controlled by searchQuery state */}
//           <div className="filter-group">
//             <label htmlFor="search-input">🔍 Pesquisar:</label>
//             <input
//               id="search-input"
//               name="search-input"
//               type="text"
//               placeholder="Nome do Jogador"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="filter-input"
//             />
//           </div>

//           {/* TEAM FILTER DROPDOWN
//               Shows all teams from teamsArray
//               onChange updates filterTeam state */}
//           <div className="filter-group">
//             <label htmlFor="team-iflter-input">🎽 Equipa:</label>
//             <select
//               id="team-iflter-input"
//               name="team-iflter-input"
//               value={filterTeam}
//               onChange={(e) => setFilterTeam(e.target.value)}
//               className="filter-select"
//             >
//               <option value="all">Todas as Equipas</option>
//               {teamsArray.map((team) => (
//                 <option key={team.id} value={team.id}>
//                   {team.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* POSITION FILTER DROPDOWN
//               Shows all unique positions found in players array
//               onChange updates filterPosition state */}
//           <div className="filter-group">
//             <label htmlFor="position-fiflter-input">📍 Posição:</label>
//             <select
//               id="position-fiflter-input"
//               name="position-fiflter-input"
//               value={filterPosition}
//               onChange={(e) => setFilterPosition(e.target.value)}
//               className="filter-select"
//             >
//               <option value="all">Todas as Posições</option>
//               {positions.map((pos) => (
//                 <option key={pos} value={pos}>
//                   {pos}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* RESET FILTERS BUTTON
//               Only shows if at least one filter is active
//               Clicking resets all filters to default values */}
//           {(filterTeam !== "all" ||
//             filterPosition !== "all" ||
//             searchQuery) && (
//             <button
//               onClick={() => {
//                 setFilterTeam("all");
//                 setFilterPosition("all");
//                 setSearchQuery("");
//               }}
//               className="reset-filter"
//             >
//               ❌ Limpar Filtros
//             </button>
//           )}
//         </div>
//         {/* END OF FILTERS SECTION */}

//         {/* ============================================
//             RESULTS INFO
//             ============================================
//             Shows: "Showing X of Y players"
//             Updates dynamically based on filters
//         */}
//         <div className="results-info">
//           Mostrando <strong>{getFilteredPlayers.length}</strong> de{" "}
//           <strong>
//             {
//               players.filter(
//                 (p) =>
//                   calculateStats(p, activeTab === "goals" ? "goals" : "assists")
//                     .value > 0
//               ).length
//             }
//           </strong>{" "}
//           jogadores
//         </div>

//         {/* ============================================
//             DESKTOP TABLE VIEW
//             ============================================

//             Hidden on mobile (display: none below 768px)
//             Shows full table with all columns

//             TABLE STRUCTURE:
//             - thead: Column headers (some sortable)
//             - tbody: Data rows (one per player)
//         */}
//         <div className="stats-table-wrapper">
//           <table className="stats-table">
//             {/* TABLE HEADER */}
//             <thead>
//               <tr>
//                 {/* Rank column - not sortable */}
//                 <th className="th-rank">#</th>

//                 {/* Player column - not sortable */}
//                 <th className="th-player">Jogador</th>

//                 {/* Team column - not sortable */}
//                 <th className="th-team">Equipa</th>

//                 {/* Goals/Assists column - SORTABLE
//                     Shows emoji and text based on active tab
//                     onClick triggers handleSort function
//                     Shows ▲▼ arrow if currently sorted by this column */}
//                 <th
//                   className="thsortable th-center"
//                   onClick={() => handleSort("value")}
//                 >
//                   {activeTab === "goals" ? "⚽ Golos" : "🎯 Assistências"}
//                   {sortBy === "value" && (sortOrder === "asc" ? "▲" : "▼")}
//                 </th>

//                 {/* Matches column - SORTABLE */}
//                 <th
//                   className="thsortable th-center"
//                   onClick={() => handleSort("matches")}
//                 >
//                   Jogos{" "}
//                   {sortBy === "matches" && (sortOrder === "asc" ? "▲" : "▼")}
//                 </th>

//                 {/* Average column - SORTABLE */}
//                 <th
//                   className="thsortable th-center"
//                   onClick={() => handleSort("average")}
//                 >
//                   Média{" "}
//                   {sortBy === "average" && (sortOrder === "asc" ? "▲" : "▼")}
//                 </th>

//                 {/* Position column - not sortable */}
//                 <th className="th-center">Posição</th>

//                 {/* Yellow cards column - not sortable */}
//                 <th className="th-center">🟨</th>

//                 {/* Red cards column - not sortable */}
//                 <th className="th-center">🟥</th>
//               </tr>
//             </thead>

//             {/* TABLE BODY */}
//             <tbody>
//               {/* EMPTY STATE
//                   Shows if no players match current filters */}
//               {getFilteredPlayers.length === 0 ? (
//                 <tr>
//                   <td colSpan="9" className="empty-state">
//                     <div className="empty-state-content">
//                       <div className="empty-state-icon">📊</div>
//                       <p>Nenhum jogador encontrado com estes filtros</p>
//                     </div>
//                   </td>
//                 </tr>
//               ) : (
//                 /* PLAYER ROWS
//                    Map over filtered players array
//                    Each player gets one row
//                    Index used for ranking (0 = 1st place) */
//                 getFilteredPlayers.map((player, index) => {
//                   // Get team data for this player
//                   const team = getTeam(player.teamId);
//                   return (
//                     /* ROW ELEMENT
//                        key: Unique identifier for React rendering
//                        className: Base class + rank class for styling
//                        Example: "stats-row rank-gold" for 1st place */
//                     <tr
//                       key={player.id}
//                       className={`stats-row ${getRankClass(index)}`}
//                     >
//                       {/* RANK CELL
//                           Shows medal (🥇🥈🥉) for top 3, number for others */}
//                       <td className="td-rank">
//                         <span className="rank-badge">
//                           {getRankMedal(index)}
//                         </span>
//                       </td>

//                       {/* PLAYER CELL
//                           Shows photo + name in horizontal layout */}
//                       <td className="td-player">
//                         <div className="player-cell">
//                           <Link to={`/jogadores/${player.id}`}>
//                             <img
//                               src={
//                                 player.photo ||
//                                 "/images/players/default-player.png"
//                               }
//                               alt={player.name}
//                               className="player-photo"
//                               loading="lazy"
//                             />

//                             <span className="player-name">{player.name}</span>
//                           </Link>
//                         </div>
//                       </td>

//                       {/* TEAM CELL
//                           Shows team logo + name */}
//                       <td className="td-team">
//                         <div className="team-cell">
//                           <Link to={`/equipas/${team.id}`}>
//                             <img
//                               src={
//                                 team.logo ||
//                                 team.abbr ||
//                                 "/images/teams/default-team-logo.png"
//                               }
//                               alt={team.name}
//                               className="team-logo-small"
//                               loading="lazy"
//                             />

//                             <span className="team-name-small">{team.name}</span>
//                           </Link>
//                         </div>
//                       </td>

//                       {/* MAIN STAT CELL (Goals or Assists)
//                           Highlighted with larger font and primary color */}
//                       <td className="td-center td-highlight">
//                         <strong>{player.value}</strong>
//                       </td>

//                       {/* MATCHES CELL */}
//                       <td className="td-center">{player.matches}</td>

//                       {/* AVERAGE CELL
//                           Shows calculated average (e.g., "2.50") */}
//                       <td className="td-center">{player.average}</td>

//                       {/* POSITION CELL */}
//                       <td className="td-center td-position">
//                         {player.positions}
//                       </td>

//                       {/* YELLOW CARDS CELL
//                        Shows number or 0 if zero */}
//                       <td className="td-center">
//                         {player.yellowCards > 0 ? player.yellowCards : "0"}
//                       </td>

//                       {/* RED CARDS CELL
//                           Shows number or 0 if zero */}
//                       <td className="td-center">
//                         {player.redCards > 0 ? player.redCards : "0"}
//                       </td>
//                     </tr>
//                   );
//                 })
//               )}
//             </tbody>
//           </table>
//         </div>
//         {/* END OF DESKTOP TABLE */}

//         {/* ============================================
//             MOBILE CARDS VIEW
//             ============================================

//             Hidden on desktop (display: none above 768px)
//             Shows card layout for better mobile experience

//             Each player gets a card with:
//             - Header: Rank, Photo, Name, Team, Main Stat
//             - Body: Grid of additional stats
//         */}
//         <div className="stats-mobile">
//           {/* EMPTY STATE for mobile */}
//           {getFilteredPlayers.length === 0 ? (
//             <div className="empty-state-card">
//               <div className="empty-state-icon">📊</div>
//               <p>Nenhum jogador encontrado</p>
//             </div>
//           ) : (
//             /* PLAYER CARDS
//                Map over same filtered players array
//                Each player gets a card */
//             getFilteredPlayers.map((player, index) => {
//               const team = getTeam(player.teamId);

//               return (
//                 /* CARD ELEMENT
//                    key: Unique identifier
//                    className: Base class + rank class for colored border */
//                 <div
//                   key={player.id}
//                   className={`stats-card ${getRankClass(index)}`}
//                 >
//                   {/* CARD HEADER
//                       Horizontal layout with all key info */}
//                   <div className="stats-card-header">
//                     {/* Rank with medal/number */}
//                     <div className="stats-card-rank">{getRankMedal(index)}</div>

//                     {/* Player photo */}
//                     <Link to={`/jogadores/${player.id}`}>
//                       <img
//                         src={
//                           player.photo || "/images/players/default-player.png"
//                         }
//                         alt={player.name}
//                         className="stats-card-photo"
//                       />
//                     </Link>

//                     {/* Player info: name + team */}
//                     <div className="stats-card-player-info">
//                       <h3 className="stats-card-name">
//                         <Link to={`/jogadores/${player.id}`}>
//                           {player.name}
//                         </Link>
//                       </h3>
//                       <div className="stats-card-team">
//                         <Link to={`/equipas/${team.id}`}>
//                           <img
//                             src={
//                               team.logo ||
//                               team.abbr ||
//                               "/images/teams/default-team.png"
//                             }
//                             alt={team.name}
//                           />

//                           <span>{team.name}</span>
//                         </Link>
//                       </div>
//                     </div>

//                     {/* Main stat (large number) */}
//                     <div className="stats-card-main-stat">{player.value}</div>

//                     {/* CARD BODY
//                       2x2 grid of additional stats */}
//                     <div className="stats-card-body">
//                       <div className="stat-item">
//                         <span className="stat-label">Jogos:</span>
//                         <span className="stats-value">{player.matches}</span>
//                       </div>

//                       <div className="stat-item">
//                         <span className="stat-label">Média:</span>
//                         <span className="stats-value">{player.average}</span>
//                       </div>

//                       <div className="stat-item">
//                         <span className="stat-label">Posição:</span>
//                         <span className="stats-value">{player.position}</span>
//                       </div>

//                       <div className="stat-item">
//                         <span className="stat-label">Cartões:</span>
//                         <span className="stats-value">
//                           🟨 {player.yellowCards > 0 ? player.yellowCards : "0"}{" "}
//                           🟥 {player.redCards > 0 ? player.redCards : "0"}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatisticsPage;

//============================================
// OG COMMENTED FULL VERSION=================
//============================================
// import React, { useState, useMemo } from "react";
// import "./StatisticsPage.css";

// /**
//  * ============================================
//  * STATISTICS PAGE COMPONENT
//  * ============================================
//  *
//  * PURPOSE:
//  * This page displays player statistics in two tabs:
//  * 1. Goals Tab - Shows top 20 goal scorers
//  * 2. Assists Tab - Shows top 20 assist providers
//  *
//  * FEATURES:
//  * - Sortable columns (click header to sort)
//  * - Filter by team (dropdown)
//  * - Filter by position (dropdown)
//  * - Search by player name (text input)
//  * - Top 3 players highlighted with medals (🥇🥈🥉)
//  * - Responsive: Table on desktop, Cards on mobile
//  *
//  * PROPS EXPECTED:
//  * @param {Array} players - Array of player objects with stats
//  *   Example: [{ id: 1, name: "John", teamId: "eagles", position: "Forward",
//  *              stats: { goals: 10, assists: 5, appearances: 12 } }]
//  *
//  * @param {Array|Object} teams - Team data (can be array or object)
//  *   Example Array: [{ id: "eagles", name: "FC Eagles", logo: "/logo.png" }]
//  *   Example Object: { eagles: { id: "eagles", name: "FC Eagles" } }
//  *
//  * HOW TO DISABLE FILTERS:
//  * Comment out the entire <div className="stats-filters"> section (lines ~200-260)
//  */

// const StatisticsPage = ({ players = [], teams = {} }) => {
//   // ============================================
//   // STATE MANAGEMENT
//   // ============================================

//   /**
//    * activeTab: Controls which tab is currently displayed
//    * - 'goals' = Shows goal scorers
//    * - 'assists' = Shows assist providers
//    */
//   const [activeTab, setActiveTab] = useState("goals");

//   /**
//    * sortBy: Which column to sort by
//    * Options: 'value' (goals/assists), 'name', 'team', 'matches', 'average'
//    */
//   const [sortBy, setSortBy] = useState("value");

//   /**
//    * sortOrder: Direction of sorting
//    * - 'asc' = Ascending (low to high)
//    * - 'desc' = Descending (high to low)
//    */
//   const [sortOrder, setSortOrder] = useState("desc");

//   /**
//    * filterTeam: Filter players by team
//    * - 'all' = Show all teams
//    * - team.id = Show only players from that team
//    */
//   const [filterTeam, setFilterTeam] = useState("all");

//   /**
//    * filterPosition: Filter players by position
//    * - 'all' = Show all positions
//    * - position name = Show only that position
//    */
//   const [filterPosition, setFilterPosition] = useState("all");

//   /**
//    * searchQuery: User's search text for player names
//    * Filters players whose names contain this text
//    */
//   const [searchQuery, setSearchQuery] = useState("");

//   // ============================================
//   // DATA CONVERSION & HELPERS
//   // ============================================

//   /**
//    * TEAMS ARRAY CONVERSION
//    *
//    * Problem: teams prop can be either:
//    *   - Array: [{ id: "eagles", ... }, { id: "lions", ... }]
//    *   - Object: { eagles: { id: "eagles", ... }, lions: { ... } }
//    *
//    * Solution: Convert to array for consistent handling
//    * - If already array, use as-is
//    * - If object, convert to array using Object.values()
//    */
//   const teamsArray = Array.isArray(teams) ? teams : Object.values(teams);

//   /**
//    * GET TEAM BY ID
//    *
//    * Purpose: Find a team object by its ID
//    * Used to display team name and logo in the table
//    *
//    * @param {string} teamId - The team's unique identifier
//    * @returns {object} Team object or empty object if not found
//    */
//   const getTeam = (teamId) => {
//     return teamsArray.find((t) => t.id === teamId) || {};
//   };

//   /**
//    * CALCULATE STATISTICS FOR A PLAYER
//    *
//    * Purpose: Extract and calculate player stats for current tab
//    *
//    * Process:
//    * 1. Get the raw stats from player object
//    * 2. Extract goals or assists based on current tab
//    * 3. Calculate average per match
//    * 4. Return enhanced player object with calculated fields
//    *
//    * @param {object} player - Player object with stats
//    * @param {string} statType - 'goals' or 'assists'
//    * @returns {object} Player object with calculated fields added
//    */
//   const calculateStats = (player, statType) => {
//     // Get stats object or use empty object if undefined
//     const stats = player.stats || {};

//     // Get the main stat value based on current tab
//     // If goals tab: get goals, if assists tab: get assists
//     const value =
//       statType === "goals"
//         ? stats.goals || 0 // Goals count
//         : stats.assists || 0; // Assists count

//     // Get matches played (try both field names for compatibility)
//     const matches = stats.appearances || stats.matches || 0;

//     // Calculate average: value divided by matches
//     // Example: 10 goals in 5 matches = 2.00 average
//     // toFixed(2) rounds to 2 decimal places
//     const average = matches > 0 ? (value / matches).toFixed(2) : "0.00";

//     // Return player object with additional calculated fields
//     return {
//       ...player, // Keep all original fields
//       value, // Main stat (goals or assists)
//       matches, // Matches played
//       average: parseFloat(average), // Convert string back to number
//       yellowCards: stats.yellowCards || 0, // Yellow cards count
//       redCards: stats.redCards || 0, // Red cards count
//     };
//   };

//   // ============================================
//   // FILTERED & SORTED PLAYERS (useMemo)
//   // ============================================

//   /**
//    * WHY useMemo?
//    *
//    * This calculation is expensive (filtering, sorting 100+ players)
//    * useMemo prevents recalculation on every render
//    * Only recalculates when dependencies change
//    *
//    * Dependencies: players, activeTab, sortBy, sortOrder, filters
//    * If any of these change, recalculate. Otherwise, use cached result.
//    */
//   const getFilteredPlayers = useMemo(() => {
//     // Step 1: Determine which stat we're working with
//     const statType = activeTab === "goals" ? "goals" : "assists";

//     // Step 2: Calculate stats for ALL players
//     let processed = players.map((p) => calculateStats(p, statType));

//     // Step 3: Filter out players with 0 in current stat
//     // We only want to show players who have scored/assisted
//     processed = processed.filter((p) => p.value > 0);

//     // ============================================
//     // APPLY FILTERS
//     // ============================================

//     /**
//      * TEAM FILTER
//      * If user selected a specific team, show only players from that team
//      */
//     if (filterTeam !== "all") {
//       processed = processed.filter((p) => p.teamId === filterTeam);
//     }

//     /**
//      * POSITION FILTER
//      * If user selected a specific position, show only that position
//      */
//     if (filterPosition !== "all") {
//       processed = processed.filter((p) => p.position === filterPosition);
//     }

//     /**
//      * SEARCH FILTER
//      * If user typed in search box, filter by name
//      *
//      * Process:
//      * 1. Convert both to lowercase for case-insensitive search
//      * 2. Check if player name includes the search text
//      */
//     if (searchQuery.trim()) {
//       processed = processed.filter((p) =>
//         p.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // ============================================
//     // SORTING
//     // ============================================

//     /**
//      * SORT LOGIC
//      * Different sorting logic for different columns
//      */
//     processed.sort((a, b) => {
//       let aVal, bVal;

//       switch (sortBy) {
//         case "value":
//           // Sort by main stat (goals or assists)
//           aVal = a.value;
//           bVal = b.value;
//           break;

//         case "name":
//           // Sort alphabetically by name
//           // localeCompare handles special characters properly
//           return sortOrder === "asc"
//             ? a.name.localeCompare(b.name)
//             : b.name.localeCompare(a.name);

//         case "team":
//           // Sort by team name
//           const teamA = getTeam(a.teamId).name || "";
//           const teamB = getTeam(b.teamId).name || "";
//           return sortOrder === "asc"
//             ? teamA.localeCompare(teamB)
//             : teamB.localeCompare(teamA);

//         case "matches":
//           // Sort by number of matches played
//           aVal = a.matches;
//           bVal = b.matches;
//           break;

//         case "average":
//           // Sort by average per match
//           aVal = a.average;
//           bVal = b.average;
//           break;

//         default:
//           // Fallback to sorting by main stat
//           aVal = a.value;
//           bVal = b.value;
//       }

//       // Apply sort order (ascending or descending)
//       return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
//     });

//     // ============================================
//     // RETURN TOP 20 ONLY
//     // ============================================
//     // slice(0, 20) gets first 20 items from sorted array
//     return processed.slice(0, 20);
//   }, [
//     players,
//     activeTab,
//     sortBy,
//     sortOrder,
//     filterTeam,
//     filterPosition,
//     searchQuery,
//     teamsArray,
//   ]);
//   // ↑ Dependencies: Recalculate when any of these change

//   // ============================================
//   // EVENT HANDLERS
//   // ============================================

//   /**
//    * HANDLE COLUMN SORT
//    *
//    * Called when user clicks a sortable column header
//    *
//    * Logic:
//    * 1. If clicking same column: Toggle sort order (asc ↔ desc)
//    * 2. If clicking new column: Set that column, default to descending
//    *
//    * @param {string} column - Column identifier to sort by
//    */
//   const handleSort = (column) => {
//     if (sortBy === column) {
//       // Same column clicked: toggle order
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     } else {
//       // New column clicked: set column and default to descending
//       setSortBy(column);
//       setSortOrder("desc");
//     }
//   };

//   // ============================================
//   // HELPER FUNCTIONS FOR DISPLAY
//   // ============================================

//   /**
//    * GET UNIQUE POSITIONS
//    *
//    * Purpose: Create list of all positions for filter dropdown
//    *
//    * Process:
//    * 1. Map all players to their positions
//    * 2. Remove undefined/null values with filter(Boolean)
//    * 3. Use Set to get unique values only
//    * 4. Convert back to array with spread operator [...]
//    */
//   const positions = [
//     ...new Set(players.map((p) => p.position).filter(Boolean)),
//   ];

// /**
//  * GET RANK MEDAL
//  *
//  * Purpose: Return medal emoji for top 3, number for others
//  *
//  * @param {number} index - Player's position in array (0-based)
//  * @returns {string} Medal emoji or rank number
//  */
//   const getRankMedal = (index) => {
//     if (index === 0) return "🥇"; // 1st place: Gold
//     if (index === 1) return "🥈"; // 2nd place: Silver
//     if (index === 2) return "🥉"; // 3rd place: Bronze
//     return `${index + 1}`; // Others: Show number (index+1 because 0-based)
//   };

//   /**
//    * GET RANK CLASS
//    *
//    * Purpose: Return CSS class for styling top 3 rows
//    * Used to apply gold/silver/bronze background colors
//    *
//    * @param {number} index - Player's position in array (0-based)
//    * @returns {string} CSS class name or empty string
//    */
//   const getRankClass = (index) => {
//     if (index === 0) return "rank-gold"; // Gold background
//     if (index === 1) return "rank-silver"; // Silver background
//     if (index === 2) return "rank-bronze"; // Bronze background
//     return ""; // No special class for others
//   };

//   // ============================================
//   // RENDER COMPONENT
//   // ============================================
//   return (
//     <div className="statistics-page">
//       <div className="container">
//         {/* ============================================
//             PAGE INDICATOR
//             ============================================
//             Shows at top to indicate current page
//             Uses emoji icon for visual appeal
//         */}
//         <div className="page-indicator">📊 Estatísticas dos Jogadores</div>

//         {/* ============================================
//             TABS NAVIGATION
//             ============================================
//             Two tabs: Goals and Assists
//             Clicking a tab changes activeTab state
//             Active tab gets special styling (stats-tab--active)
//         */}
//         <div className="stats-tabs">
//           <button
//             className={`stats-tab ${
//               activeTab === "goals" ? "stats-tab--active" : ""
//             }`}
//             onClick={() => setActiveTab("goals")}
//           >
//             ⚽ Golos
//           </button>
//           <button
//             className={`stats-tab ${
//               activeTab === "assists" ? "stats-tab--active" : ""
//             }`}
//             onClick={() => setActiveTab("assists")}
//           >
//             🎯 Assistências
//           </button>
//         </div>

//         {/* ============================================
//             FILTERS SECTION
//             ============================================

//             TO DISABLE FILTERS:
//             Comment out this entire section (from here to closing </div>)

//             Contains:
//             - Search input (filter by player name)
//             - Team dropdown (filter by team)
//             - Position dropdown (filter by position)
//             - Reset button (clear all filters)
//         */}
//         <div className="stats-filters">
//           {/* SEARCH INPUT
//               onChange updates searchQuery state on every keystroke
//               Value is controlled by searchQuery state */}
//           <div className="filter-group">
//             <label>🔍 Pesquisar:</label>
//             <input
//               type="text"
//               placeholder="Nome do jogador..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="filter-input"
//             />
//           </div>

//           {/* TEAM FILTER DROPDOWN
//               Shows all teams from teamsArray
//               onChange updates filterTeam state */}
//           <div className="filter-group">
//             <label>👥 Equipa:</label>
//             <select
//               value={filterTeam}
//               onChange={(e) => setFilterTeam(e.target.value)}
//               className="filter-select"
//             >
//               <option value="all">Todas as Equipas</option>
//               {teamsArray.map((team) => (
//                 <option key={team.id} value={team.id}>
//                   {team.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* POSITION FILTER DROPDOWN
//               Shows all unique positions found in players array
//               onChange updates filterPosition state */}
//           <div className="filter-group">
//             <label>📍 Posição:</label>
//             <select
//               value={filterPosition}
//               onChange={(e) => setFilterPosition(e.target.value)}
//               className="filter-select"
//             >
//               <option value="all">Todas as Posições</option>
//               {positions.map((pos) => (
//                 <option key={pos} value={pos}>
//                   {pos}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* RESET FILTERS BUTTON
//               Only shows if at least one filter is active
//               Clicking resets all filters to default values */}
//           {(filterTeam !== "all" ||
//             filterPosition !== "all" ||
//             searchQuery) && (
//             <button
//               onClick={() => {
//                 setFilterTeam("all");
//                 setFilterPosition("all");
//                 setSearchQuery("");
//               }}
//               className="reset-filters"
//             >
//               ❌ Limpar Filtros
//             </button>
//           )}
//         </div>
//         {/* END OF FILTERS SECTION */}

//         {/* ============================================
//             RESULTS INFO
//             ============================================
//             Shows: "Showing X of Y players"
//             Updates dynamically based on filters
//         */}
//         <div className="results-info">
//           Mostrando <strong>{getFilteredPlayers.length}</strong> de{" "}
//           <strong>
//             {
//               players.filter(
//                 (p) =>
//                   calculateStats(p, activeTab === "goals" ? "goals" : "assists")
//                     .value > 0
//               ).length
//             }
//           </strong>{" "}
//           jogadores
//         </div>

//         {/* ============================================
//             DESKTOP TABLE VIEW
//             ============================================

//             Hidden on mobile (display: none below 768px)
//             Shows full table with all columns

//             TABLE STRUCTURE:
//             - thead: Column headers (some sortable)
//             - tbody: Data rows (one per player)
//         */}
//         <div className="stats-table-wrapper">
//           <table className="stats-table">
//             {/* TABLE HEADER */}
//             <thead>
//               <tr>
//                 {/* Rank column - not sortable */}
//                 <th className="th-rank">#</th>

//                 {/* Player column - not sortable */}
//                 <th className="th-player">Jogador</th>

//                 {/* Team column - not sortable */}
//                 <th className="th-team">Equipa</th>

//                 {/* Goals/Assists column - SORTABLE
//                     Shows emoji and text based on active tab
//                     onClick triggers handleSort function
//                     Shows ▲▼ arrow if currently sorted by this column */}
//                 <th
//                   className="th-sortable th-center"
//                   onClick={() => handleSort("value")}
//                 >
//                   {activeTab === "goals" ? "⚽ Golos" : "🎯 Assistências"}
//                   {sortBy === "value" && (sortOrder === "asc" ? " ▲" : " ▼")}
//                 </th>

//                 {/* Matches column - SORTABLE */}
//                 <th
//                   className="th-sortable th-center"
//                   onClick={() => handleSort("matches")}
//                 >
//                   Jogos
//                   {sortBy === "matches" && (sortOrder === "asc" ? " ▲" : " ▼")}
//                 </th>

//                 {/* Average column - SORTABLE */}
//                 <th
//                   className="th-sortable th-center"
//                   onClick={() => handleSort("average")}
//                 >
//                   Média
//                   {sortBy === "average" && (sortOrder === "asc" ? " ▲" : " ▼")}
//                 </th>

//                 {/* Position column - not sortable */}
//                 <th className="th-center">Posição</th>

//                 {/* Yellow cards column - not sortable */}
//                 <th className="th-center">🟨</th>

//                 {/* Red cards column - not sortable */}
//                 <th className="th-center">🟥</th>
//               </tr>
//             </thead>

//             {/* TABLE BODY */}
//             <tbody>
//               {/* EMPTY STATE
//                   Shows if no players match current filters */}
//               {getFilteredPlayers.length === 0 ? (
//                 <tr>
//                   <td colSpan="9" className="empty-state">
//                     <div className="empty-state-content">
//                       <div className="empty-state-icon">📊</div>
//                       <p>Nenhum jogador encontrado com estes filtros</p>
//                     </div>
//                   </td>
//                 </tr>
//               ) : (
//                 /* PLAYER ROWS
//                    Map over filtered players array
//                    Each player gets one row
//                    Index used for ranking (0 = 1st place) */
//                 getFilteredPlayers.map((player, index) => {
//                   // Get team data for this player
//                   const team = getTeam(player.teamId);

//                   return (
//                     /* ROW ELEMENT
//                        key: Unique identifier for React rendering
//                        className: Base class + rank class for styling
//                        Example: "stats-row rank-gold" for 1st place */
//                     <tr
//                       key={player.id}
//                       className={`stats-row ${getRankClass(index)}`}
//                     >
//                       {/* RANK CELL
//                           Shows medal (🥇🥈🥉) for top 3, number for others */}
//                       <td className="td-rank">
//                         <span className="rank-badge">
//                           {getRankMedal(index)}
//                         </span>
//                       </td>

//                       {/* PLAYER CELL
//                           Shows photo + name in horizontal layout */}
//                       <td className="td-player">
//                         <div className="player-cell">
//                           <img
//                             src={player.photo || "/images/default-player.png"}
//                             alt={player.name}
//                             className="player-photo"
//                           />
//                           <span className="player-name">{player.name}</span>
//                         </div>
//                       </td>

//                       {/* TEAM CELL
//                           Shows team logo + name */}
//                       <td className="td-team">
//                         <div className="team-cell">
//                           <img
//                             src={team.logo || "/images/default-team.png"}
//                             alt={team.name}
//                             className="team-logo-small"
//                           />
//                           <span className="team-name-small">{team.name}</span>
//                         </div>
//                       </td>

//                       {/* MAIN STAT CELL (Goals or Assists)
//                           Highlighted with larger font and primary color */}
//                       <td className="td-center td-highlight">
//                         <strong>{player.value}</strong>
//                       </td>

//                       {/* MATCHES CELL */}
//                       <td className="td-center">{player.matches}</td>

//                       {/* AVERAGE CELL
//                           Shows calculated average (e.g., "2.50") */}
//                       <td className="td-center">{player.average}</td>

//                       {/* POSITION CELL */}
//                       <td className="td-center td-position">
//                         {player.position}
//                       </td>

//                       {/* YELLOW CARDS CELL */}
//                       <td className="td-center">{player.yellowCards}</td>

//                       {/* RED CARDS CELL
//                           Shows number or dash if zero */}
//                       <td className="td-center">
//                         {player.redCards > 0 ? player.redCards : "-"}
//                       </td>
//                     </tr>
//                   );
//                 })
//               )}
//             </tbody>
//           </table>
//         </div>
//         {/* END OF DESKTOP TABLE */}

//         {/* ============================================
//             MOBILE CARDS VIEW
//             ============================================

//             Hidden on desktop (display: none above 768px)
//             Shows card layout for better mobile experience

//             Each player gets a card with:
//             - Header: Rank, Photo, Name, Team, Main Stat
//             - Body: Grid of additional stats
//         */}
//         <div className="stats-mobile">
//           {/* EMPTY STATE for mobile */}
//           {getFilteredPlayers.length === 0 ? (
//             <div className="empty-state-card">
//               <div className="empty-state-icon">📊</div>
//               <p>Nenhum jogador encontrado</p>
//             </div>
//           ) : (
//             /* PLAYER CARDS
//                Map over same filtered players array
//                Each player gets a card */
//             getFilteredPlayers.map((player, index) => {
//               const team = getTeam(player.teamId);

//               return (
//                 /* CARD ELEMENT
//                    key: Unique identifier
//                    className: Base class + rank class for colored border */
//                 <div
//                   key={player.id}
//                   className={`stats-card ${getRankClass(index)}`}
//                 >
//                   {/* CARD HEADER
//                       Horizontal layout with all key info */}
//                   <div className="stats-card__header">
//                     {/* Rank with medal/number */}
//                     <div className="stats-card__rank">
//                       {getRankMedal(index)}
//                     </div>

//                     {/* Player photo */}
//                     <img
//                       src={player.photo || "/images/default-player.png"}
//                       alt={player.name}
//                       className="stats-card__photo"
//                     />

//                     {/* Player info: name + team */}
//                     <div className="stats-card__player-info">
//                       <h3 className="stats-card__name">{player.name}</h3>
//                       <div className="stats-card__team">
//                         <img
//                           src={team.logo || "/images/default-team.png"}
//                           alt={team.name}
//                         />
//                         <span>{team.name}</span>
//                       </div>
//                     </div>

//                     {/* Main stat (large number) */}
//                     <div className="stats-card__main-stat">{player.value}</div>
//                   </div>

//                   {/* CARD BODY
//                       2x2 grid of additional stats */}
//                   <div className="stats-card__body">
//                     <div className="stat-item">
//                       <span className="stat-label">Jogos:</span>
//                       <span className="stat-value">{player.matches}</span>
//                     </div>
//                     <div className="stat-item">
//                       <span className="stat-label">Média:</span>
//                       <span className="stat-value">{player.average}</span>
//                     </div>
//                     <div className="stat-item">
//                       <span className="stat-label">Posição:</span>
//                       <span className="stat-value">{player.position}</span>
//                     </div>
//                     <div className="stat-item">
//                       <span className="stat-label">Cartões:</span>
//                       <span className="stat-value">
//                         🟨 {player.yellowCards}{" "}
//                         {player.redCards > 0 && `🟥 ${player.redCards}`}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//         {/* END OF MOBILE CARDS */}
//       </div>
//     </div>
//   );
// };

// export default StatisticsPage;
