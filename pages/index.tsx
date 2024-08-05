import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Section/Hero/Hero";
import About from "../components/Section/About/About";
import Services from "../components/Section/Services/Services";
import Contact from "../components/Section/Contact/Contact";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ant Software | Embiggened Innovation</title>
        <meta name="description" content="Generated by create next app" />
        {/* FavIcon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="img/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="img/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="img/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="img/favicon_io/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
