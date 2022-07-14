import { useRef, useEffect } from "react";
import { gsapFadeIn, gsapFadeInStagger } from "@/components/Animations";
import {
  FaBriefcase,
  FaShoppingCart,
  FaPalette,
  FaSearch,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function Services() {
  const servicesTitleRef = useRef(null);
  const servicesGridRef = useRef(null);

  useEffect(() => {
    gsapFadeIn(servicesGridRef, 0.3);
  }, []);

  return (
    <article id="services" className="article-services">
      <section className="article-services__title" ref={servicesTitleRef}>
        <h1 className="heading-one">Services</h1>
        <h2 className="heading-two">
          We provide <span>professional IT solutions</span> for your business.
        </h2>
      </section>
      <section className="article-services__grid" ref={servicesGridRef}>
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
    </article>
  );
}
