import React from "react";
import './navigation.css'
import logo from '../Assets/logo.png';

const Navigation = () => {
  return (
    <div>
      <div className="navheader">

      <div className="logo-container">
      <img className="nav-logo-img" src={logo} alt="" />
      </div>

      <div className="nav-box">
        <ul>
          <li className="nav-list"><a href='#'>HOME</a></li>
          <li className="nav-list"><a href='#'>SHOP</a></li>
          <li className="nav-list"><a href='#'>CATEGORY</a></li>
          <li className="nav-list"><a href='#'>ABOUT US</a></li>
          <li className="nav-list"><a href='#'>CONTACT US</a></li>
        </ul>
        </div>

      </div>
    </div>
  );
};

export default Navigation;
