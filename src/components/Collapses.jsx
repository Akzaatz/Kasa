import { Children, useState } from "react";
import arrow from "../assets/img/arrow-up.png";
import PropTypes from "prop-types";

const Collapses = ({ title, children }) => {
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
          {children}
        </div>
      </div>
    </div>
  );
};

Collapses.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Collapses;
