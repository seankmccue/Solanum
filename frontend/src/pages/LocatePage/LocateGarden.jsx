import React, { useEffect, useState} from "react";
import "./LocateGarden.css";


/* ------- images (all in src/assets/) ---------------- */
import illusGardening from "../../assets/gardening.png";
import illusGarden from "../../assets/garden.png";
import illusFlowers from "../../assets/flowers.png";
import illusSpinach from "../../assets/spinach.png";
import instaIcon from "../../assets/instagram.png";


export default function LocateGarden() {
  const [gardens, setGardens] = useState([]);


  useEffect(() => {
    fetch("/api/garden")
      .then((res) => res.json())
      .then((data) => {
        setGardens(data);
      })
      .catch((err) => {
        console.error("Error fetching gardens:", err);
      });
  }, []);


  const gardenImages = [illusGardening, illusGarden, illusFlowers, illusSpinach];


  return (
    <main className="locate-wrapper">
      <h1 className="locate-title">
        STILL INTERESTED?
        <br />
        JOIN ONE OF UCSD’S GARDENING CLUBS:
      </h1>


      <section className="clubs">
        {gardens.map((garden, index) => (
          <div key={index} className="club-row">
            <img
              src={gardenImages[index % gardenImages.length]}
              alt=""
              className="side-illus"
            />
            <div className="club-card">
              <div className="club-header">
              {(
                <a
                  href={`https://instagram.com/${garden.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instaIcon} alt="Instagram Icon" className="insta-icon" />
                </a>
              )}
              <h2>{garden.name.toUpperCase()}</h2>
              </div>
              {garden.mission && <p><strong>Mission:</strong> {garden.mission}</p>}
              <p><strong>Location:</strong> {garden.location}</p>
              {garden.email && <p><strong>Contact:</strong> {garden.email}</p>}
              {garden.instagram && <p><strong>Instagram:</strong> @{garden.instagram}</p>}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}