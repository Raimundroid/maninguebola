// import React from "react";

// ///////////////////////////////
//==================================
//1ST CODE
// ================================
//===================================

// //============================================
// // TeamsGrid.jsx
// // ============================================
// // Displays teams in a clickable card grid

// // Individual team card (internal component)
// const TeamCard = ({ team, onClick }) => {
//   const styles = {
//     card: {
//       background: "var(--card-bg)",
//       padding: "20px",
//       borderRadius: "12px",
//       boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//       textAlign: "center",
//       cursor: "pointer",
//       transition: "all 0.3s",
//     },
//     logo: {
//       width: "64px",
//       height: "64px",
//       margin: "0 auto 12px",
//       fontSize: "24px",
//       background: "var(--border)",
//       borderRadius: "8px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       fontWeight: "700",
//       color: "var(--text-light)",
//     },
//     name: {
//       fontSize: "18px",
//       marginBottom: "8px",
//       fontWeight: "600",
//       color: "var(--text)",
//     },
//     info: {
//       fontSize: "13px",
//       color: "var(--text-light)",
//       fontWeight: "500",
//     },
//   };

//   return (
//     <div style={styles.card} onClick={() => onClick?.(team)}>
//       <div style={styles.logo}>{team.abbr}</div>
//       <div style={styles.name}>{team.name}</div>
//       <div style={styles.info}>
//         {team.position}º Lugar • {team.points} Pontos
//       </div>
//     </div>
//   );
// };

// ///////////////////////////////
//==================================
//WORKING CODE
// ================================
//===================================

// import React from "react";

// // ============================================
// // TeamCard.jsx (Extract to separate file)
// // ============================================
// // Individual team card component
// // Props:
// //   - team: team object with id, name, abbr
// //   - onClick: function to call when card is clicked

// const TeamCard = ({ team, onClick }) => {
//   const styles = {
//     card: {
//       background: "var(--card-bg, #ffffff)",
//       padding: "20px",
//       borderRadius: "12px",
//       boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//       textAlign: "center",
//       cursor: "pointer",
//       transition: "all 0.3s",
//     },
//     cardHover: {
//       transform: "translateY(-4px)",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//     },
//     logo: {
//       width: "64px",
//       height: "64px",
//       margin: "0 auto 12px",
//       fontSize: "24px",
//       background: "var(--border, #e0e0e0)",
//       borderRadius: "8px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       fontWeight: "700",
//       color: "var(--text-light, #666)",
//     },
//     name: {
//       fontSize: "18px",
//       marginBottom: "8px",
//       fontWeight: "600",
//       color: "var(--text, #333)",
//     },
//     info: {
//       fontSize: "13px",
//       color: "var(--text-light, #666)",
//       fontWeight: "500",
//     },
//   };

//   const [isHovered, setIsHovered] = React.useState(false);

//   return (
//     <div
//       style={{
//         ...styles.card,
//         ...(isHovered ? styles.cardHover : {}),
//       }}
//       onClick={() => onClick?.(team)}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
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
//   );
// };

// export default TeamCard;

// ///////////////////////////////
//==================================
//COMMENTED CODE
// ================================
//===================================
// // ============================================
// // TeamCard.jsx
// // ============================================
// // Individual team card component that displays a single team's information
// //
// // This component shows:
// // - Team abbreviation in a logo box
// // - Full team name
// // - Optional position and points (if provided in team data)
// //
// // Props:
// //   - team: object containing team data
// //     {
// //       id: string (unique identifier),
// //       name: string (full team name),
// //       abbr: string (abbreviation for display),
// //       position?: number (optional league position),
// //       points?: number (optional points total)
// //     }
// //   - onClick: function that gets called when the card is clicked
// //              receives the team object as parameter

// const TeamCard = ({ team, onClick }) => {
//   // State to track if mouse is hovering over the card
//   // This allows us to apply hover effects
//   // useState returns [currentValue, functionToUpdateValue]
//   const [isHovered, setIsHovered] = React.useState(false);

//   return (
//     // Main card container
//     // onClick with arrow function: when clicked, call onClick function with team data
//     // The ?. is optional chaining - only calls onClick if it exists
//     <div
//       className="team-card"
//       // Conditionally add 'hovered' class when mouse is over the card
//       // This allows CSS to apply hover styles
//       style={{
//         // Apply base card styles
//         ...teamCardStyles.card,
//         // If hovered, also apply hover styles (spread operator merges objects)
//         ...(isHovered ? teamCardStyles.cardHover : {}),
//       }}
//       onClick={() => onClick?.(team)}
//       // Event handlers for mouse hover
//       // When mouse enters card area, set isHovered to true
//       onMouseEnter={() => setIsHovered(true)}
//       // When mouse leaves card area, set isHovered to false
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Logo box - displays team abbreviation */}
//       <div className="team-logo" style={teamCardStyles.logo}>
//         {/* Display the team's abbreviation (e.g., "FE" for FC Eagles) */}
//         {team.abbr}
//       </div>

//       {/* Team name display */}
//       <div className="team-name" style={teamCardStyles.name}>
//         {/* Display the full team name (e.g., "FC Eagles") */}
//         {team.name}
//       </div>

//       {/*
//         Conditional rendering of team stats
//         Only show this section if position OR points exist
//         The && operator means: if left side is true, render right side
//         The || operator means: true if EITHER position OR points exist
//       */}
//       {(team.position || team.points) && (
//         <div className="team-info" style={teamCardStyles.info}>
//           {/* Show position if it exists */}
//           {team.position && `${team.position}º Lugar`}

//           {/* Show separator bullet if BOTH position AND points exist */}
//           {team.position && team.points && " • "}

//           {/* Show points if they exist */}
//           {team.points && `${team.points} Pontos`}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TeamCard;

// ///////////////////////////////
//==================================
// TRANSSCRIPTED CODE
// ================================
//===================================

import React from "react";

const TeamCard = () => {
  return <div>hh</div>;
};

export default TeamCard;
