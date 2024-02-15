import React from "react";
import "./navigation.css";
import logo from "../Assets/logo.png";
import profile from "../Assets/Profile.png";
import cart from "../Assets/Cart.png";
import order from "../Assets/Order.png";
import signout from "../Assets/SignOut.png";

const Navigation = () => {
  return (
    <div>
      <div className="navheader">
        <div className="logo-container">
          <a href="./home">
            <img className="nav-logo-img" src={logo} alt="" />
          </a>
        </div>

        <div className="nav-box">
          <button className="nav-btn-home">
            <a href="./home">HOME</a>
          </button>
          <button className="nav-btn-shop">
            <a href="#">SHOP</a>
          </button>

          <div class="dropdown">
          <button className="nav-btn-category">CATEGORY</button>
          <div class="dropdown-content">
            <a href="#">Wooden Crafts</a>
            <a href="#">Wall Hanger</a>
            <a href="#">Textile</a>
            <a href="#">Clay</a>
            <a href="#">Metal</a>
          </div>
          </div>


          <button className="nav-btn-aboutus">
            <a href="./aboutus">ABOUT US</a>
          </button>
          <button className="nav-btn-contactus">
            <a href="./contactus">CONTACT US</a>
          </button>
        </div>

        <div className="nav-cart-img">
        <a href="./cart">
          <img className="nav-cart-imgs" src={cart} alt="" />
        </a>
        </div>

        <div className="nav-profile-img">
        <a href="./profileaddpayment">
          <img className="nav-profile-imgs" src={profile} alt="" />
        </a>
        </div>

        <div className="nav-order-img">
        <a href="./order">
          <img className="nav-order-imgs" src={order} alt="" />
        </a>
        </div>

        <div className="search-bar-container">
          <div className="input-wrapper">
            {/* <FaSearch id="search-icon"/> */}
            <input placeholder="Type to search.." />
          </div>
        </div>

        <div className="nav-signout-img">
        <a href="./login">
          <img className="nav-signout-imgs" src={signout} alt="" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
