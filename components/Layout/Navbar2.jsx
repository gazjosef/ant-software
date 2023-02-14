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
      cName: "u-text-black",
    },
    {
      title: "About",
      url: "#about",
      cName: "u-text-black",
    },
    {
      title: "Services",
      url: "#services",
      cName: "u-text-black",
    },
    {
      title: "Contact",
      url: "#contact",
      cName: "u-text-black",
    },
  ];

  return (
    <nav className="navbar2 | u-flex u-items-center   | u-fs-nav">
      <div className="u-hidden">
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
            ? "navbar2__list active | u-md-invisible u-flex u-items-center"
            : "navbar2__list | u-md-invisible u-flex u-items-center"
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
