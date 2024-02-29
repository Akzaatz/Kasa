import React, { useState } from "react";
import PropTypes from "prop-types";
import arrow from "../assets/img/arrow-up.png";

const Collapse = ({ title, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="collapse-container">
      <div className={`collapses-content ${isVisible ? "visible" : ""}`}>
        <div className="headCollapses" onClick={handleToggle}>
          <h3>{title}</h3>
          <img
            src={arrow}
            className={`arrow ${isVisible ? "down" : ""}`}
            alt="arrow"
          />
        </div>
        <div className={`paragraph ${isVisible ? "animate" : ""}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
};

export default Collapse;
