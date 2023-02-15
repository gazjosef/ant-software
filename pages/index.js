import Hero from "@/components/Section/Hero";
import About from "@/components/Section/About";
import Services from "@/components/Section/Services";
import Contact from "@/components/Section/Contact";
import ScrollButton from "@/components/UI/Button/ScrollButton";
import Post from "@/components/Section/Post";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      {/* <Post /> */}
      <About />
      <Services />
      <Contact />

      <ScrollButton />
    </main>
  );
}
