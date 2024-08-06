import React from 'react'
import "./Contact.css"

const ContactCard = ({ item }) => {
    return (
        <div className="contact-card">
            <img src={item.cover} alt="" />
            <div className="contact-detail">
                <h4>{item.name}</h4>
                <p>{item.prof}</p>
            </div>
        </div>
    )
}

export default ContactCard
