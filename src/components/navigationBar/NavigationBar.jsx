import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import navConfig from "./config";
import "./style.css";
import LinkAndLogo from "../linkAndLogo/LinkAndLogo";

export default function NavigationBar() {
  const location = useLocation();
  const activeLink = navConfig.find((navLink) => navLink.path === window.location.pathname);
  const [bgColor, setBgColor] = useState("transparent");
  const [titleBarLarge, setTitleBarLarge] = useState(true);
  const [currentPage, setCurrentPage] = useState("/home");

  useEffect(() => {
    function handleScroll() {
      if (currentPage === "/home" && window.scrollY < 400) {
        setBgColor("transparent");
        setTitleBarLarge(true);
      } else {
        setBgColor("var(--dark-blue)");
        setTitleBarLarge(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div className="navBar" style={{ backgroundColor: bgColor, height: titleBarLarge ? 100 : 60 }}>
      <div className="navBarLogo">
        <LinkAndLogo href="/home" src="phoenix.svg" />
      </div>
      <div className="navBarLinkContainer">
        <ul className="navBarLinks">
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
