// // ============================================
// // Footer.jsx
// // ============================================
// // Site footer with copyright and links

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to top when clicking a footer link
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div className="footer-content">
        {/* 1. Brand Section */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo" onClick={scrollToTop}>
            <svg
              id="logo-icon"
              fill="currentColor"
              width={28}
              height={28}
              viewBox="0 0 928.6 928.6"
              aria-label="Soccer Ball"
            >
              <g>
                <path d="M361.2,578.801c4,12.398,15.5,20.699,28.5,20.699h149c13,0,24.5-8.4,28.5-20.699L613.3,437.1c4-12.4-0.4-25.9-10.9-33.5 l-120.5-87.7c-10.5-7.6-24.8-7.6-35.3,0L326,403.5c-10.5,7.601-14.9,21.2-10.9,33.5L361.2,578.801z"></path>
                <path d="M136,792.6c42.6,42.6,92.3,76.1,147.6,99.5c57.3,24.201,118.101,36.5,180.7,36.5s123.5-12.299,180.7-36.5 c55.3-23.4,104.899-56.9,147.6-99.5C835.2,750,868.7,700.301,892.1,645c24.2-57.301,36.5-118.1,36.5-180.699 c0-62.701-12.3-123.501-36.5-180.701C868.7,228.3,835.2,178.7,792.6,136C750,93.4,700.3,59.9,645,36.5C587.8,12.3,527,0,464.3,0 S340.8,12.3,283.6,36.5C228.3,59.9,178.6,93.4,136,136c-42.6,42.6-76.1,92.3-99.5,147.6C12.3,340.8,0,401.7,0,464.301 C0,527,12.3,587.801,36.5,645C59.9,700.4,93.4,750,136,792.6z M189,189c40.6-40.6,88.6-71.1,141-90.3l-10.5,22.7 c-6.9,14.7-0.7,32.3,13.8,39.5l116.5,58c8.5,4.2,18.5,4.2,26.9-0.1l116-58.9c14.6-7.4,20.6-25,13.6-39.7l-10.7-22.6 c53.5,19.1,102.601,50,144,91.4c7.9,7.9,15.4,16,22.5,24.4l-24.7-2.2c-16.199-1.4-30.6,10.3-32.399,26.5L690.2,367 c-1.101,9.4,2.399,18.801,9.3,25.301l94.899,89c11.9,11.1,30.4,10.799,41.9-0.801l17.4-17.6c0,0.4,0,0.9,0,1.299 c0,76.102-21.7,149-62.2,211.4l-5.2-24.4c-3.4-15.898-18.8-26.199-34.8-23.199l-128,23.699C614.2,653.4,606.2,659.5,602,668 l-57.3,116.9c-7.2,14.6-1.4,32.199,13,39.799l22.1,11.602c-36.9,11.398-75.8,17.299-115.5,17.299s-78.6-5.9-115.5-17.299 l22.1-11.602c14.4-7.5,20.2-25.199,13-39.799L326.6,668.1c-4.2-8.5-12.1-14.6-21.5-16.299l-128-23.701 c-16-3-31.4,7.301-34.8,23.201l-5.2,24.398C96.6,613.301,74.9,540.5,74.9,464.301c0-0.401,0-0.901,0-1.301l17.4,17.6 c11.4,11.6,30,11.9,41.9,0.801l94.9-89c6.9-6.5,10.4-15.9,9.3-25.3l-14.8-129.3c-1.8-16.2-16.2-27.9-32.4-26.5l-24.7,2.2 C173.6,205.1,181.1,196.9,189,189z"></path>
              </g>
            </svg>

            <h3 className="logo-text">ManingueBola</h3>
          </Link>
          <p className="footer-tagline">O seu portal de Futebol Local</p>
        </div>

        {/* 2. Main Navigation (Safety Net) */}
        {/* Useful for mobile users who scrolled to bottom */}
        <nav className="footer-nav">
          <Link to="/jogos">Jogos</Link> |
          <Link to="/classificacao">Classificação</Link> |
          <Link to="/equipas">Equipas</Link> |
          <Link to="/estatisticas">Estatísticas</Link>
        </nav>

        {/* 3. Social Media & Contact */}
        <div className="footer-socials">
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/profile.php?id=61584955900976"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="Facebook"
          >
            <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>

          {/* WhatsApp Icon */}
          <a
            href="https://whatsapp.com/channel/0029VbC0BUKCHDyg2YTpu521"
            className="social-link"
            aria-label="WhatsApp"
          >
            <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path>
            </svg>
          </a>
        </div>

        {/* 4. Copyright & About */}
        <div className="footer-legal">
          <p>
            &copy; {currentYear} ManingueBola. Todos os direitos reservados.
          </p>
          <div className="legal-links">
            {/* Link to an About page or just a placeholder for now */}
            <Link to="/sobre">Sobre</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
