import { useState } from "react";
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    console.log("click");
    setToggle((t) => !t);
  };

  const MenuItems = [
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
      {/* UNORDERED LIST */}
      <ul
        id="primary-navigation"
        data-visible="false"
        role="list"
        className={`navbar__menu | u-flex u-items-center u-gap-3
          ${toggle ? "navbar__active" : ""}
            `}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className="hover-underline-animation">
              <a
                className="u-clr-black-1000 u-ff-nav u-fw-semi-bold u-uppercase"
                href={item.url}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>

      {/* TOGGLE BUTTON */}
      <div
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
      </div>
    </nav>
  );
};

export default Navbar;
