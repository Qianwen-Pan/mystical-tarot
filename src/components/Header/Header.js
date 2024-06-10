import "./Header.scss";
import searchIcon from "../../assets/icons/8679877_search_eye_line_icon.svg";
import libraryIcon from "../../assets/icons/10975340_fantasy_magic_book_fantasy world_fairytale_icon.svg";
import magicIcon from "../../assets/icons/3792004_alchemist_arcanum_magic_potion_icon.svg";
import cardIcon from "../../assets/icons/7345928_tarot_card_fortune_astrology_divination_icon.svg";
import starIcon from "../../assets/icons/3792030_magic_pentagram_rite_satanism_icon.svg";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const icons = [
  { id: 'cardIcon', src: cardIcon, alt: "tarot game icon", link: "/games", tooltip: "Tarot Game" },
  { id: 'libraryIcon', src: libraryIcon, alt: "tarot library icon", link: "/library", tooltip: "Tarot Library" },
  { id: 'searchIcon', src: searchIcon, alt: "tarot search icon", tooltip: "Search" },
  { id: 'magicIcon', src: magicIcon, alt: "tarot about icon", link: "/about", tooltip: "About Magic" },
  { id: 'starIcon', src: starIcon, alt: "tarot about icon", link: "/", tooltip: "Home" },
];

const Header = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (iconId) => {
    setHoveredIcon(iconId);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };
  return (
    <>
      <div className="header">
        <Link to="/">
          <h2 className="header__title">Mystical Tarot</h2>
        </Link>
        <ul className="header__list">
          {icons.map((icon) => (
            <li
              key={icon.id}
              className="header__item"
              onMouseEnter={() => handleMouseEnter(icon.id)}
              onMouseLeave={handleMouseLeave}
            >
              {icon.link ? (
                <Link to={icon.link}>
                  <img className="header__icon" src={icon.src} alt={icon.alt} />
                </Link>
              ) : (
                <img className="header__icon" src={icon.src} alt={icon.alt} />
              )}
              <AnimatePresence>
                {hoveredIcon === icon.id && (
                  <motion.div
                    className="header__tooltip"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {icon.tooltip}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
