import React, { useState, useMemo } from "react";
import "./PlayerStatsTable.css";
import { Link } from "react-router-dom";
// import playerCompStatsFilter from "../../data/helperFunctions/playerCompStatsFilter";

import { getTopPlayersByCompetition } from "../../data/helperFunctions/playerCompStatsFilter";

const PlayerStatsTable = ({
  players = [],
  teams = [],
  selectedCompetition,
}) => {
  const [activeTab, setActiveTab] = useState("goals");

  const topPlayers = useMemo(() => {
    if (!selectedCompetition) return [];

    return getTopPlayersByCompetition(players, selectedCompetition, activeTab);
  }, [players, selectedCompetition, activeTab]);

  const hasData = topPlayers.length > 0;

  return (
    <div className="players-stats-container">
      <div className="tab-button-container">
        <button
          className={`tab-button ${activeTab === "goals" ? "tab-button--active" : ""}`}
          onClick={() => setActiveTab("goals")}
          type="button"
        >
          Golos
        </button>
        <button
          className={`tab-button ${activeTab === "assists" ? "tab-button--active" : ""}`}
          onClick={() => setActiveTab("assists")}
          type="button"
        >
          Assistências
        </button>
      </div>

      <div className="player-stats-table-wrapper">
        <table className="players-stats-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Jogador</th>
              <th>{activeTab === "goals" ? "Golos" : "Assistências"}</th>
              {/* <th>J</th> */}
            </tr>
          </thead>

          <tbody>
            {hasData ? (
              topPlayers.map((player, index) => {
                const displayStat =
                  activeTab === "goals"
                    ? player.stats?.goals || 0
                    : player.stats?.assists || 0;

                return (
                  <tr key={player.id}>
                    <td className="rank-col">{index + 1}</td>

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

                          {player.team && (
                            <Link
                              className="wrapper-Link"
                              to={`/equipas/${player.team.id}`}
                            >
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
                                    player.team.abbr
                                  )}
                                </div>
                                <span className="team-name">
                                  {player.team.shortName}
                                </span>
                              </div>
                            </Link>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="stat-col">
                      <strong>{displayStat}</strong>
                    </td>

                    {/* <td className="games-col">
                      {player.stats?.appearances || 0}
                    </td> */}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" className="table-empty-state-message">
                  Desculpa. Dados Indisponíveis.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayerStatsTable;
