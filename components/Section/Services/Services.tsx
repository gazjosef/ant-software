import FeatureBox from "../../Snippets/FeatureBox";
import useGsapFadeIn from "../../../hooks/useGsapFadeIn";
import {
  FaBriefcase,
  FaShoppingCart,
  FaPalette,
  FaSearch,
  FaChalkboardTeacher,
} from "react-icons/fa";

const features = [
  {
    title: "Custom Business Software",
    description:
      "Custom business software and apps to support growing companies.",
    icon: <FaBriefcase size={70} className="u-margin-bottom-medium" />,
  },
  {
    title: "E-Commerce, Online Store Fronts",
    description:
      "Beautiful online stores and strategically-led shopping experiences.",
    icon: <FaShoppingCart size={70} className="u-margin-bottom-medium" />,
  },
  {
    title: "Web Design",
    description: "Analyze and implement designs that keep users engaged",
    icon: <FaPalette size={70} className="u-margin-bottom-medium" />,
  },
  {
    title: "SEO",
    description:
      "Improve your online presence to increase exposure and user traffic.",
    icon: <FaSearch size={70} className="u-margin-bottom-medium" />,
  },
  {
    title: "Consulting",
    description:
      "Provide end-to-end digital consulting to help you grow your business today.",
    icon: <FaChalkboardTeacher size={70} className="u-margin-bottom-medium" />,
  },
];

export default function ServicesSection() {
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
          {features.map((feature, index) => (
            <FeatureBox
              key={feature.title}
              title={feature.title}
              description={feature.description}
            >
              {feature.icon}
            </FeatureBox>
          ))}
        </section>
      </div>
    </section>
  );
}
