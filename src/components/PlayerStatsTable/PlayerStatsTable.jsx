import React, { useState } from "react";
import "./PlayerStatsTable.css";
import { Link } from "react-router-dom";

const PlayerStatsTable = ({ players = {}, teams = [] }) => {
  const [activeTab, setActiveTab] = useState("goals");

  // 1. Convert the 'players' prop (which defaults to an object) into an array for sorting and mapping.
  //   const playersList = Object.values(players);

  // 2. Sort the players array based on the active tab.
  // We create a copy using [...playersList] to avoid mutating the original prop.
  const sortedPlayers = [...players].sort((a, b) => {
    if (activeTab === "goals") {
      // Sort descending by goals
      return (b.stats?.goals || 0) - (a.stats?.goals || 0);
    } else {
      // Sort descending by assists
      return (b.stats?.assists || 0) - (a.stats?.assists || 0);
    }
  });

  // 3. Helper function to find the Team Name using the teamId.
  // Assumes 'teams' is an array of objects like { id: 'eagles', name: 'FC Eagles' }.
  //   const getTeamName = (teamId) => {
  //     const team = teams.find((t) => t.id === teamId);
  //     return team ? team.name : teamId; // Fallback to ID if name not found
  //   };

  {
    /* <div className="filter-buttons-container">

  {filters.map((filter) => (
    <button
      key={filter.value}

      className={`filter-button ${
        activeFilter === filter.value ? "filter-button--active" : ""
      }`}

      onClick={() => onFilterChange(filter.value)}
    >

      {filter.label}
    </button>
  ))}
</div>; */
  }

  return (
    <div className="players-stats-container">
      {/* --- Tab Navigation --- */}
      <div className="tab-button-container">
        <button
          className={`tab-button ${
            activeTab === "goals" ? "tab-button--active" : ""
          }`}
          onClick={() => setActiveTab("goals")}
        >
          Golos
        </button>
        <button
          className={`tab-button ${
            activeTab === "assists" ? "tab-button--active" : ""
          }`}
          onClick={() => setActiveTab("assists")}
        >
          Assistências
        </button>
      </div>

      {/* --- Table Content --- */}
      <div className="player-stats-table-wrapper">
        <table className="players-stats-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Jogador</th>
              {/* Dynamic Header: Displays 'Gol.' (Goals) or 'As.' (Assists) */}
              <th>{activeTab === "goals" ? "Golos" : "Assists."}</th>
              <th>J</th>
            </tr>
          </thead>

          {/* <Link className="wrapper-Link" to={`/jogadores/${player.id}`}> */}
          {/* <div className="player-cell">
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
              <strong className="player-name">{player?.name ?? "-"}</strong>
            </span>
          </div> */}
          {/* </Link> */}

          <tbody>
            {sortedPlayers.map((player, index) => {
              // 4. Determine the main stat value to display based on the active tab
              const displayStat =
                activeTab === "goals"
                  ? player.stats?.goals
                  : player.stats?.assists;

              return (
                <tr key={player.id}>
                  {/* Rank is based on current sorted index (1, 2, 3...) */}
                  <td className="rank-col">{index + 1}</td>

                  {/* Player Name and Photo Column */}
                  <td>
                    <div className="player-cell">
                      <Link
                        className="wrapper-Link"
                        to={`/jogadores/${player.id}`}
                      >
                        <div className="player-photo-wrapper">
                          <img
                            src={
                              player.photo ||
                              "/images/players/default-player.png"
                            }
                            alt={`Icon for ${player.name}`}
                            loading="lazy"
                            width="48"
                            height="48"
                            className="player-photo"
                          />
                        </div>
                      </Link>

                      <div className="players-name-team-wrapper">
                        <Link
                          className="wrapper-Link"
                          to={`/jogadores/${player.id}`}
                        >
                          <span className="player-name">
                            <strong>{player.name}</strong>
                          </span>
                        </Link>

                        {/* <Link
                          className="wrapper-Link"
                          to={`/equipas/${player.team.id}`}
                        > */}
                        <div className="team-info">
                          <div className="team-logo">
                            {player.team.logo ? (
                              <img
                                className="team-logo-img"
                                src={player.team.logo}
                                alt={player.team.abbr}
                                loading="lazy"
                                width="24"
                                height="24"
                              />
                            ) : (
                              // Fallback if logo path is missing
                              player.team.abbr
                            )}
                          </div>
                          <span className="team-name">{player.team.name}</span>
                        </div>
                        {/* </Link> */}
                      </div>
                    </div>
                  </td>

                  {/* Dynamic Stat Column (Goals/Assists) */}
                  <td className="stat-col">
                    <span>
                      <strong>{displayStat || 0}</strong>
                    </span>
                  </td>

                  {/* Games Played / Appearances */}
                  <td className="games-col">
                    {player.stats?.appearances || 0}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayerStatsTable;
