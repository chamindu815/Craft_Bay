import React, { useState, useEffect } from "react";
import "./Login.css";
import login from "../Assets/Login.jpg";
import logo from "../Assets/logo.png"
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [action, setAction] = useState("Login");
  let navigate = useNavigate();

  useEffect(() => {
    if (action === "SignUp") {
      navigate("/register");
    }
  }, [action]);

  return (
    <div className="main-container">

      <div className="logo-container">
      <img className="logo-img" src={logo} alt="" />
      </div>


      <div className="image-container">
        <img className="login-img-bg" src={login} alt="" />
      </div>

      <div className="login-form-container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <input type="email" placeholder="Email" />
          </div>

          <div className="input">
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <div className="forgot-password">
          <span>Forgot Password? </span>
        </div>

        <div className="submit-container">
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login");}}>Log In</div>
          <div
            className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("SignUp")}>Sign Up</div>
        </div>
      </div>
    </div>
  );
};
