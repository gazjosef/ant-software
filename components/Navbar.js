import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export const Nav = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="navbar__logo-box">
        <img src="/img/black-logo.png" alt="Logo" className="logo" />
      </div>

      <div className="navbar__menu">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link href="#home" className="nav-links">
              <a className="hover-underline">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#about" className="nav-links">
              <a className="hover-underline">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#services" className="nav-links">
              <a className="hover-underline">Services</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="#contact" className="nav-links">
              <a className="hover-underline">Contact</a>
            </Link>
          </li>
        </ul>
      </div>

      <button className="btn btn--nav">
        <Link href="/#">
          <a>Enquire Now</a>
        </Link>
      </button>

      <div className="navbar__button" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      {/* <div className="navbar__hamburger" onClick={handleClick}>
        <!-- ? Old Button --> 
        <button className="open-slide hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
      </div> */}
    </nav>
  );
};
