import React from "react";
import "./contactus.css";

const contactus = () => {
  return (
    <div className="contactus-bg">
      <div className="contactus-message-container">
        <span className="contactus-title-one">Get in touch</span>
        <span className="contactus-title-two">Write Us a Message</span>

        <label className="contactus-fname">Full Name</label>
        <div className="contactus-fname-inputs">
          <div className="contactus-fname-input">
            <input type="contactus-fname" placeholder="" />
          </div>
        </div>

        <label className="contactus-email">Email</label>
        <div className="contactus-email-inputs">
          <div className="contactus-email-input">
            <input type="contactus-email" placeholder="" />
          </div>
        </div>

        <label className="contactus-phone">Phone No</label>
        <div className="contactus-phone-inputs">
          <div className="contactus-phone-input">
            <input type="contactus-phone" placeholder="" />
          </div>
        </div>


        <label className="contactus-message">Message</label>
        <div className="contactus-message-inputs">
          <div className="contactus-message-input">
            <input type="contactus-message" placeholder="" />
          </div>
        </div>

        <div className="contactus-btn-container">
            <button className="contactusbtn">Contact Us</button>
          </div>
      </div>

      <div className="contactus-detail-container">

      <label className="contactus-detail-title">Contact Us</label>

        <label className="contactus-detail-callus">Call Us:</label>
        <label className="contactus-detail-callus-no">071 - 4515885</label>
        <label className="contactus-detail-callus-no">077 - 1120159</label>


        <label className="contactus-detail-address">Address:</label>
        <label className="contactus-detail-address-no">190/A Gall Road, Matara.</label>


        <label className="contactus-detail-email">Email:</label>
        <label className="contactus-detail-email-no">craftbay@gmail.com</label>
      </div>
    </div>
  );
};

export default contactus;
