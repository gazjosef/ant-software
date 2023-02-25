import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import useGsapFadeIn from "hooks/useGsapFadeIn";
import { IconContext } from "react-icons";

export const Footer = () => {
  const [footerTitleRef, footerTextRef, footerImgRef] = useGsapFadeIn();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer | u-bg-primary-300 u-text-color-white-200">
      <div className="container | u-margin-top-medium | u-grid u-even-columns">
        <section ref={footerImgRef}>
          <Image
            src="/img/white-logo.png"
            alt="Ant Software"
            height="111.625"
            width="393.75"
            className="u-margin-bottom-small"
          />

          <div className="u-margin-bottom-medium u-mx-auto | u-flex">
            <a href="www.facebook.com" className="u-mx-1 u-text-white">
              <FaFacebook />
            </a>
            <a href="www.instagram.com" className="u-mx-1 u-text-white">
              <FaInstagram />
            </a>
            <a href="www.linkedin.com" className="u-mx-1 u-text-white">
              <FaLinkedin />
            </a>
            <a href="www.twitter.com" className="u-mx-1 u-text-white">
              <FaTwitter />
            </a>
          </div>
        </section>

        <section
          ref={footerTextRef}
          className="u-mx-auto | u-grid u-even-columns | u-md-center-text"
        >
          <div className="u-margin-bottom-medium u-place-content-start-center">
            <h2 className="secondary-heading-100 | u-text-color-secondary-300 u-margin-bottom-small">
              Nav Links
            </h2>
            <ul role="list" className="nav">
              <li className="nav__item">
                <a href="#home" className="nav__link | u-text-color-white-50">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link | u-text-color-white-50">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#services"
                  className="nav__link | u-text-color-white-50"
                >
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  className="nav__link | u-text-color-white-50"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="u-margin-bottom-medium u-place-content-start-center |  u-md-center-text">
            <h2 className="secondary-heading-100 | u-text-color-secondary-300 u-margin-bottom-small">
              Contact
            </h2>

            <ul role="list" className="nav ">
              <li className="nav__item |  u-flex u-items-center">
                <IconContext.Provider value={{ className: "u-mr-05 | u-fs-2" }}>
                  <FaPhone />
                </IconContext.Provider>
                : 0434 420 506
              </li>
              <li className="nav__item | u-flex u-items-center">
                <IconContext.Provider value={{ className: "u-mr-05 | u-fs-2" }}>
                  <FaEnvelope />
                </IconContext.Provider>
                : ant@antsoftware.dev
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section className="container | u-margin-top-medium u-mx-auto">
        <p className="u-center-text">
          Copyright <span className="u-text-color-secondary-300">&copy;</span>{" "}
          Ant Software {currentYear}
        </p>
      </section>
    </footer>
  );
};
