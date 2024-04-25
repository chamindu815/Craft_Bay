import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactus.css";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const ContactUs = () => {
  const initialValues = {
    email: '',
    phoneNo: '',
    message: '',
  };
  const [formValues, setFormValues] = useState(initialValues);

  const sendEmail = (event) => {
    event.preventDefault();

    if (!formValues.email || !formValues.phoneNo || !formValues.message) {
      NotificationManager.error('Please fill in all fields.', 'Error', 5000);
      return;
    }

    const emailParams = {
      subject: "CraftBay Order Confirmation",
      email: formValues.email,
      phoneNo: formValues.phoneNo,
      message: formValues.message
    };

    emailjs.send('service_ekx9gyu', 'template_kap8rak', emailParams, 'NCxVy3DQ_Nq6tIhfb')
    
      .then(function (response) {
        setFormValues(initialValues);
        NotificationManager.success('Email Sent Successfully!', 'Success', 3000);
      }, function (error) {
        NotificationManager.error('Failed to send email. Please try again later.', 'Error', 5000);
      });
  };

  return (
    <div className="contactus-bg">
      <div className="contactus-message-container">
        <span className="contactus-title-one">Get in touch</span>
        <span className="contactus-title-two">Write Us a Message</span>

        <form onSubmit={sendEmail}>
          <label className="contactus-email">Email</label>
          <div className="contactus-email-inputs">
            <div className="contactus-email-input">
              <input
                type="email"
                placeholder=""
                value={formValues.email}
                onChange={(event) => {
                  setFormValues({ ...formValues, email: event.target.value });
                }}
              />
            </div>
          </div>

          <label className="contactus-phone">Phone No</label>
          <div className="contactus-phone-inputs">
            <div className="contactus-phone-input">
              <input
                type="tel"
                placeholder=""
                value={formValues.phoneNo}
                onChange={(event) => {
                  setFormValues({ ...formValues, phoneNo: event.target.value });
                }}
              />
            </div>
          </div>

          <label className="contactus-message">Message</label>
          <div className="contactus-message-inputs">
            <div >
              <textarea
                placeholder=""
                className="contactus-message-input"
                value={formValues.message}
                onChange={(event) => {
                  setFormValues({ ...formValues, message: event.target.value });
                }}
              />
            </div>
          </div>

          <div className="contactus-btn-container">
            <button type="submit" className="contactusbtn">Contact Us</button>
          </div>
        </form>
      </div>

      <div className="contactus-detail-container">
        <label className="contactus-detail-title">Contact Us</label>

        <label className="contactus-detail-callus">Call Us:</label>
        <label className="contactus-detail-callus-no">071 - 4515885</label>
        <label className="contactus-detail-callus-no">077 - 1120159</label>

        <label className="contactus-detail-address">Address:</label>
        <label className="contactus-detail-address-no">
          190/A Gall Road, Matara.
        </label>

        <label className="contactus-detail-email">Email:</label>
        <label className="contactus-detail-email-no">craftbay@gmail.com</label>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default ContactUs;
