import React, { useEffect, useState } from "react";
import "./Register.css";
import logo from "../Assets/logo.png";
import signup from "../Assets/Signup.jpg";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { products } from "../../Actions";

const { userRegister } = products;

const Register = ({ userRegister, registerData }) => {
  const [action, setAction] = useState("Sign Up");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (action === "Login") {
      navigate("/login");
    }
  }, [action]);

  useEffect(() => {
    if (registerData) {
    }
  }, [registerData]);

  const registerUser = (event) => {
    event.preventDefault();
    userRegister({
      firstName: firstName,
      lastName: lastName,
      username: username,
      phoneNumber: phoneNumber,
      password: password,
    });
  };

  return (
    <div className="main-container">
      <div className="logo-container">
        {/* <img className="logo-img" src={logo} alt="" /> */}
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
            <input
              type="firstName"
              placeholder="First Name"
              id="firstName"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </div>

          <div className="reg-input">
            <input
              type="lastName"
              placeholder="Last Name"
              id="lastName"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>

          <div className="reg-input">
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              // onChange={handleUsernameChange}
              // className={isValidUsername ? '' : 'invalid'}
            />
            {/* {!isValidUsername && <p className="error">Please enter a valid email address</p>} */}
          </div>

          <div className="reg-input">
            <input
              type="phone"
              placeholder="Phone"
              id="phone"
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />
          </div>

          <div className="reg-input">
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          {/* <div className="reg-input">
            <input
              type="password"
              placeholder="Confirm Password"
              id="cnfirmpassword"
              value={cnfirmpassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </div> */}
        </div>

        <div className="reg-submit-container">
          <button
            type="submit"
            className="register-submit"
            onClick={(e) => registerUser(e)}
          >
            Register
          </button>
        </div>

        <div className="log">
          <span className="already-h-acc">Already have Account?</span>
          <span className="login-txt" onClick={() => setAction("Login")}>
            Log In
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    registerData: state.craftbay.registerData,
  };
};

const mapDispatchToProps = {
  userRegister,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
