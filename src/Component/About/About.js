import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/About/about.jpg"
import { Link } from 'react-router-dom'

const About = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    return (
        <div className="aboutUs">
            <div className="about-main">
                <div className="about-title">
                    <span>About Us</span>
                    <h1>About Us</h1>
                </div>
                <div className="about-items">
                    <div className="about-left">
                        <div className="about-detail">
                            {/* <h3>FAIRFOX EON NOIDA, Sector 140 Noida Expressway</h3> */}
                            <p>Welcome to HARBOURSYNC EXPIMP PRIVATE LIMITED , It is a dynamic export company committed to bridging international markets with high-quality products and services. Established with a vision to promote global trade, the company specializes in the export of a diverse range of goods, ensuring that each product meets stringent international standards.</p>
                            <p>The company prides itself on its extensive network of reliable suppliers and logistics partners, which enables it to deliver products promptly and efficiently to clients around the world. HARBOURSYNC EXPIMP PRIVATE LIMITED’s portfolio includes agricultural products, textiles, machinery, and other consumer goods, catering to a wide array of industries and markets.</p>
                        </div>
                        <div className="about-button">
                            <Link to="/site-visit" onClick={toTop}>
                                <p>Contact Now</p>
                            </Link>
                        </div>
                    </div>
                    <div className="about-right">
                        <img className="image2" src={Aboutimg} alt="grandthum bhutani" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
