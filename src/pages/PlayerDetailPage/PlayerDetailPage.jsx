// ============================================
// PlayerDetailPage.jsx
// ============================================

import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator"; // Adjust path as needed
import "./PlayerDetailPage.css";

const PlayerDetailPage = ({ players, matches, teams }) => {
  // 1. Get the Player ID from the URL (e.g. /jogadores/17)
  const { id } = useParams();

  // 2. Find the Player
  const player = useMemo(() => {
    // Convert URL id to number just in case
    return players.find((p) => p.id === Number(id));
  }, [players, id]);

  // 3. Find the Player's Team (for styling and match filtering)
  const playerTeam = useMemo(() => {
    if (!player) return null;
    // Handle both: 'teams' lookup object OR 'player.team' enriched object
    return player.team || (teams && teams[player.teamId]);
  }, [player, teams]);

  // 4. Get Recent Matches for this Player's Team
  const playerMatches = useMemo(() => {
    if (!player || !matches) return [];

    return matches
      .filter((m) => m.homeTeamId === player.teamId || m.awayTeamId === player.teamId)
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Newest first
      .slice(0, 5); // Limit to last 5
  }, [player, matches]);

  // Helper: Check if player scored in a specific match
  // Works with both Array of Strings OR String (Legacy)
  const hasScoredInMatch = (match) => {
    if (!match || match.status !== "finished") return false;

    // Combine home and away scorers into one list/string
    const allScorers = [].concat(match.homeScorers || [], match.awayScorers || []);

    // Check if player name exists in that list
    // Note: This is a simple string check. Ideally use IDs in future.
    if (Array.isArray(allScorers)) {
      return allScorers.some(scorer => typeof scorer === 'string' && scorer.includes(player.name));
    }
    return false;
  };

  // --- LOADING / ERROR STATE ---
  if (!player) {
    return (
      <div className="player-not-found">
        <h2>Jogador não encontrado</h2>
        <Link to="/jogadores" className="back-link">Voltar à lista</Link>
      </div>
    );
  }

  return (
    <div className="player-page">
      <PageIndicator icon="👤" title="Perfil do Jogador" />

      <div className="player-content">

        {/* --- SECTION 1: HERO PROFILE --- */}
        <div className="player-hero">
          <div className="hero-bg" style={{ backgroundColor: playerTeam?.colors?.primary || 'var(--primary)' }}></div>

          <div className="hero-content">
            <div className="player-avatar-container">
              <img
                src={player.photo}
                alt={player.name}
                className="player-avatar-large"
                onError={(e) => e.target.src = "/src/images/players/default-placeholder.png"}
              />
              <div className="team-badge-overlap">
                {/* Team Logo (Small badge) */}
                {playerTeam?.logo && <img src={playerTeam.logo} alt={playerTeam.abbr} />}
              </div>
            </div>

            <div className="player-identity">
              <h1 className="player-name">
                {player.name}
                <span className="player-number">#{player.number}</span>
              </h1>
              <p className="player-meta">
                {player.position} • {playerTeam?.name || "Sem Equipa"}
              </p>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: KEY STATS --- */}
        <div className="stats-grid">
          <div className="stat-card highlight">
            <span className="stat-label">Golos</span>
            <span className="stat-value">{player.stats?.goals || 0}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Assistências</span>
            <span className="stat-value">{player.stats?.assists || 0}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Jogos</span>
            <span className="stat-value">{player.stats?.appearances || 0}</span>
          </div>
          {/* Calculated Stat: Goal Contributions */}
          <div className="stat-card">
            <span className="stat-label">G+A</span>
            <span className="stat-value">
              {(player.stats?.goals || 0) + (player.stats?.assists || 0)}
            </span>
          </div>
        </div>

        {/* --- SECTION 3: DISCIPLINE (Small row) --- */}
        <div className="discipline-row">
          <div className="discipline-item yellow">
            <div className="card-icon yellow-card"></div>
            <span>{player.stats?.yellowCards || 0} Amarelos</span>
          </div>
          <div className="discipline-item red">
            <div className="card-icon red-card"></div>
            <span>{player.stats?.redCards || 0} Vermelhos</span>
          </div>
        </div>

        {/* --- SECTION 4: RECENT MATCHES --- */}
        <div className="player-history">
          <h3>Jogos Recentes da Equipa</h3>
          {playerMatches.length > 0 ? (
            <div className="history-list">
              {playerMatches.map((match) => {
                const didScore = hasScoredInMatch(match);
                const isHome = match.homeTeamId === player.teamId;
                const opponentName = isHome ? match.awayTeam?.abbr : match.homeTeam?.abbr;
                const result = match.status === 'finished'
                  ? `${match.homeScore} - ${match.awayScore}`
                  : match.time;

                return (
                  <div key={match.id} className="history-item">
                    <div className="history-date">
                       {/* Format: 16 Nov */}
                      {new Date(match.date).toLocaleDateString('pt-PT', { day: 'numeric', month: 'short' })}
                    </div>
                    <div className="history-info">
                      <span className="history-vs">
                        {isHome ? "vs" : "@"} {opponentName || "OPP"}
                      </span>
                      <span className={`history-result ${match.status}`}>
                        {result}
                      </span>
                    </div>
                    {/* Goal Icon if they scored */}
                    <div className="history-badge">
                      {didScore && <span title="Marcou golo neste jogo">⚽</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="no-history">Sem jogos recentes.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default PlayerDetailPage;

// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./PlayerDetailPage.css";

// /**
//  * ============================================
//  * PLAYER DETAIL PAGE COMPONENT
//  * ============================================
//  *
//  * PURPOSE:
//  * Displays detailed information about a single player including:
//  * - Player profile (photo, name, number, position, team)
//  * - Season statistics (goals, assists, matches, cards)
//  * - Match history (recent matches where player participated)
//  * - Team information section
//  *
//  * FEATURES:
//  * - Responsive design (desktop & mobile)
//  * - Back button to return to players list
//  * - Link to player's team page
//  * - Clean, simple layout for easy maintenance
//  * - Uses emoji icons (no lucide-react)
//  *
//  * PROPS EXPECTED:
//  * @param {Array} players - Array of all player objects
//  *   Example: [{ id: 1, name: "John", teamId: "eagles", number: 10,
//  *              position: "Forward", stats: { goals: 15, assists: 8 } }]
//  *
//  * @param {Array|Object} teams - Team data (array or object)
//  *   Example: [{ id: "eagles", name: "FC Eagles", logo: "/logo.png" }]
//  *
//  * @param {Array} matches - Array of match objects
//  *   Example: [{ id: 1, homeTeamId: "eagles", awayTeamId: "lions",
//  *              scorers: [{ playerId: 1, playerName: "John", minute: 45 }] }]
//  *
//  * URL PARAMETER:
//  * Uses React Router's useParams() to get playerId from URL
//  * Example URL: /jogadores/1 (playerId = "1")
//  *
//  * NAVIGATION:
//  * Access at: /jogadores/:playerId
//  * Example: /jogadores/1, /jogadores/2, etc.
//  */

// const PlayerDetailPage = ({ players = [], teams = {}, matches = [] }) => {
//   // ============================================
//   // HOOKS & STATE
//   // ============================================

//   /**
//    * useParams()
//    * React Router hook that extracts URL parameters
//    *
//    * If URL is: /jogadores/5
//    * Then: playerId = "5"
//    *
//    * Note: URL params are always strings, convert to number if needed
//    */
//   const { playerId } = useParams();

//   /**
//    * useNavigate()
//    * React Router hook for programmatic navigation
//    *
//    * Usage: navigate('/some-path') - changes URL and renders new page
//    * Used here for the back button
//    */
//   const navigate = useNavigate();

//   // ============================================
//   // DATA CONVERSION & LOOKUP
//   // ============================================

//   /**
//    * CONVERT TEAMS TO ARRAY
//    *
//    * Problem: teams prop can be either array or object
//    * Solution: Normalize to array for consistent handling
//    *
//    * If teams is array: use as-is
//    * If teams is object: convert using Object.values()
//    */
//   const teamsArray = Array.isArray(teams) ? teams : Object.values(teams);

//   /**
//    * FIND PLAYER BY ID
//    *
//    * Search through players array to find matching player
//    *
//    * Comparison logic:
//    * - p.id === playerId: Strict equality (for numbers)
//    * - p.id == playerId: Loose equality (handles string/number conversion)
//    *
//    * Example: URL /jogadores/5 (string "5")
//    *          Player object has id: 5 (number 5)
//    *          == handles this conversion, === would fail
//    */
//   const player = players.find((p) => p.id === playerId || p.id == playerId);

//   /**
//    * GET PLAYER'S TEAM
//    *
//    * After finding player, get their team information
//    * Uses optional chaining (?.) to safely access teamId
//    * Returns empty object {} if team not found (prevents errors)
//    */
//   const team = player
//     ? teamsArray.find((t) => t.id === player.teamId) || {}
//     : {};

//   // ============================================
//   // ERROR HANDLING - PLAYER NOT FOUND
//   // ============================================

//   /**
//    * GUARD CLAUSE
//    *
//    * If player doesn't exist, show error message and stop execution
//    * This prevents trying to access properties of undefined
//    *
//    * Why check this early?
//    * - Prevents crashes from accessing player.name, player.stats, etc.
//    * - Provides better UX with helpful error message
//    * - Gives user a way to go back (back button)
//    */
//   if (!player) {
//     return (
//       <div className="player-not-found">
//         <div className="error-content">
//           <h1 className="error-title">❌ Jogador não encontrado</h1>
//           <p className="error-message">
//             O jogador com ID "<strong>{playerId}</strong>" não existe.
//           </p>
//           <button
//             onClick={() => navigate("/jogadores")}
//             className="back-button"
//           >
//             ← Voltar para Jogadores
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // ============================================
//   // SAFE DESTRUCTURING WITH DEFAULTS
//   // ============================================

//   /**
//    * EXTRACT PLAYER DATA
//    *
//    * Destructuring with default values prevents errors
//    * If a field is undefined, use the default instead
//    *
//    * Example: If player.photo is undefined, use '/images/default-player.png'
//    *
//    * Why use defaults?
//    * - Prevents "Cannot read property of undefined" errors
//    * - Ensures UI always has valid data to display
//    * - Makes component more robust
//    */
//   const {
//     name = "Nome do Jogador", // Player name
//     number = "-", // Jersey number
//     position = "Posição N/D", // Playing position
//     photo = "/images/default-player.png", // Profile photo
//     dateOfBirth = null, // Birth date (for age calculation)
//     nationality = "Moçambicano", // Player nationality
//     stats = {}, // Statistics object
//   } = player;

//   /**
//    * EXTRACT TEAM DATA
//    * Similar destructuring for team information
//    */
//   const {
//     name: teamName = "Equipa N/D",
//     logo: teamLogo = "/images/default-team.png",
//     colors = { primary: "#3b82f6", secondary: "#1e40af" },
//   } = team;

//   /**
//    * EXTRACT STATISTICS
//    * Get individual stat values from stats object
//    * Default to 0 if stat doesn't exist
//    */
//   const {
//     goals = 0,
//     assists = 0,
//     appearances = 0, // Matches played (might also be called "matches")
//     matches: matchesPlayed = 0, // Alternative field name
//     yellowCards = 0,
//     redCards = 0,
//   } = stats;

//   // Use whichever field exists (appearances or matches)
//   const totalMatches = appearances || matchesPlayed || 0;

//   // ============================================
//   // CALCULATIONS
//   // ============================================

//   /**
//    * CALCULATE AGE FROM DATE OF BIRTH
//    *
//    * Process:
//    * 1. Check if dateOfBirth exists
//    * 2. Calculate difference between current year and birth year
//    * 3. Check if birthday has occurred this year
//    * 4. Adjust age if birthday hasn't happened yet
//    *
//    * Example: Born Jan 15, 1998; Today is Nov 20, 2025
//    *   - Initial: 2025 - 1998 = 27
//    *   - Birthday passed (Jan < Nov): Keep 27
//    *
//    * Example: Born Dec 15, 1998; Today is Nov 20, 2025
//    *   - Initial: 2025 - 1998 = 27
//    *   - Birthday not passed (Dec > Nov): age = 27 - 1 = 26
//    */
//   const calculateAge = () => {
//     if (!dateOfBirth) return "-";

//     const today = new Date();
//     const birthDate = new Date(dateOfBirth);

//     // Calculate initial age (year difference)
//     let age = today.getFullYear() - birthDate.getFullYear();

//     // Get month difference
//     const monthDiff = today.getMonth() - birthDate.getMonth();

//     // If birthday hasn't occurred this year yet, subtract 1 from age
//     // This happens if: month difference is negative (birthday later in year)
//     //              OR: same month but day hasn't come yet
//     if (
//       monthDiff < 0 ||
//       (monthDiff === 0 && today.getDate() < birthDate.getDate())
//     ) {
//       age--;
//     }

//     return age;
//   };

//   /**
//    * CALCULATE GOALS PER MATCH
//    *
//    * Formula: Total Goals ÷ Total Matches
//    * Example: 15 goals in 10 matches = 1.50 average
//    *
//    * Edge case: If 0 matches, return 0.00 (prevents division by zero)
//    * toFixed(2): Round to 2 decimal places (e.g., 1.5 → "1.50")
//    */
//   const goalsPerMatch =
//     totalMatches > 0 ? (goals / totalMatches).toFixed(2) : "0.00";

//   /**
//    * CALCULATE ASSISTS PER MATCH
//    * Same logic as goals per match
//    */
//   const assistsPerMatch =
//     totalMatches > 0 ? (assists / totalMatches).toFixed(2) : "0.00";

//   // ============================================
//   // MATCH HISTORY PROCESSING
//   // ============================================

//   /**
//    * GET PLAYER'S MATCH HISTORY
//    *
//    * Goal: Find all matches where this player participated
//    *
//    * Process:
//    * 1. Filter matches where player's team was involved
//    * 2. Check if player scored or assisted in the match
//    * 3. Sort by date (most recent first)
//    * 4. Take only last 10 matches
//    *
//    * Why this logic?
//    * - Step 1: Player can only participate in their team's matches
//    * - Step 2: We know they participated if they have stats in that match
//    * - Step 3: Recent matches are most relevant
//    * - Step 4: Don't overwhelm UI with too many matches
//    */
//   const playerMatches = matches
//     .filter((match) => {
//       // Check if this match involves player's team
//       const isPlayerTeamInvolved =
//         match.homeTeamId === player.teamId ||
//         match.awayTeamId === player.teamId;

//       // If player's team not involved, skip this match
//       if (!isPlayerTeamInvolved) return false;

//       // Check if player has any stats in this match
//       // Look in scorers array for player's ID
//       const playerScored = match.scorers?.some(
//         (scorer) =>
//           scorer.playerId === player.id || scorer.playerId == player.id
//       );

//       // For now, we only show matches where player scored
//       // TODO: Later, track player's participation in all team matches
//       return playerScored;
//     })
//     // Sort by date (newest first)
//     .sort((a, b) => new Date(b.date) - new Date(a.date))
//     // Take only first 10
//     .slice(0, 10);

//   /**
//    * COUNT PLAYER GOALS IN A SPECIFIC MATCH
//    *
//    * Some players score multiple goals in one match
//    * This function counts how many
//    *
//    * @param {object} match - Match object to check
//    * @returns {number} Number of goals player scored in this match
//    */
//   const getPlayerGoalsInMatch = (match) => {
//     if (!match.scorers) return 0;

//     // Filter scorers array to get only this player's goals
//     // Then count the length
//     return match.scorers.filter(
//       (scorer) => scorer.playerId === player.id || scorer.playerId == player.id
//     ).length;
//   };

//   /**
//    * GET MATCH RESULT TEXT
//    *
//    * Determines if player's team won, drew, or lost
//    *
//    * @param {object} match - Match object
//    * @returns {string} 'V' (vitória), 'E' (empate), 'D' (derrota)
//    */
//   const getMatchResult = (match) => {
//     // Determine if player's team was home or away
//     const isHome = match.homeTeamId === player.teamId;

//     // Get scores
//     const playerTeamScore = isHome ? match.homeScore : match.awayScore;
//     const opponentScore = isHome ? match.awayScore : match.homeScore;

//     // Compare scores
//     if (playerTeamScore > opponentScore) return "V"; // Vitória (Win)
//     if (playerTeamScore < opponentScore) return "D"; // Derrota (Loss)
//     return "E"; // Empate (Draw)
//   };

//   /**
//    * GET OPPONENT TEAM
//    *
//    * Find which team the player was playing against
//    *
//    * @param {object} match - Match object
//    * @returns {object} Opponent team object
//    */
//   const getOpponent = (match) => {
//     // If player's team was home, opponent is away team
//     const opponentId =
//       match.homeTeamId === player.teamId ? match.awayTeamId : match.homeTeamId;

//     // Find and return opponent team
//     return teamsArray.find((t) => t.id === opponentId) || {};
//   };

//   // ============================================
//   // RENDER COMPONENT
//   // ============================================
//   return (
//     <div className="player-detail-page">
//       {/* ============================================
//           BACK BUTTON
//           ============================================
//           Allows user to return to players list
//           Uses navigate() to change URL programmatically
//       */}
//       <div className="container">
//         <button onClick={() => navigate("/jogadores")} className="back-button">
//           ← Voltar para Jogadores
//         </button>
//       </div>

//       {/* ============================================
//           PLAYER HERO SECTION
//           ============================================
//           Large header with player photo and basic info
//           Background uses team colors for visual impact

//           Inline style:
//           - background: CSS gradient using team's colors
//           - Creates smooth color transition from primary to secondary
//       */}
//       <div
//         className="player-hero"
//         style={{
//           background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
//         }}
//       >
//         <div className="player-hero__content">
//           {/* Left side: Photo and basic info */}
//           <div className="player-hero__main">
//             {/* Player photo with number badge overlay */}
//             <div className="player-photo-wrapper">
//               <img src={photo} alt={name} className="player-hero__photo" />
//               {/* Jersey number badge */}
//               <div className="player-number-badge">#{number}</div>
//             </div>

//             {/* Player information */}
//             <div className="player-hero__info">
//               <h1 className="player-hero__name">{name}</h1>
//               <div className="player-hero__position">{position}</div>

//               {/* Player details grid */}
//               <div className="player-details">
//                 <div className="detail-item">
//                   <span className="detail-icon">🎂</span>
//                   <span className="detail-text">{calculateAge()} anos</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-icon">🌍</span>
//                   <span className="detail-text">{nationality}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-icon">👕</span>
//                   <span className="detail-text">Número {number}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right side: Quick stats boxes */}
//           <div className="player-quick-stats">
//             {/* Goals box */}
//             <div className="quick-stat-box">
//               <div className="quick-stat__value">{goals}</div>
//               <div className="quick-stat__label">⚽ Golos</div>
//             </div>
//             {/* Assists box */}
//             <div className="quick-stat-box">
//               <div className="quick-stat__value">{assists}</div>
//               <div className="quick-stat__label">🎯 Assistências</div>
//             </div>
//             {/* Matches box */}
//             <div className="quick-stat-box">
//               <div className="quick-stat__value">{totalMatches}</div>
//               <div className="quick-stat__label">🎮 Jogos</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ============================================
//           MAIN CONTENT AREA
//           ============================================
//           Contains statistics and match history
//           Max-width container centers content on large screens
//       */}
//       <div className="player-content">
//         {/* ============================================
//             SEASON STATISTICS SECTION
//             ============================================
//             Displays player's performance stats in grid layout
//             Grid automatically adjusts columns based on screen size
//         */}
//         <div className="content-section">
//           <h2 className="section-title">📊 Estatísticas da Época</h2>

//           {/* Stats grid - responsive layout
//               Desktop: 4 columns
//               Tablet: 2 columns
//               Mobile: 2 columns (smaller boxes) */}
//           <div className="stats-grid">
//             {/* Matches played stat */}
//             <div className="stat-card">
//               <div className="stat-card__label">Jogos Realizados</div>
//               <div className="stat-card__value">{totalMatches}</div>
//             </div>

//             {/* Goals stat - highlighted */}
//             <div className="stat-card stat-card--highlight">
//               <div className="stat-card__label">Golos</div>
//               <div className="stat-card__value">{goals}</div>
//             </div>

//             {/* Assists stat */}
//             <div className="stat-card">
//               <div className="stat-card__label">Assistências</div>
//               <div className="stat-card__value">{assists}</div>
//             </div>

//             {/* Goals per match - calculated stat */}
//             <div className="stat-card">
//               <div className="stat-card__label">Golos/Jogo</div>
//               <div className="stat-card__value">{goalsPerMatch}</div>
//             </div>

//             {/* Assists per match - calculated stat */}
//             <div className="stat-card">
//               <div className="stat-card__label">Assistências/Jogo</div>
//               <div className="stat-card__value">{assistsPerMatch}</div>
//             </div>

//             {/* Total contributions (goals + assists) */}
//             <div className="stat-card">
//               <div className="stat-card__label">Contribuições</div>
//               <div className="stat-card__value">{goals + assists}</div>
//             </div>

//             {/* Yellow cards */}
//             <div className="stat-card">
//               <div className="stat-card__label">🟨 Cartões Amarelos</div>
//               <div className="stat-card__value">{yellowCards}</div>
//             </div>

//             {/* Red cards */}
//             <div className="stat-card">
//               <div className="stat-card__label">🟥 Cartões Vermelhos</div>
//               <div className="stat-card__value">{redCards}</div>
//             </div>
//           </div>
//         </div>

//         {/* ============================================
//             MATCH HISTORY SECTION
//             ============================================
//             Shows recent matches where player scored/assisted
//             Only displays if player has match history

//             Conditional rendering:
//             - If playerMatches.length > 0: Show table
//             - If playerMatches.length === 0: Show empty message
//         */}
//         {playerMatches.length > 0 && (
//           <div className="content-section">
//             <h2 className="section-title">📅 Histórico de Jogos</h2>

//             {/* Desktop: Table view (hidden on mobile) */}
//             <div className="matches-table-wrapper">
//               <table className="matches-table">
//                 <thead>
//                   <tr>
//                     <th>Data</th>
//                     <th>Adversário</th>
//                     <th className="th-center">Resultado</th>
//                     <th className="th-center">⚽ Golos</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {/* Map over matches array to create table rows
//                       Each match gets one row */}
//                   {playerMatches.map((match) => {
//                     const opponent = getOpponent(match);
//                     const result = getMatchResult(match);
//                     const playerGoals = getPlayerGoalsInMatch(match);

//                     return (
//                       <tr key={match.id} className="match-row">
//                         {/* Date column
//                             toLocaleDateString formats date in Portuguese
//                             Example output: "20 de novembro de 2025" */}
//                         <td className="td-date">
//                           {new Date(match.date).toLocaleDateString("pt-PT", {
//                             day: "numeric",
//                             month: "long",
//                             year: "numeric",
//                           })}
//                         </td>

//                         {/* Opponent column with logo */}
//                         <td className="td-opponent">
//                           <div className="opponent-cell">
//                             <img
//                               src={opponent.logo || "/images/default-team.png"}
//                               alt={opponent.name}
//                               className="opponent-logo"
//                             />
//                             <span>{opponent.name}</span>
//                           </div>
//                         </td>

//                         {/* Result column
//                             Shows final score + win/draw/loss indicator
//                             CSS class changes based on result */}
//                         <td className="td-center">
//                           <div className="result-cell">
//                             <span className="score">
//                               {match.homeScore} - {match.awayScore}
//                             </span>
//                             <span
//                               className={`result-badge result-badge--${result.toLowerCase()}`}
//                             >
//                               {result}
//                             </span>
//                           </div>
//                         </td>

//                         {/* Player goals in this match
//                             Shows number or dash if no goals */}
//                         <td className="td-center td-goals">
//                           {playerGoals > 0 ? playerGoals : "-"}
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>

//             {/* Mobile: Card view (hidden on desktop) */}
//             <div className="matches-mobile">
//               {/* Map over same matches array but display as cards */}
//               {playerMatches.map((match) => {
//                 const opponent = getOpponent(match);
//                 const result = getMatchResult(match);
//                 const playerGoals = getPlayerGoalsInMatch(match);

//                 return (
//                   <div key={match.id} className="match-card">
//                     {/* Card header with date */}
//                     <div className="match-card__date">
//                       {new Date(match.date).toLocaleDateString("pt-PT", {
//                         day: "numeric",
//                         month: "short",
//                       })}
//                     </div>

//                     {/* Card body with match info */}
//                     <div className="match-card__body">
//                       {/* Opponent info */}
//                       <div className="match-card__opponent">
//                         <img
//                           src={opponent.logo || "/images/default-team.png"}
//                           alt={opponent.name}
//                           className="match-card__logo"
//                         />
//                         <span className="match-card__team">
//                           {opponent.name}
//                         </span>
//                       </div>

//                       {/* Match result */}
//                       <div className="match-card__result">
//                         <div className="match-card__score">
//                           {match.homeScore} - {match.awayScore}
//                         </div>
//                         <span
//                           className={`result-badge result-badge--${result.toLowerCase()}`}
//                         >
//                           {result}
//                         </span>
//                       </div>

//                       {/* Player goals (only show if scored) */}
//                       {playerGoals > 0 && (
//                         <div className="match-card__player-goals">
//                           ⚽ {playerGoals}{" "}
//                           {playerGoals === 1 ? "golo" : "golos"}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}

//         {/* ============================================
//             TEAM INFORMATION SECTION
//             ============================================
//             Shows which team player belongs to
//             Includes link to team's detail page
//         */}
//         <div className="content-section">
//           <h2 className="section-title">👥 Equipa Atual</h2>

//           {/* Team card - clickable to navigate to team page
//               onClick uses navigate() to change URL */}
//           <div
//             className="team-info-card"
//             onClick={() => navigate(`/equipas/${player.teamId}`)}
//             role="button"
//             tabIndex={0}
//             onKeyPress={(e) => {
//               // Also handle Enter key for accessibility
//               if (e.key === "Enter") navigate(`/equipas/${player.teamId}`);
//             }}
//           >
//             {/* Team logo */}
//             <img src={teamLogo} alt={teamName} className="team-info__logo" />

//             {/* Team details */}
//             <div className="team-info__details">
//               <h3 className="team-info__name">{teamName}</h3>
//               <p className="team-info__text">Ver página da equipa →</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlayerDetailPage;
