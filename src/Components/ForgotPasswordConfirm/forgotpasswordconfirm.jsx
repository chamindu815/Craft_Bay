import React from "react";
import "./forgotpasswordconfirm.css";
import forgotpw from "../Assets/ForgotPw.jpg";

const ForgotPasswordConfirm = () => {
  return (
    <div className="main-container">
      <div className="logo-container">
        {/* <img className="logo-img" src={logo} alt="" /> */}
      </div>

      <div className="image-container">
        <img className="forgotpw-img-bg" src={forgotpw} alt="" />
      </div>

      <div className="forgot-pw-form-container">
        <div className="forgot-pw-container">
          <span className="forgot-pw-title">
            Enter Your Email Address...
          </span>

          <div className="forgot-pw-send-email">
            <input
              className="forgot-pw-in"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="change-pw-container">
          <button type="submit" className="change-pw-send-email-btn">
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordConfirm;
