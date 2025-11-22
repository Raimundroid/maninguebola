import React from "react";

const StatisticsPage = () => {
  const styles = {
    thisContainer: { minHeight: "60vh", marginTop: "1rem" },
  };
  return (
    <div style={styles.thisContainer}>
      <div className="hero">
        <h1>ESTATISTICA</h1>

        <p>Bem-vindo as ESTATISTICA!!!</p>
        <p>
          Veja as Tabelas de Estatisticas (golos e assistencias) do Futebol de
          MORRUMBENE!
        </p>
      </div>
    </div>
  );
};

export default StatisticsPage;
