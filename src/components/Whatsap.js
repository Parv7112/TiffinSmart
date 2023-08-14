import React from "react";
import ReactWhatsapp from "react-whatsapp";

function Whatsap() {
  return (
    <div>
      <div className="floating_btn">
        <a target="_blank" href="https://wa.me/">
          <div className="contact_icon">
            <ReactWhatsapp
              number="+91-9907657026"
              message="Hello,How May I Help You !"
              className="whatsappbuttn"
            >
              {" "}
              <i className="bi bi-whatsapp"></i>
            </ReactWhatsapp>
          </div>
        </a>
        <p className="text_icon">Chat with us</p>
      </div>
    </div>
  );
}

export default Whatsap;
