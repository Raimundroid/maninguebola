//   return (
//     <div style={styles.container}>
//       <table style={styles.table}>
//         <thead>
//           <tr>
//             {/* Table headers: Position, Team, Played, Wins, Draws, Losses, Goals For/Against, Diff, Points */}
//             <th style={styles.th}>#</th>
//             <th style={styles.th}>Equipa</th>
//             <th style={styles.th}>J</th>
//             <th style={styles.th}>V</th>
//             <th style={styles.th}>E</th>
//             <th style={styles.th}>D</th>
//             <th style={styles.th}>GM</th>
//             <th style={styles.th}>GS</th>
//             <th style={styles.th}>DG</th>
//             <th style={styles.th}>Pts</th>
//           </tr>
//         </thead>

//         <tbody>
//           {standings.map((team, index) => (
//             <tr key={team.id || index}>

//               <td style={styles.td}>
//                 <span style={styles.position}>{index + 1}</span>
//               </td>
//               <td style={styles.td}>
//                 <div style={styles.teamCell}>
//                   <div style={styles.teamLogo}>{team.abbr}</div>
//                   <span>{team.name}</span>
//                 </div>
//               </td>
//               <td style={styles.td}>{team.played}</td>
//               <td style={styles.td}>{team.wins}</td>
//               <td style={styles.td}>{team.draws}</td>
//               <td style={styles.td}>{team.losses}</td>
//               <td style={styles.td}>{team.goalsFor}</td>
//               <td style={styles.td}>{team.goalsAgainst}</td>

//               <td style={styles.td}>
//                 {/* Show + sign for positive goal difference */}
//                 {team.goalDiff > 0 ? `+${team.goalDiff}` : team.goalDiff}
//               </td>

//               <td style={styles.td}>
//                 <strong>{team.points}</strong>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// ============================================
// StandingsTable.jsx
// ============================================
// Displays league standings in a table format
// Props:
//   - standings: array of team standings with stats

import React from "react";
import "./StandingsTable.css";

const StandingsTable = ({ standings }) => {
  return (
    <div className="standings-table-container">
      <table className="standings-table">
        <thead>
          <tr>
            {/* Table headers: Position, Team, Played, Wins, Draws, Losses, Goals For/Against, Diff, Points */}
            <th>#</th>
            <th>Equipa</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>GM</th>
            <th>GS</th>
            <th>DG</th>
            <th>Pts</th>
          </tr>
        </thead>

        <tbody>
          {standings.map((team, index) => (
            <tr key={team.id || index}>
              <td>
                <span className="position">{team.position}</span>
              </td>
              <td>
                <div className="team-cell">
                  <div className="team-logo">{team.abbr}</div>
                  <span className="team-name">{team.name}</span>
                </div>
              </td>
              <td>{team.played}</td>
              <td>{team.wins}</td>
              <td>{team.draws}</td>
              <td>{team.losses}</td>
              <td>{team.goalsFor}</td>
              <td>{team.goalsAgainst}</td>
              <td>
                {/* Show + sign for positive goal difference */}
                {team.goalDiff > 0 ? `+${team.goalDiff} ` : team.goalDiff}
              </td>
              <td>
                <strong>{team.points}</strong>
              </td>

              {/* <td>{team.winRate}</td>

              <td>{team.pointsPerGame}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingsTable;
