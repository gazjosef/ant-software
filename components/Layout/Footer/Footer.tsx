import Image from "next/image";
import Link from "next/link";

import FooterList from "./FooterList";
import FooterCopyright from "./FooterCopyright";
import Styles from "./Footer.module.scss";

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

export default function Footer() {
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
            <FooterList>
              {FooterNavItems.map((item, index) => {
                return (
                  <Link key={item.title} href={item.url}>
                    {item.title}
                  </Link>
                );
              })}
            </FooterList>
          </nav>
        </div>
      </div>

      <FooterCopyright />
    </footer>
  );
}
