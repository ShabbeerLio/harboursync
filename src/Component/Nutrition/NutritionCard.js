import React from "react";
import "./NutritionCard.css";

const NutritionCard = ({ data }) => {

    return (
    <div className="nutrition-card">
      <h2>
        {data?.nutrition} <span>{data?.measure}</span>
      </h2>
      <p>{data?.title}</p>
    </div>
  );
};

export default NutritionCard;
