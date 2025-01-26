import React from "react";
import "./ImageScatter.css";

const ScatteredImages = () => {
  const images = [
    "opp.png",
    "mkrr.png",
    "pep.png",
    "usdt.png",
    "link.png",
    "eth.png",
    "eu.png",
    "opp.png",
  ];

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const getRandomPosition = () => ({
    left: Math.random() * (screenWidth - 150),
    top: Math.random() * (screenHeight - 150),
  });

  return (
    <div
      className="jjj  mt-[-2950px]  "
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {images.map((src, index) => {
        const position = getRandomPosition();
        return (
          <img
            key={index}
            src={src}
            className="blur-md h"
            alt={`Scattered ${index}`}
            style={{
              position: "absolute",
              left: position.left,
              top: position.top,
              // Adjust size
              height: "auto",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
        );
      })}
    </div>
  );
};

export default ScatteredImages;
