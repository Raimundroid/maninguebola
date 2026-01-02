import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero">
        <h1 className="title">ManingueBola⚽</h1>

        <p className="heading">Bem-vindo ao website ManingueBola!</p>
        <p className="sub-heading">
          Acompanhe jogos, resultados, e estatísticas do Futebol Local!
        </p>
      </div>
    </section>
  );
};

export default Hero;
