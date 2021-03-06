import Link from "./Link";
import SocialIcon from "./SocialIcon";
import logo from "../assets/logo.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";

const Footer = () => {
  let key = 0;
  const links = ["About", "Services", "Projects"];
  const socialIcons = [
    { src: facebookIcon, alt: "facebook" },
    { src: instagramIcon, alt: "instagram" },
    { src: twitterIcon, alt: "twitter" },
    { src: pinterestIcon, alt: "pinterest" },
  ];

  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="footer__logo" />
      <div className="footer__links">
        {links.map((link) => (
          <Link key={key++} modifiers="link--footer" text={link} />
        ))}
      </div>
      <div className="footer__social-icons">
        {socialIcons.map((icon) => (
          <SocialIcon key={key++} modifiers="social-icon--footer" icon={icon} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
