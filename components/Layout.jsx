import { useRouter } from "next/router";
import { Meta } from "@/components/Meta";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <header>
        <Meta />
      </header>

      <Navbar />

      {router.pathname === "/"}

      <main>{children}</main>

      <Footer />
    </>
  );
};
