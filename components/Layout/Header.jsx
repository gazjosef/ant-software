import Image from "next/image";
import Link from "next/link";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header | u-bg-white-0">
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

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
