import Link from "./Link";

const classNames = require("classnames");

const DoubleFeature = ({ modifiers, heading, paragraph, img }) => {
  return (
    <div className={classNames("double-feature", modifiers)}>
      <div className="double-feature__img-container">
        <img src={img.src} alt={img.alt} className="double-feature__img" />
      </div>
      <div className="double-feature__text-container">
        <h2 className="double-feature__heading">{heading}</h2>
        <p className="double-feature__paragraph">{paragraph}</p>
        <Link className="double-feature__link" text="LEARN MORE" />
      </div>
    </div>
  );
};

export default DoubleFeature;
