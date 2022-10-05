import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import { IconContext } from "react-icons";

export const Footer = () => {
  return (
    <footer
      className="
        footer 
        u-bg-primary-300 
        u-text-color-white-200"
    >
      <section className="footer__logo">
        <Image
          src="/img/white-logo.png"
          alt="Ant Software"
          height="111.625"
          width="393.75"
          className="u-margin-bottom-small"
        />
        <div className="footer__social">
          <a href="www.facebook.com">
            <FaFacebook />
          </a>
          <a href="www.instagram.com">
            <FaInstagram />
          </a>
          <a href="www.linkedin.com">
            <FaLinkedin />
          </a>
          <a href="www.twitter.com">
            <FaTwitter />
          </a>
        </div>
      </section>

      <section className="footer__nav-links">
        <div>
          <h2 className="u-text-color-secondary-300 u-margin-bottom-small">
            Nav Links
          </h2>
          <ul role="list" className="nav">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="u-text-color-secondary-300 u-margin-bottom-small">
            Contact
          </h2>
          <div className="u-align-items-center">
            <IconContext.Provider
              value={{ className: "u-align-items-center__icon" }}
            >
              <FaPhone />
            </IconContext.Provider>
            Phone
          </div>
          <p className="u-margin-bottom-small">0434 420 506</p>

          <div className="u-align-items-center ">
            <IconContext.Provider
              value={{ className: "u-align-items-center__icon" }}
            >
              <FaEnvelope />
            </IconContext.Provider>
            Email
          </div>
          <p>ant@antsoftware.dev</p>
        </div>
      </section>

      <section className="footer__copyright u-center-text">
        Copyright <span className="u-text-color-secondary-300">&copy;</span> Ant
        Software 2022
      </section>
    </footer>
  );
};
