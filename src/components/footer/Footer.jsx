import "./style.css";
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
        <a href="mailto:kontakt@tum-phoenix.de">Contact us &gt;</a>
        <a href="/imprint">Imprint</a>
      </div>
      <div className="footerLinks">
        <a href="https://www.instagram.com/tumphoenixrobotics/">
          <img src="logos/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://twitter.com/tum_phoenix">
          <img src="logos/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/company/phoenix-robotics/">
          <img src="logos/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/tum-phoenix">
          <img src="logos/github.svg" alt="GitHub" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
