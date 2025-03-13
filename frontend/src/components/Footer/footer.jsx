import React from "react";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#C0E3A3",
        padding: "3rem",
        marginTop: "auto",
        color: "black",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      
      <p style={{ marginLeft: "3%", fontSize: "1.2rem" }}> Urban Gardening, dedicated to creating a more sustainable future. 
        <br/> Contact us at ouremail@gmail.com 
        <br/> Follow our socials for updates!
        <br/> Made with love by Solanum
        </p>
        
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: "7%", fontSize: "4rem", color: "black" }}>
       <FaInstagram />
    </a>
  </footer>
  );
};

export default Footer;






