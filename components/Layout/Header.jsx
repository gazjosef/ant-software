import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button/Button";
import Navbar2 from "./Navbar2";

const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    setHeaderHeight(headerRef.current.offsetHeight);
  }, []);

  return (
    <header className="header | u-bg-white-0" ref={headerRef}>
      <div className="container | u-flex u-items-center u-justify-between">
        <Link href="#home">
          <Image
            src="/img/black-logo.png"
            alt="Ant Software"
            className="header__logo"
            width={196.88}
            height={55.81}
          />
        </Link>

        <Navbar2 />

        {/* <Button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded="false"
        /> */}
      </div>
    </header>
  );
};

export default Header;
