import React from "react";
import PageIndicator from "../../components/atoms/pageIndicator/PageIndicator";
import "./PrivacyPolicyPage.css";

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page">
      <PageIndicator icon="🔐" title="Política de Privacidade" />

      <div className="privacy-policy-page-content">
        Privacy Policy Page Content
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
