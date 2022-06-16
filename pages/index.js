import Hero from "@/articles/hero";
import About from "@/articles/about";
import Services from "@/articles/services";
import Contact from "@/articles/contact";

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
