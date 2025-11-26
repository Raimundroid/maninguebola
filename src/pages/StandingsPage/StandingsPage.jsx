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
import StandingsTableCaption from "../../components/atoms/standingsTableCaption/StandingsTableCaption";

const StandingsPage = ({ standings }) => {
  return (
    <div className="standigs-page-container">
      <PageIndicator icon="🏆" title="Classificação" />
      <StandingsTable standings={standings} />
      <StandingsTableCaption />
    </div>
  );
};

export default StandingsPage;
