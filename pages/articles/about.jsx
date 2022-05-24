import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function about() {
  return (
    <article id="about" className="article-about">
      <section className="article-about__title">
        <h1 className="heading-one">About Us</h1>
        <h2 className="heading-two">
          Software development company that vows your <span>success</span>.
        </h2>
      </section>

      <section className="article-about__image">
        <Image
          src="/img/illustrations/undraw_developer_activity_bv83.svg"
          alt="Developer Activity"
          width={400}
          height={300}
        />
      </section>

      <section className="article-about__text">
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          nostrum voluptatibus nobis, assumenda quaerat commodi eius incidunt
          facilis illo, repellat mollitia officiis, quibusdam qui tempora vero
          excepturi cupiditate recusandae iste.
        </p>
      </section>
    </article>
  );
}
