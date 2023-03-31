import { Link } from "react-router-dom";
import navConfig from "./config";
import "./style.css";
import Logo from "../../pages/home/Logo";

export default function NavigationBar() {
  const activeLink = navConfig.find((navLink) => navLink.path === window.location.pathname);
  return (
    <div className="navBar">
      <div className="navBarLogo">
        <Link to="/home">
          <Logo src="phoenix.png" />
        </Link>
      </div>
      <div className="navBarLinkContainer">
        <ul className="navBarLinks">
          {navConfig.map((navLink) => (
            <li key={`navLink ${activeLink === navLink ? "activeLink" : ""}`}>
              <Link
                to={navLink.path}
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
