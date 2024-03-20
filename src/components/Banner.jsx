import React from "react";

// on attribue deux props au composant "Banner" : "image" et "texte"
// ces deux props recevront le contenu adéquat en fonction de la requête
const Banner = ({ image, texte }) => {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" />
      {/* avec l'opérateur "ET logique" on indique au composant d'afficher le texte à l'intérieur d'une balise h1, s'il existe (si la condition est "true") */}
      {texte && <h1>{texte}</h1>}
    </div>
  );
};

export default Banner;
