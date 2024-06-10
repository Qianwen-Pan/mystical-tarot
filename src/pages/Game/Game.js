import "./Game.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
// import tarotCards from "../../data/cards";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Game() {
  const { id } = useParams(); // Get the game ID from the URL
  const [gameData, setGameData] = useState(null);
  const [flippedCards, setFlippedCards] = useState([]);

  const [isStacked, setIsStacked] = useState(true);
  let [count, setCount] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/games/${id}`)
      .then(response => {
        setGameData(response.data);
        setFlippedCards(Array(response.data.cards.length).fill(false)); // Initialize flippedCards based on the number of cards
      })
      .catch(error => {
        console.error("There was an error fetching the game data!", error);
      });
  }, [id]);

  useEffect(() => {
    if (!isStacked && count > 0) {
      const timer = setTimeout(() => {
        setShowHint(true);
      }, 2000); 
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
      }, 500); 
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
      setSelectedCards([...selectedCards, gameData.cards[index]]);
      setCount(count - 1);
    }
  };

  if (!gameData) {
    return <div>Loading...</div>; 
  }

  const resultOrder = gameData.cardsRepresent.map(item => item);

  return (
    <>
      <div className="game__grid">
        <ul className="game__list">
          {gameData.cards.map((tarotCard, index) => (
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
                    src={`http://localhost:8080/${gameData.back_image}`}
                    alt="tarot card back"
                  />
                </div>
                <div className="game__card--front">
                  <img
                    className="game__img"
                    src={`http://localhost:8080/${tarotCard.image}`}
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
              <p className="game__title">{gameData.title}</p>
              <p className="game__text">
              {gameData.instruction}
              </p>
              <button className="game__button" onClick={stackCards}>
                Shuffle
              </button>
              <button className="game__button" onClick={spreadCards}>
                Start
              </button>
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
                  src={`http://localhost:8080/${card.image}`}
                  alt={`Selected card ${index + 1}`}
                />
                <p className="game__result-name">{card.name}</p>
                <p className="game__result-text">
                  {
                    card.interpretations.decisionMaking.upright[
                      resultOrder[index].toLowerCase()
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
