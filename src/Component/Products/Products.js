import React, { useEffect } from "react";
import "./Products.css";
import ScrollReveal from "scrollreveal";
import makhana from "../../Assets/Products/makhana.jpg"

const Products = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".product-box-left", {});

    return () => sr.destroy();
  }, []);
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".product-box-right", {});

    return () => sr.destroy();
  }, []);

  return (
    <div className="Products">
      <div className="Products-main">
        <div className="about-title">
          <span>Our Products</span>
          <h2>Our Products</h2>
        </div>
        <div className="Products-box">
          <div className="product-box-left">
            <h2>Fox Nuts (Makhana)</h2>
            <p>
              Fox nuts, also known as makhana or lotus seeds, is a nutrient-rich
              snack derived from the seeds of the Euryale ferox plant, commonly
              found in India and parts of Asia. Revered in traditional medicine
              for its health benefits, makhana is high in protein, fiber, and
              essential minerals like magnesium and potassium. Low in fat and
              calories, it's a popular choice for weight management and heart
              health. Its antioxidant properties support cellular health and
              combat inflammation. Typically consumed roasted, makhana is a
              versatile ingredient in various culinary preparations, including
              snacks, sweets, and savory dishes.
            </p>
          </div>
          <div className="product-box-right">
            <img src={makhana} alt="Fox Nuts" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
