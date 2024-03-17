import React from "react";
import banniere1 from "../../assets/img/mountains.png";
import Collapse from "../Collapse";
import colapsJson from "../data/colaps.json";

const About = () => {
  return (
    <div className="main">
      <div className="about">
        <div className="banner-about">
          <img src={banniere1} alt="Paysage de montagnes" />
        </div>
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
