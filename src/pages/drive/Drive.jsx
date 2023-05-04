import "./style.css";
import { Link } from "react-router-dom";
import BG from "../../components/BG";

function Drive() {
  return (
    <div className="driveContainer">
      <div className="driveHeader">
        <h1>Autonomous Drive</h1>
        <p>
          We do miniature autonomous driving, using a 1:10 scale model vehicle that is equipped with
          all necessary sensors, actuators, electronic components and computers.
          Our technology is very similar to what is being used in real autonomous cars.
          Thus, we are able to gain experience with autonomous automotive systems while still at the
          university.
          To build a car that can work perfectly, it is crucial that we as an interdisciplinary team
          work closely together in the fields of mechanics, electronics, software and machine
          learning.
          This year, we are looking forward to prove our technology at the Bosch Future Mobility
          Challenge.
        </p>
      </div>
      <div className="driveMain">
        <BG>
          <h2>Technology in Our Vehicle</h2>
          <p>
            More information coming soon ...
          </p>
        </BG>
        <BG>
          <h2>Bosch Future Mobility Challenge</h2>
          <p>
            As part of the Bosch Future Mobility Challenge, we are working diligently to develop
            state-of-the-art algorithms to navigate our 1/10 scale vehicles in a miniature smart
            city environment. Our team is made up of talented and passionate students from the
            Technical University of Munich, who are committed to pushing the boundaries of
            what&rsquo;s possible in the world of autonomous driving and connectivity. With the
            support of the Bosch Engineering Center Club and academic professors, we are developing
            cutting-edge algorithms and technologies that will pave the way for the future of
            mobility. Learn more about the challenge on our
            <Link to="/future-mobility-challenge"> dedicated web page &gt;</Link>
          </p>
        </BG>
        <BG>
          <h2>Carolo-Cup (discontinued)</h2>
          <p>
            Ever since 2010, the Carolo Cup has been a great opportunity to compete against other
            teams and put our technological advancements to the test.
            Therefore we regret to hear that the competition will no longer take place in 2022.
            Nevertheless, here are some impressions of past competitions:
          </p>
        </BG>
        <BG>
          <h2>Overview of Our Vehicles</h2>
          <p>Coming soon ...</p>
        </BG>
      </div>
    </div>
  );
}

export default Drive;
