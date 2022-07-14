const classNames = require("classnames");

const SingleFeature = ({ modifiers, heading, paragraph, img }) => {
  return (
    <div className={classNames("single-feature", modifiers)}>
      <img src={img.src} alt={img.alt} className="single-feature__img" />
      <h3 className="single-feature__heading">{heading}</h3>
      <p className="single-feature__paragraph">{paragraph}</p>
    </div>
  );
};

export default SingleFeature;
