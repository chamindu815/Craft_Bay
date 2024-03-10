import React, { useEffect, useState } from "react";
import "./Checkout.css";
import CheckoutData from "./checkoutData";
import { connect } from "react-redux";
import { products } from "../../Actions";
import { useParams } from 'react-router-dom';


const { postUserPlaceOrders } = products;

const Checkout = ({ postUserPlaceOrders, placeOrders }) => {
  const minValue = 1;
  const maxValue = 100;
  const [count, setCount] = useState(minValue);
  const userId = localStorage.getItem("userId");
  const {id} = useParams();

  useEffect(() => {
    postUserPlaceOrders(userId);
  }, []);

  useEffect(() => {
    postUserPlaceOrders(id);
  }, [id]);

  useEffect(() => {
    if (placeOrders.length > 0) {
    }
  }, [placeOrders]);

  // const handleIncrementCounter = () => {
  //   if (count < maxValue) {
  //     setCount((prevState) => prevState + 1);
  //   }
  // };

  // const handleDecrementCounter = () => {
  //   if (count > minValue) {
  //     setCount((prevState) => prevState - 1);
  //   }
  // };



  return (
    <div className="checkout-bg">
      <div className="checkout-main-container">
        <span className="checkout-heading">Product Details</span>
        {CheckoutData.map((curElm) => {
          return (
            <div className="checkout-container">
              <div className="checkout-content">
                <div className="checkout-img-box">
                  <img src={curElm.img} alt={curElm.Title}></img>
                </div>
                <div className="checkout-main">
                  <div>
                    <span className="checkout-price-title">Price</span>
                    <h3 className="checkout-prod-title">{curElm.Title}</h3>
                    <label class="checkout-price">Rs: {curElm.Price}</label>
                  </div>

                  <div className="checkout-qnt-container">
                    <span className="checkout-qnt-name">Quantity</span>
                    <div className="checkout-qunt-btn">
                      {/* <button
                        className="checkout-increment-btn"
                        onClick={handleDecrementCounter}
                      >
                        <span className="checkout-min-btn">-</span>
                      </button> */}

                      <p className="checkout-p">{count}</p>

                      {/* <button
                        className="checkout-increment-btn"
                        onClick={handleIncrementCounter}
                      >
                        <span className="checkout-add-btn">+</span>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="checkout-card-info-container">
        <span className="checkout-card-info-title">Payment Option</span>

        {/* Form Card No */}
        <label className="checkout-card-info-card-no">Card No</label>
        <div className="checkout-card-info-card-no-inputs">
          <div className="checkout-card-info-card-no-input">
            <input
              type="checkout-card-info-card-no"
              placeholder="XXXX-XXXX-XXXX-XXXX"
            />
          </div>
        </div>

        {/* Form Expire-Date */}
        <label className="checkout-card-info-exp-date">Exp Date</label>
        <div className="checkout-card-info-exp-date-inputs">
          <div className="checkout-card-info-exp-date-input">
            <input type="checkout-card-info-exp-date" placeholder="XX/XX" />
          </div>
        </div>

        {/* Form CVV */}
        <label className="checkout-card-info-cvv">CVV</label>
        <div className="checkout-card-info-cvv-inputs">
          <div className="checkout-card-info-cvv-input">
            <input type="checkout-card-info-cvv" placeholder="XXX" />
          </div>
        </div>

        <div className="checkbox-container">
          <input type="checkbox" className="bill-checkbox" />
          Save Card Details
        </div>

        <div className="checkout-card-info-save-btn-container">
          <button className="checkout-card-info-savebtn">Save Details</button>
        </div>
        <div className="place-order-btn-container">
          <button className="place-order-btn">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    placeOrders: state.craftbay.placeOrders,
  };
};

const mapDispatchToProps = {
  postUserPlaceOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
