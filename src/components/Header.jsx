import Link from "./Link";
import Button from "./Button";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/icon-hamburger.svg";

const Header = ({ mobile, menu, setMenu }) => {
  let key = 0;
  const navLinks = [
    {
      type: "link",
      text: "About",
    },
    {
      type: "link",
      text: "Services",
    },

    {
      type: "link",
      text: "Projects",
    },
    {
      type: "button",
      text: "CONTACT",
    },
  ];

  function renderLinks(links) {
    return links.map((link) => {
      switch (link.type) {
        case "link":
          return <Link key={key++} modifiers="link--header" text={link.text} />;
        case "button":
          return (
            <Button key={key++} modifiers="button--header" text={link.text} />
          );
        default:
          return <></>;
      }
    });
  }

  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      {(!mobile || menu) && (
        <div className="header__links">{renderLinks(navLinks)}</div>
      )}
      {mobile && (
        <img
          src={menuIcon}
          alt="menu-icon"
          className="header__menu-icon"
          onClick={() => setMenu(!menu)}
        />
      )}
    </header>
  );
};

export default Header;
