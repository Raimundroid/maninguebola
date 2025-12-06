import React from "react";
import "./StandingsTable.css";
import { Link } from "react-router-dom";

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
                <Link to={`/equipas/${team.id}`}>
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
                </Link>
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
