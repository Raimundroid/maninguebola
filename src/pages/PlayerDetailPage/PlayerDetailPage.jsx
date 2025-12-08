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
      .filter(
        (m) => m.homeTeamId === player.teamId || m.awayTeamId === player.teamId
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Newest first
      .slice(0, 5); // Limit to last 5
  }, [player, matches]);

  // Helper: Check if player scored in a specific match
  // Works with both Array of Strings OR String (Legacy)
  const hasScoredInMatch = (match) => {
    if (!match || match.status !== "finished") return false;

    // Combine home and away scorers into one list/string
    const allScorers = [].concat(
      match.homeScorers || [],
      match.awayScorers || []
    );

    // Check if player name exists in that list
    // Note: This is a simple string check. Ideally use IDs in future.
    if (Array.isArray(allScorers)) {
      return allScorers.some(
        (scorer) => typeof scorer === "string" && scorer.includes(player.name)
      );
    }
    return false;
  };

  // --- LOADING / ERROR STATE ---
  if (!player) {
    return (
      <div className="player-not-found">
        <h2>Jogador não encontrado</h2>
        <Link to="/jogadores" className="back-link">
          Voltar à lista
        </Link>
      </div>
    );
  }

  return (
    <div className="player-page">
      <PageIndicator icon="👤" title="Perfil do Jogador" />

      <div className="player-content">
        {/* --- SECTION 1: HERO PROFILE --- */}
        <div className="player-hero">
          <div
            className="hero-bg"
            style={{
              backgroundColor: playerTeam?.colors?.primary || "var(--primary)",
            }}
          ></div>

          <div className="hero-content">
            <div className="player-avatar-container">
              <img
                src={player.photo}
                alt={player.name}
                className="player-avatar-large"
                onError={(e) =>
                  (e.target.src = "/src/images/players/default-placeholder.png")
                }
              />
              <div className="team-badge-overlap">
                {/* Team Logo (Small badge) */}
                {playerTeam?.logo && (
                  <img src={playerTeam.logo} alt={playerTeam.abbr} />
                )}
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
                const opponentName = isHome
                  ? match.awayTeam?.abbr
                  : match.homeTeam?.abbr;
                const result =
                  match.status === "finished"
                    ? `${match.homeScore} - ${match.awayScore}`
                    : match.time;

                return (
                  <div key={match.id} className="history-item">
                    <div className="history-date">
                      {/* Format: 16 Nov */}
                      {new Date(match.date).toLocaleDateString("pt-PT", {
                        day: "numeric",
                        month: "short",
                      })}
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
                      {didScore && (
                        <span title="Marcou golo neste jogo">⚽</span>
                      )}
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

// =====================ANOTHER ANOTHER VERSION =====================================================================================================================
// import React, { useMemo } from "react";
// import { useParams, Link } from "react-router-dom";
// import "./PlayerDetailPage.css";

// /**
//  * ============================================
//  * PLAYER DETAIL PAGE COMPONENT
//  * ============================================
//  * * PURPOSE:
//  * Displays a comprehensive profile for a single player.
//  * * BEST PRACTICES IMPLEMENTED:
//  * 1. useMemo: Used for expensive calculations (finding players, filtering matches,
//  * calculating age/stats) so they only re-run when dependencies change.
//  * 2. Link: Used instead of useNavigate for better SEO and accessibility
//  * (allows users to open in new tab).
//  * 3. Safe Chaining (?.) and Defaults: Prevents crashes if data is missing.
//  * * @param {Array} players - List of all players
//  * @param {Array|Object} teams - List of teams (handled as array or object)
//  * @param {Array} matches - List of all matches
//  */
// const PlayerDetailPage = ({ players = [], teams = [], matches = [] }) => {
//   // ============================================
//   // 1. DATA RETRIEVAL & MEMOIZATION
//   // ============================================

//   /**
//    * Get the 'id' from the URL.
//    * We rename it to 'urlId' for clarity.
//    */
//   const { id: urlId } = useParams();

//   /**
//    * FIND PLAYER
//    * Uses useMemo to avoid searching the array on every single render.
//    * Only re-runs if 'players' array or 'urlId' changes.
//    */
//   const player = useMemo(() => {
//     if (!players || players.length === 0) return null;
//     // Convert URL param to Number to ensure strict comparison works
//     return players.find((p) => p.id === Number(urlId));
//   }, [players, urlId]);

//   /**
//    * FIND TEAM
//    * Depends on the found 'player'.
//    * Handles cases where 'teams' might be an array OR an object map.
//    */
//   const team = useMemo(() => {
//     if (!player) return null;

//     // 1. If 'teams' is an array, use .find()
//     if (Array.isArray(teams)) {
//       return teams.find((t) => t.id === player.teamId);
//     }

//     // 2. If 'teams' is an object (id -> team), access directly
//     // 3. Fallback to using player.team if it was pre-populated
//     return teams[player.teamId] || player.team || {};
//   }, [player, teams]);

//   /**
//    * FILTER & SORT MATCHES
//    * Finds recent matches involving this player's team.
//    */
//   const playerMatches = useMemo(() => {
//     if (!player || !matches) return [];

//     return matches
//       .filter((match) => {
//         // Check if player's team is Home OR Away
//         const isTeamInvolved =
//           match.homeTeamId === player.teamId ||
//           match.awayTeamId === player.teamId;

//         // Optional: You could add logic here to check if the player specifically played
//         // e.g., check lineups or scorers if available
//         return isTeamInvolved;
//       })
//       .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort Newest -> Oldest
//       .slice(0, 10); // Keep only the last 10 matches
//   }, [player, matches]);

//   // ============================================
//   // 2. HELPER FUNCTIONS & CALCULATIONS
//   // ============================================

//   /**
//    * CALCULATE AGE
//    * We assume this calculation is light enough to not strictly need useMemo,
//    * but we wrap it in a helper for cleanliness.
//    */
//   const calculateAge = (dob) => {
//     if (!dob) return "-";
//     const birthDate = new Date(dob);
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     return age;
//   };

//   /**
//    * GET MATCH RESULT (Win/Draw/Loss)
//    * Determines the badge color (V/E/D).
//    */
//   const getMatchResult = (match) => {
//     if (match.status !== "finished") return "NA"; // Not Applicable if not finished

//     const isHome = match.homeTeamId === player?.teamId;
//     const ourScore = isHome ? match.homeScore : match.awayScore;
//     const theirScore = isHome ? match.awayScore : match.homeScore;

//     if (ourScore > theirScore) return "V"; // Vitória
//     if (ourScore < theirScore) return "D"; // Derrota
//     return "E"; // Empate
//   };

//   /**
//    * GET PLAYER GOALS IN MATCH
//    * Checks the scorers array to count this player's goals.
//    */
//   const getPlayerGoalsInMatch = (match) => {
//     if (!match.scorers || !Array.isArray(match.scorers)) return 0;

//     // Check by ID first, fallback to name check if IDs aren't available
//     return match.scorers.filter(
//       (scorer) =>
//         scorer.playerId === player.id ||
//         (typeof scorer === "string" && scorer.includes(player.name))
//     ).length;
//   };

//   /**
//    * GET OPPONENT INFO
//    * Returns the opponent team object for display.
//    */
//   const getOpponent = (match) => {
//     const opponentId =
//       match.homeTeamId === player?.teamId ? match.awayTeamId : match.homeTeamId;

//     // Re-use logic to find team in array or object
//     if (Array.isArray(teams)) {
//       return teams.find((t) => t.id === opponentId) || { name: "Unknown" };
//     }
//     return teams[opponentId] || { name: "Unknown" };
//   };

//   // ============================================
//   // 3. ERROR STATE (Player Not Found)
//   // ============================================
//   if (!player) {
//     return (
//       <div className="player-not-found">
//         <div className="error-content">
//           <h1 className="error-title">❌ Jogador não encontrado</h1>
//           <p className="error-message">
//             Não foi possível localizar este jogador.
//           </p>
//           <Link to="/jogadores" className="back-button">
//             ← Voltar para Jogadores
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // ============================================
//   // 4. PREPARE DISPLAY DATA (Defaults)
//   // ============================================
//   // Destructure with safe defaults to keep JSX clean
//   const {
//     name,
//     number = "-",
//     position = "N/D",
//     photo = "/images/default-player.png",
//     nationality = "Moçambicano",
//     dateOfBirth,
//     stats = {},
//   } = player;

//   const {
//     goals = 0,
//     assists = 0,
//     appearances = 0,
//     yellowCards = 0,
//     redCards = 0,
//   } = stats;

//   const teamColors = team?.colors || { primary: "#333", secondary: "#000" };

//   // Calculate ratios
//   const goalsPerMatch =
//     appearances > 0 ? (goals / appearances).toFixed(2) : "0.00";
//   const assistsPerMatch =
//     appearances > 0 ? (assists / appearances).toFixed(2) : "0.00";

//   // ============================================
//   // 5. RENDER
//   // ============================================
//   return (
//     <div className="player-detail-page">
//       {/* BACK BUTTON
//          Using <Link> instead of useNavigate is a best practice for internal navigation
//          because it keeps the browser history clean and allows "Open in new tab".
//       */}
//       <div className="container">
//         <Link to="/jogadores" className="back-button">
//           ← Voltar para Jogadores
//         </Link>
//       </div>

//       {/* HERO SECTION
//          Uses inline styles for dynamic gradients based on Team Colors.
//       */}
//       <div
//         className="player-hero"
//         style={{
//           background: `linear-gradient(135deg, ${teamColors.primary} 0%, ${teamColors.secondary} 100%)`,
//         }}
//       >
//         <div className="player-hero__content">
//           <div className="player-hero__main">
//             {/* Photo & Badge */}
//             <div className="player-photo-wrapper">
//               <img src={photo} alt={name} className="player-hero__photo" />
//               <div className="player-number-badge">#{number}</div>
//             </div>

//             {/* Text Info */}
//             <div className="player-hero__info">
//               <h1 className="player-hero__name">{name}</h1>
//               <div className="player-hero__position">{position}</div>

//               <div className="player-details">
//                 <div className="detail-item">
//                   <span className="detail-icon">🎂</span>
//                   <span className="detail-text">
//                     {calculateAge(dateOfBirth)} anos
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-icon">🌍</span>
//                   <span className="detail-text">{nationality}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-icon">👕</span>
//                   <span className="detail-text">
//                     Equipa: {team?.name || "Sem Equipa"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Quick Stats (Hero Right Side) */}
//           <div className="player-quick-stats">
//             <div className="quick-stat-box">
//               <div className="quick-stat__value">{goals}</div>
//               <div className="quick-stat__label">⚽ Golos</div>
//             </div>
//             <div className="quick-stat-box">
//               <div className="quick-stat__value">{assists}</div>
//               <div className="quick-stat__label">🎯 Assist.</div>
//             </div>
//             <div className="quick-stat-box">
//               <div className="quick-stat__value">{appearances}</div>
//               <div className="quick-stat__label">🎮 Jogos</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MAIN CONTENT CONTAINER */}
//       <div className="player-content">
//         {/* --- STATS GRID --- */}
//         <div className="content-section">
//           <h2 className="section-title">📊 Estatísticas da Época</h2>
//           <div className="stats-grid">
//             <div className="stat-card">
//               <div className="stat-card__label">Jogos Realizados</div>
//               <div className="stat-card__value">{appearances}</div>
//             </div>
//             <div className="stat-card stat-card--highlight">
//               <div className="stat-card__label">Golos</div>
//               <div className="stat-card__value">{goals}</div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-card__label">Assistências</div>
//               <div className="stat-card__value">{assists}</div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-card__label">Golos/Jogo</div>
//               <div className="stat-card__value">{goalsPerMatch}</div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-card__label">Assist./Jogo</div>
//               <div className="stat-card__value">{assistsPerMatch}</div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-card__label">Contribuições</div>
//               <div className="stat-card__value">{goals + assists}</div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-card__label">🟨 Cartões Amarelos</div>
//               <div className="stat-card__value">{yellowCards}</div>
//             </div>
//             <div className="stat-card">
//               <div className="stat-card__label">🟥 Cartões Vermelhos</div>
//               <div className="stat-card__value">{redCards}</div>
//             </div>
//           </div>
//         </div>

//         {/* --- MATCH HISTORY --- */}
//         {playerMatches.length > 0 && (
//           <div className="content-section">
//             <h2 className="section-title">📅 Histórico de Jogos</h2>

//             {/* 1. Desktop Table View */}
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
//                   {playerMatches.map((match) => {
//                     const opponent = getOpponent(match);
//                     const result = getMatchResult(match);
//                     const goalsInMatch = getPlayerGoalsInMatch(match);

//                     return (
//                       <tr key={match.id} className="match-row">
//                         <td className="td-date">
//                           {new Date(match.date).toLocaleDateString("pt-PT", {
//                             day: "numeric",
//                             month: "long",
//                             year: "numeric",
//                           })}
//                         </td>
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
//                         <td className="td-center td-goals">
//                           {goalsInMatch > 0 ? goalsInMatch : "-"}
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>

//             {/* 2. Mobile Card View */}
//             <div className="matches-mobile">
//               {playerMatches.map((match) => {
//                 const opponent = getOpponent(match);
//                 const result = getMatchResult(match);
//                 const goalsInMatch = getPlayerGoalsInMatch(match);

//                 return (
//                   <div key={match.id} className="match-card">
//                     <div className="match-card__date">
//                       {new Date(match.date).toLocaleDateString("pt-PT", {
//                         day: "numeric",
//                         month: "short",
//                       })}
//                     </div>
//                     <div className="match-card__body">
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
//                       {goalsInMatch > 0 && (
//                         <div className="match-card__player-goals">
//                           ⚽ {goalsInMatch}{" "}
//                           {goalsInMatch === 1 ? "golo" : "golos"}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}

//         {/* --- TEAM INFO LINK --- */}
//         {team && (
//           <div className="content-section">
//             <h2 className="section-title">👥 Equipa Atual</h2>
//             {/* Wrap card in Link for SEO-friendly navigation */}
//             <Link to={`/equipas/${team.id}`} className="team-info-link-wrapper">
//               <div className="team-info-card">
//                 <img
//                   src={team.logo || "/images/default-team.png"}
//                   alt={team.name}
//                   className="team-info__logo"
//                 />
//                 <div className="team-info__details">
//                   <h3 className="team-info__name">{team.name}</h3>
//                   <p className="team-info__text">Ver página da equipa →</p>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PlayerDetailPage;
