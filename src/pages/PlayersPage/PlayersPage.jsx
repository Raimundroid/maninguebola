import React from "react";
import "./PlayersPage.css";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import PlayersTable from "../../components/PlayersTable/PlayersTable";

const PlayersPage = ({ players = [], teams = {} }) => {
  return (
    <div className="players-page-container">
      <PageIndicator icon="👥" title="Tabela dos Jogadores" />
      <PlayersTable players={players} teams={teams} />
    </div>
  );
};

export default PlayersPage;
