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

/// PlayersTable.jsx

// --- Sample Data (You would typically fetch this from an API or prop) ---
import { Link } from "react-router-dom";
import "./PlayersTable.css";

// const playersData = [
//   {
//     id: 1,
//     player: "Barry Allen",
//     team: "Love And Fun FC",
//     position: "Meio-campista",
//     playerImg: "path/to/barry-allen-icon.png", // Image path for the player icon
//     teamImg: "path/to/love-fun-fc-icon.png", // Image path for the team icon
//   },
//   {
//     id: 2,
//     player: "Billy Batson",
//     team: "Freedom FC",
//     position: "Meio-campista",
//     playerImg: "path/to/billy-batson-icon.png",
//     teamImg: "path/to/freedom-fc-icon.png",
//   },
//   {
//     id: 3,
//     player: "Bruce Wayne",
//     team: "Progress FC",
//     position: "Atacante",
//     playerImg: "path/to/bruce-wayne-icon.png",
//     teamImg: "path/to/progress-fc-icon.png",
//   },
//   {
//     id: 4,
//     player: "Clark Kent",
//     team: "Kindness FC",
//     position: "Atacante",
//     playerImg: "path/to/clark-kent-icon.png",
//     teamImg: "path/to/kindness-fc-icon.png",
//   },
//   // Add more data as your list grows...
// ];

const PlayersTable = ({ players = [] }) => {
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
          {/* Map over the players array to dynamically create a row (<tr>)
              for each player. The 'key' attribute is essential in React for performance.
            */}
          {players.map((player, index) => (
            <tr key={player.id || index}>
              <td className="number">{index + 1}</td>

              <td>
                {/* <Link className="wrapper-Link" to={`/jogadores/${player.id}`}> */}
                <div className="player-cell">
                  <div className="player-logo">
                    <img
                      className="player-logo-img"
                      src={player.photo || "/images/players/default-player.png"}
                      alt={`Icon for ${player.name}`}
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
                {/* </Link> */}
              </td>

              <td>
                {/* <Link
                  className="wrapper-Link"
                  to={`/equipas/${player.team.id}`}
                > */}
                <div className="team-cell">
                  <div className="team-logo">
                    {player.team.logo ? (
                      <img
                        className="team-logo-img"
                        src={player.team.logo}
                        alt={player.team.abbr}
                        loading="lazy"
                        width="32"
                        height="32"
                      />
                    ) : (
                      // Fallback if logo path is missing
                      player.team.abbr
                    )}
                  </div>

                  <span className="team-name">{player?.team.name ?? "-"}</span>
                </div>
                {/* </Link> */}
              </td>

              {/* 3rd Column: Posição (Position) */}
              <td>
                <span className="player-position">{player.position}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

{
  /* <img
  className="team-image"
  src={player.team.logo}
  alt={`Icon for ${player.team.name}`}
/>; */
}
{
  /* <Link to={`/equipas/${team.id}`}>
  <div className="team-cell">
    <div className="team-logo">
      {team.logo ? (
        <img
          className="team-logo-img"
          src={team.logo}
          alt={team.abbr}
          loading="lazy"
          width="30"
          height="30"
        />
      ) : (
        // Fallback if logo path is missing
        team.abbr
      )}
    </div>


    <span className="team-name">{team.name}</span>
  </div>
</Link>; */
}

export default PlayersTable;
