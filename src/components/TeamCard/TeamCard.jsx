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
        {team.logo ? (
          <img
            className="team-logo-img"
            src={team.logo}
            alt={team.abbr}
            loading="lazy"
            width="64"
            height="64"
          />
        ) : (
          // Fallback if logo path is missing
          team.abbr
        )}
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
      {(team.standing.position || team.standing.points) && (
        <div className="team-info">
          {/* Show position if it exists */}
          {team.standing.position && `${team.standing.position}º Lugar`}

          {/* Show separator bullet if BOTH position AND points exist */}
          {team.standing.position && team.standing.points && " • "}

          {/* Show points if they exist */}
          {team.standing.points && `${team.standing.points} Pontos`}
        </div>
      )}
    </div>
  );
};

export default TeamCard;
