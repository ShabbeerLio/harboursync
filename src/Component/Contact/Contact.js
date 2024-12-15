import React, { useEffect } from "react";
import "./Contact.css";
import Form from "../Form/Form";
import ScrollReveal from "scrollreveal";
// import overimg from "../../Assets/Overview/Brand.png";
import c1 from "../../Assets/Overview/c1.png";
import c2 from "../../Assets/Overview/c2.png";

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
            {/* <div className="brand-box">
              <h5>Our Brand</h5>
              <div className="brand">
                <img src={overimg} alt="harboursyncexpimp" />
              </div>
            </div> */}
            <div className="certifications-box">
            <h5>Certifications</h5>
              <div className="certifications">
                <img src={c1} alt="harboursyncexpimp" />
                <img src={c2} alt="harboursyncexpimp" />
              </div>
            </div>
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
