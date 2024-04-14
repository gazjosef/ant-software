import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import { IconContext } from "react-icons";

const Footer: React.FC = () => {
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
    <footer className="footer">
      <div className="container">
        <div className="footer__img">
          <Image
            src="/img/white-logo.png"
            alt="Ant Software"
            height="100"
            width="352"
          />
        </div>
        <div className="footer__links | u-margin-x-auto">
          <nav>
            <ul
              role="list"
              className="u-flex u-align-center u-justify-between u-gap-1"
            >
              {FooterNavItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.url}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <section className="u-margin-top-medium ">
        <p className="u-center-text u-margin-x-auto">
          Copyright <span className="u-clr-secondary-100">&copy;</span> Ant
          Software {currentYear}
        </p>
      </section>
    </footer>
  );
};
export default Footer;
