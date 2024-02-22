import banniere from "../../assets/img/banniere.png";
import Thumb from "../Thumb";
import logements from "../data/logements.json";

const Home = () => {
  return (
    <div className="main">
      <div className="home">
        <div className="banner">
          <img src={banniere} alt="falaises mer" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="gallery">
          <Thumb logements={logements} />
        </div>
      </div>
    </div>
  );
};

export default Home;
