import Image from "next/image";
import useGsapFadeIn from "hooks/useGsapFadeIn";

const About = () => {
  const [aboutTitleRef, aboutImageRef, aboutTextRef] = useGsapFadeIn();

  return (
    <section id="about" className="section">
      <div className="container | u-mx-auto u-center-text">
        <div ref={aboutTitleRef}>
          <h2 className="secondary-heading | u-text-color-secondary-300">
            About Us
          </h2>
          <h1 className="primary-heading | u-mx-auto">
            Web development company that vows your{" "}
            <span className="u-text-span">success</span>.
          </h1>
        </div>

        <div className="container | u-mx-auto u-grid u-even-columns u-gap">
          <div className="section-about__image" ref={aboutImageRef}>
            <Image
              src="/img/illustrations/undraw_developer_activity_bv83.svg"
              alt="Developer Activity"
              width={800}
              height={600}
            />
          </div>

          <div className="section-about__text" ref={aboutTextRef}>
            <p className="paragraph">
              Founded in 2016, Ant Software is a web development company that
              helps clients meet the challenges of the digital age. We
              specialize in brand design, web design and development, and custom
              software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
