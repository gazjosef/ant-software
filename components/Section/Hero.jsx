import Image from "next/image";
import Button from "../UI/Button/Button";
import useGsapFadeIn from "hooks/useGsapFadeIn";

const Hero = () => {
  const [homeTitleRef, homeTextRef, homeImgRef] = useGsapFadeIn();

  return (
    <section id="home" className="section | u-bg-primary-50">
      <div className="container | u-margin-top-huge | u-grid u-even-columns u-gap">
        <div ref={homeImgRef}>
          <Image
            src="/img/illustrations/undraw_responsive_6c8s.svg"
            alt="responsive"
            width={500}
            height={350}
          />
        </div>

        <div ref={homeTextRef}>
          <h1 className="primary-heading | u-margin-bottom-small">
            Get scalable, modern and reliable{" "}
            <span className="u-text-span">custom software</span>.
          </h1>

          <p className="paragraph">
            We develop web, mobile and custom software that&apos;s tailor-made
            to capture all your unique and essential requirements.
          </p>

          <Button />
        </div>
      </div>
    </section>
  );
};

export default Hero;
