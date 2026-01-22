import React from "react";
import "./NewYearBanner.css";

const NewYearBanner = () => {
  // Get today's date from the user's browser (client-side only, perfect for  static websites)
  const today = new Date();

  // Extract month and day
  const month = today.getMonth(); // January = 0

  const day = today.getDate(); // 1 - 31

  // Automatically calculate the current year (future-proof)
  const year = today.getFullYear();

  //   define the visible date range: Jan 1 - Jan 15
  const isNewYaerPeriod = month === 0 && day >= 1 && day <= 31;

  //   Component always exists, but conditionally renders nothing if outside date range
  if (!isNewYaerPeriod) return null;

  return (
    // Semantic <section> improves accessibility and documnent structure
    <section
      className="new-year-banner"
      aria-label={`Banner the celebração de ano novo de ${year}`}
    >
      <div className="new-year-banner__overlay">
        {/* Heading uses h2 because it lives under the main hero section */}
        <h2 className="new-year-banner__title">
          🎉 Feliz Ano Novo <span className="current-year">{year}</span> 🎉
        </h2>
        <p className="new-year-banner__text">
          Muito sucesso, saúde, paz, e alegria para você e sua família!
          <br /> Que <span className="current-year">{year}</span> seja um ano de
          muitas conquistas e sonhos realizados.✨
        </p>
      </div>
    </section>
  );
};

export default NewYearBanner;
