import React from "react";

// const TeamsPage = () => {
//   const styles = {
//     thisContainer: { minHeight: "60vh", marginTop: "1rem" },
//   };
//   return (
//     <div style={styles.thisContainer}>
//       <div className="hero">
//         <h1>EQUIPAS</h1>

//         <p>Bem-vindo as EQUIPAS!!!</p>
//         <p>Veja todas as EQUIPAS do Futebol de MORRUMBENE!</p>
//       </div>
//     </div>
//   );
// };

// export default TeamsPage;

// ============================================
// pages/TeamsPage.jsx
// ============================================
// Displays all teams in a grid of clickable cards
// Props:
//   - teams: array of team objects
//
// With React Router, you'd typically use useNavigate() to navigate
// to a team detail page when a card is clicked

// import { useNavigate } from "react-router-dom";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
// import TeamsGrid from "../../components/TeamsGrid/TeamsGrid";

const TeamsPage = ({ teams }) => {
  //   // useNavigate is React Router's hook for programmatic navigation
  //   const navigate = useNavigate();

  //   // Handler for when a team card is clicked
  //   const handleTeamClick = (team) => {
  //     // Navigate to team detail page with the team's ID
  //     navigate(`/equipas/${team.id}`);
  //   };

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "24px 16px",
      minHeight: "60vh",
    },
  };

  return (
    <div style={styles.container}>
      <PageIndicator icon="👥" title="Equipas" />
      NEW PAGE
      {/* <TeamsGrid teams={teams} onTeamClick={handleTeamClick} /> */}
    </div>
  );
};

export default TeamsPage;
