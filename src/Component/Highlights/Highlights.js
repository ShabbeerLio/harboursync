import React from 'react'
import "./Highlights.css"
import high from "../../Assets/Highlights/highlights.jpeg"
import HighlightsData from './HighlightsData';
import { IoCheckmarkCircle } from "react-icons/io5";

const Highlights = () => {

    return (
        <div className='Highlights'>
            <div className='Highlights-main'>
                <div className="highlights-item">
                    <div className="highlights-right">
                        <img src={high} alt="bhutani grandthum office space" />
                    </div>
                    <div className="highlights-left">
                        <div className="about-title">
                            <span>Health benifits</span>
                            <h1>Health benifits</h1>
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
