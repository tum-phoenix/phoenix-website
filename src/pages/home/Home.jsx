import './style.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BG from "../../components/BG";
import LinkAndLogo from "../../components/linkAndLogo/LinkAndLogo";
import goals from "./config";

function Home() {
  const [headerColor, setHeaderColor] = useState("beige");
  const headerText = "Autonomous Systems";
  const [headerIndex, setHeaderIndex] = useState(0);

  const changeHeaderColor = () => {
    if (headerIndex < headerText.length) {
      setHeaderColor("red");
      setHeaderIndex(headerIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      changeHeaderColor();
    }, 70);
    return () => clearTimeout(interval);
  }, [headerIndex]);

  return (
    <div className="home_container">
      <div className="container">
        <img
          className="background"
          src="images/team.jpg"
          alt="the phoenix team"
        />
        <h1 className="header">Prototyping the Next Generation <br />of <span style={{ color: headerColor }}>{headerText.substring(0, headerIndex)}</span></h1>
      </div>
      <hr className="red_line" />
      <BG>
        <h2>About Us</h2>
        <p className="description_text">
          We are the Phoenix Robotics student club at TUM.<br /> A passionate team of students from
          various disciplines working together to build autonomous model cars and drones supported
          by the Chair of Automatic Control and the Institute of Flight System Dynamics. <br />
          In our lab in the mechanical engineering building, we design, develop and build every part
          of our drones:
          from low-level engineering to high-level software like flight control and AI.
        </p>
      </BG>
      <BG>
        <h2>Drive Team</h2>
        <img
          className="float_left"
          src="images/drive_team.jpg"
          alt="one of our robot cars"
        />
        <p>
          In the award-winning Drive Team, we are working on the next big thing, Autonomous Driving,
          with our self-made 1:10 scale car. One of the highlights is the yearly participation at
          the&nbsp;
          <a
            href="https://www.epc.ed.tum.de/phoenix/autonomous-drive/carolo-cup/"
          >Carolo Cup
          </a> in Braunschweig. <Link to="/drive">Learn more &gt;</Link>
        </p>
      </BG>
      <BG>
        <h2>Flight Team</h2>
        <img
          className="float_right"
          src="images/flight_team.jpg"
          alt="one of our drones"
        />
        <p> The Flight Team concentrates on drones. Current projects include programming a drone
          to act like the Snatch from Harry Potter’s Quidditch game. Various technologies like
          Reinforcement Learning help in avoiding obstacles and flying safely. <Link to="/flight">Learn more &gt;</Link>
        </p>
      </BG>
      <BG>
        <h2>Our Supporters</h2>
        <div className="logo_container">
          <LinkAndLogo title="Exotec" href="https://www.exotec.com/" src="exotec.svg" />
        </div>
        <div className="chairs_container">
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
          We are always open to exciting collaborations. <Link to="/contact">Contact us &gt;</Link>
        </p>
      </BG>
      <BG>
        <h2>Our Mission</h2>
        {goals.map((goal) => (
          <div className="goal">
            <h3>{goal.title}</h3>
            <p>{goal.description}</p>
          </div>
        ))}
      </BG>
    </div>
  );
}

export default Home;
