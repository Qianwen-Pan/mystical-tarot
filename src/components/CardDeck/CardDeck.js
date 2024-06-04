import React, { useState } from "react";
import "./CardDeck.scss";
import MainCard from "../MainCard/MainCard";
import card1 from "../../assets/images/tarot_back.png";
import card2 from "../../assets/images/tarot_back_purple.png";
import Card from "../Card/Card";
const CardDeck = ({}) => {
  const [shuffle, setShuffle] = useState(false);

  const handleShuffle = () => {
    setShuffle(true);
    setTimeout(() => setShuffle(false), 5000); // Reset shuffle after the animation duration
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Your Free Online Tarot Card Reading</h1>
        </header>
        <Card shuffle={shuffle} />
        <h1>lala</h1>
        <h1>lala</h1>
        <h1>lala</h1>
        <button onClick={handleShuffle}>Tap Here</button>
      </div>
    </>
  );
};

export default CardDeck;
