// ============================================
// TeamsPage.jsx
// ============================================
// Displays all teams in a grid of clickable cards
// Props:
//   - teams: array of team objects
//
// With React Router, you'd typically use useNavigate() to navigate to a team detail page when a card is clicked
import React from "react";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import TeamsGrid from "../../components/TeamsGrid/TeamsGrid";
import "./TeamsPage.css";

const TeamsPage = ({ teams }) => {
  return (
    <div className="teams-page-container">
      <PageIndicator icon="🎽" title="Equipas" />
      <TeamsGrid teams={teams} />
    </div>
  );
};

export default TeamsPage;
