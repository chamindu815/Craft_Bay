import React, { useEffect } from "react";
import "./Checkout.css";
import { connect } from "react-redux";
import { products } from "../../Actions";
import { useNavigate } from "react-router-dom";

const { viewCart, postUserPlaceOrders, updateCardDetails } = products;

const Checkout = ({ viewCart, cartDetails, postUserPlaceOrders, cardDetails }) => {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    viewCart(userId);
  }, []);

  const handleSubmit = (e) => {
    navigate('/home')
    postUserPlaceOrders({ userId, cartId: cartDetails.id })
  }

  const formatCardNumber = (number) => {
    if (number) {
      // Remove spaces if any
      const cleanNumber = number.replace(/\s+/g, '');
      // Keep only the last 4 digits visible
      const maskedNumber = cleanNumber.slice(0, -4).replace(/\d/g, 'x') + cleanNumber.slice(-4);
      // Reintroduce spaces for display
      return maskedNumber.replace(/(.{4})/g, '$1 ').trim();
    }
  };

  const calculateSubTotal = () => {
    let total = 0
    if (Array.isArray(cartDetails?.cartItems)) {
      cartDetails.cartItems.map((i) => {
        total += i.product.sellingPrice * i.quantity
      })
    }
    return total
  }

  return (
    <div className="checkout-bg">
      <div className="checkout-main-container">
                  <span className="checkout-heading">Product Details</span>
        {Array.isArray(cartDetails?.cartItems) && cartDetails.cartItems.map((curElm) => {
          return (
            <div className="checkout-container">
              <div className="checkout-content">
                <div className="checkout-img-box">
                  <img src={`data:image/jpeg;base64,${curElm.product.image}`}
                    alt={curElm.product.name}></img>
                </div>
                <div className="checkout-main">
                  <div>
                    <h3 className="checkout-prod-title">{curElm.product.name}</h3>
                    <span className="checkout-price-title">Price</span>
                    <h3 className="checkout-prod-title">{curElm.product.Title}</h3>
                    <label class="checkout-price">Rs: {curElm.product.sellingPrice}</label>
                  </div>

                  <div className="checkout-qnt-container">
                    <span className="checkout-qnt-name">Quantity</span>
                    <div className="checkout-qunt-btn">
                      <p className="checkout-p">{curElm.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      

      {Object.keys(cardDetails).length && 
      <div className="checkout-card-info-container">


        <div className="checkout-subtotal">
          <span className="checkout-ordersum-title">Order Summary</span>

          <div>
            <span className="checkout-ordersum-subtotal">Subtotal</span>
            <span className="checkout-ordersum-subtotal-lbl"><span className="space">:</span>RS. {calculateSubTotal()}</span>
          </div>
          <div>
            <span className="checkout-ordersum-shipping">Shipping</span>
            <span className="checkout-ordersum-shipping-lbl"><span className="space">:</span>RS. 500</span>
          </div>
          <div>
            <span className="checkout-ordersum-total">Total</span>
            <span className="checkout-ordersum-total-lbl"><span className="space">:</span>RS. {calculateSubTotal() + 500}</span>
          </div>

        </div>




        <span className="checkout-card-info-title">Payment Option</span>

        {/* Form Card No */}
        <label className="checkout-card-info-card-no">Card No</label>
        <div className="checkout-card-info-card-no-inputs">
          <div className="checkout-card-info-card-no-input">
            <input
              placeholder="XXXX-XXXX-XXXX-XXXX"
              value={formatCardNumber(cardDetails?.cardNo)}

            />
          </div>
        </div>

        {/* Form Expire-Date */}
        <label className="checkout-card-info-exp-date">Exp Date</label>
        <div className="checkout-card-info-exp-date-inputs">
          <div className="checkout-card-info-exp-date-input">
            <input type="checkout-card-info-exp-date" placeholder="XX/XX" value={cardDetails?.month + "/" + cardDetails.year.toString().slice(-2)} />
          </div>
        </div>

        {/* Form CVV */}
        <label className="checkout-card-info-cvv">CVV</label>
        <div className="checkout-card-info-cvv-inputs">
          <div className="checkout-card-info-cvv-input">
            <input type="checkout-card-info-cvv" placeholder="XXX" value={cardDetails?.cvv} />
          </div>
        </div>

        {/* <div className="checkbox-container">
          <input type="checkbox" className="bill-checkbox" />
          Save Card Details
        </div>

        <div className="checkout-card-info-save-btn-container">
          <button className="checkout-card-info-savebtn" onClick={saveCardDetails}>Save Details</button>
        </div> */}
        <div className="place-order-btn-container">
          <button className="place-order-btn" onClick={handleSubmit}>PLACE ORDER</button>
        </div>
      </div>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartDetails: state.craftbay.cartDetails,
    cardDetails: state.craftbay.cardDetails
  };
};

const mapDispatchToProps = {
  viewCart,
  postUserPlaceOrders,
  updateCardDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
