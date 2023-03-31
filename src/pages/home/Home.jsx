import './style.css';
import { Link } from "react-router-dom";
import BG from "./BG";
import Logo from "./Logo";

function Home() {
  const placeholder = "https://picsum.photos/400";
  return (
    <div>
      <img
        className="wide"
        src="https://picsum.photos/1920/800"
        alt="phoenix logo"
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
          src={placeholder}
          alt="placeholder"
        />
        <p> Our award-winning Drive Team is working on the next big thing, Autonomous Driving with
          the self-made 1:10 scale car. One of the highlights is the yearly participation at
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
          src={placeholder}
          alt="placeholder"
        />
        <p> The Flight Team concentrates on drones. Current projects include programming a drone
          to act like the Snatch from Harry Potter’s Quidditch game. Various technologies like
          Reinforced Learning help in avoiding obstacles and flying safely.
        </p>
        <Link to="/flight">Learn more &gt;</Link>
      </BG>
      <BG>
        <h2>Our sponsors and academic supporters</h2>
        <Logo src="exotec.svg" />
        <Logo src="fsd.jpg" />
        <Logo src="chair.jpg" />
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
