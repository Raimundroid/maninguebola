// ============================================
// MatchCard.jsx
// ============================================
// Displays a single match with teams, score, and status
// Props:
//   - match: object containing all match data (teams, scores, status, etc.)

import "./MatchCard.css";

// export const matchesData = [
//   {
//     id: 1, // Unique ID for React keys
//     homeTeam: teams.lions, // Reference to team object
//     awayTeam: teams.tigers,
//     homeScore: 1, // Only for live/finished
//     awayScore: 1,
//     date: "Sáb, 16 Nov", // Formatted date string
//     time: "14:00",
//     status: "live", // 'live' | 'finished' | 'upcoming'
//     minute: 67, // Current minute (only for live)
//     venue: "Campo Principal",
//     info: "85 espectadores", // Optional extra info
//   },]

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
    <div
      /*style={styles.card}*/ className={`match-card ${
        isLive ? "match-card--live" : ""
      }`}
    >
      {/* Only show live badge if match is currently being played */}
      {isLive && (
        <div /*style={styles.liveBadge}*/ className="active-badge">
          <span /*style={styles.pulseDot}*/ className="pulse-dot"></span>
          AO VIVO {/*  {minute}' */}
        </div>
      )}

      {/* Date and time - show FINALIZADO if match is finished */}
      <div /*style={styles.datetime}*/ className="datetime">
        {date} • {time} {status === "finished" && "• FINALIZADO"}
      </div>

      {/* Teams and score section - 3 column grid */}
      <div /*style={styles.teams}*/ className="teams">
        {/* Home team (left) */}
        <div /*style={styles.team}*/ className="team">
          <div /*style={styles.teamLogo}*/ className="team-logo">
            {homeTeam.abbr}
          </div>
          <div /*style={styles.teamName}*/ className="team-name">
            {homeTeam.name}
          </div>
        </div>
        {/* Score (center) - shows VS if upcoming, actual score otherwise */}
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
        <div /*style={styles.team}*/ className="team-name">
          <div /*style={styles.teamLogo}*/ className="team-logo">
            {awayTeam.abbr}
          </div>
          <div /*style={styles.teamName}*/ className="team-logo">
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
