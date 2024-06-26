import React, { useState } from "react";
import PropTypes from "prop-types";

import arrow from "/img/arrow-up.png";

const Collapse = ({ title, content, onToggle }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);

    if (typeof onToggle === "function") {
      onToggle();
    }
  };

  return (
    <div className="collapse-container">
      {" "}
      <div className={`collapses-content ${isVisible ? "visible" : ""}`}>
        {" "}
        <div className="headCollapses">
          {" "}
          <h3>{title}</h3>
          <img
            src={arrow}
            className={`arrow ${isVisible ? "down" : ""}`}
            alt="arrow"
            onClick={handleToggle}
          />
        </div>
        <div className={`paragraph ${isVisible ? "animate flex" : ""}`}>
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
