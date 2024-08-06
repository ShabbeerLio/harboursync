import React, { useEffect } from "react";
import "./Contact.css";
import Form from "../Form/Form";
import ContactCard from "./ContactCard";
import DirectorsData from "./DirectorsData";
import ScrollReveal from "scrollreveal";


const Contact = () => {

    useEffect(() => {
        const sr = ScrollReveal({
          origin: "right",
          distance: "80px",
          duration: 2000,
          reset: true,
        });
    
        sr.reveal(".Contact-box-right", {});
    
        return () => sr.destroy();
      }, []);
      
      useEffect(() => {
        const sr = ScrollReveal({
          origin: "left",
          distance: "80px",
          duration: 2000,
          reset: true,
        });
    
        sr.reveal(".Contact-box-left", {});
    
        return () => sr.destroy();
      }, []);

  return (
    <div className="Contact">
      <div className="Contact-main">
        <div className="Contact-box">
          <div className="Contact-box-left">
            {DirectorsData.map((item) => (
              <ContactCard item={item} key={item.id}/>
            ))}
          </div>
          <div className="Contact-box-right">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
