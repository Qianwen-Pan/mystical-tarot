import React, { useState } from 'react';
import "./MainCard.scss";
import { motion } from "framer-motion";

const MainCard = ({ img }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isSpread, setIsSpread] = useState(false);

  const handleCardClick = () => {
    setIsClicked(true);
  };

  const handleStack = () => {
    setIsSpread(false);
    setTimeout(() => {
      document.querySelectorAll('.card').forEach((card, index) => {
        card.className = 'card';
      });
    }, 150 * document.querySelectorAll('.card').length);
  };

  const handleSpread = () => {
    setIsSpread(true);
    setTimeout(() => {
      document.querySelectorAll('.card').forEach((card, index) => {
        card.className = `card ani${index}`;
      });
    }, 150 * document.querySelectorAll('.card').length);
  };

  return (
    <>
      <motion.div 
        className={`maincard ${isClicked ? 'card' : ''}`} 
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={handleCardClick}
        animate={isClicked ? { scale: 0.5, x: -500, y: -200 } : {}}
      >
        <img className="maincard__img" src={img} alt="Card" />
      </motion.div>
      {isClicked && (
        <div className="grid">
          <ul className="list">
            {[...Array(9)].map((_, index) => (
              <li key={index} className="card"></li>
            ))}
          </ul>
          <button className="stack" onClick={handleStack}>Stack</button>
          <button className="spread" onClick={handleSpread}>Spread</button>
        </div>
      )}
    </>
  );
};

export default MainCard;
