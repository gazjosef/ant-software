import Hero from "@/articles/Hero";
import About from "@/articles/About";
import Services from "@/articles/Services";
import Contact from "@/articles/Contact";

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
