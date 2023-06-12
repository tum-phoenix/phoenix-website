import BG from "../../components/BG";
import "./style.css";
import SliderGallery from "../../components/sliderGallery/SliderGallery";
import projectsConfig from "./config";

export default function Flight() {
  return (
    <div className="flightContainer">
      <h1>Autonomous Flight</h1>
      <p>
        In the flight team, we build autonomous drones for various applications, from warehouses to
        even augmented reality games.
        For this, we design and build our own drones from scratch, from the frame and motors to the
        flight controller software.
      </p>
      <BG>
        <h2>IMAV Competition</h2>
        <p>
          The current project of the Flight team is the development of a drone to take part in the
          IMAV competition. The competition is hosted by the RWTH Aachen and will take place in
          September.
          The task given in the competition is the autonomous transport and stacking of blocks.
          Teams can decide between different various difficulties, from picking up the boxes from a
          cooperative or a moving platform, and between different flying paths, from a free lane to
          a one blocked by a moving obstacle, and different weights.
          For us the challenge is to develop a software that is up to the challenge, as well as the
          needed hardware such as a gripper.
        </p>
      </BG>
      <BG>
        <h2>Our Recent Projects</h2>
        <SliderGallery projects={projectsConfig} />
      </BG>
    </div>
  );
}
