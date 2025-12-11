// // ============================================
// // AboutPage.jsx
// // ============================================
import React from "react";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import "./AboutPage.css";
import devPhoto from "/src/assets/images/developer/default-developer.png";
import emola from "/src/assets/images/wallets/emola-logo.webp";
import mpesa from "/src/assets/images/wallets/m-pesa-logo.png";

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
    mpesa: "84 000 0000",
    emola: "87 820 3004",
    name: "Faustino Raimundo", // The name that appears on the transfer
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
              <img src={devPhoto} alt="Developer" />

              {/* <span className="dev-initials">DEV</span> */}
            </div>

            <div>
              <h3>Desenvolvido por RAIMUNDO</h3>
              <p className="dev-role">Web Developer</p>
            </div>
          </div>

          <p className="dev-bio">
            Sou um desenvolvedor web focado em criar soluções modernas e
            rápidas. Estou disponível para projetos freelance e oportunidades
            profissionais.
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

            {/* <a href="mailto:raimundroid@gmail.com" className="btn-link primary">
              Contactar Dev
            </a> */}
          </div>
        </section>

        {/* --- TEAM REGISTRATION (ONBOARDING) --- */}
        <section className="about-section">
          <h3>Quer ver a sua equipa aqui?</h3>
          <p>
            <span className="free">É gratuito!</span> Envie-nos o logótipo e a
            lista de jogadores através de:
          </p>
          <div className="contact-methods">
            {/* Method 1: WhatsApp (Most popular in MZ) */}
            <a href="https://wa.me/258878203004" className="contact-item">
              <span className="icon">
                <svg
                  id="whatsapp"
                  width={36}
                  height={36}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path>
                </svg>
              </span>
              <div>
                <strong>WhatsApp</strong>
                <span>+258 87 820 3004</span>
              </div>
            </a>

            {/* Method 2: Email (Professional) */}
            {/* <a href="mailto:raimundroid@gmail.com" className="contact-item">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="email"
                  fill="currentColor"
                  viewBox="0 0 381.051 381.051"
                  width={36}
                  height={36}
                >
                  <path d="M366.928,56.035H14.124C6.324,56.035,0,62.358,0,70.158v240.733c0,7.799,6.324,14.124,14.124,14.124h352.804 c7.799,0,14.123-6.325,14.123-14.124V70.158C381.051,62.358,374.727,56.035,366.928,56.035z M28.247,96.901l95.947,65.465 L28.247,273.039V96.901L28.247,96.901z M190.529,173.428L59.88,84.281h261.29L190.529,173.428z M147.69,178.395l34.875,23.799 c2.407,1.634,5.187,2.454,7.965,2.454c2.781,0,5.559-0.82,7.958-2.454l34.881-23.799L336,296.767H45.068L147.69,178.395z M256.863,162.366l95.941-65.465v176.123L256.863,162.366z"></path>
                </svg>
              </span>
              <div>
                <strong>Email</strong>
                <span>raimundroid@gmail.com</span>
              </div>
            </a> */}

            {/* Method 3: Phone (For non-techies) */}
            <a href="tel:+258878203004" className="contact-item">
              <span className="icon">
                <svg
                  id="phone"
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <g>
                    <path d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z"></path>
                    <path d="M15.3398 8.66L20.9998 3"></path>
                    <path d="M16.7598 3H20.9998V7.24"></path>
                  </g>
                </svg>
              </span>
              <div>
                <strong>Ligar</strong>
                <span>+258 87 820 3004</span>
              </div>
            </a>
          </div>
        </section>

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
