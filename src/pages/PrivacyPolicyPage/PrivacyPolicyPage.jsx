import React from "react";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import "./PrivacyPolicyPage.css";

/**
 * ============================================
 * POLÍTICA DE PRIVACIDADE PAGE COMPONENT
 * ============================================
 *
 * WHAT THIS PAGE DOES:
 * Displays privacy policy explaining:
 * - What data is collected (Google Analytics)
 * - How data is used
 * - User rights and options
 * - Future plans (Google AdSense)
 *
 * PURPOSE:
 * - Legal compliance and transparency
 * - Inform users about data practices
 * - Build trust with users
 *
 * HOW TO USE:
 * <PoliticaPrivacidade />
 *
 * No props needed - all content is static
 * Update date and content as needed
 */

const PrivacyPolicyPage = () => {
  /**
   * LAST UPDATED DATE
   *
   * UPDATE THIS when you make changes to the policy
   * Shows users when policy was last modified
   */
  const lastUpdated = "19 de Dezembro de 2025";

  return (
    <div className="privacy-policy-page">
      <PageIndicator icon="🔐" title="Política de Privacidade" />

      <div className="privacy-policy-page-content">
        Privacy Policy Page Content
      </div>

      <div className="privacy-page">
        <div className="privacy-content">
          {/* ==========================================
            PAGE HEADER
            ==========================================
            Title and last updated date
        */}
          <div className="privacy-header">
            <h1 className="privacy-title">🔒 Política de Privacidade</h1>
            <p className="privacy-updated">
              Última actualização: <strong>{lastUpdated}</strong>
            </p>
          </div>

          {/* ==========================================
            INTRODUCTION SECTION
            ==========================================
        */}
          <section className="privacy-section">
            <h2 className="section-title">Introdução</h2>
            <p className="section-text">
              O Football Hub é um site de informações sobre futebol moçambicano
              comprometido com a protecção da sua privacidade. Esta política
              explica como recolhemos, usamos e protegemos as suas informações
              quando visita o nosso site.
            </p>
          </section>

          {/* ==========================================
            DATA COLLECTION SECTION
            ==========================================
            Explains what data is collected
        */}
          <section className="privacy-section">
            <h2 className="section-title">📊 Dados Recolhidos</h2>

            <h3 className="subsection-title">Google Analytics</h3>
            <p className="section-text">
              Utilizamos o Google Analytics para compreender como os visitantes
              usam o nosso site. Esta ferramenta recolhe informações anónimas,
              incluindo:
            </p>

            <ul className="privacy-list">
              <li>Páginas visitadas e tempo de permanência</li>
              <li>Dispositivo e navegador utilizado</li>
              <li>Localização geográfica aproximada (país/cidade)</li>
              <li>
                Como chegou ao nosso site (motor de busca, link directo, etc.)
              </li>
            </ul>

            <div className="info-box info-box--highlight">
              <strong>Importante:</strong> O Google Analytics não recolhe
              informações pessoais identificáveis como nome, email ou morada.
            </div>
          </section>

          {/* ==========================================
            DATA USAGE SECTION
            ==========================================
            Explains how data is used
        */}
          <section className="privacy-section">
            <h2 className="section-title">🎯 Como Usamos os Dados</h2>
            <p className="section-text">
              Os dados recolhidos através do Google Analytics são utilizados
              para:
            </p>

            <ul className="privacy-list">
              <li>Melhorar a experiência do utilizador no site</li>
              <li>Compreender que conteúdos são mais populares</li>
              <li>Identificar problemas técnicos e corrigi-los</li>
              <li>Tomar decisões sobre novos recursos e funcionalidades</li>
            </ul>
          </section>

          {/* ==========================================
            COOKIES SECTION
            ==========================================
            Explains cookie usage
        */}
          <section className="privacy-section">
            <h2 className="section-title">🍪 Cookies</h2>
            <p className="section-text">
              O nosso site utiliza cookies para o funcionamento do Google
              Analytics. Cookies são pequenos ficheiros de texto armazenados no
              seu navegador que ajudam a melhorar a sua experiência.
            </p>

            <h3 className="subsection-title">Como Gerir Cookies</h3>
            <p className="section-text">
              Pode desactivar os cookies nas definições do seu navegador. No
              entanto, isto pode afectar algumas funcionalidades do site.
            </p>
          </section>

          {/* ==========================================
            FUTURE PLANS SECTION
            ==========================================
            Mentions Google AdSense plans
        */}
          <section className="privacy-section">
            <h2 className="section-title">📢 Publicidade (Futuro)</h2>
            <p className="section-text">
              Planeamos integrar o Google AdSense no futuro para exibir anúncios
              relevantes. Quando isso acontecer:
            </p>

            <ul className="privacy-list">
              <li>
                Anúncios personalizados podem ser exibidos com base nos seus
                interesses
              </li>
              <li>
                Pode optar por não receber anúncios personalizados através das
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-link"
                >
                  {" "}
                  configurações do Google
                </a>
              </li>
              <li>
                Esta política será actualizada quando a publicidade for activada
              </li>
            </ul>
          </section>

          {/* ==========================================
            THIRD PARTY SERVICES SECTION
            ==========================================
            Lists external services used
        */}
          <section className="privacy-section">
            <h2 className="section-title">🔗 Serviços de Terceiros</h2>
            <p className="section-text">
              O nosso site utiliza os seguintes serviços de terceiros:
            </p>

            <div className="service-card">
              <h4 className="service-title">Google Analytics</h4>
              <p className="service-text">
                Serviço de análise de tráfego web. Consulte a{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-link"
                >
                  política de privacidade do Google
                </a>{" "}
                para mais informações.
              </p>
            </div>
          </section>

          {/* ==========================================
            USER RIGHTS SECTION
            ==========================================
            Explains user rights regarding data
        */}
          <section className="privacy-section">
            <h2 className="section-title">👤 Os Seus Direitos</h2>
            <p className="section-text">Tem o direito de:</p>

            <ul className="privacy-list">
              <li>Saber que dados são recolhidos sobre si</li>
              <li>Solicitar a eliminação dos seus dados</li>
              <li>Optar por não ser rastreado pelo Google Analytics</li>
              <li>Desactivar cookies no seu navegador</li>
            </ul>

            <div className="info-box">
              Para exercer qualquer destes direitos ou esclarecer dúvidas, entre
              em contacto connosco através da nossa{" "}
              <a href="/contacto" className="privacy-link">
                página de contacto
              </a>
              .
            </div>
          </section>

          {/* ==========================================
            DATA SECURITY SECTION
            ==========================================
            Explains security measures
        */}
          <section className="privacy-section">
            <h2 className="section-title">🔐 Segurança dos Dados</h2>
            <p className="section-text">
              Levamos a segurança dos seus dados a sério. Embora não recolhamos
              informações pessoais directamente, dependemos das medidas de
              segurança implementadas pelo Google Analytics para proteger os
              dados de utilização do site.
            </p>
          </section>

          {/* ==========================================
            CHILDREN'S PRIVACY SECTION
            ==========================================
            Statement about minors
        */}
          <section className="privacy-section">
            <h2 className="section-title">👶 Privacidade de Menores</h2>
            <p className="section-text">
              O nosso site é destinado a um público geral. Não recolhemos
              intencionalmente informações de menores de 18 anos. Se é pai/mãe
              ou responsável e acredita que o seu filho forneceu dados pessoais,
              entre em contacto connosco.
            </p>
          </section>

          {/* ==========================================
            CHANGES TO POLICY SECTION
            ==========================================
            Explains how policy updates work
        */}
          <section className="privacy-section">
            <h2 className="section-title">📝 Alterações à Política</h2>
            <p className="section-text">
              Reservamo-nos o direito de actualizar esta Política de Privacidade
              a qualquer momento. Quaisquer alterações serão publicadas nesta
              página com uma data de actualização revista. Recomendamos que
              consulte esta página periodicamente para estar informado sobre
              como protegemos a sua privacidade.
            </p>
          </section>

          {/* ==========================================
            CONTACT SECTION
            ==========================================
            Final call-to-action for questions
        */}
          <section className="privacy-section privacy-section--last">
            <h2 className="section-title">📧 Dúvidas?</h2>
            <p className="section-text">
              Se tiver alguma questão sobre esta Política de Privacidade ou
              sobre as práticas de privacidade do nosso site, não hesite em
              entrar em contacto connosco através da nossa{" "}
              <a href="/contacto" className="privacy-link">
                página de contacto
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
