import React, { useEffect } from "react";
import "./userorder.css";
import nextimg from "../Assets/arrow_7481528.png";
import defaultImage from "../Assets/Order-Sucessfull.jpg";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { products } from "../../Actions";

const { getOrderByUserId } = products;
const UserOrder = ({ getOrderByUserId, orderByUserId }) => {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    getOrderByUserId(userId);
  }, []);

  useEffect(() => {}, [orderByUserId]);

  return (
    <div className="user-order-bg">
      <div className="user-order-container">
        <h2 className="user-order-title">My Orders</h2>
        {/* {Array.isArray(orderByUserId) && orderByUserId.map((curElm) => {
          return ( */}
          {Array.isArray(orderByUserId) && orderByUserId.map((curElm) => {
            return (
              <>
          <div className="user-order-by-order-container">
            <h3 className="user-order-by-order-id">Order No : # {curElm.id}</h3>
            <div className="user-order-by-order-img">
              <img src={defaultImage} alt="Default" />
            </div>
            <h3 className="user-order-by-order-fname">Full Name :</h3>
            <label className="user-order-by-order-fname-lbl">
            {curElm.user.firstName} {curElm.user.lastName}
            </label>

            <h3 className="user-order-by-order-address">Address :</h3>
            <label className="user-order-by-order-address-lbl">
            {curElm.user.houseNo}, {curElm.user.streetName}, {curElm.user.city}, {curElm.user.country}
            </label>

            <h3 className="user-order-by-order-total">Total :</h3>
            <label className="user-order-by-order-total-lbl">Rs. {curElm.totalOrderValue}</label>

            <label className="user-order-by-order-status-lbl"> {curElm.orderStatus} </label>

            <button className="cancel-order"> Cancel Order</button>

            <button className="user-order-by-order-more-btn">
              <img
                className="next-img"
                src={nextimg}
                alt=""
                onClick={() => navigate(`/userorders/${curElm.id}`)}
              />
            </button>
          </div>
          </>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orderByUserId: state.craftbay.orderByUserId,
  };
};

const mapDispatchToProps = {
  getOrderByUserId,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOrder);
