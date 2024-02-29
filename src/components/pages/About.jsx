import banniere1 from "../../assets/img/mountains.png";
import Collapses from "../Collapses";
import colapsJson from "../data/colaps.json";
import logements from "../data/logements.json";

const About = () => {
  return (
    <div className="main">
      <div className="about">
        <div className="banner-about">
          <img src={banniere1} alt="Paysage de montagnes" />
        </div>
        <div className="collapse-container">
          {colapsJson.map((colaps, index) => (
            <Collapses key={index} index={index} title={colaps.Title}>
              {" "}
              {colaps.Text}
            </Collapses>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
