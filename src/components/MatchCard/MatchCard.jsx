// ============================================
// MatchCard.jsx
// ============================================
// Displays a single match with teams, score, and status
// Props:
//   - match: object containing all match data (teams, scores, status, etc.)

import "./MatchCard.css";

const MatchCard = ({ match }) => {
  // Destructure all properties we need from the match object
  // This is cleaner than writing match.homeTeam, match.awayTeam, etc.
  const {
    homeTeam, // { name: 'FC Eagles', abbr: 'FE' }
    awayTeam, // { name: 'United Lions', abbr: 'UL' }
    homeScore, // number (e.g., 3)
    awayScore, // number (e.g., 2)
    date, // string (e.g., 'Sáb, 16 Nov')
    time, // string (e.g., '14:00')
    status, // 'live' | 'finished' | 'upcoming'
    venue, // string (e.g., 'Campo Principal')
    // ✅ These are now Arrays (e.g. ["Name 1", "Name 2"])
    // default to empty array [] to prevent crash if undefined
    homeScorers = [],
    awayScorers = [],
    info, // optional extra info string
    // minute, // current minute if live (e.g., 67)
  } = match;

  // Convert ISO date string to a Date object
  const matchDate = new Date(date);

  // Format the date for display (e.g., "Sat, 16 Nov")
  // You may need to adjust the locale ('pt-MZ' or similar) based on your user base
  const formatted = new Intl.DateTimeFormat("pt-MZ", {
    weekday: "long",
    day: "numeric",
    month: "short",
  }).format(matchDate);

  // Capitalize first letter (just in case locale returns lowercase)
  const formattedDate = formatted.charAt(0).toUpperCase() + formatted.slice(1);

  // Check  if match is currently being played
  const isLive = status === "live";

  return (
    <div className={`match-card ${isLive ? "match-card--live" : ""}`}>
      {/* Only show live badge if match is currently being played */}
      {isLive && (
        <div className="active-badge">
          <span className="pulse-dot"></span>
          AO VIVO {/*  {minute}' */}
        </div>
      )}
      {/* Date and time - show FINALIZADO if match is finished  or (||) show PRÓXIMO if match is upcoming*/}
      <div
        className={`datetime ${
          status === "canceled" ? "canceled-match-datetime" : ""
        }`}
      >
        {formattedDate} • {time}
        {(status === "finished" && " • FINALIZADO") ||
          (status === "upcoming" && " • PRÓXIMO") ||
          (status === "canceled" && " • CANCELADO")}
      </div>

      {/* Teams and score section - 3 column grid */}
      <div className="teams">
        {/* Home team (left) */}
        {/* ------------------------LEFT-------------------------------- */}
        {/* -------------------------------------------------------- */}
        {/* -------------------------------------------------------- */}

        {/* <div className="team-header__logo-section">
              <img
                src={logo || "/images/default-team-logo.png"}
                alt={name}
                className="team-header__logo"
              /> */}
        <div className="team">
          {/* Best practice: Always render the logo, but show the abbreviation
          inside the logo container if the logo is missing. */}
          <div className="team-logo">
            {homeTeam.logo ? (
              <img
                className="team-logo-img"
                src={homeTeam.logo}
                alt={homeTeam.abbr}
                loading="lazy"
                width="48"
                height="48"
              />
            ) : (
              // Fallback if logo path is missing
              homeTeam.abbr
            )}
          </div>

          <div className="team-name">{homeTeam.name}</div>
          {/* ======== need review============== */}
          {/* ✅ SIMPLIFIED: No .split() needed. Just map the array. */}
          {(status === "finished" || status === "live") &&
            homeScorers.length > 0 && (
              <div className="scorers home-scorers">
                {homeScorers.map((scorer, index) => (
                  <span key={index} className="scorer-name">
                    {scorer} <span className="ball-icon">⚽</span>
                  </span>
                ))}
              </div>
            )}
          {/* ======== need review============== */}
        </div>
        {/* Score (center) - shows VS if upcoming, actual score otherwise */}
        {/* -------------------------------------------------------- */}
        {/* ------------------------CENTER-------------------------------- */}
        {/* -------------------------------------------------------- */}
        <div className="score">
          {status === "upcoming" ? (
            <span className="vs">VS</span>
          ) : (
            <>
              <span>{homeScore}</span>
              <span className="score-separator">-</span>
              <span>{awayScore}</span>
            </>
          )}
        </div>
        {/* Away team (right) */}
        {/* -------------------------------------------------------- */}
        {/* -------------------------------------------------------- */}
        {/* ------------------------RIGHT-------------------------------- */}
        <div className="team">
          {/* Best practice: Always render the logo, but show the abbreviation
          inside the logo container if the logo is missing. */}
          <div className="team-logo">
            {awayTeam.logo ? (
              <img
                className="team-logo-img"
                src={awayTeam.logo}
                alt={awayTeam.abbr}
                loading="lazy"
                width="48"
                height="48"
              />
            ) : (
              // Fallback if logo path is missing
              awayTeam.abbr
            )}
          </div>
          <div className="team-name">{awayTeam.name}</div>

          {/* ======== need review============== */}
          {/* ✅ SIMPLIFIED: Just map the array. */}
          {(status === "finished" || status === "live") &&
            awayScorers.length > 0 && (
              <div className="scorers away-scorers">
                {awayScorers.map((scorer, index) => (
                  <span key={index} className="scorer-name">
                    <span className="ball-icon">⚽</span> {scorer}
                  </span>
                ))}
              </div>
            )}
          {/* ======== need review============== */}
        </div>
      </div>
      {/* Venue and additional info */}
      <div className="info">
        🥅 {venue} {info && `• ${info}`}
      </div>
    </div>
  );
};

export default MatchCard;
