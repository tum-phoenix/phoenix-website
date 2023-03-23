import { Link } from "react-router-dom";
import navConfig from "./config";
import "./style.css";

export default function NavigationBar() {
  return (
    <div className="navBar">
      <div className="navBarLogo">
        <Link to="/home">
          <h1>Phoenix Logo</h1>
        </Link>
      </div>
      <div className="navBarLinkContainer">
        <ul className="navBarLinks">
          {navConfig.map((navLink) => (
            <li key={navLink}>
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
