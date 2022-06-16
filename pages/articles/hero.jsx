import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsapFadeIn } from "@/components/Animations";

export default function Hero() {
  const homeTextRef = useRef(null);
  const homeImgRef = useRef(null);

  useEffect(() => {
    gsapFadeIn(homeTextRef, 0.3);
    gsapFadeIn(homeImgRef, 0.5);
  }, []);

  return (
    <article id="home" className="article-home">
      <section className="article-home__img" ref={homeImgRef}>
        <Image
          className="article-home__img"
          src="/img/illustrations/undraw_responsive_6c8s.svg"
          alt="responsive"
          width={1000}
          height={700}
        />
      </section>

      <section className="article-home__text" ref={homeTextRef}>
        <h2 className="heading-two">
          Get scalable, modern and reliable <span>custom software</span>
        </h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          laudantium quos officiis, assumenda maiores autem aut voluptatem rem
          eligendi? Facere corrupti commodi sapiente maiores, voluptatibus
          corporis.
        </p>
        <Link href="#contact">
          <button className="btn btn-moving-gradient btn-moving-gradient--blue">
            Enquire Now
          </button>

          {/* <button className="article-home__btn btn">Enquire Now</button> */}
        </Link>
      </section>
    </article>
  );
}
