////======✅✅✅✅TYPED COOCE✅✅✅✅=========================

import React from "react";
import { useParams, Link } from "react-router-dom";
import MatchCard from "../../components/MatchCard/MatchCard";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import "./PlayerDetailPage.css";

const PlayersIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 434.736 434.736"
    height="20px"
    width="20px"
    fill="currentColor"
    stroke="currentColor"
    // strokeWidth="2"
    // strokeLinecap="round"
    // strokeLinejoin="round"
    className={className}
  >
    <g>
      <path d="M357.205,275.198l-9.731-73.657c-0.12-0.865-0.329-1.811-0.612-2.668l-0.428-1.293l-25.261-76.324 c-0.177-0.528-0.392-1.108-0.607-1.63c-4.984-12-86.54-42.732-97.354-41.155L90.175,97.869 c-7.348,1.063-12.935,7.448-12.805,15.067c0.143,8.265,6.957,14.849,15.221,14.706l107.767-1.848l-44.295,115.861l-54.117,79.14 c-4.766,6.958-4.115,16.542,2.019,22.786c6.97,7.094,18.372,7.195,25.466,0.225l64.957-63.814l-13.498,46.399l-54.54,80.312 c-5.035,7.475-3.81,17.775,3.217,23.753c7.55,6.425,18.877,5.512,25.302-2.037l66.124-77.707c0.946-1.123,1.79-2.455,2.392-3.877 l1.047-2.472l67.891-170.07l15.07,36.286l12.991,70.446c1.804,9.68,10.903,16.409,20.78,15.104 C351.372,294.778,358.555,285.407,357.205,275.198z"></path>
      <circle cx="295.325" cy="44.742" r="44.742"></circle>
      <path d="M295.325,344.734c-24.813,0-45,20.187-45,45s20.188,45,45,45c24.813,0,45-20.187,45-45S320.139,344.734,295.325,344.734z M326.986,403.497l-7.945-13.763l7.945-13.763h1.09c1.786,4.234,2.775,8.885,2.775,13.763s-0.989,9.528-2.775,13.763H326.986z M307.96,356.538l-4.688,8.119h-15.893l-4.688-8.119c3.928-1.501,8.185-2.33,12.634-2.33 C299.775,354.208,304.031,355.037,307.96,356.538z M311.219,389.734l-7.947,13.763h-15.893l-7.946-13.763l7.946-13.763h15.893 L311.219,389.734z M262.575,375.971h1.09l7.945,13.763l-7.945,13.763h-1.09c-1.786-4.234-2.776-8.885-2.776-13.763 S260.789,380.206,262.575,375.971z M282.691,422.93l4.688-8.119h15.893l4.688,8.119c-3.929,1.501-8.185,2.33-12.635,2.33 C290.876,425.261,286.619,424.431,282.691,422.93z"></path>
    </g>
  </svg>
);

/**
 * ============================================
 * PLAYER DETAIL PAGE COMPONENT - MINIMALISTIC
 * ============================================
 *
 * WHAT THIS COMPONENT DOES:
 * Shows detailed information about a single player including:
 * - Profile photo, name, number, position
 * - Season statistics (goals, assists, matches)
 * - Last 5 matches where the player participated
 * - Link to player's team page
 *
 * HOW TO USE IT:
 * <PlayerDetailPage
 *   players={enrichedPlayers}  // Array of player objects with .team property
 *   matches={enrichedMatches}  // Array of match objects with .homeTeam, .awayTeam
 * />
 *
 * HOW TO USE IT:
 * <PlayerDetailPage
 *   players={enrichedPlayers}  // Array of player objects with .team property
 *   matches={enrichedMatches}  // Array of match objects with .homeTeam, .awayTeam
 * />
 *
 * PROPS EXPLAINED:
 * @param {Array} players - Already enriched players (each has .team property)
 *   Example: [{ id: 1, name: "John", team: { name: "FC Eagles", logo: "..." } }]
 *
 *
 * URL PARAMETER:
 * Gets playerId from URL: /jogadores/1 means playerId = "1"
 */

const PlayerDetailPage = ({ players = [], matches = [] }) => {
  // ============================================
  // STEP 1: GET PLAYER ID FROM URL
  // ============================================

  /**
   * useParams() hook from React Router
   *
   * If the URL is: /jogadores/5
   * Then: playerId = "5" (always a string!)
   *
   * This lets us know WHICH player to display
   */
  const { playerId } = useParams();

  // ============================================
  // STEP 2: FIND THE PLAYER
  // ============================================

  /**
   * Search through the players array to find matching player
   *
   * WHY TWO COMPARISONS (=== and ==)?
   * - URL params are strings: "5"
   * - Player IDs might be numbers: 5
   * - === checks strict equality (fails if types differ)
   * - == checks loose equality (handles string/number conversion)
   *
   * Example: playerId="5" (string) will match player with id: 5 (number)
   */
  const player = players.find((p) => p.id === playerId || p.id == playerId);

  // ============================================
  // STEP 3: HANDLE ERROR - PLAYER NOT FOUND
  // ============================================

  /**
   * GUARD CLAUSE: Stop here if player doesn't exist
   *
   * WHY CHECK THIS?
   * - Prevents crashes from accessing undefined properties
   * - Shows helpful error message to user
   * - Provides way to go back to players list
   */
  if (!player) {
    return (
      <div className="player-not-found">
        <div className="error-content">
          <h1 className="error-title">❌ Jogador não encontrado</h1>
          <p className="error-message">
            O jogador com ID "<strong>{playerId}</strong>" não existe.
          </p>
          <Link to="/jogadores" className="back-button wrapper-Link">
            ← Voltar para Jogadores
          </Link>
        </div>
      </div>
    );
  }

  // ============================================
  // STEP 4: EXTRACT PLAYER DATA SAFELY
  // ============================================

  /**
   * DESTRUCTURING WITH DEFAULT VALUES
   *
   * This prevents errors if a field is missing or undefined
   *
   * Example: If player.photo is undefined, use '/images/default-player.png'
   *
   * The = sign after each variable sets the default value
   * It's like saying: "Use this value if it doesn't exist"
   */

  const {
    name = "Nome do Jogador", // Player's full name
    number = "-", // Jersey number (10, 7, etc.)
    position = "Indefinido", // Playing position (Forward, Midfielder)
    photo = "/images/players/default-player.png", // Profile photo URL
    residence = "Morrubmene - Inhambane", // Player's residence
    dateOfBirth,
    stats = {}, // Statistics object (goals, assists, etc
    team = {}, // Team object (already enriched!)
    teamId = null, // Team ID for link
  } = player;

  /**
   * EXTRACT TEAM DATA
   *
   * The player object already has a .team property (it's enriched!)
   * So we don't need to look it up manually
   */
  const {
    name: teamName = "Indefinido", // Team's name
    logo: teamLogo = null, // "/images/default-team.png", // Team logo URL
    abbr: teamAbbr,
    colors = { primary: "#3b82f6", secondary: "#1e40af" }, // Team colors
    id: enrichedTeamId = null, // Team ID from enriched data
  } = team;

  // Use teamId from player OR from enriched team
  const finalTeamId = teamId || enrichedTeamId;

  /**
   * EXTRACT STATISTICS
   *
   * Get individual stat values from the stats object
   * Default to 0 if a stat doesn't exist
   */
  const {
    goals = 0, // Total goals scored
    assists = 0, // Total assists made
    appearances = 0, // Matches played (might be called "appearances")
    matches: matchesPlayed = 0, // Or might be called "matches"
    yellowCards = 0, // Yellow cards received
    redCards = 0, // Red cards received
  } = stats;

  /**
   * TOTAL MATCHES CALCULATION
   *
   * Some data uses "appearances", some uses "matches"
   * This handles both cases
   *
   * The || operator means "use the first truthy value"
   */

  const totalMatches = appearances || matchesPlayed || 0;

  // ============================================
  // STEP 5: CALCULATE AGE FROM BIRTH DATE
  // ============================================

  /**
   * AGE CALCULATION FUNCTION
   *
   * PROCESS:
   * 1. Get today's date and birth date
   * 2. Calculate year difference
   * 3. Check if birthday has happened this year
   * 4. Adjust age if birthday hasn't occurred yet
   *
   * EXAMPLE:
   * - Born: January 15, 1998
   * - Today: November 20, 2025
   * - Initial age: 2025 - 1998 = 27
   * - Birthday passed (Jan < Nov): Keep 27
   *
   * - Born: December 15, 1998
   * - Today: November 20, 2025
   * - Initial age: 2025 - 1998 = 27
   * - Birthday NOT passed (Dec > Nov): age = 27 - 1 = 26
   */
  const calculateAge = () => {
    // If no birth date, show dash
    if (!dateOfBirth) return "-";

    const today = new Date();
    const birthDate = new Date(dateOfBirth);

    // Calculate initial age (just year difference)
    let age = today.getFullYear() - birthDate.getFullYear();

    // Check if birthday has happened this year
    const mothDiff = today.getMonth() - birthDate.getMonth();

    // If birthday hasn't occurred yet, subtract 1 from age
    if (mothDiff < 0 || (mothDiff === 0 && today.getDate() < birthDate())) {
      age--;
    }
    return age;
  };

  // ============================================
  // STEP 6: CALCULATE AVERAGE STATISTICS
  // ============================================

  /**
   * GOALS PER MATCH AVERAGE
   *
   * Formula: Total Goals ÷ Total Matches
   * Example: 15 goals in 10 matches = 1.50 average
   *
   * Edge Case: If 0 matches played, return "0.00" to avoid division by zero
   *
   * toFixed(2) rounds to 2 decimal places: 1.5 becomes "1.50"
   */

  const goalsPerMatch =
    totalMatches > 0 ? (goals / totalMatches).toFixed(2) : "0.00";

  /**
   * ASSISTS PER MATCH AVERAGE
   *
   * Same logic as goals per match
   */
  const assistsPerMatch =
    totalMatches > 0 ? (assists / totalMatches).toFixed(2) : "0.00";
  // // ============================================
  // // STEP 7: GET PLAYER'S LAST 5 MATCHES (STRICT)
  // // ============================================

  // /**
  //  * FILTER AND SORT PLAYER'S MATCHES
  //  *
  //  * PROCESS:
  //  * 1. Filter: Keep only matches where player's team played
  //  * 2. Filter: Keep only matches where player scored
  //  * 3. Sort: Most recent matches first
  //  * 4. Slice: Take only first 5 matches
  //  *
  //  * WHY THIS APPROACH?
  //  * - Step 1: Player only plays in their team's matches
  //  * - Step 2: We track participation through scoring (for now)
  //  * - Step 3: Recent matches are most relevant
  //  * - Step 4: Don't overwhelm UI with too many matches
  //  */
  // const playerMatches = matches
  //   .filter((match) => {
  //     // CHECK 1: Is player's team in this match?
  //     const isPlayerTeamInvolved =
  //       match.homeTeamId === player.teamId ||
  //       match.awayTeamId === player.teamId;

  //     // If player's team isn't involved, skip this match
  //     if (!isPlayerTeamInvolved) return false;

  //     // CHECK 2: Did player score in this match?
  //     // Look through scorers array for player's ID
  //     const playerScored = match.scorers?.some(
  //       (scorer) =>
  //         scorer.playerId === player.id || scorer.playerId == player.id
  //     );

  //     // Only include matches where player scored
  //     return playerScored;
  //   })
  //   // Sort by date: newest first
  //   // Subtract dates to compare them (larger = more recent)
  //   .sort((a, b) => new Date(b.date) - new Date(a.date))
  //   // Take only first 5 results
  //   .slice(0, 5);

  // ============================================
  // STEP 7: GET PLAYER'S LAST 5 MATCHES (CORRECTED)
  // ============================================

  const playerMatches = matches
    .filter((match) => {
      // Check 1: Is the player's team involved in this match?
      // We remove the restrictive check for 'playerScored'.
      const isPlayerTeamInvolved =
        match.homeTeamId === player.teamId ||
        match.awayTeamId === player.teamId;

      // Only return true if the team played, regardless of whether the player scored.
      return isPlayerTeamInvolved;
    })

    .sort((a, b) => {
      // 1. Define Priority Order (Lower number = Higher priority)
      const statusPriority = {
        live: 1,
        upcoming: 2,
        finished: 3,
        canceled: 4,
      };

      const priorityA = statusPriority[a.status] || 99;
      const priorityB = statusPriority[b.status] || 99;

      // 2. First Level Sort: Compare Status Priority
      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }

      // 3. Second Level Sort: Date & Time Logic
      // We combine date and time to ensure strictly chronological sorting
      // Assuming format is "YYYY-MM-DD" and "HH:MM"
      const timeA = a.time || "00:00";
      const timeB = b.time || "00:00";

      const dateTimeA = new Date(`${a.date}T${timeA}`);
      const dateTimeB = new Date(`${b.date}T${timeB}`);

      // LOGIC:
      // Live/Upcoming: Ascending (Earliest first: A - B)
      // Finished/Canceled: Descending (Newest first: B - A)
      if (a.status === "live" || a.status === "upcoming") {
        return dateTimeA - dateTimeB;
      } else {
        return dateTimeB - dateTimeA;
      }
    })
    .slice(0, 6);

  // ============================================
  // STEP 8: RENDER THE COMPONENT
  // ============================================

  /**
   * JSX RENDERING
   *
   * This is the actual HTML-like code that displays on screen
   * React converts this to real HTML
   */
  return (
    <div className="player-detail-page">
      <div className="player-content">
        {/* icon="👤"  */}
        <PageIndicator icon=<PlayersIcon /> title="Perfil do Jogador" />

        {/* ==========================================
             BACK BUTTON
             ==========================================
             Link component from React Router
             - Changes URL without page reload
             - Navigates to /jogadores page
         */}
        <div className="back-button-container">
          <Link
            to="/equipas"
            className="back-button wrapper-Link"
            aria-label="Voltar para lista de equipas"
          >
            <span className="back-button__icon">←</span>
            <span className="back-button__text">Voltar para Equipas</span>
          </Link>
        </div>

        {/* ==========================================
            PLAYER HERO SECTION
            ==========================================
            Large header with player photo and info
            Background uses team's colors
        */}
        <div className="player-hero">
          {/* Team color gradient background band */}
          <div
            className="hero-bg"
            style={{
              // Inline style: Creates gradient from team's primary to secondary color
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
            }}
          />

          {/* Hero content (pulled up over the background) */}
          <div className="hero-content">
            {/* Player photo with team badge overlay */}
            <div className="player-avatar-container">
              {/* Main player photo */}
              <img src={photo} alt={name} className="player-avatar-large" />
              {/* Team badge in corner */}
              <div className="team-badge-overlap">
                {/* <img src={teamLogo} alt={teamName} /> */}

                {teamLogo ? (
                  <img
                    src={teamLogo}
                    alt={teamName}
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                ) : (
                  // Fallback if logo path is missing; wrapping in a <span> gives you something to style, and the ?? "?" handles the case where abbr itself is also undefined
                  <span className="players-team-abbr-logo">
                    {teamAbbr ?? "?"}
                  </span>
                )}
              </div>
            </div>

            {/* Player name and jersey number */}
            <h1 className="player-name">
              {name}
              <span className="player-number">Nº{number}</span>
            </h1>
            {/* Player metadata: position, age, residence */}
            <div className="player-meta">
              {position} • {calculateAge()} anos • {residence}
            </div>
          </div>
        </div>

        {/* ==========================================
            STATISTICS SECTION
            ==========================================
            Grid of stat cards showing player performance
        */}
        <div className="content-section">
          <h2 className="section-title">📊 Estatísticas</h2>

          {/* 4-column grid of statistics */}
          <div className="stats-grid">
            {/* Matches played */}
            <div className="stat-card">
              <div className="stat-card__label">Jogos</div>
              <div className="stat-card__value">{totalMatches}</div>
            </div>

            {/* Goals scored (highlighted as most important stat) */}
            <div className="stat-card stat-card--highlight">
              <div className="stat-card__label">Golos</div>
              <div className="stat-card__value">{goals}</div>
            </div>

            {/* Assists */}
            <div className="stat-card">
              <div className="stat-card__label">Assist.</div>
              <div className="stat-card__value">{assists}</div>
            </div>

            {/* Goals per match average */}
            <div className="stat-card">
              <div className="stat-card__label">Golos/Jogo</div>
              <div className="stat-card__value">{goalsPerMatch}</div>
            </div>
          </div>

          {/* Discipline row: yellow and red cards */}
          <div className="discipline-row">
            {/* Yellow cards */}
            <div className="discipline-item">
              <div className="card-icon yellow-card"></div>
              <span>{yellowCards} Amarelos</span>
            </div>
            {/* Red cards */}
            <div className="discipline-item">
              <div className="card-icon red-card"></div>
              <span>{redCards} Vermelhos</span>
            </div>
          </div>
        </div>

        {/* ==========================================
            MATCH HISTORY SECTION
            ==========================================
            Shows last 5 matches where player participated
            Only displays if player has match history

            CONDITIONAL RENDERING:
            {condition && <Component />}
            Only renders if condition is true
        */}
        {playerMatches.length > 0 && (
          <div className="content-section">
            <h2 className="section-title">Jogos</h2>

            {/* List of matches using MatchCard component */}
            <div className="matches-list">
              {/*
                MAP FUNCTION:
                Loops through playerMatches array
                Creates one MatchCard for each match

                key={match.id}:
                Required by React to track each card
                Must be unique for each item
              */}
              {playerMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>
        )}

        {/* ==========================================
            TEAM INFO SECTION
            ==========================================
            Shows which team player belongs to
            Clickable card that links to team page
        */}
        <div className="content-section">
          <h2 className="section-title">🎽 Equipa</h2>

          {/*
            Link wrapping the entire card
            Makes whole card clickable
            Navigates to team detail page
          */}
          <Link
            to={`/equipas/${finalTeamId}`}
            className="team-info-card wrapper-Link"
          >
            {/* Team logo */}

            {teamLogo ? (
              <img
                src={teamLogo}
                alt={teamName}
                loading="lazy"
                width="32"
                height="32"
                className="team-info__logo"
              />
            ) : (
              // Fallback if logo path is missing; wrapping in a <span> gives you something to style, and the ?? "?" handles the case where abbr itself is also undefined
              <span className="players-team-abbr-logo-sqaure">
                {teamAbbr ?? "?"}
              </span>
            )}
            {/* ------------ */}
            {/* <img src={teamLogo} alt={teamName} className="team-info__logo" /> */}

            {/* Team details */}
            <div className="team-info__details">
              <h3 className="team-info__name">{teamName}</h3>
              <p className="team-info__text">Ver página da equipa →</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
// Export component so it can be imported in other files
export default PlayerDetailPage;

// =======================================================
// =======================THE NOW DISPLAYING VERSION=============OG FULL COMMENTED============

// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import MatchCard from "../../components/MatchCard/MatchCard";
// import "./PlayerDetailPage3.css";

// /**
//  * ============================================
//  * PLAYER DETAIL PAGE COMPONENT - MINIMALISTIC
//  * ============================================
//  *
//  * WHAT THIS COMPONENT DOES:
//  * Shows detailed information about a single player including:
//  * - Profile photo, name, number, position
//  * - Season statistics (goals, assists, matches)
//  * - Last 5 matches where the player participated
//  * - Link to player's team page
//  *
//  * HOW TO USE IT:
//  * <PlayerDetailPage
//  *   players={enrichedPlayers}  // Array of player objects with .team property
//  *   matches={enrichedMatches}  // Array of match objects with .homeTeam, .awayTeam
//  * />
//  *
//  * PROPS EXPLAINED:
//  * @param {Array} players - Already enriched players (each has .team property)
//  *   Example: [{ id: 1, name: "John", team: { name: "FC Eagles", logo: "..." } }]
//  *
//  * @param {Array} matches - Already enriched matches (each has .homeTeam, .awayTeam)
//  *   Example: [{ id: 1, homeTeam: {...}, awayTeam: {...}, scorers: [...] }]
//  *
//  * URL PARAMETER:
//  * Gets playerId from URL: /jogadores/1 means playerId = "1"
//  */

// const PlayerDetailPage = ({ players = [], matches = [] }) => {
//   // ============================================
//   // STEP 1: GET PLAYER ID FROM URL
//   // ============================================

//   /**
//    * useParams() hook from React Router
//    *
//    * If the URL is: /jogadores/5
//    * Then: playerId = "5" (always a string!)
//    *
//    * This lets us know WHICH player to display
//    */
//   const { playerId } = useParams();

//   // ============================================
//   // STEP 2: FIND THE PLAYER
//   // ============================================

//   /**
//    * Search through the players array to find matching player
//    *
//    * WHY TWO COMPARISONS (=== and ==)?
//    * - URL params are strings: "5"
//    * - Player IDs might be numbers: 5
//    * - === checks strict equality (fails if types differ)
//    * - == checks loose equality (handles string/number conversion)
//    *
//    * Example: playerId="5" (string) will match player with id: 5 (number)
//    */
//   const player = players.find((p) => p.id === playerId || p.id == playerId);

//   // ============================================
//   // STEP 3: HANDLE ERROR - PLAYER NOT FOUND
//   // ============================================

//   /**
//    * GUARD CLAUSE: Stop here if player doesn't exist
//    *
//    * WHY CHECK THIS?
//    * - Prevents crashes from accessing undefined properties
//    * - Shows helpful error message to user
//    * - Provides way to go back to players list
//    */
//   if (!player) {
//     return (
//       <div className="player-not-found">
//         <div className="error-content">
//           <h1 className="error-title">❌ Jogador não encontrado</h1>
//           <p className="error-message">
//             O jogador com ID "<strong>{playerId}</strong>" não existe.
//           </p>
//           <Link to="/jogadores" className="back-button">
//             ← Voltar para Jogadores
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // ============================================
//   // STEP 4: EXTRACT PLAYER DATA SAFELY
//   // ============================================

//   /**
//    * DESTRUCTURING WITH DEFAULT VALUES
//    *
//    * This prevents errors if a field is missing or undefined
//    *
//    * Example: If player.photo is undefined, use '/images/default-player.png'
//    *
//    * The = sign after each variable sets the default value
//    * It's like saying: "Use this value if it doesn't exist"
//    */
//   const {
//     name = "Nome do Jogador", // Player's full name
//     number = "-", // Jersey number (10, 7, etc.)
//     position = "Posição N/D", // Playing position (Forward, Midfielder)
//     photo = "/images/default-player.png", // Profile photo URL
//     dateOfBirth = null, // Birth date for age calculation
//     nationality = "Moçambicano", // Player's nationality
//     stats = {}, // Statistics object (goals, assists, etc.)
//     team = {}, // Team object (already enriched!)
//     teamId = null, // Team ID for links
//   } = player;

//   /**
//    * EXTRACT TEAM DATA
//    *
//    * The player object already has a .team property (it's enriched!)
//    * So we don't need to look it up manually
//    */
// const {
//   name: teamName = "Equipa N/D", // Team's name
//   logo: teamLogo = "/images/default-team.png", // Team logo URL
//   colors = { primary: "#3b82f6", secondary: "#1e40af" }, // Team colors
//   id: enrichedTeamId = null, // Team ID from enriched data
// } = team;

//   // Use teamId from player OR from enriched team
//   const finalTeamId = teamId || enrichedTeamId;

//   /**
//    * EXTRACT STATISTICS
//    *
//    * Get individual stat values from the stats object
//    * Default to 0 if a stat doesn't exist
//    */
//   const {
//     goals = 0, // Total goals scored
//     assists = 0, // Total assists made
//     appearances = 0, // Matches played (might be called "appearances")
//     matches: matchesPlayed = 0, // Or might be called "matches"
//     yellowCards = 0, // Yellow cards received
//     redCards = 0, // Red cards received
//   } = stats;

//   /**
//    * TOTAL MATCHES CALCULATION
//    *
//    * Some data uses "appearances", some uses "matches"
//    * This handles both cases
//    *
//    * The || operator means "use the first truthy value"
//    */
//   const totalMatches = appearances || matchesPlayed || 0;

//   // ============================================
//   // STEP 5: CALCULATE AGE FROM BIRTH DATE
//   // ============================================

//   /**
//    * AGE CALCULATION FUNCTION
//    *
//    * PROCESS:
//    * 1. Get today's date and birth date
//    * 2. Calculate year difference
//    * 3. Check if birthday has happened this year
//    * 4. Adjust age if birthday hasn't occurred yet
//    *
//    * EXAMPLE:
//    * - Born: January 15, 1998
//    * - Today: November 20, 2025
//    * - Initial age: 2025 - 1998 = 27
//    * - Birthday passed (Jan < Nov): Keep 27
//    *
//    * - Born: December 15, 1998
//    * - Today: November 20, 2025
//    * - Initial age: 2025 - 1998 = 27
//    * - Birthday NOT passed (Dec > Nov): age = 27 - 1 = 26
//    */
//   const calculateAge = () => {
//     // If no birth date, show dash
//     if (!dateOfBirth) return "-";

//     const today = new Date();
//     const birthDate = new Date(dateOfBirth);

//     // Calculate initial age (just year difference)
//     let age = today.getFullYear() - birthDate.getFullYear();

//     // Check if birthday has happened this year
//     const monthDiff = today.getMonth() - birthDate.getMonth();

//     // If birthday hasn't occurred yet, subtract 1 from age
//     if (
//       monthDiff < 0 ||
//       (monthDiff === 0 && today.getDate() < birthDate.getDate())
//     ) {
//       age--;
//     }

//     return age;
//   };

//   // ============================================
//   // STEP 6: CALCULATE AVERAGE STATISTICS
//   // ============================================

//   /**
//    * GOALS PER MATCH AVERAGE
//    *
//    * Formula: Total Goals ÷ Total Matches
//    * Example: 15 goals in 10 matches = 1.50 average
//    *
//    * Edge Case: If 0 matches played, return "0.00" to avoid division by zero
//    *
//    * toFixed(2) rounds to 2 decimal places: 1.5 becomes "1.50"
//    */
//   const goalsPerMatch =
//     totalMatches > 0 ? (goals / totalMatches).toFixed(2) : "0.00";

//   /**
//    * ASSISTS PER MATCH AVERAGE
//    *
//    * Same logic as goals per match
//    */
//   const assistsPerMatch =
//     totalMatches > 0 ? (assists / totalMatches).toFixed(2) : "0.00";

//   // // ============================================
//   // // STEP 7: GET PLAYER'S LAST 5 MATCHES
//   // // ============================================

//   // /**
//   //  * FILTER AND SORT PLAYER'S MATCHES
//   //  *
//   //  * PROCESS:
//   //  * 1. Filter: Keep only matches where player's team played
//   //  * 2. Filter: Keep only matches where player scored
//   //  * 3. Sort: Most recent matches first
//   //  * 4. Slice: Take only first 5 matches
//   //  *
//   //  * WHY THIS APPROACH?
//   //  * - Step 1: Player only plays in their team's matches
//   //  * - Step 2: We track participation through scoring (for now)
//   //  * - Step 3: Recent matches are most relevant
//   //  * - Step 4: Don't overwhelm UI with too many matches
//   //  */
//   // const playerMatches = matches
//   //   .filter((match) => {
//   //     // CHECK 1: Is player's team in this match?
//   //     const isPlayerTeamInvolved =
//   //       match.homeTeamId === player.teamId ||
//   //       match.awayTeamId === player.teamId;

//   //     // If player's team isn't involved, skip this match
//   //     if (!isPlayerTeamInvolved) return false;

//   //     // CHECK 2: Did player score in this match?
//   //     // Look through scorers array for player's ID
//   //     const playerScored = match.scorers?.some(
//   //       (scorer) =>
//   //         scorer.playerId === player.id || scorer.playerId == player.id
//   //     );

//   //     // Only include matches where player scored
//   //     return playerScored;
//   //   })
//   //   // Sort by date: newest first
//   //   // Subtract dates to compare them (larger = more recent)
//   //   .sort((a, b) => new Date(b.date) - new Date(a.date))
//   //   // Take only first 5 results
//   //   .slice(0, 5);

//   // ============================================
//   // STEP 7: GET PLAYER'S LAST 5 MATCHES (CORRECTED)
//   // ============================================

//   const playerMatches = matches
//     .filter((match) => {
//       // Check 1: Is the player's team involved in this match?
//       // We remove the restrictive check for 'playerScored'.
//       const isPlayerTeamInvolved =
//         match.homeTeamId === player.teamId ||
//         match.awayTeamId === player.teamId;

//       // Only return true if the team played, regardless of whether the player scored.
//       return isPlayerTeamInvolved;
//     })
//     // // Sort by date: newest first
//     // .sort((a, b) => new Date(b.date) - new Date(a.date))
//     // // Take only first 5 results
//     // .slice(0, 5);
//     .sort((a, b) => {
//       // 1. Define Priority Order (Lower number = Higher priority)
//       const statusPriority = {
//         live: 1,
//         upcoming: 2,
//         finished: 3,
//         canceled: 4,
//       };

//       const priorityA = statusPriority[a.status] || 99;
//       const priorityB = statusPriority[b.status] || 99;

//       // 2. First Level Sort: Compare Status Priority
//       if (priorityA !== priorityB) {
//         return priorityA - priorityB;
//       }

//       // 3. Second Level Sort: Date & Time Logic
//       // We combine date and time to ensure strictly chronological sorting
//       // Assuming format is "YYYY-MM-DD" and "HH:MM"
//       const timeA = a.time || "00:00";
//       const timeB = b.time || "00:00";

//       const dateTimeA = new Date(`${a.date}T${timeA}`);
//       const dateTimeB = new Date(`${b.date}T${timeB}`);

//       // LOGIC:
//       // Live/Upcoming: Ascending (Earliest first: A - B)
//       // Finished/Canceled: Descending (Newest first: B - A)
//       if (a.status === "live" || a.status === "upcoming") {
//         return dateTimeA - dateTimeB;
//       } else {
//         return dateTimeB - dateTimeA;
//       }
//     });

//   // ============================================
//   // STEP 8: RENDER THE COMPONENT
//   // ============================================

//   /**
//    * JSX RENDERING
//    *
//    * This is the actual HTML-like code that displays on screen
//    * React converts this to real HTML
//    */

//   return (
//     <div className="player-detail-page">
//       <div className="player-content">
//         {/* ==========================================
//             BACK BUTTON
//             ==========================================
//             Link component from React Router
//             - Changes URL without page reload
//             - Navigates to /jogadores page
//         */}
//         <Link to="/jogadores" className="back-button">
//           ← Voltar
//         </Link>

//         {/* ==========================================
//             PLAYER HERO SECTION
//             ==========================================
//             Large header with player photo and info
//             Background uses team's colors
//         */}
//         <div className="player-hero">
//           {/* Team color gradient background band */}
//           <div
//             className="hero-bg"
//             style={{
//               // Inline style: Creates gradient from team's primary to secondary color
//               background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
//             }}
//           />

//           {/* Hero content (pulled up over the background) */}
//           <div className="hero-content">
//             {/* Player photo with team badge overlay */}
//             <div className="player-avatar-container">
//               {/* Main player photo */}
//               <img src={photo} alt={name} className="player-avatar-large" />
//               {/* Team badge in corner */}
//               <div className="team-badge-overlap">
//                 <img src={teamLogo} alt={teamName} />
//               </div>
//             </div>

//             {/* Player name and jersey number */}
//             <h1 className="player-name">
//               {name}
//               <span className="player-number">#{number}</span>
//             </h1>

//             {/* Player metadata: position, age, nationality */}
//             <div className="player-meta">
//               {position} • {calculateAge()} anos • {nationality}
//             </div>
//           </div>
//         </div>

//         {/* ==========================================
//             STATISTICS SECTION
//             ==========================================
//             Grid of stat cards showing player performance
//         */}
//         <div className="content-section">
//           <h2 className="section-title">📊 Estatísticas</h2>

//           {/* 4-column grid of statistics */}
//           <div className="stats-grid">
//             {/* Matches played */}
//             <div className="stat-card">
//               <div className="stat-card__label">Jogos</div>
//               <div className="stat-card__value">{totalMatches}</div>
//             </div>

//             {/* Goals scored (highlighted as most important stat) */}
//             <div className="stat-card stat-card--highlight">
//               <div className="stat-card__label">Golos</div>
//               <div className="stat-card__value">{goals}</div>
//             </div>

//             {/* Assists */}
//             <div className="stat-card">
//               <div className="stat-card__label">Assist.</div>
//               <div className="stat-card__value">{assists}</div>
//             </div>

//             {/* Goals per match average */}
//             <div className="stat-card">
//               <div className="stat-card__label">G/Jogo</div>
//               <div className="stat-card__value">{goalsPerMatch}</div>
//             </div>
//           </div>

//           {/* Discipline row: yellow and red cards */}
//           <div className="discipline-row">
//             {/* Yellow cards */}
//             <div className="discipline-item">
//               <div className="card-icon yellow-card"></div>
//               <span>{yellowCards} Amarelos</span>
//             </div>
//             {/* Red cards */}
//             <div className="discipline-item">
//               <div className="card-icon red-card"></div>
//               <span>{redCards} Vermelhos</span>
//             </div>
//           </div>
//         </div>

//         {/* ==========================================
//             MATCH HISTORY SECTION
//             ==========================================
//             Shows last 5 matches where player participated
//             Only displays if player has match history

//             CONDITIONAL RENDERING:
//             {condition && <Component />}
//             Only renders if condition is true
//         */}
//         {playerMatches.length > 0 && (
//           <div className="content-section">
//             <h2 className="section-title">📅 Últimos Jogos</h2>

//             {/* List of matches using MatchCard component */}
//             <div className="matches-list">
//               {/*
//                 MAP FUNCTION:
//                 Loops through playerMatches array
//                 Creates one MatchCard for each match

//                 key={match.id}:
//                 Required by React to track each card
//                 Must be unique for each item
//               */}
//               {playerMatches.map((match) => (
//                 <MatchCard key={match.id} match={match} />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ==========================================
//             TEAM INFO SECTION
//             ==========================================
//             Shows which team player belongs to
//             Clickable card that links to team page
//         */}
//         <div className="content-section">
//           <h2 className="section-title">👥 Equipa</h2>

//           {/*
//             Link wrapping the entire card
//             Makes whole card clickable
//             Navigates to team detail page
//           */}
//           <Link to={`/equipas/${finalTeamId}`} className="team-info-card">
//             {/* Team logo */}
//             <img src={teamLogo} alt={teamName} className="team-info__logo" />
//             {/* Team details */}
//             <div className="team-info__details">
//               <h3 className="team-info__name">{teamName}</h3>
//               <p className="team-info__text">Ver página da equipa →</p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Export component so it can be imported in other files
// export default PlayerDetailPage;
