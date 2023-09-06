import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navConfig from "./config";
import LinkAndLogo from "../linkAndLogo/LinkAndLogo";
import { useViewport } from "../../context/viewportContext";
import MenuIcon from "./img/MenuIcon";
import "./style.css";

export default function NavigationBar() {
  const location = useLocation();
  const activeLink = navConfig.find((navLink) => navLink.path === window.location.pathname);
  const [bgColor, setBgColor] = useState("transparent");
  const [currentPage, setCurrentPage] = useState("/home");
  const [menuExpanded, setMenuExpanded] = useState(false);
  const { width } = useViewport();

  const toggleMenu = () => {
    setMenuExpanded(!menuExpanded);
  };

  useEffect(() => {
    const shouldSetDarkBackground = (currentPage === '/home' && window.scrollY > 200)
      || currentPage !== '/home';

    setBgColor(shouldSetDarkBackground ? 'var(--dark-grey)' : 'transparent');
  }, [currentPage, menuExpanded, width]);

  useEffect(() => {
    function handleScroll() {
      const shouldSetDarkBackground = (currentPage === '/home' && window.scrollY > 200)
        || currentPage !== '/home';

      setBgColor(shouldSetDarkBackground ? 'var(--dark-grey)' : 'transparent');
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, menuExpanded, width]);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div
      className="navBarContainer"
      style={{ backgroundColor: bgColor, height: 60 }}
    >
      <div className="navBarLogo">
        <LinkAndLogo href="/home" src="phoenix.svg" />
      </div>
      {width < 768 && (
        // eslint-disable-next-line
        <div className="mobileMenuButton" onClick={toggleMenu}>
          <MenuIcon expanded={menuExpanded} />
        </div>
      )}
      <div className={`navBarLinkContainer ${menuExpanded ? 'expanded' : ''}`}>
        <ul className="navBarLinks">
          {navConfig.map((navLink) => (
            <li key={`${navLink.name} ${activeLink === navLink ? "activeLink" : ""}`}>
              <Link
                className={currentPage.startsWith(navLink.path) ? 'activeLink' : ''}
                to={navLink.path}
                onClick={toggleMenu}
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {menuExpanded && (
        // eslint-disable-next-line
        <div className="overlay" onClick={toggleMenu} />
      )}
    </div>
  );
}
