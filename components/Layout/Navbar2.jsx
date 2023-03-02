import { useState } from "react";
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar2 = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
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
    <nav className="navbar2 | u-flex u-items-center | u-fs-nav">
      {/* UNORDERED LIST */}
      <ul
        id="primary-navigation"
        data-visible="false"
        role="list"
        className={`navbar2__list | u-flex u-items-center
          ${toggle ? "active" : ""}
            `}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className="hover-underline-animation | u-mx-1">
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
        className="navbar2__mobile-nav-toggle sr-only"
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

export default Navbar2;
