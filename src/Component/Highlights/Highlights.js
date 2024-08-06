import React, { useEffect } from 'react'
import "./Highlights.css"
import high from "../../Assets/Highlights/highlights.jpeg"
import HighlightsData from './HighlightsData';
import { IoCheckmarkCircle } from "react-icons/io5";
import ScrollReveal from 'scrollreveal'


const Highlights = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        sr.reveal('.highlights-left', {})

        return () => sr.destroy();
    }, []);
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        sr.reveal('.highlights-right', {})

        return () => sr.destroy();
    }, []);

    return (
        <div className='Highlights'>
            <div className='Highlights-main'>
                <div className="highlights-item">
                    <div className="highlights-right">
                        <img src={high} alt="bhutani grandthum office space" />
                    </div>
                    <div className="highlights-left">
                        <div className="about-title">
                            <span>Health benefits</span>
                            <h1>Health benefits</h1>
                        </div>
                        <ul>
                            {HighlightsData.map((item) => (
                                <li key={item.id}>
                                    <p><IoCheckmarkCircle /></p>
                                    {item.detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights
