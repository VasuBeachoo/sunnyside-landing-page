import Link from "./Link";
import Button from "./Button";
import logo from "../assets/logo.svg";

const Header = () => {
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
          return <Link key={key++} className="header__link" text={link.text} />;
        case "button":
          return (
            <Button key={key++} className="header__btn" text={link.text} />
          );
        default:
          return <></>;
      }
    });
  }

  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <div className="header__links">{renderLinks(navLinks)}</div>
    </header>
  );
};

export default Header;
