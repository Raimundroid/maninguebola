// // ============================================
// // AboutPage.jsx
// // ============================================
import React from "react";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import ContactCard from "../../components/atoms/ContactCard/ContactCard";
import "./AboutPage.css";
import devPhoto from "/src/assets/images/developer/default-developer.png";
import emola from "/src/assets/images/wallets/emola-logo.webp";
import mpesa from "/src/assets/images/wallets/m-pesa-logo.png";

const AboutIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    height="16px"
    width="16px"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0.5"
    // strokeLinecap="round"
    // strokeLinejoin="round"
    className={className}
  >
    <g transform="translate(-420.000000, -959.000000)">
      <g transform="translate(56.000000, 160.000000)">
        <path d="M380.872728,808.94 C380.872728,810.045 379.977728,810.94 378.872728,810.94 C377.767728,810.94 376.872728,810.045 376.872728,808.94 C376.872728,807.835 377.767728,806.94 378.872728,806.94 C379.977728,806.94 380.872728,807.835 380.872728,808.94 M375.872728,808.94 C375.872728,810.045 374.977728,810.94 373.872728,810.94 C372.767728,810.94 371.872728,810.045 371.872728,808.94 C371.872728,807.835 372.767728,806.94 373.872728,806.94 C374.977728,806.94 375.872728,807.835 375.872728,808.94 M370.872728,808.94 C370.872728,810.045 369.977728,810.94 368.872728,810.94 C367.767728,810.94 366.872728,810.045 366.872728,808.94 C366.872728,807.835 367.767728,806.94 368.872728,806.94 C369.977728,806.94 370.872728,807.835 370.872728,808.94 M381.441728,817 C381.441728,817 378.825728,816.257 377.018728,816.257 C375.544728,816.257 375.208728,816.518 373.957728,816.518 C369.877728,816.518 366.581728,813.508 366.075728,809.851 C365.403728,804.997 369.268728,800.999 373.957728,801 C377.900728,801 381.002728,803.703 381.732728,807.083 C382.000728,808.318 381.973728,809.544 381.654728,810.726 C381.274728,812.131 381.291728,813.711 381.703728,815.294 C381.914728,816.103 382.302728,817 381.441728,817 M383.917728,815.859 C383.917728,815.859 383.640728,814.794 383.639728,814.79 C383.336728,813.63 383.271728,812.405 383.584728,811.248 C383.970728,809.822 384.035728,808.268 383.687728,806.66 C382.767728,802.405 378.861728,799 373.957728,799 C367.999728,798.999 363.264728,804.127 364.094728,810.125 C364.736728,814.766 368.870728,818.518 373.957728,818.518 C375.426728,818.518 375.722728,818.257 377.019728,818.257 C378.583728,818.257 380.795728,818.919 380.795728,818.919 C382.683728,819.392 384.399728,817.71 383.917728,815.859"></path>
      </g>
    </g>
  </svg>
);
const AboutPage = () => {
  // The Tech stack (Add new skills here as you learn them!)
  const techStack = ["React.js", "Vite", "CSS", "Git & GitHub", "Vercel"];
  // Donation Info
  const donationInfo = {
    mpesa: "84 000 0000",
    emola: "87 820 3004",
    name: "Faustino Raimundo", // The name that appears on the transfer
  };
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Header Section */}

        {/* icon="❔" */}
        <PageIndicator icon=<AboutIcon /> title="Sobre Nós" />

        {/* --- MISSION SECTION --- */}
        <section className="about-section mission-card">
          <h2>Bem-vindo(a) ao ManingueBola</h2>
          <p>
            O <strong>ManingueBola</strong> é um website com o objectivo de
            <strong> digitalizar o futebol local</strong>.
          </p>
          {/* <p>
            Queremos dar visibilidade ao talento local que muitas vezes não
            recebe o reconhecimento merecido. Acreditamos que cada jogo conta e
            cada jogador tem uma história.
          </p> */}
          <p>
            Queremos manter os fãs do <strong>futebol local</strong> sempre
            informados com informações actualizadas, claras, confiáveis, e
            rápidas.
          </p>
        </section>

        {/* --- DEVELOPER / CAREER SECTION --- */}
        <section className="about-section dev-card">
          <div className="dev-header">
            {/* Placeholder for your photo */}
            <div className="dev-avatar">
              <img src={devPhoto} alt="Desenvolvedor" />

              {/* <span className="dev-initials">DEV</span> */}
            </div>

            <div>
              <h3>Desenvolvido por RAIMUNDO</h3>
              <p className="dev-role">💻 Desenvolvedor Web</p>
            </div>
          </div>

          <p className="dev-bio">
            Sou um <strong>DESENVOLVEDOR WEB</strong> focado em criar soluções
            modernas e rápidas. Estou disponível para projetos freelance e
            oportunidades profissionais.
          </p>

          {/* Dynamic Tech Stack List */}
          <div className="tech-stack-container">
            <h4>Desenvolvido usando:</h4>
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
            {/* <a
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
            </a> */}

            <a href="mailto:raimundroid@gmail.com" className="btn-link primary">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="email"
                  fill="currentColor"
                  viewBox="0 0 381.051 381.051"
                  width={36}
                  height={36}
                >
                  <g>
                    <path d="M366.928,56.035H14.124C6.324,56.035,0,62.358,0,70.158v240.733c0,7.799,6.324,14.124,14.124,14.124h352.804 c7.799,0,14.123-6.325,14.123-14.124V70.158C381.051,62.358,374.727,56.035,366.928,56.035z M28.247,96.901l95.947,65.465 L28.247,273.039V96.901L28.247,96.901z M190.529,173.428L59.88,84.281h261.29L190.529,173.428z M147.69,178.395l34.875,23.799 c2.407,1.634,5.187,2.454,7.965,2.454c2.781,0,5.559-0.82,7.958-2.454l34.881-23.799L336,296.767H45.068L147.69,178.395z M256.863,162.366l95.941-65.465v176.123L256.863,162.366z"></path>
                  </g>
                </svg>
              </span>
              Contactar Desenvolvedor
            </a>
          </div>
        </section>

        {/* --- TEAM REGISTRATION (ONBOARDING) --- */}
        <ContactCard />

        {/* --- DONATION SECTION --- */}
        <section className="about-section donation-section">
          <h3>Apoie o Projeto ☕</h3>
          <p>
            Este projeto é mantido de forma independente. Qualquer contribuição
            ajuda a fazer a manunteção dele.
          </p>
          <div className="wallets">
            {/* <div className="wallet mpesa">
              <div className="logo">
                <img src={mpesa} alt="mpesa" width={48} height={48} />
              </div>
               *<span className="wallet-label">M-Pesa</span> *
              <span className="wallet-number">
                <a href="tel:+258878203004">{donationInfo.mpesa}</a>
              </span>
              <span className="wallet-name">{donationInfo.name}</span>
            </div> */}

            <div className="wallet emola">
              <div className="logo">
                <img src={emola} alt="emola" width={48} height={48} />
              </div>

              {/* <span className="wallet-label">e-Mola</span> */}
              <span className="wallet-number">
                <a href="tel:+258878203004">{donationInfo.emola}</a>
              </span>
              <span className="wallet-name"> {donationInfo.name}</span>
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
// import "./AboutPage.css";
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
//             <a href="https://wa.me/258878203004" className="contact-item">
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
//             <a href="tel:+258878203004" className="contact-item">
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
