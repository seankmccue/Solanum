import "./LocateTop.css";
import { FaLeaf } from "react-icons/fa6";
import mapImage from "../../assets/LocateGardenMap3.jpg";



function Top() {
  return (
    <div className="LocateAGarden">
      <h1>LOCATE A GARDEN:</h1>
      <div className="garden-box">
        <p>
        Around the UCSD campus, there are several vibrant and student-driven gardens designed to promote education, food sustainability, and the cultivation of local produce. 
        These green spaces are more than just patches of soil—they serve as living laboratories for environmental learning, community building, and wellness. Below, you’ll find an overview of 11 unique gardens, each with its own purpose, whether it’s to grow seasonal vegetables, support pollinators, explore permaculture, or simply offer a quiet place to relax and reconnect with nature. 
        From the bustling Student Garden to the tranquil Marshall Community Garden, there’s a spot for everyone, no matter your level of experience. Refer to the map to discover where these gardens are located and learn how you can get involved in UCSD’s growing gardening movement.
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
