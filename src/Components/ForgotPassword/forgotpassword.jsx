import React from "react";
import "./forgotpassword.css";
import forgotpw from "../Assets/ForgotPw.jpg";

const ForgotPassword = () => {
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
            <span className="forgot-pw-title">Forgot Password?</span>
          <div className="forgot-pw-email">
            <label className="forgot-pw-in-email">chaminduanjana15@gmail.com</label>
          </div>

          <div className="forgot-pw-new">
            <input className="forgot-pw-in" type="password" placeholder="New Password" />
          </div>

          <div className="forgot-pw-cnfirm-new">
            <input className="forgot-pw-in" type="password" placeholder="Confirm New Password" />
          </div>
        </div>

        <div className="change-pw-container">
          <button type="submit" className="change-pw-btn">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
