import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/jogos">Jogos</Link>
        </li>

        <li>
          <Link to="/jogadores">Jogadores</Link>
        </li>

        <li>
          <Link to="/classificacao">Classificação</Link>
        </li>

        <li>
          <Link to="/estatistica">Estatística</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
