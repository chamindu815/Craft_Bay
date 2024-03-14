import React, { useState } from "react";
import "./forgotpassword.css";
import forgotpw from "../Assets/ForgotPw.jpg";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { products } from '../../Actions';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const { userForgotPassword } = products;

const ForgotPassword = ({ userForgotPassword }) => {

  const { email } = useParams();
  const [password, setPassword] = useState({})

  const handleForgotPassword = () => {
    
    if (password.newPassword == password.confirmPassword) {
      userForgotPassword({
        
        email,
        password: password.newPassword   
      })
      NotificationManager.success('Change Password Successfully!', 'Success', 3000);
    } else {
      NotificationManager.error('Passwords mismatch', 'Error', 5000);
    }
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
        <div className="forgot-pw-container">
          <span className="forgot-pw-title">Forgot Password?</span>
          <div className="forgot-pw-email">
            <label className="forgot-pw-in-email">{email}</label>
          </div>

          <div className="forgot-pw-new">
            <input className="forgot-pw-in" type="password" placeholder="New Password"
              onChange={(e) => setPassword({ ...password, newPassword: e.target.value })} />
          </div>

          <div className="forgot-pw-cnfirm-new">
            <input className="forgot-pw-in" type="password" placeholder="Confirm Password"
              onChange={(e) => setPassword({ ...password, confirmPassword: e.target.value })} />
          </div>
        </div>

        <div className="change-pw-container">
        {password.newPassword != password.confirmPassword && password.confirmPassword && <p style={{ color: 'red' }}>Passwords do not match</p>}
          <button type="submit" className="change-pw-btn" onClick={handleForgotPassword}>
            Change Password
          </button>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  userForgotPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
