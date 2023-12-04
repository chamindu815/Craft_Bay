import React, { useState } from "react";
import "./Register.css";
import logo from "../Assets/logo.png";
import signup from "../Assets/Signup.jpg";

export const Register = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="main-container">

      <div className="logo-container">
      <img className="logo-img" src={logo} alt="" />
      </div>

    
      <div className="register-image-container">
        <img className="signup-img-bg" src={signup} alt="" />
      </div>

      <div className="register-form-container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="reg-inputs">
          <div className="reg-input">
            <input type="name" placeholder="Name" />
          </div>

          <div className="reg-input">
            <input type="email" placeholder="Email" />
          </div>

          <div className="reg-input">
            <input type="phone" placeholder="Phone" />
          </div>

          <div className="reg-input">
            <input type="password" placeholder="Password" />
          </div>

          <div className="reg-input">
            <input type="password" placeholder="Confirm Password" />
          </div>
        </div>  

        <div className="reg-submit-container">
          <div
            className={action == "Login" ? "submit gray" : "register-submit"}onClick={() => {setAction("Sign Up");}}>Register</div>
        </div>
        
        <div className="log">
          <span className="already-h-acc">Already have Account?</span>
          <span className="login-txt">Log In</span>
        </div>
      </div>
    </div>
  );
};
