import { useParams } from "react-router-dom";
import logement from "../components/data/logements.json";
import Slider from "./Slider";
import Tags from "./Tags";

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
          <p>{rating} étoiles</p>
          <div>
            <img src={host.picture} alt="portrait du propriétaire" />
          </div>
        </div>
        <div className="tags-container">
          <Tags logementId={id} />
        </div>
        <div className="equipements">
          <p>équipements: {equipments}</p>
        </div>
        <p>Description de l'annonce: {description}</p>
      </div>
    </div>
  );
};

export default Logement;
