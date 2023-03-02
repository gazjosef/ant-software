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

  const FooterNavItems = [
    {
      title: "Home",
      url: "#home",
    },
    {
      title: "About",
      url: "#about",
    },
    {
      title: "Services",
      url: "#services",
    },
    {
      title: "Contact",
      url: "#contact",
    },
  ];

  return (
    <footer className="footer | u-bg-primary-400 u-clr-white-0">
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
            <a href="www.facebook.com" className="u-mx-1 u-clr-white-0">
              <FaFacebook />
            </a>
            <a href="www.instagram.com" className="u-mx-1 u-clr-white-0">
              <FaInstagram />
            </a>
            <a href="www.linkedin.com" className="u-mx-1 u-clr-white-0">
              <FaLinkedin />
            </a>
            <a href="www.twitter.com" className="u-mx-1 u-clr-white-0">
              <FaTwitter />
            </a>
          </div>
        </section>

        <section
          ref={footerTextRef}
          className="u-mx-auto | u-grid u-even-columns | u-center-text-md"
        >
          <div className="u-margin-bottom-medium u-place-content-start-center">
            <h2 className="u-margin-bottom-small | u-uppercase">Nav Links</h2>
            <ul role="list" className="nav">
              {FooterNavItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className="nav__link | u-clr-white-0" href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="u-margin-bottom-medium u-place-content-start-center |  u-md-center-text">
            <h2 className="u-margin-bottom-small | u-uppercase">Contact</h2>

            <ul role="list" className="nav ">
              <li className="nav__item |  u-flex u-items-center">
                <IconContext.Provider
                  value={{ className: "u-mr-0-5 | u-fs-2" }}
                >
                  <FaPhone />
                </IconContext.Provider>
                : 0434 420 506
              </li>
              <li className="nav__item | u-flex u-items-center">
                <IconContext.Provider
                  value={{ className: "u-mr-0-5 | u-fs-2" }}
                >
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
          Copyright <span className="u-clr-secondary-300">&copy;</span> Ant
          Software {currentYear}
        </p>
      </section>
    </footer>
  );
};
