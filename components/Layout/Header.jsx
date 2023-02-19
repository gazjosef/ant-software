import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button/Button";
import Navbar2 from "./Navbar2";

const Header = () => {
  return (
    <header className="header">
      <div className="container | u-flex u-items-center u-justify-between">
        <div
          className="header__logo |"
          // style={{ width: 196.875, height: 55.8125 }}
        >
          <Link href="#home">
            <Image
              src="/img/black-logo.png"
              alt="Logo"
              className="logo"
              width={196.875}
              height={55.8125}
              // layout="fill"
            />
          </Link>
        </div>
        <Navbar2 />
        <div className="">
          <Button
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded="false"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
