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
      <section className="footer__logo">
        <Image
          src="/img/white-logo.png"
          alt="Ant Software"
          height="446.5"
          width="1575"
          className="logo"
        />
        <p className="quote">
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          mollitia id aperiam."
        </p>
      </section>

      <section className="footer__nav-links">
        <section>
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
        </section>

        <section>
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
        </section>

        <section className="footer__contact-details">
          <h2 className="footer__header u-margin-bottom-small">Contact</h2>
          <section>
            <p>
              <FaPhone /> Phone
            </p>
            <p className="u-margin-bottom-small">0499 884 088</p>
          </section>

          <section>
            <p>
              <FaEnvelope /> Email
            </p>
            <p>ant@antsoftware.dev</p>
          </section>
        </section>
      </section>

      <div className="footer__copyright">
        Copyright <span>&copy;</span> Ant Software 2022
      </div>
    </footer>
  );
};
