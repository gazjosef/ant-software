import React, { useRef } from "react";
import {
  FaBriefcase,
  FaShoppingCart,
  FaPalette,
  FaSearch,
  FaChalkboardTeacher,
} from "react-icons/fa";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import FeatureBox from "../Snippets/FeatureBox";

const Services: React.FC = () => {
  const [servicesTitleRef, servicesGridRef] = useGsapFadeIn();

  return (
    <section id="services" className="section">
      <div className="container">
        <div
          className="services__heading u-margin-bottom-medium"
          ref={servicesTitleRef as React.RefObject<HTMLDivElement>}
        >
          <h2 className="secondary-heading">Services</h2>
          <h1 className="primary-heading | u-center-text">
            We provide <span>professional IT solutions</span> for your business.
          </h1>
        </div>

        <section
          className="section-services__grid"
          ref={servicesGridRef as React.RefObject<HTMLDivElement>}
        >
          <FeatureBox
            title={"Custom Business Software"}
            description={
              "Custom business software and apps to support growing companies."
            }
          >
            <FaBriefcase size={70} className="u-margin-bottom-medium" />
          </FeatureBox>

          <FeatureBox
            title={"E-Commerce, Online Store Fronts"}
            description={
              "Beautiful online stores and strategically-led shopping experiences."
            }
          >
            <FaShoppingCart size={70} className="u-margin-bottom-medium" />
          </FeatureBox>

          <FeatureBox
            title={"Web Design"}
            description={
              "Analyze and implement designs that keep users engaged"
            }
          >
            <FaPalette size={70} className="u-margin-bottom-medium" />
          </FeatureBox>

          <FeatureBox
            title={"SEO"}
            description={
              "Improve your online presence to increase exposure and user traffic."
            }
          >
            <FaSearch size={70} className="u-margin-bottom-medium" />
          </FeatureBox>

          <FeatureBox
            title={"Consulting"}
            description={
              "Provide end-to-end digital consulting to help you grow your business today."
            }
          >
            <FaChalkboardTeacher size={70} className="u-margin-bottom-medium" />
          </FeatureBox>
        </section>
      </div>
    </section>
  );
};

export default Services;
