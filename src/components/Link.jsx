const classNames = require("classnames");

const Link = ({ modifiers, text }) => {
  return <p className={classNames("link", modifiers)}>{text}</p>;
};

export default Link;
