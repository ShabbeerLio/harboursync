import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Overview = () => {
    return (
        <div className="overview">
            <div className="about-main">
                <div className="overview-item">
                    <div className="overview-left">
                        <div className="overview-form">
                            <Form />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="about-title">
                            <span>Overview</span>
                            <h1>Overview</h1>
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
