import React, { useEffect } from "react";
import "./Products.css";
import ScrollReveal from "scrollreveal";
import makhana from "../../Assets/Products/IMG_20241112_095445_708.png"

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
            <h2>Makhana (Fox Nuts)</h2>
            <p>
              Makhana, also known as fox nuts, is primarily cultivated in the heart of Bihar, India, where the fertile soil and favorable climate create ideal growing conditions. The state’s wetland areas  offer the perfect environment for its cultivation. Grown in waterlogged fields, the Makhana plant thrives in shallow ponds and lakes, where its seeds are harvested after a labor-intensive process. Bihar contributes significantly to India’s Makhana production, with the crop being an essential part of local agriculture and a major export product. The seeds are processed into a variety of snacks and medicinal products.
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
