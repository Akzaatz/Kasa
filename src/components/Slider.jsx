import { useParams } from "react-router-dom";
import logement from "../components/data/logements.json";
import { useState } from "react";

const findLogementID = (id) => {
  return logement.find((logement) => logement.id === id);
};

const PictureSlider = () => {
  //  on utilise useParams pour  récupèrer l'ID du logement à partir de l'URL
  const { id } = useParams();
  // appelle la fonction findLogementID pour récupérer les données du logement correspondant
  const logementData = findLogementID(id);
  // on créé un tableau vide pour récupérer les images
  const pictures = logementData ? logementData.pictures : [];

  // On stocke l'index de l'image actuellement affichée dans la variable avec useState
  const [showSlide, setShowSlide] = useState(0);
  // on stocke le nombre d'image disponibles dans le tableau
  const length = pictures.length;

  const prevSlide = () => {
    setShowSlide(showSlide === 0 ? length - 1 : showSlide - 1);
  };

  const nextSlide = () => {
    setShowSlide(showSlide === length - 1 ? 0 : showSlide + 1);
  };

  // on Vérifie s'il y a plus d'une image et si pictures est défini
  const shouldShowArrows = length > 1 && pictures;

  return (
    <div className="slider-carrousel">
      {shouldShowArrows && (
        // on encapsule les chevrons avec React fragments
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
