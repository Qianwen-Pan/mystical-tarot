import React, { useState } from "react";
import "./HomePage.scss";
import { AnimatePresence, motion } from "framer-motion";



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
      {/* <img className="home__cardimage" src={dreamCardImg} alt=""></img>
      <img className="home__cardimage" src={decisionMakingImg} alt=""></img> */}
    </div>
  );
};

export default HomePage;
