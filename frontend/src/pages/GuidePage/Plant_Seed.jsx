import React, { useState } from "react";
import "./Plant_Seed.css";

// Animated PNG (APNG) icons
import houseplantsAnim from "../../assets/HousePlants.apng";
import fruitsAnim from "../../assets/Fruits.apng";
import beginnerAnim from "../../assets/Beginner_Friendly.apng";

/**
 * Flip‑card showcase for three categories of plants/seeds.
 * Each front face now displays an APNG that loops automatically.
 */
export default function Plant_Seed() {
  const [flipped, setFlipped] = useState([false, false, false]);

  const toggleCard = (index) =>
    setFlipped((prev) => prev.map((f, i) => (i === index ? !f : f)));

  return (
    <main className="plant-page">
      <h1 className="title">PLANTS / SEEDS</h1>

      <section className="card-row">
        {/* HOUSEPLANTS */}
        <div
          className={`card ${flipped[0] ? "flipped" : ""}`}
          onClick={() => toggleCard(0)}
        >
          <div className="card__inner">
            <div className="card__face card__front">
              <h2>HOUSEPLANTS</h2>
              <img
                src={houseplantsAnim}
                alt="Animated icon of assorted houseplants"
                className="animated-icon"
              />
            </div>
            <div className="card__face card__back">
              <p>
                Bring the outdoors in with leafy greens that thrive on a sunny
                windowsill—from pothos to spider plants.
              </p>
            </div>
          </div>
        </div>

        {/* FRUITS */}
        <div
          className={`card ${flipped[1] ? "flipped" : ""}`}
          onClick={() => toggleCard(1)}
        >
          <div className="card__inner">
            <div className="card__face card__front">
              <h2>FRUITS</h2>
              <img
                src={fruitsAnim}
                alt="Animated icon of a fruit tree"
                className="animated-icon"
              />
            </div>
            <div className="card__face card__back">
              <p>
                Dwarf citrus, strawberries, and tomatoes can all flourish in
                small urban gardens or roomy pots.
              </p>
            </div>
          </div>
        </div>

        {/* BEGINNER FRIENDLY */}
        <div
          className={`card ${flipped[2] ? "flipped" : ""}`}
          onClick={() => toggleCard(2)}
        >
          <div className="card__inner">
            <div className="card__face card__front">
              <h2>BEGINNER</h2>
              <img
                src={beginnerAnim}
                alt="Animated icon of a succulent in a pot"
                className="animated-icon"
              />
            </div>
            <div className="card__face card__back">
              <p>
                Hard‑to‑kill options like succulents and robust herbs are
                perfect for first‑time growers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
