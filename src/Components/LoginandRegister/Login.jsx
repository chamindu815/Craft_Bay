import React, { useState, useEffect } from "react";
import "./Login.css";
import loginimg from "../Assets/Login.jpg";
import visible from "../Assets/visible.png";
import hidden from "../Assets/hidden.png";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { products } from "../../Actions";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const { userLogin } = products;

const Login = ({ userLogin, loginData }) => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (action === "SignUp") {
      navigate("/register");
    }
  }, [action]);

  useEffect(() => {
    if (loginData) {
      if (loginData?.status == 400 || loginData?.status == 401) {
        NotificationManager.error('Invalid Username or Password', 'Error', 3000, () => {
        });
      } else if (loginData?.status == 200) {
        NotificationManager.success('Login Successfully!', 'Success', 3000);
        // alert("User login successfully!");
        localStorage.setItem("token", loginData?.token);
        localStorage.setItem("userId", loginData?.userId);
        navigate("/home");
      }
      else {
        
      }
    }
  }, [loginData]);
  
  // NotificationManager.error('Error message', 'Error', 5000);

  const submitUserDetails = (event) => {
    event.preventDefault();
    userLogin({
      email: email,
      password: password,
    });
  };
  
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
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div className="input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <span
              className="hide-view-password-container"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <img className="hide-view-password" src={visible}></img>
              ) : (
                <img className="hide-view-password" src={hidden}></img>
              )}
            </span>
          </div>
        </div>

        <div className="forgot-password">
          <span onClick={(e) => navigate("/forgotpasswordconfirm")}>Forgot Password? </span>
        </div>

        <div className="submit-container">
          <button
            type="submit"
            className="submit"
            onClick={(e) => submitUserDetails(e)}
          >
            Login
          </button>
          <button
            type="submit"
            className="submit"
            onClick={() => setAction("SignUp")}
          >
            Register
          </button>
        </div>
      </div>
      <NotificationContainer />

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
