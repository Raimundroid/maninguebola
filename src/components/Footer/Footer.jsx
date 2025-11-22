// ============================================
// Footer.jsx
// ============================================
// Site footer with copyright and links

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          <strong>⚽ManingueBola</strong> - Acompanhe o Futebol Local
        </p>

        <p>&copy; 2025 &#8226; Todos os Direitos Reservados</p>

        <p>
          <a href="#">Contacto</a> • <a href="#">Sobre</a> •{" "}
          <a href="#">Privacidade</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
