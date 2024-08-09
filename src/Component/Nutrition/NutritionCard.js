import React from "react";
import "./NutritionCard.css";

const NutritionCard = ({ data }) => {

    return (
    <div className="nutrition-card">
      <h3>
        {data?.nutrition} <span>{data?.measure}</span>
      </h3>
      <p>{data?.title}</p>
    </div>
  );
};

export default NutritionCard;
