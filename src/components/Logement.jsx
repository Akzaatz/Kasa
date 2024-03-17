// on importe les modules et composants nécessaires pour construire la page
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logement from "../components/data/logements.json";
import Collapse from "./Collapse";
import Slider from "./Slider";
import Tags from "./Tags";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";

// on importe les données de chaque logement via l'agument "id"
const findLogementID = (id) => {
  return logement.find((logement) => logement.id === id);
};

const Logement = () => {
  const { id } = useParams();
  const logementData = findLogementID(id);
  // on déclare une variable d'état
  const [listeDeployee, setListeDeployee] = useState(false);

  const toggleListe = () => {
    setListeDeployee(!listeDeployee);
    console.log(listeDeployee);
  };
  // S'il n'y a pas de données de logement correspondant à l'id extrait de l'URL, le composant retourne un message d'erreur avec un lien vers la page d'accueil.
  if (!logementData) {
    return (
      <div className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>

        <div className="error-link">
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
      </div>
    );
  }
  // Les données du logement extraites sont déstructurées pour accéder à ses différentes propriétés.
  const { pictures, host, title, rating, location, equipments, description } =
    logementData;

  // on construit la structure HTML
  return (
    <div className="carrousel-container">
      <div className="carrousel">
        <Slider />
      </div>

      <div className="card">
        <div className="card-location-container">
          <div className="card-location-container-name">
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
          <div className="card-location-container-tags">
            <Tags logementId={id} />
          </div>
        </div>

        <div className="card-host-container">
          <div className="card-host-container-name">
            <p>{host.name}</p>

            <div>
              <img src={host.picture} alt="portrait du propriétaire" />
            </div>
          </div>

          <div className="card-host-container-ratings">
            <div>
              <Ratings logement={logementData} />
            </div>
          </div>
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
                    <li key={equipement}>{equipement} </li>
                  </div>
                ))}
              </ul>
            }
            onToggle={toggleListe}
          />
        </div>
      </div>
    </div>
  );
};

export default Logement;
