import React from "react";
import './navigation.css'
import {Link} from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
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
          <BrowserRouter>
          <li className="nav-list"><Link href="#">HOME</Link></li>
          <li className="nav-list"><Link href="#">SHOP</Link></li>
          <li className="nav-list"><Link href="#">CATEGORY</Link></li>
          <li className="nav-list"><Link href="#">ABOUT US</Link></li>
          <li className="nav-list"><Link href="#">CONTACT US</Link></li>
          </BrowserRouter>
        </ul>
        </div>

      </div>
    </div>
  );
};

export default Navigation;
