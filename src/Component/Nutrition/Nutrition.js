import React, { useEffect } from "react";
import "./Nutrition.css";
import nutimg from "../../Assets/Nutrition/RoastedMakhana3-removebg-preview.png";
import NutritionCard from "./NutritionCard";
import NutritionData from "./NutritionData";
import ScrollReveal from "scrollreveal";

const Nutrition = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".nutrition-right", {});

    return () => sr.destroy();
  }, []);
  
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".nutrition-left", {});

    return () => sr.destroy();
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".nutrition-mid img", {});

    return () => sr.destroy();
  }, []);

  return (
    <div className="Nutrition">
      <div className="Nutrition-main">
        <div className="Nutrition-box">
          <div className="nutrition-left">
            <div className="nutrition-item">
              {NutritionData.slice(1, 5).map((item) => (
                <NutritionCard data={item} key={item.id} />
              ))}
            </div>
          </div>
          <div className="nutrition-mid">
            <img src={nutimg} alt="" />
            <div className="nutrition-mid-desc">
              <div className="nutrition-mid-desc-box">
                <h4>Fox Nuts</h4>
                <p>approximate breakdown per 100 grams</p>
              </div>
            </div>
          </div>
          <div className="nutrition-right">
            <div className="nutrition-item">
              {NutritionData.slice(6, 10).map((item) => (
                <NutritionCard data={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
