import "./Game.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import card_back from "../../assets/images/tarot_back.png";
import tarotCards from "../../data/cards";


export default function Game() {
  const resultOrder = ["pros", "cons", "outcome"];

  const [flippedCards, setFlippedCards] = useState(
    Array(tarotCards.length).fill(false)
  );

  const [isStacked, setIsStacked] = useState(true);
  let [count, setCount] = useState(3);
  const [showHint, setShowHint] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    if (!isStacked && count > 0) {
      const timer = setTimeout(() => {
        setShowHint(true);
      }, 2000); // Delay for 2000 milliseconds
      return () => clearTimeout(timer);
    } else {
      setShowHint(false);
    }
  }, [isStacked, count]);

  useEffect(() => {
    if (count === 0) {
      setTimeout(() => {
        window.scrollBy({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }, 500); // Wait for animations to complete
    }
  }, [count]);

  const stackCards = () => {
    const cards = document.querySelectorAll(".game__card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.className = "game__card";
      }, index * 150);
    });
    setFlippedCards(Array(cards.length).fill(false));
    setSelectedCards([]);
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCount(3);
    setTimeout(() => {
      setIsStacked(true);
    }, 1800);
  };

  const spreadCards = () => {
    const cards = document.querySelectorAll(".game__card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.className = `game__card ani${index}`;
      }, index * 150);
    });
    setIsStacked(false);
  };

  const flipCard = (index) => {
    if (count > 0 && !flippedCards[index]) {
      const newFlippedCards = [...flippedCards];
      newFlippedCards[index] = !newFlippedCards[index];
      setFlippedCards(newFlippedCards);
      setSelectedCards([...selectedCards, tarotCards[index]]);
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="game__grid">
        <ul className="game__list">
          {tarotCards.map((tarotCard, index) => (
            <li
              className="game__card"
              key={index}
              onClick={() => flipCard(index)}
            >
              <motion.div
                className="game__content"
                initial={false}
                animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="game__card--back">
                  <img
                    className="game__img"
                    src={card_back}
                    alt="tarot card back"
                  />
                </div>
                <div className="game__card--front">
                  <img
                    className="game__img"
                    src={tarotCard.image}
                    alt="tarot card front"
                  />
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
        {showHint && (
          <motion.div
            className="game__hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8, y: [0, -10, 0] }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1 },
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            <p className="game__title">
              Please select {count} {count < 3 ? "more" : ""} card
              {count > 1 ? "s" : ""}
            </p>
          </motion.div>
        )}
        <AnimatePresence>
          {isStacked && (
            <motion.div
              className="game__instruction"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1 },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            >
              <p className="game__title">Tarot for Decision Making</p>
              <p className="game__text">
                Please select 3 cards from the deck. These cards will represent
                the <span className="game__span"> Pros</span>,{" "}
                <span className="game__span">Cons</span>, and the{" "}
                <span className="game__span">Outcome</span> of your decision to
                help you make an informed choice.
              </p>
              <button className="game__button" onClick={stackCards}>
                Shuffle
              </button>
              <button className="game__button" onClick={spreadCards}>
                Start
              </button>
              {/* <p>Dream Tarot Interpretation: Please select 3 cards from the deck. These cards will symbolize Hidden Fears, Desires, and Warnings related to your dream, providing deeper insight into its meaning.</p> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {count === 0 && (
        <div className="game__result">
          <h2 className="game__result-title">Your Selected Cards</h2>
          <ul className="game__result-list">
            {selectedCards.map((card, index) => (
              <li key={index} className="game__result-card">
                <div className="game__result-tag">{resultOrder[index]}</div>
                <img
                  className="game__result-img"
                  src={card.image}
                  alt={`Selected card ${index + 1}`}
                />
                <p className="game__result-name">{card.name}</p>
                <p className="game__result-text">
                  {
                    card.interpretations.decisionMaking.upright[
                      resultOrder[index]
                    ]
                  }
                </p>
              </li>
            ))}
          </ul>
          <button className="game__button" onClick={stackCards}>
            Try Again
          </button>
        </div>
      )}
    </>
  );
}
