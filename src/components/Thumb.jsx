import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Thumb = ({ logements }) => {
  return logements.map((logement) => (
    <Link to={`/logement/${logement.id}`} className="thumb" key={logement.id}>
      <img src={logement.cover} alt={"image de l 'appartement"} />
      <h3>{logement.title}</h3>
    </Link>
  ));
};
Thumb.propTypesropTypes = {
  logements: PropTypes.array.isRequired,
};

export default Thumb;
