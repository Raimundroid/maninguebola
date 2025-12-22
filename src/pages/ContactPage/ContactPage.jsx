import React from "react";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import "./ContactPage.css";

/**
 * ============================================
 * CONTACTO PAGE COMPONENT
 * ============================================
 *
 * WHAT THIS PAGE DOES:
 * Displays contact information for users to reach out
 * Shows email, phone, Facebook page, and WhatsApp channel
 *
 * PURPOSE:
 * - Business inquiries
 * - General support
 * - User questions about the platform
 *
 * HOW TO USE:
 * <Contacto />
 *
 * No props needed - all contact info is hardcoded
 * Update contact details directly in this file
 */

/**
 * CENTRALIZED CONTACT DATA
 *
 * UPDATE THESE VALUES with your actual contact information
 * This makes it easy to change contact details in one place
 */

const contactInfo = {
  email: "contato@footballhub.mz",
  phone: "+258 84 123 4567",
  whatsapp: "258841234567", // WhatsApp number (no + or spaces)
  whatsappDisplay: "+258 84 123 4567", // Display format
  facebook: "https://facebook.com/footballhub", // Full Facebook page URL
};

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <PageIndicator icon="📞" title="Contacte-nos" />

        {/* ==========================================
            PAGE HEADER
            ==========================================
            Title and introduction text
        */}
        <div className="contact-header">
          <h1 className="contact-title">📞 Entre em Contacto</h1>

          <p className="contact-subtitle">
            Tem alguma questão ou sugestão? Estamos aqui para ajudar! Entre em
            contacto connosco através de qualquer um dos canais abaixo.
          </p>
        </div>

        {/* ==========================================
            CONTACT CARDS GRID
            ==========================================
            Grid of contact method cards
            Each card shows icon, label, and clickable link
        */}
        <div className="contact-cards">
          {/* EMAIL CARD
              mailto: link opens user's email client
              Example: clicking opens Gmail/Outlook with email pre-filled
          */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="contact-card"
            aria-label="Enviar email"
          >
            <div className="contact-card__icon">📧</div>
            <div className="contact-card__content">
              <h3 className="contact-card__title">Email</h3>
              <p className="contact-card__value">{contactInfo.email}</p>
              <span className="contact-card__action">Enviar email →</span>
            </div>
          </a>

          {/* PHONE CARD
              tel: link opens phone dialer on mobile devices
              On desktop, may open Skype or other calling apps
          */}
          <a
            href={`tel:${contactInfo.phone}`}
            className="contact-card"
            aria-label="Ligar"
          >
            <div className="contact-card__icon">📱</div>
            <div className="contact-card__content">
              <h3 className="contact-card__title">Telefone</h3>
              <p className="contact-card__value">{contactInfo.phone}</p>
              <span className="contact-card__action">Ligar agora →</span>
            </div>
          </a>

          {/* WHATSAPP CARD
              WhatsApp API link opens WhatsApp app/web
              Opens chat with pre-filled number
              Works on both mobile and desktop (WhatsApp Web)
          */}
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir WhatsApp"
          >
            <div className="contact-card__icon">💬</div>
            <div className="contact-card__content">
              <h3 className="contact-card__title">WhatsApp</h3>
              <p className="contact-card__value">
                {contactInfo.whatsappDisplay}
              </p>
              <span className="contact-card__action">Enviar mensagem →</span>
            </div>
          </a>

          {/* FACEBOOK CARD
              Opens Facebook page in new tab
              target="_blank" opens in new tab
              rel="noopener noreferrer" for security
          */}
          <a
            href={contactInfo.facebook}
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar página do Facebook"
          >
            <div className="contact-card__icon">👍</div>
            <div className="contact-card__content">
              <h3 className="contact-card__title">Facebook</h3>
              <p className="contact-card__value">Football Hub</p>
              <span className="contact-card__action">Visitar página →</span>
            </div>
          </a>
        </div>

        {/* ==========================================
            ADDITIONAL INFO SECTION
            ==========================================
            Extra information about response times, etc.
        */}
        <div className="contacto-footer">
          <div className="info-box">
            <h3 className="info-box__title">⏰ Horário de Atendimento</h3>
            <p className="info-box__text">
              Respondemos a todas as mensagens dentro de 24-48 horas durante os
              dias úteis.
            </p>
          </div>

          <div className="info-box">
            <h3 className="info-box__title">💡 Dica</h3>
            <p className="info-box__text">
              Para um atendimento mais rápido, utilize o WhatsApp ou Facebook
              Messenger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
{
  /* <div className="contact-page-content">
        <p>
          Se tiver questões, sugestões, ou dúvidas, entre em contacto conosco.
        </p>
        <div className="contact-methods">
          {/* Method 1: WhatsApp (Most popular in MZ) *
          <a href="https://wa.me/258878203004" className="contact-item">
            <span className="icon">
              <svg
                id="whatsapp"
                width={36}
                height={36}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <g>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path>
                </g>
              </svg>
            </span>
            <div>
              <strong>WhatsApp</strong>
              <span>+258 87 820 3004</span>
            </div>
          </a>

          {/* Method 2: Email (Professional) */
}
{
  /* <a href="mailto:raimundroid@gmail.com" className="contact-item">
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
            </a> */
}

{
  /* Method 3: Phone (For non-techies) *
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
        Obrigado por visistar ManingueBola
      </div> */
}
