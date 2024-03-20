import React from "react";
import banniere1 from "../../assets/img/mountains.png";
import Collapse from "../Collapse";
import colapsJson from "../data/colaps.json";
import Banner from "../Banner";

const About = () => {
  return (
    <div className="main">
      <div className="about">
        {/* dans le composant "Banner", la prop "image" reçoit comme argument l'image "mountains.png"*/}
        <Banner image={banniere1} />
        <div className="CollapsesButtons">
          {colapsJson.map((colaps, index) => (
            <Collapse key={index} title={colaps.Title} content={colaps.Text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
