import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function hero() {
  const heroImgRef = useRef(null);

  // useEffect(() => {
  //   const el = heroImgRef.current;
  //   gsap.fromTo(el, { rotation: 0 }, { rotation: 180, duration: 3 });
  // }, []);

  return (
    <article id="home" className="article-home">
      <section className="article-home__text">
        <h2 className="heading-two">
          Get scalable, modern and reliable <span>custom software</span>
        </h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          laudantium quos officiis, assumenda maiores autem aut voluptatem rem
          eligendi? Facere corrupti commodi sapiente maiores, voluptatibus
          corporis.
        </p>
        <button className="article-home__btn btn">Enquire Now</button>
      </section>

      <section ref={heroImgRef} className="article-home__img">
        <Image
          className="article-home__img"
          src="/img/illustrations/undraw_responsive_6c8s.svg"
          alt="responsive"
          width={500}
          height={350}
        />
      </section>
    </article>
  );
}
