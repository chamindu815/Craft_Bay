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

        <ul>
          <BrowserRouter>
          <li><Link className="Link" href="#">HOME</Link></li>
          <li><Link className="Link" href="#">SHOP</Link></li>
          <li><Link className="Link" href="#">CATEGORY</Link></li>
          <li><Link className="Link" href="#">ABOUT US</Link></li>
          <li><Link className="Link" href="#">CONTACT US</Link></li>
          </BrowserRouter>
        </ul>

      </div>
    </div>
  );
};

export default Navigation;
