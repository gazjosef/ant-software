import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Links: Link[] = [
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

interface Link {
  title: string;
  url: string;
}

export default function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = () => {
    setToggle((t) => !t);
  };

  return (
    <nav className="navbar | u-flex u-items-center | u-fs-nav">
      <NavbarList toggle={toggle}>
        {Links &&
          Links.map((item: Link) => {
            return (
              <NavbarListLink
                key={item.title}
                title={item.title}
                url={item.url}
              />
            );
          })}
      </NavbarList>

      <NavbarToggle toggle={toggle}>
        {toggle ? (
          <FaTimes onClick={handleClick} />
        ) : (
          <FaBars onClick={handleClick} />
        )}
      </NavbarToggle>
    </nav>
  );
}

interface NavbarListProps {
  toggle: boolean;
  children: React.ReactNode;
}

function NavbarList({ toggle, children }: NavbarListProps) {
  return (
    <ul
      id="primary-navigation"
      data-visible="false"
      role="list"
      className={`navbar__menu | u-flex u-items-center u-gap-4
              ${toggle ? "navbar__active" : ""}
        `}
    >
      {children}
    </ul>
  );
}

interface NavbarListLinkProps {
  title: string;
  url: string;
}

function NavbarListLink({ title, url }: NavbarListLinkProps) {
  console.log(url);
  return (
    <li className="hover-underline-animation">
      {/* <NavLink to="/home">{title}</NavLink> */}
      <a href={url}>{title}</a>
    </li>
  );
}

interface NavbarToggleProps {
  toggle: boolean;
  children: React.ReactNode;
}

function NavbarToggle({ toggle, children }: NavbarToggleProps) {
  return (
    <div
      className="navbar__mobile-nav-toggle sr-only"
      aria-label="Toggle navigation"
      aria-expanded={toggle}
    >
      {children}
    </div>
  );
}
