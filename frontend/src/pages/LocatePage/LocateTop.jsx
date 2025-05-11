import "./LocateTop.css";
import { FaLeaf } from "react-icons/fa6";
import mapImage from "../../assets/gardenMap.png";



function Top() {
  return (
    <div className="LocateAGarden">
      <h1>LOCATE A GARDEN:</h1>
      <div className="garden-box">
        <p>
          Lorem ipsum dolor sit amet. Sed nemo explicabo est earum nostrum quo
          voluptates omnis eos culpa magnam. Ut vero dolor et eveniet impedit
          est recusandae debitis. Est quibusdam delectus eum nihil minima non
          explicabo placeat. Lorem ipsum dolor sit amet. Sed nemo explicabo est earum nostrum quo
          voluptates omnis eos culpa magnam. Ut vero dolor et eveniet impedit
          est recusandae debitis. Est quibusdam delectus eum nihil minima non
          explicabo placeat. Lorem ipsum dolor sit amet. Sed nemo explicabo est earum nostrum quo
          voluptates omnis eos culpa magnam. Ut vero dolor et eveniet impedit
          est recusandae debitis. Est quibusdam delectus eum nihil minima non
          explicabo placeat.
        </p>
      </div>

      <div className="leaf-banner">
        <FaLeaf className="leaf-icon" />
        <p className="icon-text">The leaf icon signifies the nearby garden location</p>
      </div>
      <img src={mapImage} alt="UCSD Garden Map" className="garden-map" />
    </div>
  );
}

export default Top;
