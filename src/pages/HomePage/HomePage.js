import React, { useEffect, useRef, useState } from "react";
import "./HomePage.scss";
import axios from "axios";
import { motion } from "framer-motion";
import CardAnimation from "../../components/CardAnimation/CardAnimation";

import theFool from "../../assets/images/aurora_cards/the_fool.png";
import theEmperor from "../../assets/images/aurora_cards/the_emperor.png";
import theEmpress from "../../assets/images/aurora_cards/the_empress.png";
import theHighPrestess from "../../assets/images/aurora_cards/the_high_priestess.png";
import theMagician from "../../assets/images/aurora_cards/the_magician.png";
import lockIcon from "../../assets/icons/lock.svg";
import tarotIcon from "../../assets/icons/7345928_tarot_card_fortune_astrology_divination_icon.svg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const gamesSectionRef = useRef(null);

  const images = [
    theFool,
    theEmperor,
    theEmpress,
    theHighPrestess,
    theMagician,
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8080/games")
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the games!", error);
      });
  }, []);

  const handleStart = () => {
    gamesSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleModalClick = (id) => {
    navigate(`/games/${id}`);
  };

  return (
    <div className="home">
      <div className="home__hero">
        <motion.div
          className="home__buttons"
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
          <button className="home__button" onClick={handleStart}>
            Start my Reading
          </button>
          <button className="home__button">Card of the Day</button>
        </motion.div>
        <CardAnimation images={images} />
      </div>
      <section className="home__categories" ref={gamesSectionRef}>
        <h1 className="home__section-title">Tarot Games</h1>
        <div className="home__categories-container">
          {games.map((game) => (
            <div className="home__category" key={game.id}>
              <img
                className="home__category-image"
                src={`http://localhost:8080/${game.image}`}
                alt={game.name}
              />
              <div className="home__category-title">{game.name}</div>
              <div
                className={`home__category-modal ${
                  game.isLocked ? "home__category-modal--locked" : ""
                }`}
                onClick={() => handleModalClick(game.id)}
              >
                <p className="home__modal-title">{game.title}</p>
                <p className="home__category-description">{game.subTitle}</p>
                {game.isLocked && (
                  <img
                    src={lockIcon}
                    alt="Locked"
                    className="home__lock-icon"
                  />
                )}
              </div>
            </div>
          ))}
          <div className="home__explore-more">
            <img
              src={tarotIcon}
              alt="Explore More"
              className="home__explore-icon"
            />
            <p className="home__explore-text">Explore More {">"} </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
