import React from "react";
import bannerimg from "../../Assets/Banner/venti-views-FPKnAO-CF6M-unsplash.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-heading"></div>
        <div className="banner-image">
          <img src={bannerimg} alt="HARBOURSYNC EXPIMP PRIVATE LIMITED" />
        </div>
        <div className="banner-bottom">
          <div className="banner-items">
            <div className="banner-card">
              {/* <FaCartShopping /> */}
              <div className="banner-card-detail">
                {/* <span>Your need our provision</span> */}
                <h1>Your need our provision</h1>
                {/* <p>You Need Our Provision</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
