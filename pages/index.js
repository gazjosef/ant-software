import Image from "next/image";
import { useRef, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaShoppingCart,
  FaPalette,
  FaSearch,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { gsapFadeIn } from "@/components/Animations";

import ScrollButton from "@/components/Button/ScrollButton";

export default function Home() {
  const homeTextRef = useRef(null);
  const homeImgRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutTextRef = useRef(null);
  const servicesTitleRef = useRef(null);
  const servicesGridRef = useRef(null);
  const contactTitleRef = useRef(null);
  const contactImgRef = useRef(null);
  const contactDetailsRef = useRef(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    gsapFadeIn(homeTextRef, 0.3);
    gsapFadeIn(homeImgRef, 0.5);
    gsapFadeIn(aboutImageRef, 0.3);
    gsapFadeIn(aboutTextRef, 0.5);
    gsapFadeIn(servicesGridRef, 0.3);
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
            We develop web, mobile and custom software that&apos;s tailor-made
            to capture all your unique and essential requirements.
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

      <section id="services" className="section-services u-bg-primary-50">
        <div className="section-services__title" ref={servicesTitleRef}>
          <h2 className="secondary-heading u-text-color-secondary-300 u-margin-bottom-medium">
            Services
          </h2>
          <h1 className="primary-heading u-center-text">
            We provide{" "}
            <span className="u-text-span">professional IT solutions</span> for
            your business.
          </h1>
        </div>

        <section className="section-services__grid" ref={servicesGridRef}>
          <div className="feature-box">
            <FaBriefcase size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title u-margin-bottom-small">
              Custom Business Software
            </h2>
            <p className="paragraph">
              We specialise in creating custom business software and apps to
              support growing companies.
            </p>
          </div>

          <div className="feature-box">
            <FaShoppingCart size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title u-margin-bottom-small">
              E-Commerce, Online Store Fronts
            </h2>
            <p className="paragraph">
              We create beautiful online stores and strategically-led shopping
              experiences.
            </p>
          </div>

          <div className="feature-box">
            <FaPalette size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title u-margin-bottom-small">
              Web Design
            </h2>
            <p className="paragraph">
              We analyze and implement designs that keeps users engaged without
              overcrowding the screen.
            </p>
          </div>

          <div className="feature-box">
            <FaSearch size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title u-margin-bottom-small">SEO</h2>
            <p className="paragraph">
              We improve your online presence in a manner that can grant more
              exposure and increased user traffic.
            </p>
          </div>

          <div className="feature-box">
            <FaChalkboardTeacher size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title u-margin-bottom-small">
              Consulting
            </h2>
            <p className="paragraph">
              We provide end-to-end digital consulting to help you grow your
              business today.
            </p>
          </div>
        </section>
      </section>

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
