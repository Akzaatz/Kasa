import React from "react";
import PropTypes from "prop-types";
import logements from "../components/data/logements.json";

const Tags = ({ logementId }) => {
  const logement = logements.find((logement) => logement.id === logementId);

  return (
    <ul className="tags-container-tags">
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
