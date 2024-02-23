import React from "react";
import PropTypes from "prop-types";
import logements from "../components/data/logements.json";

const Tags = ({ logementId }) => {
  const logement = logements.find((logement) => logement.id === logementId);

  if (!logement) {
    return null; // Gérer le cas où aucun logement n'est trouvé pour l'ID donné
  }

  return (
    <ul className="tags-container">
      {logement.tags.map((tag, index) => (
        <li className="tags" key={index}>
          <p>{tag}</p>
        </li>
      ))}
    </ul>
  );
};

Tags.propTypes = {
  logementId: PropTypes.string.isRequired,
};

export default Tags;