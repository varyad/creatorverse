import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ name, url, description, img, id }) {
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.stopPropagation(); 
    window.open(url, "_blank"); 
  };

  return (
    <div
      className="creator-card"
      onClick={() => {
        console.log("clicked on: " + name);
        navigate(`/view-creator/${id}`); 
      }}
    >
      <h2>{name}</h2>
      <p>{description}</p>
      <button onClick={handleButtonClick}>Page Link</button>
      <img src={img} alt="creator" />
    </div>
  );
}
