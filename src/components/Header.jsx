import logoKasa from "../assets/img/logoKasa.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-header">
      <div className="header">
        <img src={logoKasa} alt="logo Kasa" />
        <nav>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              <li>acceuil</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              <li>a propos</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
