import { useRef, useEffect } from "react";
import {
  FaBriefcase,
  FaShoppingCart,
  FaPalette,
  FaSearch,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { gsapFadeIn } from "@/components/Animations";

const Services = () => {
  const servicesTitleRef = useRef(null);
  const servicesGridRef = useRef(null);

  useEffect(() => {
    gsapFadeIn(servicesGridRef, 0.3);
  }, []);

  return (
    <section id="services" className="section | u-bg-primary-50">
      <div className="container | u-center-text u-mx-auto">
        <div className="section-services__title" ref={servicesTitleRef}>
          <h2 className="secondary-heading | u-text-color-secondary-300 u-margin-bottom-medium">
            Services
          </h2>
          <h1 className="primary-heading | u-mx-auto u-center-text">
            We provide{" "}
            <span className="u-text-span">professional IT solutions</span> for
            your business.
          </h1>
        </div>
      </div>

      <div className="container | u-mx-auto">
        <section className="section-services__grid" ref={servicesGridRef}>
          <div className="feature-box">
            <FaBriefcase size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title | u-margin-bottom-small">
              Custom Business Software
            </h2>
            <p className="paragraph">
              We specialise in creating custom business software and apps to
              support growing companies.
            </p>
          </div>

          <div className="feature-box">
            <FaShoppingCart size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title | u-margin-bottom-small">
              E-Commerce, Online Store Fronts
            </h2>
            <p className="paragraph">
              We create beautiful online stores and strategically-led shopping
              experiences.
            </p>
          </div>

          <div className="feature-box">
            <FaPalette size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title | u-margin-bottom-small">
              Web Design
            </h2>
            <p className="paragraph">
              We analyze and implement designs that keeps users engaged without
              overcrowding the screen.
            </p>
          </div>

          <div className="feature-box">
            <FaSearch size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title | u-margin-bottom-small">SEO</h2>
            <p className="paragraph">
              We improve your online presence in a manner that can grant more
              exposure and increased user traffic.
            </p>
          </div>

          <div className="feature-box">
            <FaChalkboardTeacher size={70} className="u-margin-bottom-medium" />
            <h2 className="feature-box__title | u-margin-bottom-small">
              Consulting
            </h2>
            <p className="paragraph">
              We provide end-to-end digital consulting to help you grow your
              business today.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
