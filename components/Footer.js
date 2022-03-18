import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Image
          src="/img/white-logo.png"
          alt="Ant Software"
          height="893"
          width="3150"
        />
      </div>

      <div className="footer__nav-links">
        <h2 className="footer__header u-margin-bottom-small">Nav Links</h2>
        <ul className="nav">
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

      <div className="footer__social-media">
        <h2 className="footer__header u-margin-bottom-small">Social Media</h2>
        <ul className="nav">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              <FaFacebook /> Facebook
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              <FaInstagram /> Instagram
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">
              <FaLinkedin /> LinkedIn
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              <FaTwitter /> Twitter
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__contact-details">
        <h2 className="footer__header u-margin-bottom-small">Contact Us</h2>
        <p className="align-items">
          <FaPhone className="align-items__icon" /> Phone
        </p>
        <p className="u-margin-bottom-small">0499 884 088</p>
        <p className="align-items">
          <FaEnvelope className="align-items__icon" /> Email
        </p>
        <p>ant@antsoftware.dev</p>
      </div>

      <div className="footer__copyright">
        Copyright <span>&copy;</span> Ant Software 2022
      </div>
    </footer>
  );
};
