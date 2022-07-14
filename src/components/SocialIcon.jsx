const classNames = require("classnames");

const SocialIcon = ({ modifiers, icon }) => {
  return (
    <img
      src={icon.src}
      alt={icon.alt}
      className={classNames("social-icon", modifiers)}
    />
  );
};

export default SocialIcon;
