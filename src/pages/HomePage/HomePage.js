import React, { useState } from "react";
import "./HomePage.scss";
import { motion } from "framer-motion";

import theFool from "../../assets/images/aurora_cards/the_fool.png";
import theEmperor from "../../assets/images/aurora_cards/the_emperor.png";
import theEmpress from "../../assets/images/aurora_cards/the_empress.png";
import theHighPrestess from "../../assets/images/aurora_cards/the_high_priestess.png";
import theMagician from "../../assets/images/aurora_cards/the_magician.png";
import CardAnimation from "../../components/CardAnimation/CardAnimation";
import universe from "../../assets/images/universe.png";
import flower from "../../assets/images/single_flower.png";
import blue_magician from "../../assets/images/blue_m.png";

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
          {/* <div className="home__buttons"> */}
          <button className="home__button">Decision Making</button>
          <button className="home__button">Dream Interpretaion</button>
          {/* </div> */}
        </motion.div>

        <CardAnimation images={images} />
      </div>
      <section className="home__categories">
        <div className="home__categories-container">
          <div className="home__category">
            <img
              className="home__category-image"
              src={universe}
              alt="universe card"
            />
            <div className="home__category-title">Decision Making</div>
            <div className="home__category-modal">
              <p className="home__modal-title">Tarot for Decision Making</p>
              <p className="home__category-description">
                Discover insights to guide your choices.
              </p>
            </div>
          </div>
          <div className="home__category">
            <img
              className="home__category-image"
              src={blue_magician}
              alt="blue version of magician card"
            />
            <div className="home__category-title">Card of the Day</div>
            <div className="home__category-modal">
              <p className="home__modal-title">Card of the Day</p>
              <p className="home__category-description">
                Discover insights to guide your choices.
              </p>
            </div>
          </div>
          <div className="home__category">
            <img
              className="home__category-image"
              src={flower}
              alt="a flower tarot card"
            />
            <div className="home__category-title">Dream Interpretation</div>
            <div className="home__category-modal">
              <p className="home__modal-title">Tarot for Dream Interpretation</p>
              <p className="home__category-description">
                Unveil the hidden meanings in your dreams.
              </p>
            </div>
          </div>
          <div className="home__category">
            <img
              className="home__category-image"
              src={flower}
              alt="a flower tarot card"
            />
            <div className="home__category-title">Dream Interpretation</div>
            <div className="home__category-modal">
              <p className="home__modal-title">Tarot for Dream Interpretation</p>
              <p className="home__category-description">
                Unveil the hidden meanings in your dreams.
              </p>
            </div>
          </div>
          <div className="home__category">
            <img
              className="home__category-image"
              src={flower}
              alt="a flower tarot card"
            />
            <div className="home__category-title">Dream Interpretation</div>
            <div className="home__category-modal">
              <p className="home__modal-title">Tarot for Dream Interpretation</p>
              <p className="home__category-description">
                Unveil the hidden meanings in your dreams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
