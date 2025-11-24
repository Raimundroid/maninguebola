// ============================================
// PlayersTable.jsx
// ============================================
// Displays top scorers in a table format
// Props:
//   - players: array of player objects with stats

import React from "react";
import "./PlayersTable.css";

const PlayersTable = ({ players }) => {
  // Ensure players is an array before trying to map over it
  //   if (!players || players.length === 0) {
  //     return <div className="players-container">No players data available.</div>;
  //   }
  return (
    <div className="players-container">
      <table className="players-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Jogador</th>
            <th>Equipa</th>
            <th>Golos</th>
            <th>Assistências</th>
            <th>Jogos</th>
          </tr>
        </thead>

        <tbody>
          {players.map((player, index) => (
            <tr key={player.id}>
              <td>
                <span>{index + 1}</span>
              </td>
              <td>
                <strong>{player.name}</strong>
              </td>
              <td>{player.team}</td>
              <td>{player.goals}</td>
              <td>{player.assists}</td>
              <td>{player.matches}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersTable;

{
  /* <div style={styles.container}>
  <table style={styles.table}>
    <thead>
      <tr>
        <th style={styles.th}>#</th>
        <th style={styles.th}>Jogador</th>
        <th style={styles.th}>Equipa</th>
        <th style={styles.th}>Golos</th>
        <th style={styles.th}>Assistências</th>
        <th style={styles.th}>Jogos</th>
      </tr>
    </thead>

    <tbody>
      {players.map((player, index) => (
        <tr key={player.id || index}>

          <td style={styles.td}>
            <span style={styles.position}>{index + 1}</span>
          </td>
          <td style={styles.td}>
            <strong>{player.name}</strong>
          </td>
          <td style={styles.td}>{player.team}</td>
          <td style={styles.td}>{player.goals}</td>
          <td style={styles.td}>{player.assists}</td>
          <td style={styles.td}>{player.matches}</td>

        </tr>
      ))}
    </tbody>
  </table>
</div>; */
}
