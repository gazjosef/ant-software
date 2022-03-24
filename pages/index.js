import {
  FaBriefcase,
  FaShoppingCart,
  FaPalette,
  FaSearch,
  FaChalkboardTeacher,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <article id="home" className="article-home">
        <section className="article-home__text">
          <h2 className="heading-two">
            Get scalable, modern and reliable <span>custom software</span>
          </h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            laudantium quos officiis, assumenda maiores autem aut voluptatem rem
            eligendi? Facere corrupti commodi sapiente maiores, voluptatibus
            corporis.
          </p>
          <button className="article-home__btn btn">Enquire Now</button>
        </section>

        <section className="article-home__img">
          <Image
            className="article-home__img"
            src="/img/illustrations/undraw_responsive_6c8s.svg"
            alt="responsive"
            width={500}
            height={350}
          />
        </section>
      </article>

      <article id="about" className="article-about">
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

      <article id="services" className="article-services">
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

      <article id="contact" className="article-contact">
        <section className="article-contact__title">
          <h1 className="heading-one u-margin-bottom-medium">Contact</h1>
          <h2 className="heading-two">
            We here to <span>help and answer</span> any questions you might
            have.
          </h2>
        </section>

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

        <section className="article-contact__img">
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
              style={{ height: "130px" }}
            ></textarea>

            <input type="submit" value="Submit" className="btn" />
          </form>
        </section>
      </article>
    </div>
  );
}
