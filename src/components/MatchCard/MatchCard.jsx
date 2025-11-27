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

  // Check if match is currently being played
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
      <div className="datetime">
        {date} • {time}
        {(status === "finished" && " • FINALIZADO") ||
          (status === "upcoming" && " • PRÓXIMO")}
      </div>

      {/* Teams and score section - 3 column grid */}
      <div className="teams">
        {/* Home team (left) */}
        {/* ------------------------LEFT-------------------------------- */}
        {/* -------------------------------------------------------- */}
        {/* -------------------------------------------------------- */}
        <div className="team">
          <div /*style={styles.teamLogo}*/ className="team-logo">
            {homeTeam.abbr}
          </div>
          <div /*style={styles.teamName}*/ className="team-name">
            {homeTeam.name}
          </div>
        </div>
        {/* Score (center) - shows VS if upcoming, actual score otherwise */}
        {/* -------------------------------------------------------- */}
        {/* ------------------------CENTER-------------------------------- */}
        {/* -------------------------------------------------------- */}
        <div /*style={styles.score}*/ className="score">
          {status === "upcoming" ? (
            <span /*style={styles.vs}*/ className="vs">VS</span>
          ) : (
            <>
              <span>{homeScore}</span>
              <span
                /*style={{ color: "var(--text-light)" }}*/ className="score-separator"
              >
                -
              </span>
              <span>{awayScore}</span>
            </>
          )}
        </div>
        {/* Away team (right) */}
        {/* -------------------------------------------------------- */}
        {/* -------------------------------------------------------- */}
        {/* ------------------------RIGHT-------------------------------- */}
        <div /*style={styles.team}*/ className="team">
          <div /*style={styles.teamLogo}*/ className="team-logo">
            {awayTeam.abbr}
          </div>
          <div /*style={styles.teamName}*/ className="team-name">
            {awayTeam.name}
          </div>
        </div>
      </div>

      {/* Venue and additional info */}
      <div /*style={styles.info}*/ className="info">
        📍 {venue} {info && `• ${info}`}
      </div>
    </div>
  );
};

export default MatchCard;
