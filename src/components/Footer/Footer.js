import "./Footer.scss";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import pinterest from "../../assets/icons/pinterest.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__left">
          {/* <div className="footer__section">
            <span className="footer__text">FAQ</span>
            <span className="footer__text">About</span>
            <span className="footer__text">Contact</span>
          </div> */}
        </div>
        <div className="footer__middle">
          <h2 className="footer__logo">Mystical Tarot</h2>
          <div className="footer__icons">
            <img className="footer__icon" src={facebook} alt="facebook icon" />
            <img
              className="footer__icon"
              src={instagram}
              alt="instagram icon"
            />
            <img className="footer__icon" src={twitter} alt="twitter icon" />
            <img className="footer__icon" src={pinterest} alt="pinteest icon" />
          </div>
          <div className="footer__section">
            <span className="footer__text">Terms & Considerations</span>
            <span className="footer__text">Privacy Policy</span>
          </div>
          <p className="footer__copyright">
            <span className="footer__copyright--sign">&copy;</span> 2024
            Mystical Tarot. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
