import Hero from "@/articles/Hero.jsx";
import About from "@/articles/About.jsx";
import Services from "@/articles/Services.jsx";
import Contact from "@/articles/Contact.jsx";

import ScrollButton from "@/components/Button/ScrollButton";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Services />
      <Contact />
      <ScrollButton />
    </div>
  );
}
