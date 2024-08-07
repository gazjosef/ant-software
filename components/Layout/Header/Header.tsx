import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
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
}
