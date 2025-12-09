// // ============================================
// // AboutPage.jsx
// // ============================================
import React from "react";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import "./AboutPage.css";
import devPhoto from "/src/assets/images/developer/default-developer.png";

const AboutPage = () => {
  // The Tech stack (Add new skills here as you learn them!)
  const techStack = [
    "React.js",
    "Vite",
    "JavaScript (ES6+)",
    "CSS",
    "Git & GitHub",
  ];
  // Donation Info
  const donationInfo = {
    mpesa: "84 123 4567",
    emola: "87 987 6543",
    name: "Pablo ! Picasso", // The name that appears on the transfer
  };
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Header Section */}
        <PageIndicator icon="❔" title="Sobre Nós" />

        {/* --- MISSION SECTION --- */}
        <section className="about-section mission-card">
          <h2>A Nossa Missão</h2>
          <p>
            O <strong>ManingueBola</strong> nasceu com um objetivo simples:
            <strong> digitalizar o futebol local</strong>.
          </p>
          <p>
            Queremos dar visibilidade ao talento local que muitas vezes não
            recebe o reconhecimento merecido. Acreditamos que cada jogo conta e
            cada jogador tem uma história.
          </p>
        </section>

        {/* --- DEVELOPER / CAREER SECTION --- */}
        <section className="about-section dev-card">
          <div className="dev-header">
            {/* Placeholder for your photo */}
            <div className="dev-avatar">
              <img
                src={devPhoto}
                onError={(e) => {
                  e.target.onerror = null; // Prevents infinite loop if fallback image also fails
                  e.target.src =
                    "/src/assets/images/developer/default-developer.png"; // Set to a guaranteed-to-work fallback image
                }}
                alt="Developer"
              />
              <span className="dev-initials">DEV</span>
            </div>
            <div>
              <h3>Desenvolvido por [Seu Nome]</h3>
              <p className="dev-role">
                Full Stack Developer • Apaixonado por Desporto
              </p>
            </div>
          </div>

          <p className="dev-bio">
            Sou um desenvolvedor web focado em criar soluções modernas e
            rápidas. Estou disponível para projetos freelance e oportunidades
            profissionais.
          </p>

          {/* Dynamic Tech Stack List */}
          <div className="tech-stack-containe">
            <h4>Construído com/Desenvolvindo usando:</h4>
            <div className="tech-tags">
              {/* Explanation: .map() loops through your 'techStack' array
                and creates a span for each item. This is efficient!
              */}
              {techStack.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="dev-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="btn-link"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn-link"
            >
              GitHub
            </a>

            <a href="mailto:seu.email@exemplo.com" className="btn-link primary">
              Contactar Dev/Enviar Email
            </a>
          </div>
        </section>

        {/* --- TEAM REGISTRATION (ONBOARDING) --- */}
        <section className="about-section">
          <h3>Quer ver a sua equipa aqui?</h3>
          <p>
            É gratuito! Envie-nos o logótipo e a lista de jogadores através de:
          </p>
          <div className="contact-methods">
            {/* Method 1: WhatsApp (Most popular in MZ) */}
            <a href="https://wa.me/258841234567" className="contact-item">
              <span className="icon">📱</span>
              <div>
                <strong>WhatsApp</strong>
                <span>+258 84 123 4567</span>
              </div>
            </a>

            {/* Method 2: Email (Professional) */}
            <a href="mailto:equipas@maninguebola.com" className="contact-item">
              <span className="icon">📧</span>
              <div>
                <strong>Email</strong>
                <span>equipas@maninguebola.com</span>
              </div>
            </a>

            {/* Method 3: Phone (For non-techies) */}
            <a href="tel:+258841234567" className="contact-item">
              <span className="icon">📞</span>
              <div>
                <strong>Ligar</strong>
                <span>+258 84 123 4567</span>
              </div>
            </a>
          </div>
        </section>

        {/* --- DONATION SECTION --- */}
        <section className="about-section donation-section">
          <h3>Apoie o Projeto ☕</h3>
          <p>
            Este projeto é mantido de forma independente. Qualquer contribuição
            ajuda a fazer a manunteção do projecto.
          </p>
          <div className="wallets">
            <div className="wallet mpesa">
              <span className="wallet-label">M-Pesa</span>
              <span className="wallet-number">{donationInfo.mpesa}</span>
              <span className="wallet-number">{donationInfo.name}</span>
            </div>

            <div className="wallet emola">
              <span className="wallet-label">e-Mola</span>
              <span className="wallet-number">{donationInfo.emola}</span>
              <span className="wallet-number">{donationInfo.name}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

// =============================OG===============================
// ===============================OG===============================
// import React from "react";
// import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator"; // Assuming you have this

// const AboutPage = () => {
//   // ----------------------------------------------------------------
//   // 🔧 CONFIGURATION: UPDATE YOUR DATA HERE
//   // ----------------------------------------------------------------

//   // 1. Your Tech Stack (Add new skills here as you learn them!)
//   const techStack = [
//     "React.js",
//     "Vite",
//     "JavaScript (ES6+)",
//     "CSS3 / CSS Variables",
//     "Git & GitHub",
//   ];

//   // 2. Donation Info
//   const donationInfo = {
//     mpesa: "84 123 4567",
//     emola: "87 987 6543",
//     name: "Seu Nome", // The name that appears on the transfer
//   };

//   // ----------------------------------------------------------------

//   return (
//     <div className="about-page">
//       <div className="about-container">
//         {/* Header Section */}
//         <PageIndicator icon="❔" title="Sobre Nós" />

//         {/* --- MISSION SECTION --- */}
//         <section className="about-section mission-card">
//           <h2>A Nossa Missão</h2>
//           <p>
//             O <strong>ManingueBola</strong> nasceu com um objetivo simples:
//             <strong> digitalizar o futebol de bairro</strong>.
//           </p>
//           <p>
//             Queremos dar visibilidade ao talento local em Moçambique que muitas
//             vezes não recebe o reconhecimento merecido. Acreditamos que cada
//             jogo conta e cada jogador tem uma história.
//           </p>
//         </section>

//         {/* --- DEVELOPER / CAREER SECTION --- */}
//         <section className="about-section dev-card">
//           <div className="dev-header">
//             {/* Placeholder for your photo */}
//             <div className="dev-avatar">
//               <img
//                 src="/src/images/your-photo.jpg"
//                 alt="Developer"
//                 onError={(e) => (e.target.style.display = "none")}
//               />
//               <span className="dev-initials">DEV</span>
//             </div>
//             <div>
//               <h3>Desenvolvido por [Seu Nome]</h3>
//               <p className="dev-role">
//                 Full Stack Developer • Apaixonado por Desporto
//               </p>
//             </div>
//           </div>

//           <p className="dev-bio">
//             Sou um desenvolvedor web focado em criar soluções modernas e
//             rápidas. Estou disponível para projetos freelance e oportunidades
//             profissionais.
//           </p>

//           {/* Dynamic Tech Stack List */}
//           <div className="tech-stack-container">
//             <h4>Construído com:</h4>
//             <div className="tech-tags">
//               {/* Explanation: .map() loops through your 'techStack' array
//                 and creates a span for each item. This is efficient!
//               */}
//               {techStack.map((tech, index) => (
//                 <span key={index} className="tech-tag">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="dev-links">
//             <a
//               href="https://linkedin.com/in/seu-perfil"
//               target="_blank"
//               rel="noreferrer"
//               className="btn-link"
//             >
//               LinkedIn
//             </a>
//             <a
//               href="https://github.com/seu-user"
//               target="_blank"
//               rel="noreferrer"
//               className="btn-link"
//             >
//               GitHub
//             </a>
//             <a href="mailto:seu.email@exemplo.com" className="btn-link primary">
//               Contactar Dev
//             </a>
//           </div>
//         </section>

//         {/* --- TEAM REGISTRATION (ONBOARDING) --- */}
//         <section className="about-section">
//           <h3>Quer ver a sua equipa aqui?</h3>
//           <p>
//             É gratuito! Envie-nos o logótipo e a lista de jogadores através de:
//           </p>

//           <div className="contact-methods">
//             {/* Method 1: WhatsApp (Most popular in MZ) */}
//             <a href="https://wa.me/258841234567" className="contact-item">
//               <span className="icon">📱</span>
//               <div>
//                 <strong>WhatsApp</strong>
//                 <span>+258 84 123 4567</span>
//               </div>
//             </a>

//             {/* Method 2: Email (Professional) */}
//             <a href="mailto:equipas@maninguebola.com" className="contact-item">
//               <span className="icon">📧</span>
//               <div>
//                 <strong>Email</strong>
//                 <span>equipas@maninguebola.com</span>
//               </div>
//             </a>

//             {/* Method 3: Phone (For non-techies) */}
//             <a href="tel:+258841234567" className="contact-item">
//               <span className="icon">📞</span>
//               <div>
//                 <strong>Ligar</strong>
//                 <span>+258 84 123 4567</span>
//               </div>
//             </a>
//           </div>
//         </section>

//         {/* --- DONATION SECTION --- */}
//         <section className="about-section donation-section">
//           <h3>Apoie o Projeto ☕</h3>
//           <p>
//             Este projeto é mantido de forma independente. Qualquer contribuição
//             ajuda a pagar os servidores.
//           </p>

//           <div className="wallets">
//             <div className="wallet mpesa">
//               <span className="wallet-label">M-Pesa</span>
//               <span className="wallet-number">{donationInfo.mpesa}</span>
//               <span className="wallet-name">({donationInfo.name})</span>
//             </div>
//             <div className="wallet emola">
//               <span className="wallet-label">e-Mola</span>
//               <span className="wallet-number">{donationInfo.emola}</span>
//               <span className="wallet-name">({donationInfo.name})</span>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;
