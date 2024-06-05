import React, { useState } from "react";
import CardDeck from "../../components/CardDeck/CardDeck";
import "./HomePage.scss";
import decisionMakingImg from "../../assets/images/glod_black_front_back.png";
import dreamCardImg from "../../assets/images/image-removebg.png";

const HomePage = () => {
  return (
    <div className="home">
      <img className="home__cardimage" src={dreamCardImg} alt=""></img>
      <img className="home__cardimage" src={decisionMakingImg} alt=""></img>
    </div>
  );
};

export default HomePage;
