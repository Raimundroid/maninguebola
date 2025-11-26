import React from "react";
import "./StandingsTableCaption.css";

const StandingsTableCaption = () => {
  return (
    <div className="standings-table-caption">
      <div className="caption-item">
        <span className="caption-abbr">J</span>
        <span className="caption-dash">-</span>
        <span className="caption-text">Jogos</span>
      </div>

      <div className="caption-item">
        <span className="caption-abbr">V</span>
        <span className="caption-dash">-</span>
        <span className="caption-text">Vitórias</span>
      </div>

      <div className="caption-item">
        <span className="caption-abbr">E</span>
        <span className="caption-dash">-</span>
        <span className="caption-text">Empates</span>
      </div>

      <div className="caption-item">
        <span className="caption-abbr">D</span>
        <span className="caption-dash">-</span>
        <span className="caption-text">Derrotas</span>
      </div>

      <div className="caption-item">
        <span className="caption-abbr">GM</span>
        <span className="caption-dash">-</span>
        <span className="caption-text">Golos Marcados</span>
      </div>

      <div className="caption-item">
        <span className="caption-abbr">GS</span>
        <span className="caption-dash">-</span>
        <span className="caption-text">Golos Sofridos</span>
      </div>

      <div className="caption-item">
        <span className="caption-abbr">DG</span>
        <span className="caption-dash">-</span>
        <span className="caption-text">Diferença de Golos</span>
      </div>

      <div className="caption-item">
        <span className="caption-abbr">Pts</span>
        <span className="caption-dash">-</span>
        <span className="caption-text">Pontos</span>
      </div>
    </div>
  );
};

export default StandingsTableCaption;
