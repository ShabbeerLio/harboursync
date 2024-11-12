import React from "react";
import "./NutritionCard.css";

const NutritionCard = ({ data }) => {

    return (
    <div className="nutrition-card">
      <p>{data?.title}</p>
    </div>
  );
};

export default NutritionCard;
