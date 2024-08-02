import React from "react";
import "./Nutrition.css";
import nutimg from "../../Assets/Nutrition/RoastedMakhana3-removebg-preview.png";

const Nutrition = () => {
  return (
    <div className="Nutrition">
      <div className="Nutrition-main">
        <div className="Nutrition-box">
          <div className="nutrition-left">
            
          </div>
          <div className="nutrition-mid">
            <img src={nutimg} alt="" />
          </div>
          <div className="nutrition-right">right</div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
