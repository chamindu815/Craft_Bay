import React, { useState } from "react";
import "./Cart.css";
import CartData from "./cartData";

const Cart = ({ minValue = 1, maxValue = 100 }) => {
  const [count, setCount] = useState(minValue);

  const handleIncrementCounter = () => {
    if (count < maxValue) {
      setCount((prevState) => prevState + 1);
    }
  };

  const handleDecrementCounter = () => {
    if (count > minValue) {
      setCount((prevState) => prevState - 1);
    }
  };
  return (
    <div className="cart-bg">
      <div className="cart-main-container">
        <span className="cart-heading">Added Items</span>
        {CartData.map((curElm) => {
          return (
            <div className="cart-container">
              <div className="cart-content">
                <div className="cart-img-box">
                  <img src={curElm.img} alt={curElm.Title}></img>
                </div>
                <div className="cart-main">
                  <div>
                    <span className="cart-price-title">Price</span>
                    <h3 className="cart-prod-title">{curElm.Title}</h3>
                    <label class="cart-price">Rs: {curElm.Price}</label>
                  </div>

                  <div className="cart-qnt-container">
                    <span className="cart-qnt-name">Quantity</span>
                    <div className="cart-qunt-btn">
                      <button
                        className="cart-increment-btn"
                        onClick={handleDecrementCounter}
                      >
                        <span className="cart-min-btn">-</span>
                      </button>

                      <p className="cart-p">{count}</p>

                      <button
                        className="cart-increment-btn"
                        onClick={handleIncrementCounter}
                      >
                        <span className="cart-add-btn">+</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div className="Subtotal">
          <span className="cart-ordersum-title">Order Summary</span>

          <span className="cart-ordersum-subtotal">Subtotal</span>
          <span className="cart-ordersum-shipping">Shipping</span>
          <span className="cart-ordersum-total">Total</span>
        </div>

        <div className="billing-address-container">
          <span className="cart-billaddress-title">Billing Address</span>

          <div className="bill-add-container">
            <span className="cart-billaddress">Address</span>
            <div className="bill-address-inputs">
              <div className="bill-address-input">
                <input type="bill-address" placeholder="" />
              </div>
            </div>
          </div>

          <div className="bill-phone-container">
            <span className="cart-Phone-no">Phone Number</span>
            <div className="bill-phone-inputs">
              <div className="bill-phone-input">
                <input type="bill-phone" placeholder="" />
              </div>
            </div>
          </div>

          <div className="bill-email-container">
            <span className="cart-Email">Email</span>
            <div className="bill-email-inputs">
              <div className="bill-email-input">
                <input type="bill-email" placeholder="" />
              </div>
            </div>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="bill-checkbox" />
            Set as Default Address
          </div>

          <div className="checkout-btn-container">
            <button className="checkoutbtn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
