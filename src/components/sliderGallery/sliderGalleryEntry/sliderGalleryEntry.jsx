import "./style.css";
import { motion } from "framer-motion";

export default function SliderGalleryEntry(props) {
  const { content: sliderEntry } = props;

  return (
    <motion.div
      className="sliderEntry"
      role="button"
      tabIndex={0}
    >
      <div className="sliderImgContainer">
        <img
          src={sliderEntry.image}
          alt={sliderEntry.title}
          className="sliderEntryImg"
        />
      </div>

      <h3 className="sliderEntryTitle">{sliderEntry.title}</h3>
      <p className="sliderEntryText">{sliderEntry.text}</p>
    </motion.div>
  );
}
