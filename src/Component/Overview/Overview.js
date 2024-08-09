import React, { useEffect } from 'react'
import "./Overview.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ScrollReveal from 'scrollreveal'
import overimg from "../../Assets/Overview/overview.jpg"

const Overview = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        sr.reveal('.overview-right', {})

        return () => sr.destroy();
    }, []);
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        sr.reveal('.overview-left', {})

        return () => sr.destroy();
    }, []);

    return (
        <div className="overview">
            <div className="about-main">
                <div className="overview-item">
                    <div className="overview-left">
                        <div className="overview-form">
                            <img src={overimg} alt="harboursyncexpimp" />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="about-title">
                            <span>Overview</span>
                            <h2>Overview</h2>
                        </div>
                        <div className="overview-detail">
                            <p>At the heart of HARBOURSYNC’s operations is a dedication to quality and customer satisfaction. The company employs a robust quality control system that ensures every shipment adheres to the highest standards of excellence. This commitment to quality has earned HARBOURSYNC a reputation for reliability and trustworthiness in the international trade community.</p>
                            <p>Innovation and adaptability are core principles for HARBOURSYNC EXPIMP PRIVATE LIMITED. The company continuously explores new markets and opportunities, adapting to the ever-changing global trade environment. By leveraging advanced technologies and market insights, HARBOURSYNC stays ahead of industry trends, offering competitive prices and superior service.</p>
                            <p>The company’s professional team, with expertise in international trade regulations and market dynamics, works tirelessly to navigate the complexities of global commerce. Their expertise ensures smooth and compliant transactions, fostering long-term partnerships with clients.</p>
                            <p>HARBOURSYNC EXPIMP PRIVATE LIMITED is more than just an export company; it is a strategic partner dedicated to driving mutual growth and success in the global marketplace.</p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
