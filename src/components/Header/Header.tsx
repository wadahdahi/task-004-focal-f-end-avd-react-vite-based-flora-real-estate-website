import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

export type HeaderProps = {
  id?: string;
  logoShape?: string;
  logoText?: string;
};

const Header: React.FC<HeaderProps> = ({ id, logoShape, logoText }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id={id}>
      <div id="logo">
        <img
          src={logoShape}
          alt="logo-shape"
          width={"50.33px"}
          height="29.72px"
        />
        <img
          src={logoText}
          alt="logo-text"
          width={"68.66px"}
          height="21.49px"
        />
      </div>

      <Navbar
        id="main-nav"
        links={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Service", path: "/service" },
          { name: "NewProperty", path: "/new-property" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <button id="login-btn">Login</button>

      {!isMenuOpen ? (
        <button
          id="hamburger"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      ) : (
        <button
          id="close-btn"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
      )}

      {isMenuOpen && (
        <div id="side-nav" className="open">
          <div id="side-nav-header">
            <div id="side-nav-logo">
              <img
                src={logoShape}
                alt="logo-shape"
                width={"40px"}
                height="24px"
              />
              <img
                src={logoText}
                alt="logo-text"
                width={"55px"}
                height="17px"
              />
            </div>
          </div>

          <Navbar
            id="mobile-nav"
            links={[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Service", path: "/service" },
              { name: "NewProperty", path: "/new-property" },
              { name: "Contact", path: "/contact" },
            ]}
            isSidebar={true}
            onLinkClick={() => setIsMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
