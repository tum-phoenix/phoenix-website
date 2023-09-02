import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import navConfig from "./config";
import LinkAndLogo from "../linkAndLogo/LinkAndLogo";
import "./style.css";
import { useViewport } from "../../context/viewportContext";
import MenuIcon from "./img/MenuIcon";

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

  useEffect(() => {
    const listItems = document.querySelectorAll('.navBarLinks li');
    listItems.forEach((item, index) => {
      const delay = index * 100; // Adjust the delay as needed
      setTimeout(() => {
        item.classList.add('visible');
      }, delay);
    });

    return () => {
      listItems.forEach((item) => {
        item.classList.remove('visible');
      });
    };
  }, [currentPage, menuExpanded]);

  return (
    <div
      className="navBar"
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
      <div className="navBarLinkContainer">
        <ul className="navBarLinks">
          {navConfig.map((navLink) => (
            <li key={`${navLink.path} ${activeLink === navLink ? "activeLink" : ""}`}>
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
    </div>
  );
}
