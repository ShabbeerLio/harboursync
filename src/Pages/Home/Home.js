import React, { useEffect } from 'react'
import Banner from '../../Component/Banner/Banner'
import Overview from '../../Component/Overview/Overview'
import About from '../../Component/About/About'
import Highlights from '../../Component/Highlights/Highlights'
import { useLocation } from 'react-router-dom'
import Nutrition from '../../Component/Nutrition/Nutrition'
import Contact from '../../Component/Contact/Contact'
import "./Home.css"

const Home = (props) => {
    /* global dataLayer */
    const location = useLocation();

    useEffect(() => {
        document.title = props.title;

        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        } else {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            canonicalLink.setAttribute("href", canonicalUrl);
            document.head.appendChild(canonicalLink);
        }

        const description = props.descriptions;
        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }

        // Ensure dataLayer is initialized before the GA script loads
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }

    }, [props.title, props.descriptions, location.pathname]);

    return (
        <div className='home'>
            <section className="Banner-box" id="home">
                <Banner />
            </section>
            <section className="Banner-box" id="about">
                <About />
            </section>
            <section className="Banner-box" id="overview">
                <Overview />
                <Highlights />
            </section>
            <section className="Banner-box" id="benefits">
                <Nutrition />
            </section>
            <section className="Banner-box" id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Home
