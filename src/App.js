import { useState, useEffect } from "react";
import Header from "./components/Header";
import SingleFeature from "./components/SingleFeature";
import DoubleFeature from "./components/DoubleFeature";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import arrowDown from "./assets/icon-arrow-down.svg";
import headerImgDesktop from "./assets/desktop/image-header.jpg";
import transformImgDesktop from "./assets/desktop/image-transform.jpg";
import standoutImgDesktop from "./assets/desktop/image-stand-out.jpg";
import designImgDesktop from "./assets/desktop/image-graphic-design.jpg";
import photographyImgDesktop from "./assets/desktop/image-photography.jpg";
import imageEmily from "./assets/image-emily.jpg";
import imageThomas from "./assets/image-thomas.jpg";
import imageJennie from "./assets/image-jennie.jpg";
import headerImgMobile from "./assets/mobile/image-header.jpg";
import bottlesImgDesktop from "./assets/desktop/image-gallery-milkbottles.jpg";
import orangeImgDesktop from "./assets/desktop/image-gallery-orange.jpg";
import coneImgDesktop from "./assets/desktop/image-gallery-cone.jpg";
import cubesImgDesktop from "./assets/desktop/image-gallery-sugarcubes.jpg";
import transformImgMobile from "./assets/mobile/image-transform.jpg";
import standoutImgMobile from "./assets/mobile/image-stand-out.jpg";
import designImgMobile from "./assets/mobile/image-graphic-design.jpg";
import photographyImgMobile from "./assets/mobile/image-photography.jpg";
import bottlesImgMobile from "./assets/mobile/image-gallery-milkbottles.jpg";
import orangeImgMobile from "./assets/mobile/image-gallery-orange.jpg";
import coneImgMobile from "./assets/mobile/image-gallery-cone.jpg";
import cubesImgMobile from "./assets/mobile/image-gallery-sugar-cubes.jpg";
import "./css/style.css";

const App = () => {
  const [mobile, setMobile] = useState(false);
  const [menu, setMenu] = useState(false);

  let key = 0;
  const features = [
    {
      type: "double",
      heading: "Transform your brand",
      paragraph:
        "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
      img: {
        src: mobile ? transformImgMobile : transformImgDesktop,
        alt: "egg",
      },
      modifiers: "double-feature--reverse double-feature--yellow",
    },
    {
      type: "double",
      heading: "Stand out to the right audience",
      paragraph:
        "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
      img: {
        src: mobile ? standoutImgMobile : standoutImgDesktop,
        alt: "pink-cup",
      },
      modifiers: "double-feature--red",
    },
    {
      type: "single",
      heading: "Graphic design",
      paragraph:
        "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
      img: {
        src: mobile ? designImgMobile : designImgDesktop,
        alt: "cherry",
      },
      modifiers: "single-feature--green",
    },
    {
      type: "single",
      heading: "Photography",
      paragraph:
        "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
      img: {
        src: mobile ? photographyImgMobile : photographyImgDesktop,
        alt: "orange",
      },
      modifiers: "single-feature--blue",
    },
  ];
  const testimonials = [
    {
      img: {
        src: imageEmily,
        alt: "emily",
      },
      paragraph:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      title: "Marketing Director",
    },
    {
      img: {
        src: imageThomas,
        alt: "thomas",
      },
      paragraph:
        "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      title: "Chief Operating Officer",
    },
    {
      img: {
        src: imageJennie,
        alt: "jennie",
      },
      paragraph:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      title: "Business Owner",
    },
  ];
  const galleryImgs = [
    {
      src: mobile ? bottlesImgMobile : bottlesImgDesktop,
      alt: "milk-bottles",
    },
    { src: mobile ? orangeImgMobile : orangeImgDesktop, alt: "orange" },
    { src: mobile ? coneImgMobile : coneImgDesktop, alt: "cone" },
    {
      src: mobile ? cubesImgMobile : cubesImgDesktop,
      alt: "sugar-cubes",
    },
  ];

  function renderFeatures(features) {
    return features.map((feature) => {
      switch (feature.type) {
        case "single":
          return (
            <SingleFeature
              key={key++}
              heading={feature.heading}
              paragraph={feature.paragraph}
              img={feature.img}
              modifiers={feature.modifiers}
            />
          );
        case "double":
          return (
            <DoubleFeature
              key={key++}
              heading={feature.heading}
              paragraph={feature.paragraph}
              img={feature.img}
              modifiers={feature.modifiers}
            />
          );
        default:
          return <></>;
      }
    });
  }

  function handleResize() {
    if (window.innerWidth <= 900) {
      setMobile(true);
    } else {
      setMenu(false);
      setMobile(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="page-container">
      <div className="page">
        <section className="intro">
          <Header mobile={mobile} menu={menu} setMenu={setMenu} />
          <h1 className="intro__heading">WE ARE CREATIVES</h1>
          <img
            src={arrowDown}
            alt="arrow-down"
            className="intro__img intro__img--regular"
          />
          <img
            src={mobile ? headerImgMobile : headerImgDesktop}
            alt="orange"
            className="intro__img intro__img--bg"
          />
        </section>
        <section className="features">{renderFeatures(features)}</section>
        <section className="testimonials">
          <h3 className="testimonials__heading">CLIENT TESTIMONIALS</h3>
          <div className="testimonials__container">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={key++}
                img={testimonial.img}
                paragraph={testimonial.paragraph}
                name={testimonial.name}
                title={testimonial.title}
              />
            ))}
          </div>
        </section>
        <section className="gallery">
          {galleryImgs.map((img) => (
            <img
              key={key++}
              src={img.src}
              alt={img.alt}
              className="gallery__img"
            />
          ))}
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default App;
