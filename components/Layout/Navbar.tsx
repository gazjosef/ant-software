import { useState } from "react";
// import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";

interface MenuItem {
  title: string;
  url: string;
}

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = () => {
    setToggle((t) => !t);
  };

  const MenuItems: MenuItem[] = [
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
    <nav className="navbar | u-flex u-items-center | u-fs-nav">
      <NavbarList toggle={toggle}>
        {MenuItems &&
          MenuItems.map((item: MenuItem) => {
            return (
              <NavbarListLink
                key={item.title}
                title={item.title}
                url={item.url}
              />
            );
          })}
      </NavbarList>
      {/* TOGGLE BUTTON */}
      {/* <div
        className="navbar__mobile-nav-toggle sr-only"
        aria-label="Toggle navigation"
        aria-expanded={toggle}
      >
        <IconContext.Provider value={{}}>
          {toggle ? (
            <FaTimes onClick={handleClick} />
          ) : (
            <FaBars onClick={handleClick} />
          )}
        </IconContext.Provider>
      </div> */}

      <NavbarToggle toggle={toggle}>
        {toggle ? (
          <FaTimes onClick={handleClick} />
        ) : (
          <FaBars onClick={handleClick} />
        )}
      </NavbarToggle>
    </nav>
  );
};

export default Navbar;

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
  return (
    <li className="hover-underline-animation">
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
