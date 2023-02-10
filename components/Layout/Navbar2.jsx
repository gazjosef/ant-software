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
      cName: "navbar2__links | u-text-black",
    },
    {
      title: "About",
      url: "#about",
      cName: "navbar2__links | u-text-black",
    },
    {
      title: "Services",
      url: "#services",
      cName: "navbar2__links | u-text-black",
    },
    {
      title: "Contact",
      url: "#contact",
      cName: "navbar2__links | u-text-black",
    },
  ];

  return (
    <nav className="navbar2 | u-flex u-items-center | u-fs-nav">
      <div className="navbar2__menu-icon | u-hidden">
        <IconContext.Provider value={{ className: "fa-react" }}>
          {toggle ? (
            <FaTimes onClick={handleClick} />
          ) : (
            <FaBars onClick={handleClick} />
          )}
        </IconContext.Provider>
      </div>
      <ul
        role="list"
        className={
          toggle
            ? "navbar2__menu active | u-flex u-items-center"
            : "navbar2__menu  | u-flex u-items-center"
        }
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className="hover-underline-animation | u-mx-1">
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar2;
