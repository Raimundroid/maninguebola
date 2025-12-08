// ============================================
// StandingsPage.jsx
// ============================================
// Displays the league standings table
// Props:
//   - standings: array of team objects with their statistics

import React from "react";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import StandingsTable from "../../components/StandingsTable/StandingsTable";
import "./StandingsPage.css";
import TableCaption from "../../components/atoms/tableCaption/TableCaption";

const StandingsPage = ({ standings }) => {
  return (
    <div className="standigs-page-container">
      <PageIndicator icon="🏆" title="Classificação" />
      <StandingsTable standings={standings} />
      <TableCaption
        dash={"-"}
        items={[
          { abbr: "J", text: "Jogos" },
          { abbr: "V", text: "Vitórias" },
          { abbr: "E", text: "Empates" },
          { abbr: "D", text: "Derrotas" },
          { abbr: "GM", text: "Golos Marcados" },
          { abbr: "GS", text: "Golos Sofridos" },
          { abbr: "DG", text: "Diferença de Golos" },
          { abbr: "Pts", text: "Pontos" },
        ]}
      />
    </div>
  );
};

export default StandingsPage;
