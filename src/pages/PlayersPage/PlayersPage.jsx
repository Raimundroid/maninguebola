import React from "react";
import PlayersTable from "../../components/PlayersTable/PlayersTable";

const PlayersPage = ({ players }) => {
  const styles = {
    thisContainer: { minHeight: "60vh", marginTop: "1rem" },
  };
  return (
    <>
      <PlayersTable players={players} />
    </>
  );
};

export default PlayersPage;

//  <div className="hero">
//    <h1>JOGADORES</h1>
//    <p>Bem-vindo aos JOGADORES!!!</p>
//    <p>Veja todos os jogadores de Futebol de MORRUMBENE!</p>
//  </div>;
