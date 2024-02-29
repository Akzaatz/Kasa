import React from "react";
import { useParams } from "react-router-dom";
import logement from "../components/data/logements.json";
import Collapse from "./Collapse";
import Slider from "./Slider";
import Tags from "./Tags";
import Ratings from "./Ratings";

const findLogementID = (id) => {
  return logement.find((logement) => logement.id === id);
};

const Logement = () => {
  const { id } = useParams();
  const logementData = findLogementID(id);

  if (!logementData) {
    return <div>Logement introuvable</div>;
  }

  const { pictures, host, title, rating, location, equipments, description } =
    logementData;

  return (
    <div className="carrousel-container">
      <div className="carrousel">
        <Slider />
      </div>

      <div className="card">
        <div className="card-name">
          <h1>{title}</h1>
          <p>{location}</p>
        </div>
        <div className="card-host">
          <p>{host.name}</p>
          <div>
            <img src={host.picture} alt="portrait du propriétaire" />
          </div>
        </div>
        <div className="tags-container">
          <Tags logementId={id} />
        </div>
        <div className="ratings">
          <div>
            <Ratings logement={logementData} />
          </div>
        </div>
        <div className="CollapsesButtons">
          <div className="description-button">
            <Collapse title="Description" content={description} />
          </div>
          <div className="equipements-button">
            <Collapse
              title="Équipements"
              content={
                <ul>
                  {equipments.map((equipement, index) => (
                    <div key={index} className="li">
                      <li Key={equipement}>{equipement} </li>
                    </div>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logement;
