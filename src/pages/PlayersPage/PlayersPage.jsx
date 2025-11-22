import React from "react";

const PlayersPage = () => {
  const styles = {
    thisContainer: { minHeight: "60vh", marginTop: "1rem" },
  };
  return (
    <div style={styles.thisContainer}>
      <div className="hero">
        <h1>JOGOS</h1>

        <p>Bem-vindo aos JOGADORES!!!</p>
        <p>Veja todos os jogadores de Futebol de MORRUMBENE!</p>
      </div>
    </div>
  );
};

export default PlayersPage;
