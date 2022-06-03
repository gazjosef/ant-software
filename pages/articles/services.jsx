import { useRef, useEffect } from "react";
import { gsapFadeIn, gsapFadeInStagger } from "../../components/Animations";
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
    // gsapFadeInStagger(servicesGridRef, 0.3, 2);
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            dignissimos iste ducimus voluptatibus suscipit porro!
          </p>
        </div>

        <div className="feature-box">
          <FaShoppingCart size={70} className="u-margin-bottom-medium" />
          <h2 className="feature-box__title u-margin-bottom-small">
            E-Commerce, Online Store Fronts
          </h2>
          <p className="paragraph">
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
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            dignissimos iste ducimus voluptatibus suscipit porro!
          </p>
        </div>

        <div className="feature-box">
          <FaChalkboardTeacher size={70} className="u-margin-bottom-medium" />
          <h2 className="feature-box__title u-margin-bottom-small">
            Consulting
          </h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            dignissimos iste ducimus voluptatibus suscipit porro!
          </p>
        </div>
      </section>
    </article>
  );
}
