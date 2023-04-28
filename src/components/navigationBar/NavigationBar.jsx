import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import navConfig from "./config";
import "./style.css";
import LinkAndLogo from "../linkAndLogo/LinkAndLogo";

export default function NavigationBar() {
  const activeLink = navConfig.find((navLink) => navLink.path === window.location.pathname);
  const [bgColor, setBgColor] = useState("transparent");
  const [titleBarLarge, setTitleBarLarge] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setBgColor("var(--dark-blue)");
        setTitleBarLarge(false);
      } else {
        setBgColor("var(--dark-blue)");
        setTitleBarLarge(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navBar" style={{ backgroundColor: bgColor, height: titleBarLarge ? 100 : 60 }}>
      <div className="navBarLogo">
        <LinkAndLogo href="/home" src="phoenix.svg" />
      </div>
      <div className="navBarLinkContainer">
        <ul className="navBarLinks" style={{ paddingTop: titleBarLarge ? "50px" : "15px" }}>
          {navConfig.map((navLink) => (
            <li key={`${navLink.path} ${activeLink === navLink ? "activeLink" : ""}`}>
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
