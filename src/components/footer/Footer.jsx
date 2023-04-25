import "./style.css";
import { Link } from "react-router-dom";
import LinkAndLogo from "../linkAndLogo/LinkAndLogo";

function Footer() {
  return (
    <footer>
      <div className="footerLogo">
        <LinkAndLogo href="/home" src="phoenix_text.svg" />
      </div>
      <p className="footerAddress">
        Technische Universität München <br />
        Boltzmannstr. 15 <br />
        85748 Garching bei München <br />
        Am Lehrstuhl für Regelungstechnik
      </p>
      <div className="footerTextLinks">
        <ul><Link to="/contact">Contact</Link></ul>
        <ul><Link to="/impressum">Impressum</Link></ul>
      </div>
      <div className="footerLinks">
        <LinkAndLogo href="https://www.instagram.com/tumphoenixrobotics/" src="instagram.svg" />
        <LinkAndLogo href="https://www.facebook.com/tumphoenixrobotics/" src="facebook.svg" />
        <LinkAndLogo href="https://twitter.com/tum_phoenix" src="twitter.svg" />
        <LinkAndLogo href="https://www.linkedin.com/company/phoenix-robotics/" src="linkedin.svg" />
        <LinkAndLogo href="https://github.com/tum-phoenix" src="github.svg" />
      </div>
    </footer>
  );
}

export default Footer;
