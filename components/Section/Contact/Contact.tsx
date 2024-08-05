import useGsapFadeIn from "../../../hooks/useGsapFadeIn";
import EmailForm from "../../Snippets/EmailForm";
import Image from "next/image";

export default function Contact() {
  const [contactTitleRef, contactDetailsRef, contactFormRef] = useGsapFadeIn();

  return (
    <section id="contact" className="section section-contact">
      <h2
        className="secondary-heading | u-margin-bottom-medium"
        ref={contactTitleRef}
      >
        Contact
      </h2>

      <div className="container">
        <section className="section-contact__details" ref={contactDetailsRef}>
          <Image
            src="/img/illustrations/undraw_programming_2svr.svg"
            alt="responsive"
            width={300}
            height={225}
          />

          <h1 className="primary-heading">
            We are here to <span>help and answer</span> any questions you might
            have.
          </h1>
        </section>
        <section className="section-contact__form" ref={contactFormRef}>
          <EmailForm />
        </section>
      </div>
    </section>
  );
}
