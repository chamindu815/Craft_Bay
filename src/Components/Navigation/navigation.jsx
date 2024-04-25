import React from "react";
import "./navigation.css";
import { useNavigate } from "react-router-dom";

import logo from "../Assets/logo.png";
import profile from "../Assets/Profile.png";
import cart from "../Assets/Cart.png";
import order from "../Assets/Order.png";
import signout from "../Assets/SignOut.png";
import { connect } from 'react-redux';
import { products } from '../../Actions/index';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const { clearState } = products;

const Navigation = ({ clearState }) => {

  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault()
    console.log('xxxxx logout', localStorage.getItem("userId"));
    clearState()
    localStorage.clear();
    navigate(`/login`)
  };

  return (
    <div>
      <div className="navheader">
        <div className="logo-container">
          <a href="/home">
            <img className="nav-logo-img" src={logo} alt="" />
          </a>
        </div>

        <div className="nav-box">
          <button className="nav-btn-home">
            <a href="/home">HOME</a>
          </button>
          <button className="nav-btn-shop">
            <a href="/shop">SHOP</a>
          </button>

          <div class="dropdown">
            <button className="nav-btn-category">CATEGORY</button>
            <div class="dropdown-content">
              <a href="/products/WOODEN" >Wooden</a>
              <a href="/products/METAL">Metal</a>
              <a href="/products/TEXTILE">Textile</a>
              <a href="/products/CLAY">Clay</a>
              <a href="/products/LEATHER">Leather</a>
            </div>
          </div>


          <button className="nav-btn-aboutus">
            <a href="/aboutus">ABOUT US</a>
          </button>
          <button className="nav-btn-contactus">
            <a href="/contactus">CONTACT US</a>
          </button>
        </div>

        <div className="nav-cart-img">
          {/* <a href = {userId ? "/cart" : '/login'}> */}
            <img className="nav-cart-imgs" src={cart} alt="" onClick={() => {
            if(userId){
              navigate(`/cart`)
            } else {
              NotificationManager.error('Please Login before access cart!', 'Error', 1000);
              navigate('/login')
            }
          }} />
          {/* </a> */}
        </div>

        <div className="nav-profile-img">

          {/* <a href="/profile"> */}
          <img className="nav-profile-imgs" src={profile} alt="" onClick={() => {
            if(userId){
              navigate(`/profile/${localStorage.userId}`)
            } else {
              NotificationManager.error('Please Login before access profile!', 'Error', 1000);
              navigate('/login')
            }
          }} />
          {/* </a> */}
        </div>

        <div className="nav-order-img">
          {/* <a href="/userorders"> */}
            <img className="nav-order-imgs" src={order} alt="" onClick={() => {
            if(userId){
              navigate(`/userorders`)
            } else {
              NotificationManager.error('Please Login before access user orders!', 'Error', 1000);
              navigate('/login')
            }
          }} />
          {/* </a> */}
        </div>

        <div className="search-bar-container">
          <div className="input-wrapper">
            {/* <FaSearch id="search-icon"/> */}
            <input placeholder="Type to search.." />
          </div>
        </div>

        <div className="nav-signout-img">
          <img className="nav-signout-imgs" src={signout} alt="" onClick={(e) => handleLogout(e)} />
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default connect(null, { clearState })(Navigation);
