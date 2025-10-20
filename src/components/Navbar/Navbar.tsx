import { NavLink } from "react-router-dom";
import "./Navbar.css";

type NavbarProps = {
  id: string;
  links: { name: string; path: string }[];
  isSidebar?: boolean;
  onLinkClick?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
  id,
  links,
  isSidebar,
  onLinkClick,
}) => {
  return (
    <nav id={id}>
      <ul id="nav-list">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isSidebar
                  ? isActive
                    ? "sidebar-link-active"
                    : "sidebar-link"
                  : isActive
                  ? "nav-is-active"
                  : "nav-list-item"
              }
              onClick={onLinkClick}
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
