import './style.css';
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import BG from "../../components/BG";
import LinkAndLogo from "../../components/linkAndLogo/LinkAndLogo";
import goals from "./config";
import ArrowIcon from "./img/ArrowIcon";

function Home() {
  const [headerColor, setHeaderColor] = useState("var(--red)");
  const headerText = "Autonomous Systems";
  const [headerIndex, setHeaderIndex] = useState(0);
  const scrollRef = useRef(null);

  const changeHeaderColor = () => {
    if (headerIndex < headerText.length + 32) {
      setHeaderColor("var(--red)");
      setHeaderIndex(headerIndex + 1);
    }
  };

  const handleArrowClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      changeHeaderColor();
    }, 80);
    return () => clearTimeout(interval);
  }, [headerIndex]);

  /* if headerIndex is less than 32, just let a _ blink */
  let displayedHeaderText;

  if (headerIndex < 32) {
    if (Math.floor(headerIndex / 8) % 2 === 0) {
      displayedHeaderText = "_";
    } else {
      displayedHeaderText = "";
    }
  } else {
    displayedHeaderText = headerText.slice(0, headerIndex - 32);
  }

  return (
    <div className="home_container">
      <div className="container">
        <img
          className="background"
          src="images/team.jpg"
          alt="the phoenix team"
        />
        <h1 className="header">Prototyping the Next Generation <br />of <span style={{ color: headerColor }}>{displayedHeaderText}</span></h1>
        <div className="image_overlay" ref={scrollRef}>
          <ArrowIcon onClick={handleArrowClick} />
        </div>
      </div>
      <hr className="red_line" />
      <BG>
        <h2>About Us</h2>
        <p className="description_text">
          We are the Phoenix Robotics student club at TUM.<br /> A passionate team of students from
          various disciplines working together to build <span className="emph">autonomous model cars and drones </span> supported
          by the Chair of Automatic Control and the Institute of Flight System Dynamics. <br />
          In our lab in the mechanical engineering building, we design, develop and build every part
          of our cars and drones:
          from <span className="emph">low-level engineering</span> to high-level software like <span className="emph">trajectory planning and AI</span>.
        </p>
      </BG>
      <BG dark="false">
        <h2>Drive Team</h2>
        <img
          className="float_left"
          src="images/drive_team.jpg"
          alt="one of our robot cars"
        />
        <p>
          In the award-winning Drive Team, we are working on a 1:10 scale model car that is equipped
          with various sensors and an on-board computer to enable fully autonomous driving.
          Our next goal is the&nbsp;
          <a
            href="https://boschfuturemobility.com"
          >Bosch Future Mobility Challenge
          </a> that takes place in May. <Link to="/drive">Learn more &gt;</Link>
        </p>
      </BG>
      <BG>
        <h2>Flight Team</h2>
        <img
          className="float_right"
          src="images/flight_team.jpg"
          alt="one of our drones"
        />
        <p>
          The Flight Team concentrates on drones. Current projects include programming a drone
          to act like the Snatch from Harry Potter’s Quidditch game. Various technologies like
          Reinforcement Learning help in avoiding obstacles and flying safely. <Link to="/flight">Learn more &gt;</Link>
        </p>
      </BG>
      <BG dark="false">
        <h2>Our Supporters</h2>
        <p>Our sponsor:</p>
        <div className="logo_container">
          <LinkAndLogo title="Exotec" href="https://www.exotec.com/" src="exotec.svg" />
        </div>
        <div className="chairs_container">
          <p>Our academic supporters:</p>
          <div className="logo_container">
            <LinkAndLogo
              title="Chair of Automatic Control"
              href="https://www.fsd.ed.tum.de/"
              src="rt.jpg"
            />
          </div>
          <div className="logo_container">
            <LinkAndLogo
              title="Institute of Flight System Dynamics"
              href="https://www.epc.ed.tum.de/en/rt/home/"
              src="fsd.jpg"
            />
          </div>
        </div>
        <p>
          We are always open to new and exciting collaborations. <Link to="/contact">Contact us &gt;</Link>
        </p>
      </BG>
      <BG>
        <h2>Our Mission</h2>
        {goals.map((goal) => (
          <div className="goal">
            <h3>{goal.title}</h3>
            <p>{goal.text}</p>
          </div>
        ))}
      </BG>
    </div>
  );
}

export default Home;
