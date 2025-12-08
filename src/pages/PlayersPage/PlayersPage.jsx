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
      {/* TableCaption is used with the OG PlayersTable */}
      <TableCaption
        dash={"-"}
        items={[
          { abbr: "J", text: "Jogos" },
          { abbr: "V", text: "Vitórias" },
          { abbr: "E", text: "Empates" },
          { abbr: "D", text: "Derrotas" },
        ]}
      />
    </div>
  );
};

export default PlayersPage;
