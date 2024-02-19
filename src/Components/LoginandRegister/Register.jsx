import React, { useEffect, useState } from "react";
import "./Register.css";
import logo from "../Assets/logo.png";
import signup from "../Assets/Signup.jpg";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export const Register = () => {
  const [action, setAction] = useState("Sign Up");

  useEffect(() => {
    if (action === "Login") {
      navigate("/login");
    }
  }, [action]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cnfirmpassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8089/craftbay/user/save", {
        name,
        email,
        phone,
        password,
        cnfirmpassword,
      });
      alert("Employee Registation Successfully");
    } catch (err) {
      alert(err);
    }
  }

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
              type="name"
              placeholder="Name"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>

          <div className="reg-input">
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

          <div className="reg-input">
            <input
              type="phone"
              placeholder="Phone"
              id="phone"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
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
          <button type="submit" className="register-submit" onClick={save}>
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
