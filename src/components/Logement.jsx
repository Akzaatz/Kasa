import { useParams } from "react-router-dom";
import logement from "../components/data/logements.json";

const findLogementID = (id) => {
  return logement.find((logement) => logement.id === id);
};

const Logement = () => {
  const { id } = useParams();
  const logement = findLogementID(id);
  const pictures = logement.pictures;
  const picturesHosts = logement.host.picture;

  return (
    <div className="carrousel-container">
      <div className="carrousel">
        {pictures.map((picture, index) => {
          return (
            <img src={picture} alt={picture.title} key={(picture, index)} />
          );
        })}
      </div>
      {/* <p> iD : {id}</p> */}
      <div className="card">
        <div className="card_name">
          <h1>{logement.title}</h1>
          <p>situation :{logement.location}</p>
        </div>
        <div className="card-host">
          <div className="card-host-name">
            <p>hôtes: {logement.host.name}</p>
            <img src={logement.host.picture} alt={"image de l 'appartement"} />
          </div>
        </div>
        <div className="tags">
          <p>tags : {logement.tags}</p>
        </div>
        <div className="equipements">
          <p> équipements: {logement.equipments}</p>
        </div>

        <p>rating :{logement.rating}</p>

        <p>Description de l'annonce:{logement.description}</p>
      </div>
    </div>
  );
};

export default Logement;
