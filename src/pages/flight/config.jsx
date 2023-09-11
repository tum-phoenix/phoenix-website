// images
import gsImg from "./img/golden_snitch.jpeg";
import gstsImg from "./img/gs_technical_sketch.jpg";
import gseImg from "./img/gs_electronics.jpg";
import tarotImg from "./img/tarot.png";

const projectsConfig = {
  golden_snitch: {
    id: "goldensnitch",
    title: "Golden Snitch".padEnd(20, ' '),
    image: gsImg,
    text: `
    Similar to the Golden Snitch from Harry Potter, 
    this drone is to be used in a game in which the players have to catch the drone. 
    The players wear AR glasses so that the drone can be displayed as any object, 
    including a magical flying snitch. 
    For this purpose, the drone has an autonomous controller that uses cameras 
    to perceive its surroundings and recognizes objects and the position of the players 
    with the help of machine learning.`.trim(),
  },
  gs_technical_sketch: {
    id: "gstechnicalsketch",
    title: "gs_Technical_Sketch",
    image: gstsImg,
    text: "LED bands on the drone can also be used to program in visual effects in addition to the AR world. To protect the players and for better crash resistance, the drone is surrounded by a sturdy carbon fiber cage. For the project we cooperate with the Chair of Augmented Reality and with the Chair of Flight System Dynamics.",
  },
  gs_electronics: {
    id: "gselectronics",
    title: "gs_electronics",
    image: gseImg,
    text: "  ",
  },
  tarot: {
    id: "tarot",
    title: "Tarot",
    image: tarotImg,
    text: "Unlike most other projects that deal with the topic of drones, we do not work with preexisting hardware that is already capable of flight out of the box. Instead, our main goal is to build autonomous multicopter from scratch. This makes it possible for us to get to know every last detail of the process of developing a robot from the ground up, be it the mechanics, the electronics or the software involved. Thus, in addition to the theoretical knowledge from our study programs, we are able to gain valuable practical experience for our later professions.",
  },
};

export default projectsConfig;
