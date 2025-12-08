// // ============================================
// // Footer.jsx
// // ============================================
// // Site footer with copyright and links

// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <p>
//           <strong>⚽ManingueBola</strong> - Acompanhe o Futebol Local
//         </p>

//         <p>&copy; 2025 &#8226; Todos os Direitos Reservados</p>

//         <p>
//           <a href="#">Contacto</a> • <a href="#">Sobre</a> •{" "}
//           <a href="#">Privacidade</a>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to top when clicking a footer link
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  return (
    <div className="footer">
      <div className="footer-content">
        {/* 1. Brand Section */}
        <div className="footer-brand">
          <h3 className="footer-logo">⚽ManingueBola</h3>
          <p className="ffoter-tagline">O seu portal do Futebol Local</p>
        </div>

        {/* 2. Main Navigation (Safety Net) */}
        {/* Useful for mobile users who scrolled to bottom */}
        <nav className="footer-nav">
          <Link to="/jogos">Jogos</Link>
          <Link to="/classificacao">Classificação</Link>
          <Link to="/equipas">Equipas</Link>
          <Link to="/estatisticas">Estatísticas</Link>
        </nav>

        {/* 3. Social Media & Contact */}
        <div className="footer-socials">
          {/* Facebook Icon */}
          <a href="#" className="social-link" aria-label="Facebook">
            <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          {/* WhatsApp Icon */}
          <a href="#" className="social-link" aria-label="WhatsApp">
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

// ============================================
// Footer.jsx
// ============================================

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Footer.css";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   // Scroll to top when clicking a footer link
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         {/* 1. Brand Section */}
//         <div className="footer-brand">
//           <h3 className="footer-logo">⚽ManingueBola</h3>
//           <p className="footer-tagline">O seu portal do Futebol Local</p>
//         </div>

//         {/* 2. Main Navigation (Safety Net) */}
//         {/* Useful for mobile users who scrolled to bottom */}
//         <nav className="footer-nav">
//           <Link to="/jogos" onClick={scrollToTop}>
//             Jogos
//           </Link>
//           <Link to="/classificacao" onClick={scrollToTop}>
//             Classificação
//           </Link>
//           <Link to="/equipas" onClick={scrollToTop}>
//             Equipas
//           </Link>
//           <Link to="/estatisticas" onClick={scrollToTop}>
//             Estatísticas
//           </Link>
//         </nav>

//         {/* 3. Social Media & Contact */}
//         <div className="footer-socials">
//           {/* Facebook Icon */}
//           <a href="#" className="social-link" aria-label="Facebook">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
//             </svg>
//           </a>

//           {/* WhatsApp Icon */}
//           <a href="#" className="social-link" aria-label="WhatsApp">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
//             </svg>
//           </a>
//         </div>

//         {/* 4. Copyright & About */}
//         <div className="footer-legal">
//           <p>
//             &copy; {currentYear} ManingueBola. Todos os direitos reservados.
//           </p>
//           <div className="legal-links">
//             {/* Link to an About page or just a placeholder for now */}
//             <Link to="/sobre">Sobre</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
