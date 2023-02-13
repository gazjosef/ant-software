import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer | u-bg-primary-300 u-text-color-white-200">
      <div className="container | u-mx-auto u-grid u-even-columns">
        <section>
          <Image
            src="/img/white-logo.png"
            alt="Ant Software"
            height="111.625"
            width="393.75"
            className="u-margin-bottom-small"
          />

          <div className="u-flex u-mx-auto">
            <a href="www.facebook.com" className="u-mx-05 u-text-white">
              <FaFacebook />
            </a>
            <a href="www.instagram.com" className="u-mx-05 u-text-white">
              <FaInstagram />
            </a>
            <a href="www.linkedin.com" className="u-mx-05 u-text-white">
              <FaLinkedin />
            </a>
            <a href="www.twitter.com" className="u-mx-05 u-text-white">
              <FaTwitter />
            </a>
          </div>
        </section>

        <section className="u-grid u-even-columns u-gap-3">
          <section>
            <h2 className="secondary-heading-100 | u-text-color-secondary-300 u-margin-bottom-small">
              Nav Links
            </h2>
            <ul role="list" className="nav">
              <li className="nav__item">
                <a href="#home" className="nav__link | u-text-white">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link | u-text-white">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link | u-text-white">
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link | u-text-white">
                  Contact
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="secondary-heading-100 | u-text-color-secondary-300 u-margin-bottom-small">
              Contact
            </h2>

            <ul role="list" className="nav">
              <li className="nav__item">0434 420 506</li>
              <li className="nav__item">ant@antsoftware.dev</li>
            </ul>
          </section>
        </section>
      </div>

      <div className="container | u-mx-auto">
        <div>
          Copyright{" "}
          <span className="u-mx-auto u-text-color-secondary-300">&copy;</span>{" "}
          Ant Software 2022
        </div>
      </div>
    </footer>
  );
};
