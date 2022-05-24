import Hero from "./articles/hero";
import About from "./articles/about";
import Services from "./articles/services";
import Contact from "./articles/contact";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}
