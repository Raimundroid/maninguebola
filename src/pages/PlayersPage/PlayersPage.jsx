import React from "react";
import "./PlayersPage.css";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import PlayersTable from "../../components/PlayersTable/PlayersTable";
import TableCaption from "../../components/atoms/tableCaption/TableCaption";

const PlayersPage = ({ players = [] /*,teams = {}*/ }) => {
  return (
    <div className="players-page-container">
      <PageIndicator icon="👥" title="Tabela dos Jogadores" />
      <PlayersTable players={players} /*teams={teams}*/ />
      <TableCaption
        abbr1={"Gol."}
        text1={"Golos"}
        abbr2={"Assist."}
        text2={"Assistências"}
        abbr3={"J"}
        text3={"Jogos"}
        dash={"-"}
      />
    </div>
  );
};

export default PlayersPage;
