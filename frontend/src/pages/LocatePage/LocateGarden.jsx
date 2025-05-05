import React from "react";
 import "./LocateGarden.css";
 
 /* ------- images (all in src/assets/) ---------------- */
 import illusGardening from "../../assets/gardening.png";
 import illusGarden from "../../assets/garden.png";
 import illusFlowers from "../../assets/flowers.png";
 import illusSpinach from "../../assets/spinach.png";
 import instaIcon from "../../assets/instagram.png";
 
 export default function LocateGarden() {
   return (
     <main className="locate-wrapper">
       <h1 className="locate-title">
         STILL INTERESTED?
         <br />
         JOIN ONE OF UCSD’S GARDENING CLUBS:
       </h1>
 
       <section className="clubs">
         {/* 1 ─ Marshall Community Garden */}
         <div className="club-row">
           <img src={illusGardening} alt="" className="side-illus" />
           <div className="club-card">
             <div className="club-header">
               <img
                 src={instaIcon}
                 alt="Instagram icon"
                 className="insta-icon"
               />
               <h2>MARSHALL COMMUNITY GARDEN</h2>
             </div>
             <p>
               Lorem ipsum dolor sit amet. Sed nemo explicabo est earum nostrum
               quo voluptates omnis eos culpa magnam.
             </p>
           </div>
         </div>
 
         {/* 2 ─ Roger’s Community Garden */}
         <div className="club-row">
           <img src={illusGarden} alt="" className="side-illus" />
           <div className="club-card">
             <div className="club-header">
               <img
                 src={instaIcon}
                 alt="Instagram icon"
                 className="insta-icon"
               />
               <h2>ROGER’S COMMUNITY GARDEN</h2>
             </div>
             <p>
               Lorem ipsum dolor sit amet. Sed nemo explicabo est earum nostrum
               quo voluptates omnis eos culpa magnam.
             </p>
           </div>
         </div>
 
         {/* 3 ─ Warren Grow */}
         <div className="club-row">
           <img src={illusFlowers} alt="" className="side-illus" />
           <div className="club-card">
             <div className="club-header">
               <img
                 src={instaIcon}
                 alt="Instagram icon"
                 className="insta-icon"
               />
               <h2>WARREN GROW</h2>
             </div>
             <p>
               Lorem ipsum dolor sit amet. Sed nemo explicabo est earum nostrum
               quo voluptates omnis eos culpa magnam.
             </p>
           </div>
         </div>
 
         {/* 4 ─ Seventh College Garden */}
         <div className="club-row">
           <img src={illusSpinach} alt="" className="side-illus" />
           <div className="club-card">
             <div className="club-header">
               <img
                 src={instaIcon}
                 alt="Instagram icon"
                 className="insta-icon"
               />
               <h2>SEVENTH COLLEGE GARDEN</h2>
             </div>
             <p>
               Lorem ipsum dolor sit amet. Sed nemo explicabo est earum nostrum
               quo voluptates omnis eos culpa magnam.
             </p>
           </div>
         </div>
       </section>
     </main>
   );
 }