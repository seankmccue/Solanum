import React from "react";
import "./buy_supplies.css";

import LowesImage from "../../assets/Lowes.png";
import CostcoImage from "../../assets/Costco.png";
import HomeDepotImage from "../../assets/Home_Depot.png";

function BuySupplies() {
  return (
    <div className="buy-supplies">
      <div className="cards">
        {/* Lowes Card */}
        <div className="card">
          {/* link to lowes.com */}
          <a
            href="https://www.lowes.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-header">LOWES</div>
          </a>

          <img src={LowesImage} alt="Lowes" className="card-image" />

          <p className="card-text">
            Best for a variety of plant seeds and fertilizers
          </p>
        </div>

        {/* Costco Card */}
        <div className="card">
          {/* link to costco.com */}
          <a
            href="https://www.costco.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-header">COSTCO</div>
          </a>
          <img src={CostcoImage} alt="Costco" className="card-image" />
          <p className="card-text">
            Ideal for bulk purchases of fertilizers and pots
          </p>
        </div>

        {/* Home Depot Card */}
        <div className="card">
          <a
            href="https://www.homedepot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-header">HOME DEPOT</div>
          </a>
          <img src={HomeDepotImage} alt="Home Depot" className="card-image" />
          <p className="card-text">
            A great place for gardening tools like shovels, trowels, and pruners
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuySupplies;
