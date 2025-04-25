import React, { useState } from "react";
import "./Plant_Seed.css";

import houseplantsImg from "../../assets/HousePlants.png";
import fruitsImg from "../../assets/Fruits.png";
import beginnerImg from "../../assets/Beginner_Friendly.png";

export default function Plant_Seed() {
  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);

  return (
    <main className="plant-page">
      <h1 className="title">PLANTS/SEEDS</h1>

      <section className="card-row">
        {/* 1 ─ HOUSEPLANTS */}
        <div
          className={`card ${flip1 ? "flipped" : ""}`}
          onClick={() => setFlip1(!flip1)}
        >
          <div className="card__inner">
            <div className="card__face card__front">
              <h2>HOUSEPLANTS</h2>
              <img src={houseplantsImg} alt="Assorted houseplants" />
            </div>
            <div className="card__face card__back">
              <p>
                Low-light-tolerant classics such as pothos, snake plant, and ZZ
                thrive indoors with minimal fuss.
              </p>
            </div>
          </div>
        </div>

        {/* 2 ─ FRUITS / VEGGIES */}
        <div
          className={`card ${flip2 ? "flipped" : ""}`}
          onClick={() => setFlip2(!flip2)}
        >
          <div className="card__inner">
            <div className="card__face card__front">
              <h2>FRUITS</h2>
              <img src={fruitsImg} alt="Orange tree laden with fruit" />
            </div>
            <div className="card__face card__back">
              <p>
                Grow your own produce! Patio tomatoes, peppers, or dwarf citrus
                all do well in containers.
              </p>
            </div>
          </div>
        </div>

        {/* 3 ─ BEGINNER FRIENDLY */}
        <div
          className={`card ${flip3 ? "flipped" : ""}`}
          onClick={() => setFlip3(!flip3)}
        >
          <div className="card__inner">
            <div className="card__face card__front">
              <h2>BEGINNER</h2>
              <img src={beginnerImg} alt="Potted succulent" />
            </div>
            <div className="card__face card__back">
              <p>
                Hard-to-kill options such as succulents and hardy herbs are
                perfect for first-time growers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
