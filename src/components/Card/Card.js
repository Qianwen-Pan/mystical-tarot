import React, { useState, useEffect } from 'react';
import { useSprings, animated } from '@react-spring/web';
import './Card.scss';
import cardImage from "../../assets/images/tarot_back.png";

const cards = Array(6).fill(null); // Adjust the number of cards as needed

const Deck = ({ shuffle }) => {
  const [order, setOrder] = useState(cards.map((_, index) => index));

  useEffect(() => {
    if (shuffle) {
      const shuffleAnimation = async () => {
        for (let i = 0; i < 5; i++) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setOrder((prevOrder) => {
            const newOrder = [...prevOrder];
            const card = newOrder.shift();
            newOrder.push(card);
            return newOrder;
          });
        }
      };
      shuffleAnimation();
    }
  }, [shuffle]);

  const springs = useSprings(
    cards.length,
    cards.map((_, i) => ({
      to: {
        transform: `translate3d(0px, ${i * 10}px, 0px)`,
      },
      from: {
        transform: `translate3d(0px, ${order.indexOf(i) * 10}px, 0px)`,
      },
      config: { tension: 280, friction: 60 },
    }))
  );

  return (
    <div className="deck-container">
      {springs.map((styles, index) => (
        <animated.div
          key={index}
          style={{ ...styles, zIndex: cards.length - index }}
          className="card"
        >
          <img src={cardImage} alt="Tarot Card" />
        </animated.div>
      ))}
    </div>
  );
};

export default Deck;
