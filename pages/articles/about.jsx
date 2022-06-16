import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsapFadeIn } from "@/components/Animations";

export default function About() {
  const aboutTitleRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutTextRef = useRef(null);

  useEffect(() => {
    gsapFadeIn(aboutImageRef, 0.3);
    gsapFadeIn(aboutTextRef, 0.5);
  }, []);

  return (
    <article id="about" className="article-about">
      <section className="article-about__title" ref={aboutTitleRef}>
        <h1 className="heading-one">About Us</h1>
        <h2 className="heading-two">
          Software development company that vows your <span>success</span>.
        </h2>
      </section>

      <section className="article-about__image" ref={aboutImageRef}>
        <Image
          src="/img/illustrations/undraw_developer_activity_bv83.svg"
          alt="Developer Activity"
          width={800}
          height={600}
        />
      </section>

      <section className="article-about__text" ref={aboutTextRef}>
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
