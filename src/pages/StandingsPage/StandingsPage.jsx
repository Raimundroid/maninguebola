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

const StandingsPage = ({ standings }) => {
  return (
    <div className="standigs-page-container">
      <PageIndicator icon="🏆" title="Classificação" />
      <StandingsTable standings={standings} />
    </div>
  );
};

export default StandingsPage;
