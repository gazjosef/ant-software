import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import useGsapFadeIn from "hooks/useGsapFadeIn";

const Contact = () => {
  const [contactTitleRef, contactDetailsRef, contactFormRef] = useGsapFadeIn();

  return (
    <section id="contact" className="section">
      <div className="container | u-mx-auto" ref={contactTitleRef}>
        <h2 className="secondary-heading | u-text-color-secondary-300 u-margin-bottom-medium u-center-text">
          Contact
        </h2>
      </div>

      <div className="container | u-mx-auto | u-grid u-even-columns">
        <section
          className="u-flex u-flex-col u-justify-between"
          ref={contactDetailsRef}
        >
          <h1 className="primary-heading | u-center-text">
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
            <div className="phone | u-margin-bottom-medium">
              <h3 className=" align-items u-margin-bottom-small">
                <FaPhone className="align-items__icon" /> Phone
              </h3>
              <p className="paragraph | u-center-text u-text-color-black-800">
                <span>0434 420 506</span>
              </p>
            </div>
            <div className="email">
              <h3 className="align-items u-margin-bottom-small">
                <FaEnvelope className="align-items__icon" /> Email
              </h3>
              <p className="paragraph | u-text-color-black-800">
                <span>ant@antsoftware.dev</span>
              </p>
            </div>
          </section>
        </section>

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
      </div>
    </section>
  );
};

export default Contact;
