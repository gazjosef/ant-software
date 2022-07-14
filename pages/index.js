import Image from "next/image";
import { useRef, useEffect } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { gsapFadeIn } from "@/components/Animations";

import Services from "@/articles/services";

import ScrollButton from "@/components/Button/ScrollButton";

export default function Home() {
  const homeTextRef = useRef(null);
  const homeImgRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutTextRef = useRef(null);
  const contactTitleRef = useRef(null);
  const contactImgRef = useRef(null);
  const contactDetailsRef = useRef(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    gsapFadeIn(homeTextRef, 0.3);
    gsapFadeIn(homeImgRef, 0.5);
    gsapFadeIn(aboutImageRef, 0.3);
    gsapFadeIn(aboutTextRef, 0.5);
    gsapFadeIn(contactImgRef, 0.3);
    gsapFadeIn(contactDetailsRef, 0.3);
    gsapFadeIn(contactFormRef, 0.3);
  }, []);

  return (
    <div className="container">
      <section id="home" className="section-home u-bg-primary-50">
        <div ref={homeTextRef}>
          <h1
            className="
                primary-heading 
                u-margin-bottom-small"
          >
            Get scalable, modern and reliable{" "}
            <span className="u-text-span">custom software</span>.
          </h1>

          <p className="paragraph">
            We develop web, mobile and custom software that's tailor-made to
            capture all your unique and essential requirements.
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
      </section>

      <section id="about" className="section-about">
        <div className="section-about__title" ref={aboutTitleRef}>
          <h2 className="secondary-heading u-text-color-secondary-300">
            About Us
          </h2>
          <h1 className="primary-heading u-center-text">
            Web development company that vows your{" "}
            <span className="u-text-span">success</span>.
          </h1>
        </div>

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
            Founded in 2006, Ant Software is a web development company that
            helps clients meet the challenges of the digital age. We specialize
            in brand design, web design and development, and custom software.
          </p>
        </div>
      </section>

      <Services />

      <section id="contact" className="section-contact">
        <div className="section-contact__title" ref={contactTitleRef}>
          <h2 className="secondary-heading u-text-color-secondary-300 u-margin-bottom-medium">
            Contact
          </h2>
        </div>

        <div className="section-contact__img" ref={contactDetailsRef}>
          <h1 className="primary-heading u-center-text">
            We here to <span className="u-text-span">help and answer</span> any
            questions you might have.
          </h1>

          <Image
            src="/img/illustrations/undraw_programming_2svr.svg"
            alt="responsive"
            width={300}
            height={225}
          />

          <section className="section-contact__details">
            <div className="phone u-margin-bottom-medium">
              <h3 className=" align-items u-margin-bottom-small">
                <FaPhone className="align-items__icon" /> Phone
              </h3>
              <p className="paragraph u-center-text">
                <span>0499 884 088</span>
              </p>
            </div>
            <div className="email">
              <h3 className="align-items u-margin-bottom-small">
                <FaEnvelope className="align-items__icon" /> Email
              </h3>
              <p className="paragraph">
                <span>ant@antsoftware.dev</span>
              </p>
            </div>
          </section>
        </div>

        <section className="section-contact__form" ref={contactFormRef}>
          <form action="/action_page.php" className="form">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label htmlFor="lname">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your Email"
            />

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "130px" }}
            ></textarea>

            <input type="submit" value="Submit" className="btn" />
          </form>
        </section>
      </section>

      <ScrollButton />
    </div>
  );
}
