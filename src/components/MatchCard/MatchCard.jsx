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
        <div className="team">
          <div className="team-logo">{homeTeam.abbr}</div>
          <div className="team-name">{homeTeam.name}</div>
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
          <div className="team-logo">{awayTeam.abbr}</div>
          <div className="team-name">{awayTeam.name}</div>
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
