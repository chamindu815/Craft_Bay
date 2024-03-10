import React, { useState, useEffect } from "react";
import "./Login.css";
import loginimg from "../Assets/Login.jpg";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { products } from '../../Actions';

const { userLogin } = products;

const Login = ({ userLogin, loginData }) => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (action === "SignUp") {
      navigate("/register");
    }
  }, [action]);

  useEffect(() => {
    if (loginData) {
      if (loginData?.status == 400 || loginData?.status == 401) {
        alert("Unauthorised User Details");
      }
      else if (loginData?.status == 200) {
        // alert("User login successfully!");
        localStorage.setItem("token", loginData?.token);
        localStorage.setItem("userId", loginData?.userId);
        navigate('/home');
      }
      // else {
      //   alert("Incorrect Email or Password");
      // }
    }
  }, [loginData]);

  const submitUserDetails = (event) => {
    event.preventDefault();
    userLogin({
      email: email,
      password: password
    })
  }
  return (
    <div className="main-container">

      <div className="logo-container">
        {/* <img className="logo-img" src={logo} alt="" /> */}
      </div>


      <div className="image-container">
        <img className="login-img-bg" src={loginimg} alt="" />
      </div>

      <div className="login-form-container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <input type="email" placeholder="Email" id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div className="input">
            <input type="password" placeholder="Password" id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="forgot-password">
          <span>Forgot Password? </span>
        </div>

        <div className="submit-container">
          <button type="submit" className="submit" onClick={(e) => submitUserDetails(e)}>Login</button>
          <button type="submit" className="submit" onClick={() => setAction("SignUp")}>Register</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loginData: state.craftbay.loginData,
  };
};

const mapDispatchToProps = {
  userLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);