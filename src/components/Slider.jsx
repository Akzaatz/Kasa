import { useParams } from "react-router-dom";
import logement from "../components/data/logements.json";
import { useState } from "react";

const findLogementID = (id) => {
  return logement.find((logement) => logement.id === id);
};

const PictureSlider = () => {
  const { id } = useParams();
  const logementData = findLogementID(id);
  const pictures = logementData ? logementData.pictures : [];
  const [showSlide, setShowSlide] = useState(0);
  const length = pictures.length;
  const prevSlide = () => {
    setShowSlide(showSlide === 0 ? length - 1 : showSlide - 1);
  };

  const nextSlide = () => {
    setShowSlide(showSlide === length - 1 ? 0 : showSlide + 1);
  };

  const shouldShowArrows = length > 1 && pictures;

  return (
    <div className="slider-carrousel">
      {shouldShowArrows && (
        <>
          <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
          <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
        </>
      )}
      {pictures.map((picture, index) => {
        return (
          <img
            src={picture}
            alt={`Slide ${index}`}
            key={index}
            style={{ display: index === showSlide ? "block" : "none" }}
          />
        );
      })}
    </div>
  );
};

export default PictureSlider;
