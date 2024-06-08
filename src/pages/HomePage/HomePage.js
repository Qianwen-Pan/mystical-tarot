import React, { useState } from "react";
import CardDeck from "../../components/CardDeck/CardDeck";
import "./HomePage.scss";
import decisionMakingImg from "../../assets/images/glod_black_front_back.png";
import dreamCardImg from "../../assets/images/image-removebg.png";

import theFool from "../../assets/images/aurora_cards/the_fool.png";
import theEmperor from "../../assets/images/aurora_cards/the_emperor.png";
import theEmpress from "../../assets/images/aurora_cards/the_empress.png";
import theHighPrestess from "../../assets/images/aurora_cards/the_high_priestess.png";
import theMagician from "../../assets/images/aurora_cards/the_magician.png";
import CardAnimation from "../../components/CardAnimation/CardAnimation";

const HomePage = () => {
  const images = [
    theFool,
    theEmperor,
    theEmpress,
    theHighPrestess,
    theMagician,
  ];
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__buttons">
          <button className="home__button">Decision Making</button>
          <button className="home__button">Dream Interpretaion</button>
        </div>

        <CardAnimation images={images} />
      </div>
      {/* <img className="home__cardimage" src={dreamCardImg} alt=""></img>
      <img className="home__cardimage" src={decisionMakingImg} alt=""></img> */}
    </div>
  );
};

export default HomePage;
