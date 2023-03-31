import './style.css';
import { Link } from "react-router-dom";
import BG from "../../components/BG";
import LinkAndLogo from "../../components/LinkAndLogo";

function Home() {
  return (
    <div>
      <img
        className="wide"
        src="images/header.png"
        alt="the phoenix team"
      />
      <BG>
        <h2>Who we are</h2>
        <p>We are the Phoenix Robotics student club at TUM. A passionate team of students from
          various disciplines working together to build autonomous model cars and drones supported
          by the Chair of Automatic Control and the Institute of Flight System Dynamics. In our lab
          in the mechanical engineering building, we work on everything starting at low-level
          engineering to high-level software like flight control and AI.
        </p>
      </BG>
      <BG>
        <h2>Drive Team</h2>
        <img
          className="float_left"
          src="images/drive_team.jpg"
          alt="one of our robot cars"
        />
        <p> Our award-winning Drive Team is working on the next big thing, Autonomous Driving, with
          their self-made 1:10 scale car. One of the highlights is the yearly participation at
          the&nbsp;
          <a
            href="https://www.epc.ed.tum.de/phoenix/autonomous-drive/carolo-cup/"
          >Carolo Cup
          </a> in Braunschweig.
        </p>
        <Link to="/drive">Learn more &gt;</Link>
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
          Reinforced Learning help in avoiding obstacles and flying safely.
        </p>
        <Link to="/flight">Learn more &gt;</Link>
      </BG>
      <BG>
        <h2>Our sponsors and academic supporters</h2>
        <LinkAndLogo title="Exotec" href="https://www.exotec.com/" src="exotec.svg" />
        <LinkAndLogo title="Institute of Flight System Dynamics" href="https://www.epc.ed.tum.de/en/rt/home/" src="fsd.jpg" />
        <LinkAndLogo title="Chair of Automatic Control" href="https://www.fsd.ed.tum.de/" src="chair.jpg" />
        <p>
          We are always open to collaborations.
        </p>
        <Link to="/contact">Contact us &gt;</Link>
      </BG>
      <BG>
        <h2>Our mission</h2>
        <p>Gain practical experience </p>
        <p>Socialize with like-minded people </p>
        <p>Encourage technological responsibility </p>
      </BG>
    </div>
  );
}

export default Home;
