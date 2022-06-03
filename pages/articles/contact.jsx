import Image from "next/image";
import { useRef, useEffect } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { gsapFadeIn } from "../../components/Animations";

export default function Contact() {
  const contactTitleRef = useRef(null);
  const contactImgRef = useRef(null);
  const contactDetailsRef = useRef(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    // gsapFadeIn(contactTitleRef, 0.3);
    gsapFadeIn(contactImgRef, 0.3);
    gsapFadeIn(contactDetailsRef, 0.3);
    gsapFadeIn(contactFormRef, 0.3);
  }, []);

  return (
    <article id="contact" className="article-contact">
      <section className="article-contact__title" ref={contactTitleRef}>
        <h1 className="heading-one u-margin-bottom-medium">Contact</h1>
      </section>

      <section className="article-contact__img" ref={contactDetailsRef}>
        <h2 className="heading-two">
          We here to <span>help and answer</span> any questions you might have.
        </h2>

        <Image
          src="/img/illustrations/undraw_programming_2svr.svg"
          alt="responsive"
          width={300}
          height={225}
        />

        <section className="article-contact__details">
          <section className="phone">
            <h3 className=" align-items u-margin-bottom-small">
              <FaPhone className="align-items__icon" /> Phone
            </h3>
            <p className="paragraph">
              <span>0499 884 088</span>
            </p>
          </section>
          <section className="email">
            <h3 className="align-items u-margin-bottom-small">
              <FaEnvelope className="align-items__icon" /> Email
            </h3>
            <p className="paragraph">
              <span>ant@antsoftware.dev</span>
            </p>
          </section>
        </section>
      </section>

      <section className="article-contact__form" ref={contactFormRef}>
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
          <input type="text" id="email" name="email" placeholder="Your Email" />

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
    </article>
  );
}
