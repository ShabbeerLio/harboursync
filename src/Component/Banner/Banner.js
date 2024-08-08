import React from "react";
import bannerimg from "../../Assets/Banner/banner.jpg";
import bannervid from "../../Assets/Banner/banner.mp4";
import "./Banner.css";
// import { FaBriefcase, FaCartShopping, } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-heading"></div>
        <div className="banner-image">
          <video loop muted autoPlay>
            <source src={bannervid} type="video/mp4" />
          </video>
          {/* <img src={bannerimg} alt="grandthum bhutani group" /> */}
        </div>
        <div className="banner-bottom">
          <div className="banner-items">
            <div className="banner-card">
              {/* <FaCartShopping /> */}
              <div className="banner-card-detail">
                {/* <span>Your need our provision</span> */}
                <h4>Your need our provision</h4>
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
