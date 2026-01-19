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

const TeamsIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500.152 500.152"
    height="16px"
    width="16px"
    fill="currentColor"
    stroke="currentColor"
    // strokeWidth="2"
    // strokeLinecap="round"
    // strokeLinejoin="round"
    className={className}
  >
    <g>
      <path d="M461.944,110.436C453.52,83.74,434.32,61.252,409.28,48.732L315.96,2.076H184.184L90.864,48.74 C65.824,61.26,46.632,83.748,38.2,110.444L0,231.412l95.44,28.632l18.632-62.128v300.16h272v-300.16l18.64,62.12l95.44-28.632 L461.944,110.436z M303.256,18.076c-5.136,12.2-18.752,32-53.184,32c-34.128,0-47.856-19.784-53.104-32H303.256z M114.072,162.076 h-5.952l-23.408,78.04l-64.56-19.368l5.808-18.384l53.92,15.408l4.4-15.384L30.784,187.1l22.688-71.84 C60.6,92.668,76.84,73.636,98.032,63.052l16.04-8.032V162.076z M162.072,482.076h-32v-312v-8V47.02l19.304-9.656 c2.4,6.288,6.408,14.96,12.696,24.144V482.076z M202.072,482.076h-24V79.924c6.624,6.04,14.592,11.52,24,15.952V482.076z M242.072,482.076h-24V101.804c7.264,2.008,15.28,3.28,24,3.816V482.076z M282.072,482.076h-24V105.62 c8.72-0.528,16.736-1.8,24-3.816V482.076z M322.072,482.076h-24v-386.2c9.408-4.432,17.376-9.912,24-15.952V482.076z M250.072,90.076c-60.32,0-80.872-43.696-86.424-59.848l17.584-8.792c6.128,15.784,23.48,44.64,68.84,44.64 s62.712-28.856,68.832-44.64l17.544,8.776C330.76,46.284,309.784,90.076,250.072,90.076z M370.072,162.076v8v312h-32V61.508 c6.288-9.184,10.296-17.848,12.696-24.144l19.304,9.656V162.076z M392.024,162.076h-5.952V55.02l16.056,8.024 c21.184,10.592,37.432,29.624,44.56,52.208l22.688,71.84L415.88,202.38l4.4,15.384l53.92-15.408l5.808,18.384l-64.56,19.368 L392.024,162.076z"></path>
    </g>
  </svg>
);

const TeamsPage = ({ teams }) => {
  return (
    <div className="teams-page-container">
      {/* 🎽 */}
      <PageIndicator icon=<TeamsIcon /> title="Todos os Jogos" />

      <TeamsGrid teams={teams} />
    </div>
  );
};

export default TeamsPage;
