// ============================================
// PlayersTable.jsx
// ============================================
// Displays top scorers in a table format
// Props:
//   - players: array of player objects with stats

import React from "react";
import "./PlayersTable.css";

const PlayersTable = ({ players = [], teams = {} }) => {
  // Ensure players is an array before trying to map over it
  if (!players || players.length === 0) {
    return <div className="players-container">No players data available.</div>;
  }

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
          {players.map((player, index) => {
            // find the team by teamId
            const team = teams[player.teamId];

            return (
              <tr key={player.id || index}>
                <td>
                  <span className="position">{index + 1}</span>
                </td>
                <td>
                  <strong>{player?.name ?? "-"}</strong>
                </td>
                <td>{team?.name ?? "–"}</td>
                <td>{player.stats?.goals ?? "0"}</td>
                <td>{player.stats?.assists ?? "0"}</td>
                <td>{player.stats?.appearances ?? "0"}</td>
              </tr>
            );
          })}
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
