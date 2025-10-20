import { NavLink } from "react-router-dom";
import "./Navbar.css";

type NavbarProps = {
  id: string;
  links: { name: string; path: string }[];
  onLinkClick?: () => void; // اختياري
};

const Navbar: React.FC<NavbarProps> = ({ id, links, onLinkClick }) => {
  return (
    <nav id={id}>
      <ul id="nav-list">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-is-active" : "nav-list-item"
              }
              onClick={onLinkClick} // هونيك تنادى عند النقر
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default Navbar;
