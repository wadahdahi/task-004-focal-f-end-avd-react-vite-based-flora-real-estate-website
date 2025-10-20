import type { HeaderProps } from "../Header/Header";
import "./Footer.css";

// FOOTER CONTENTS

type FooterLink = {
  title: string;
  links: { text: string; href: string }[];
  socialLinks?: { social: string }[];
};

const FooterLinks: FooterLink[] = [
  {
    title: "Service",
    links: [
      { text: "Payment & Tax", href: "/" },
      { text: "Features", href: "/" },
      { text: "View Booking", href: "/" },
      { text: "Support", href: "/" },
    ],
  },
  {
    title: "About",
    links: [
      { text: "About us", href: "/about" },
      { text: "News", href: "/news" },
      { text: "Pricing", href: "/news" },
      { text: "New Property", href: "/new-property" },
    ],
  },
  {
    title: "Our Location",
    links: [
      { text: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ", href: "" },
    ],
    socialLinks: [
      {
        social: "/images/social-icons/facebook-icon.svg",
      },
      {
        social: "/images/social-icons/x-twitter-icon.svg",
      },
      {
        social: "/images/social-icons/linkedin-icon.svg",
      },
    ],
  },
];

const Footer: React.FC<HeaderProps> = ({ logoShape, logoText }) => {
  return (
    <div id="footer">
      <div id="footer-upper">
        <div id="footer-upper-first-side-wrapper">
          <div id="logo">
            <img src={logoShape} alt="" width={"50.33px"} height="29.72px" />
            <img src={logoText} alt="" width={"68.66px"} height="21.49px" />
          </div>
          <p id="footer-description">
            Lorem ipsum dolor sit amet, consectetur{" "}
            <span>adipiscing elit. Imperdiet tempus</span>
            <span> felis vitae sit est quisque.</span>
          </p>
        </div>
        <div id="footer-upper-second-side-wrapper">
          {FooterLinks.map((section) => (
            <div key={section.title} id="f-u-second-side-inner-wrapper">
              <h4 id="footer-list-heading">{section.title}</h4>
              <ul id="footer-list">
                {section.links.map((link) => (
                  <li id="footer-list-item" key={link.text}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>

              {section.socialLinks && (
                <div id="footer-social-icons">
                  {section.socialLinks.map((item, index) => (
                    <a key={index} href="#">
                      <img
                        id="footer-social-icon"
                        src={item.social}
                        alt="social icon"
                        width="24"
                        height="24"
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr id="footer-hr" />

      <div id="footer-lower-side-wrapper">
        <p id="copyright">Copyright 2024 flora. All Rights Reserved</p>
        <div id="legal-links">
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
