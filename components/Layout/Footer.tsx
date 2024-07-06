import Image from "next/image";
import FooterCopyright from "../Snippets/FooterCopyright";

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

      <FooterCopyright />
    </footer>
  );
}
