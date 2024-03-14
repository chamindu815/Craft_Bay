import React, { useState } from "react";
import "./forgotpasswordconfirm.css";
import forgotpw from "../Assets/ForgotPw.jpg";
import emailjs from "@emailjs/browser";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const ForgotPasswordConfirm = () => {

  const [email, setEmail] = useState('')
  const submitForgotPassword = () => {
    NotificationManager.success('Email Send Successfully!', 'Success', 3000);
    console.log("email:", email);

    const emailParams = {
      subject: "Reset Your CraftBay Password",
      email: email
    }

    emailjs.send('service_xw0df67', 'template_sw4kk7j', emailParams, 'Bk7s3x0nwjFKKLFGz')
      .then(function (response) {
        console.log('Email sent successfully!', response);
      }, function (error) {
        console.error('Error sending email:', error);
      });
  }


  return (
    <div className="main-container">
      <div className="logo-container">
        {/* <img className="logo-img" src={logo} alt="" /> */}
      </div>

      <div className="image-container">
        <img className="forgotpw-img-bg" src={forgotpw} alt="" />
      </div>

      <div className="forgot-pw-form-container">
        <div className="forgot-pw-container-cnfirm">
          <span className="forgot-pw-title-cnfirm">
            Enter Your Email Address...
          </span>

          <div className="forgot-pw-send-email">
            <input
              className="forgot-pw-in"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="change-pw-container">
          <button type="submit" className="change-pw-send-email-btn" onClick={submitForgotPassword}>
            Send Email
          </button>
        </div>
      </div>
      <NotificationContainer />

    </div>
  );
};

export default ForgotPasswordConfirm;
