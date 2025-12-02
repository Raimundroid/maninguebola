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
        abbr1={"J"}
        text1={"Jogos"}
        abbr2={"V"}
        text2={"Vitórias"}
        abbr3={"E"}
        text3={"Empates"}
        abbr4={"D"}
        text4={"Derrotas"}
        abbr5={"GM"}
        text5={"Golos Marcados"}
        abbr6={"GS"}
        text6={"Golos Sofridos"}
        abbr7={"DG"}
        text7={"Diferença de Golos"}
        abbr8={"Pts"}
        text8={"Pontos"}
        dash={"-"}
      />
    </div>
  );
};

export default StandingsPage;
// For the long table:
{
  /* <TableCaption
  dash={"-"}
  items={[
    { abbr: "J", text: "Jogos" },
    { abbr: "V", text: "Vitórias" },
    // ... all 8 items
  ]}
/> */
}
