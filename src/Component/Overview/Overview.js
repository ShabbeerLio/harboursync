import React, { useEffect } from 'react'
import "./Overview.css"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ScrollReveal from 'scrollreveal'
import overimg from "../../Assets/Overview/Brand.png"
import c1 from "../../Assets/Overview/c1.png"
import c2 from "../../Assets/Overview/c2.png"

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
                        <div className="about-title">
                            <span>Our Brand</span>
                            <h2>Our Brand</h2>
                        </div>
                        <div className="overview-form">
                            <img src={overimg} alt="harboursyncexpimp" />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="about-title">
                            <span>Certifications</span>
                            <h2>Certifications</h2>
                        </div>
                        <div className="overview-certification">
                            <img src={c1} alt="harboursyncexpimp" />
                            <img src={c2} alt="harboursyncexpimp" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
