//   return (
//     <div
//       style={{
//         ...styles.card,
//         ...(isHovered ? styles.cardHover : {}),
//       }}
//       onClick={() => onClick?.(team)}

//       <div style={styles.logo}>{team.abbr}</div>
//       <div style={styles.name}>{team.name}</div>
//       {/* Only show stats if they exist */}

//       {(team.position || team.points) && (
//         <div style={styles.info}>
//           {team.position && `${team.position}º Lugar`}
//           {team.position && team.points && " • "}
//           {team.points && `${team.points} Pontos`}
//         </div>
//       )}
//     </div>

// ============================================
// TeamCard.jsx
// ============================================
// Individual team card component that displays a single team's information
//
// This component shows:
// - Team abbreviation in a logo box
// - Full team name
// - Optional position and points (if provided in team data)
//
// Props:
//   - team: object containing team data
//     {
//       id: string (unique identifier),
//       name: string (full team name),
//       abbr: string (abbreviation for display),
//       position?: number (optional league position),
//       points?: number (optional points total)
//     }
//   - onClick: function that gets called when the card is clicked
//              receives the team object as parameter

import React from "react";
import "./TeamCard.css";

const TeamCard = ({ team, onClick }) => {
  return (
    // Main card container
    // onClick with arrow function: when clicked, call onClick function with team data
    // The ?. is optional chaining - only calls onClick if it exists

    <div className="team-card" onClick={() => onClick?.(team)}>
      {/* Logo box - displays team abbreviation */}
      <div className="team-logo">
        {/* Display the team's abbreviation (e.g., "FE" for FC Eagles) */}
        {team.abbr}
      </div>

      {/* Team name display */}
      <div className="team-name">
        {/* Display the full team name (e.g., "FC Eagles") */}
        {team.name}
      </div>

      {/*
//         Conditional rendering of team stats
//         Only show this section if position OR points exist
//         The && operator means: if left side is true, render right side
//         The || operator means: true if EITHER position OR points exist
//       */}
      {(team.position || team.points) && (
        <div className="team-info">
          {/* Show position if it exists */}
          {team.position && `${team.position}º Lugar`}

          {/* Show separator bullet if BOTH position AND points exist */}
          {team.position && team.points && " • "}

          {/* Show points if they exist */}
          {team.points && `${team.points} Pontos`}
        </div>
      )}
    </div>
  );
};

export default TeamCard;

{
  /* <div style={styles.card} onClick={() => onClick?.(team)}>

  <div style={styles.logo}>{team.abbr}</div>
  <div style={styles.name}>{team.name}</div>

  <div style={styles.info}>
    {team.position}º Lugar • {team.points} Pontos
  </div>
</div>; */
}
