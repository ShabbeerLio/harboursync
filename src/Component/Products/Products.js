import React, { useEffect } from "react";
import "./Products.css";
import ScrollReveal from 'scrollreveal'


const Products = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        sr.reveal('.Products-box', {})

        return () => sr.destroy();
    }, []);

  return (
    <div className="Products">
      <div className="Products-main">
        <div className="Products-box">
          <div className="about-title">
            <span>Our Products</span>
            <h1>Our Products</h1>
          </div>
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
      </div>
    </div>
  );
};

export default Products;
