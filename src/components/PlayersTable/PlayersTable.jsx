/* OG Table css JSX */

// // ============================================
// // PlayersTable.jsx
// // ============================================
// // Displays top scorers in a table format
// // Props:
// //   - players: array of player objects with stats

// import React from "react";
// import { Link } from "react-router-dom";
// import "./PlayersTable.css";

// const PlayersTable = ({ players = [] /*,teams = {}*/ }) => {
//   // Ensure players is an array before trying to map over it
//   if (!players || players.length === 0) {
//     return <div className="players-container">No players data available.</div>;
//   }

//   return (
//     <div className="players-container">
//       <table className="players-table">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Jogador</th>
//             <th>Equipas</th>
//             <th>Gol.</th>
//             <th>As.</th>
//             <th>J</th>
//           </tr>
//         </thead>

//         <tbody>
//           {players.map((player, index) => {
//             return (
//               <tr key={player.id || index}>
//                 <td>
//                   <span className="position">{index + 1}</span>
//                 </td>
//                 <td>
//                   <Link to={`/jogadores/${player.id}`}>
//                     <strong>{player?.name ?? "-"}</strong>
//                   </Link>
//                 </td>
//                 <td>
//                   <Link to={`/equipas/${player.team.id}`}>
//                     {player?.team.name ?? "-"}
//                   </Link>
//                 </td>
//                 <td>{player.stats?.goals ?? "0"}</td>
//                 <td>{player.stats?.assists ?? "0"}</td>
//                 <td>{player.stats?.appearances ?? "0"}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PlayersTable;

import { Link } from "react-router-dom";
import "./PlayersTable.css";

const PlayersTable = ({ players = [] }) => {
  // Check if the array exists and has items
  const hasData = players && players.length > 0;

  // Sorting logic only applies if there is data
  if (hasData) {
    players.sort((a, b) => {
      // Sort by name alphabetically
      return a.name.localeCompare(b.name, undefined, {
        numeric: true,
        sensitivity: "base",
      });
    });
  }

  return (
    <div className="players-table-container">
      <table className="player-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Jogador</th>
            <th>Equipa</th>
            <th>Posição</th>
          </tr>
        </thead>

        <tbody>
          {/* ✅ CONDITIONAL RENDERING */}
          {hasData ? (
            // Map over the players array to dynamically create a row (<tr>)
            //   for each player. The 'key' attribute is essential in React for performance.

            players.map((player, index) => (
              <tr key={player.id || index}>
                <td className="number">{index + 1}</td>

                <td>
                  <Link
                    className="wrapper-Link"
                    to={`/jogadores/${player?.id}`}
                  >
                    <div className="player-cell">
                      <div className="player-logo">
                        <img
                          className="player-logo-img"
                          src={
                            player?.photo ||
                            "/images/players/default-player.png"
                          }
                          alt={`${player?.name}`}
                          loading="lazy"
                          width="32"
                          height="32"
                        />
                      </div>
                      <span>
                        <strong className="player-name">
                          {player?.name ?? "-"}
                        </strong>
                      </span>
                    </div>
                  </Link>
                </td>

                <td>
                  <Link
                    className="wrapper-Link"
                    to={`/equipas/${player?.team.id}`}
                  >
                    <div className="team-cell">
                      <div className="team-logo">
                        {player?.team.logo ? (
                          <img
                            className="team-logo-img"
                            src={player?.team.logo}
                            alt={player?.team.abbr}
                            loading="lazy"
                            width="32"
                            height="32"
                          />
                        ) : (
                          // Fallback if logo path is missing
                          player?.team.abbr
                        )}
                      </div>

                      <span className="team-name">
                        {player?.team.name ?? "-"}
                      </span>
                    </div>
                  </Link>
                </td>

                {/* 3rd Column: Posição (Position) */}
                <td>
                  <span className="player-position">{player?.position}</span>
                </td>
              </tr>
            ))
          ) : (
            // ✅ IF NO DATA: Show this row
            // colSpan="10" matches the number of headers so it spans the full width
            <tr className="no-data-row">
              <td colSpan="4" className="no-data-message">
                Ainda não há dados disponíveis para os jogadores.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersTable;
