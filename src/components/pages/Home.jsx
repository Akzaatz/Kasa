import React from "react";
import banniere from "/img/banniere.png";
import Thumb from "../Thumb";
import logements from "../data/logements.json";
import Banner from "../Banner";

const Home = () => {
  return (
    <div className="main">
      <div className="home">
        {/* dans le composant "Banner", on passe respectivement aux props "image" et "textes" deux arguments : 
        - l'image "banniere.png" pour "image"
        - le texte "Chez vous, partout et ailleurs"  pour "texte"*/}
        <Banner image={banniere} texte="Chez vous, partout et ailleurs" />
        <div className="gallery">
          <Thumb logements={logements} />
        </div>
      </div>
    </div>
  );
};

export default Home;
