import {
  FaBriefcase,
  FaShoppingCart,
  FaPalette,
  FaSearch,
  FaChalkboardTeacher,
  FaClock,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

export default function Home() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);

    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);

  useEffect(() => {
    console.log("use effect hook, inView = ", inView2);

    if (inView2) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }

    if (!inView2) {
      animation.start({ x: "-100vw" });
    }
  }, [inView2]);

  return (
    <div className="container">
      <header id="home" className="header">
        <div className="header__title">
          <h1>
            Get scalable, modern and reliable <span>custom software</span>
          </h1>
        </div>
        <div className="header__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            praesentium, tenetur dolorum maiores illo at!
          </p>
          <button className="btn">Enquire Now</button>
        </div>
        <Image
          className="header__img"
          src="/img/illustrations/undraw_responsive_6c8s.svg"
          alt="responsive"
          width={500}
          height={350}
        />
      </header>
      <article id="about" className="article-about" ref={ref}>
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

      <article id="services" className="article-services" ref={ref2}>
        <section className="article-services__title">
          <h1 className="heading-one">Services</h1>
          <h2 className="heading-two">
            We provide <span>professional IT solutions</span> for your business.
          </h2>
        </section>
        <section className="article-services__grid">
          <div className="feature-box">
            <FaBriefcase size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title u-margin-bottom-small">
              Custom Business Software
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              dignissimos iste ducimus voluptatibus suscipit porro!
            </p>
          </div>

          <div className="feature-box">
            <FaShoppingCart size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title u-margin-bottom-small">
              E-Commerce, Online Store Fronts
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              dignissimos iste ducimus voluptatibus suscipit porro!
            </p>
          </div>

          <div className="feature-box">
            <FaPalette size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title u-margin-bottom-small">
              Web Design
            </h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              dignissimos iste ducimus voluptatibus suscipit porro!
            </p>
          </div>

          <div className="feature-box">
            <FaSearch size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title u-margin-bottom-small">SEO</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              dignissimos iste ducimus voluptatibus suscipit porro!
            </p>
          </div>

          <div className="feature-box">
            <FaChalkboardTeacher size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title u-margin-bottom-small">
              Consulting
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              dignissimos iste ducimus voluptatibus suscipit porro!
            </p>
          </div>
        </section>
      </article>

      <article id="contact" className="article-contact">
        <section className="article-contact__title">
          <h1 className="heading-one u-margin-bottom-medium">Contact</h1>
        </section>

        <section className="article-contact__details">
          <div className="article-contact__text">
            <div>
              <h3 className="contact-heading u-margin-bottom-small">
                <FaClock className="contact-heading__icon" /> Opening Hours
              </h3>
              <ul className=" opening-hours">
                <li className="opening-hours__item">
                  <span>Mon: </span>
                  <span>09:00 - 17:00</span>
                </li>
                <li className="opening-hours__item">
                  <span>Tue: </span>
                  <span>09:00 - 17:00</span>
                </li>
                <li className="opening-hours__item">
                  <span>Wed: </span>
                  <span>09:00 - 17:00</span>
                </li>
                <li className="opening-hours__item">
                  <span>Thu: </span>
                  <span>09:00 - 17:00</span>
                </li>
                <li className="opening-hours__item">
                  <span>Fri: </span>
                  <span>09:00 - 17:00</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="contact-heading u-margin-bottom-small">
                <FaPhone className="contact-heading__icon" /> Phone
              </h3>
              <p>
                <span>0499 884 088</span>
              </p>
              <br />
              <h3 className="contact-heading u-margin-bottom-small">
                <FaEnvelope className="contact-heading__icon" /> Email
              </h3>
              <p>
                <span>ant@antsoftware.dev</span>
              </p>
            </div>
          </div>

          <Image
            src="/img/illustrations/undraw_programming_2svr.svg"
            alt="responsive"
            width={300}
            height={225}
          />
        </section>

        <section className="article-contact__form">
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
              style={{ height: "70px" }}
            ></textarea>

            <input type="submit" value="Submit" className="btn" />
          </form>
        </section>
      </article>
    </div>
  );
}
