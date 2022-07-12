import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsapFadeIn } from "@/components/Animations";

import Hero from "@/articles/hero";
import About from "@/articles/about";
import Services from "@/articles/services";
import Contact from "@/articles/contact";

import ScrollButton from "@/components/Button/ScrollButton";

export default function Home() {
  const homeTextRef = useRef(null);
  const homeImgRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutTextRef = useRef(null);

  useEffect(() => {
    gsapFadeIn(homeTextRef, 0.3);
    gsapFadeIn(homeImgRef, 0.5);
    gsapFadeIn(aboutImageRef, 0.3);
    gsapFadeIn(aboutTextRef, 0.5);
  }, []);

  return (
    <div className="container">
      <section className="section-home u-bg-primary-50">
        <div className="u-even-columns">
          <div ref={homeTextRef}>
            <h1
              className="
                primary-heading 
                u-center-text 
                u-margin-bottom-medium"
            >
              Get scalable, modern and reliable{" "}
              <span className="u-text-span">custom software</span>
            </h1>

            <p className="paragraph u-center-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              laudantium quos officiis, assumenda maiores autem aut voluptatem
              rem eligendi? Facere corrupti commodi sapiente maiores,
              voluptatibus corporis.
            </p>
          </div>

          <div ref={homeImgRef}>
            <Image
              className="article-home__img"
              src="/img/illustrations/undraw_responsive_6c8s.svg"
              alt="responsive"
              width={1000}
              height={700}
            />
          </div>
        </div>
      </section>

      <section className="section-about"></section>

      <Services />

      <section className="section-contact"></section>
      {/* <Hero />
      <About />
      <Services />
      <Contact /> */}

      <ScrollButton />
    </div>
  );
}
