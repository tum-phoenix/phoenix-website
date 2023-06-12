import "./style.css";
import "./flickity.css";
import Flickity from 'react-flickity-component';
import SliderGalleryEntry from "./sliderGalleryEntry/sliderGalleryEntry";

const flickityOptions = {
  groupCells: true,
  initialIndex: 0,
  pageDots: true,
};

export default function SliderGallery(props) {
  const { projects } = props;

  return (
    <Flickity
      className="carousel"
      elementType="div" // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static
    >
      {Object.values(projects).map((content, i, { length }) => (
        <div
          key={content.id}
          className={i + 1 === length ? "lastSliderItem" : ""}
        >
          <SliderGalleryEntry content={content} />
        </div>
      ))}
    </Flickity>
  );
}
