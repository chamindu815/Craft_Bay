import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import CartData from "./cartData";
import { connect } from "react-redux";
import { products } from "../../Actions";
import { useParams } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";

const { viewCart } = products;

const Cart = ({ viewCart, cartDetails }) => {
  const minValue = 1;
  const maxValue = 100;
  const [count, setCount] = useState(minValue);
  // const { id } = useParams();
  const { userId } = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    viewCart(localStorage.getItem("userId"));
  }, []);

  useEffect(() => {
    console.log("products", cartDetails);
    if (cartDetails.length > 0) {
    }
  }, [cartDetails]);
  console.log("cartDetails:", cartDetails);

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

        {Array.isArray(cartDetails?.cartItems) &&
          cartDetails.cartItems.map((curElm) => {
            console.log("curElm: ", curElm);
            return (
              <div className="cart-container">
                <div className="cart-content">
                  <div className="cart-img-box">
                    <img
                      src={`data:image/jpeg;base64,${curElm.product.image}`}
                      alt={curElm.product.name}
                    ></img>
                  </div>
                  <div className="cart-main">
                    <div>
                      <h3 className="cart-prod-title">{curElm.product.name}</h3>
                      <span className="cart-price-title">Price</span>

                      <label class="cart-price">
                        Rs: {curElm.product.sellingPrice}
                      </label>
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

                        <p className="cart-p">{curElm.quantity}</p>

                        <button
                          className="cart-increment-btn"
                          onClick={handleIncrementCounter}
                        >
                          <span className="cart-add-btn">+</span>
                        </button>

                        
                      </div>
                      <div className="cart-item-dlt-btn-container">
                      <button><BsFillTrashFill className="delete-cart-item"/></button>
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
            <div className="bill-checkbox">
              <input type="checkbox" />
            </div>
            <div className="bill-checkbox-text">
              <label>Set as Default Address</label>
            </div>
          </div>

          <div className="checkout-btn-container">
            <button
              className="checkoutbtn"
              onClick={() => navigate(`/checkout`)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartDetails: state.craftbay.cartDetails,
  };
};

const mapDispatchToProps = {
  viewCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
