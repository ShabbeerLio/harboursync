import React from 'react'
import "./Contact.css"

const ContactCard = ({ item }) => {
    return (
        <div className="contact-card">
            <img src={item.cover} alt="HARBOURSYNC EXPIMP PRIVATE LIMITED" />
            <div className="contact-detail">
                <h5>{item.name}</h5>
                <p>{item.prof}</p>
            </div>
        </div>
    )
}

export default ContactCard
