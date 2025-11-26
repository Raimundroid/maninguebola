import React from "react";
import "./StandingsTableCaption.css";

const StandingsTableCaption = () => {
  return (
    <div className="standings-table-caption">
      <p>J - Jogos</p>
      <p>V - Vitórias</p>
      <p>E - Empates</p>
      <p>D - Derrotas</p>
      <p>GM - Golos Marcados</p>
      <p>GS - Golos Sofridos</p>
      <p>DG - Diferença de Golos</p>
      <p>Pts - Pontos</p>
    </div>
  );
};

export default StandingsTableCaption;
