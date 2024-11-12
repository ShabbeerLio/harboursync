import React, { useEffect } from 'react'
import "./About.css"
import Aboutimg from "../../Assets/About/IMG_20241108_112810_472.png"
import ScrollReveal from 'scrollreveal'

const About = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        sr.reveal('.about-right', {})

        return () => sr.destroy();
    }, []);
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        sr.reveal('.about-left', {})

        return () => sr.destroy();
    }, []);

    return (
        <div className="aboutUs">
            <div className="about-main">
                <div className="about-title">
                    <span>WE ARE</span>
                    <h2>WE ARE</h2>
                </div>
                <div className="about-items">
                    <div className="about-left">
                        <div className="about-detail">
                            {/* <h3>FAIRFOX EON NOIDA, Sector 140 Noida Expressway</h3> */}
                            <p>HARBOURSYNC EXPIMP PRIVATE LIMITED, a premier exporter of fresh, and high-quality agricultural products, committed to delivering excellence across global markets. With a focus on meeting the growing demands for healthy and nutritious produce, we specialize in offering a diverse range of all farm-fresh agricultural commodities. Our dedication to quality, sustainability, and customer satisfaction sets us apart in the competitive export industry.</p>
                            <p>We pride ourselves on working closely with local farmers, ensuring that only the finest products are sourced and processed to meet international standards. With a robust supply chain and cutting-edge logistics, HARBOURSYNC EXPIMP ensures timely and efficient delivery to clients worldwide. Trusted for our consistency and reliability, we are constantly expanding our reach, delivering the best of India’s agriculture to global tables.</p>
                        </div>
                        {/* <div className="about-button">
                            <a href="#contact">
                                <p>Contact Now</p>
                            </a>
                        </div> */}
                    </div>
                    <div className="about-right">
                        <img className="image2" src={Aboutimg} alt="Export Import" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
