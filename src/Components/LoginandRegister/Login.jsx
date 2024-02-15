import React, { useState, useEffect } from "react";
import "./Login.css";
import loginimg from "../Assets/Login.jpg";
import logo from "../Assets/logo.png"
import { useNavigate } from "react-router-dom";
import axios from "axios"

export const Login = () => {
  const [action, setAction] = useState("Login");
  // let navigate = useNavigate();

  useEffect(() => {
    if (action === "SignUp") {
      navigate("/register");
    }
  }, [action]);

  


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function login(event) {
      event.preventDefault();
      try {
        await axios.post("http://localhost:8089/craftbay/user/login", {
          email: email,
          password: password,
          }).then((res) => 
          {
           console.log(res.data);
           
           if (res.data.message == "Email not exits") 
           {
             alert("Incorrect Email or Password");
           } 
           else if(res.data.message == "Login Success")
           { 
              
              navigate('/home');
           } 
            else 
           { 
              alert("Incorrect Email or Password");
           }
        }, fail => {
         console.error(fail); // Error!
});
      }

       catch (err) {
        alert(err);
      }
    
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
        <button type="submit" className="submit" onClick={login}>Login</button>
        <button type="submit" className="submit" onClick={() => setAction("SignUp")}>Register</button>
        </div>
      </div>
    </div>
  );
};
