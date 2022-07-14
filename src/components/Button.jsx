const classNames = require("classnames");

const Button = ({ modifiers, text }) => {
  return <button className={classNames("button", modifiers)}>{text}</button>;
};

export default Button;
