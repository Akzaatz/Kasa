import React from "react";
import PropTypes from "prop-types";

const Ratings = ({ logement }) => {
  const score = parseInt(logement.rating);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const color = i < score ? "#FF6060" : "#E3E3E3";
    stars.push(
      <span key={i} style={{ color: color }}>
        ★
      </span>
    );
  }

  return (
    <div>
      <div className="stars">{stars}</div>
    </div>
  );
};

Ratings.propTypes = {
  logement: PropTypes.object.isRequired, // Assurez-vous que logement est bien un objet et qu'il est requis
};

export default Ratings;
