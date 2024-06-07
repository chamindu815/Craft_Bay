import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { connect } from "react-redux";
import { products } from "../../Actions";
import { BsFillTrashFill } from "react-icons/bs";
import { NotificationManager, NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const { viewCart, updateUserBillingAddress, updateCart } = products;

const Cart = ({ viewCart, cartDetails, user, updateUserBillingAddress, updateCart }) => {
  const [formValues, setFormValues] = useState({});
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [address, setAddress] = useState({});

  useEffect(() => {
      viewCart(userId);
  }, [userId]);

  useEffect(() => {
    if (user) {
      setAddress(user)
    }
    if (cartDetails) {
      setFormValues(cartDetails)
    }
  }, [user, cartDetails]);

  const handleQuantity = (item) => {
    let formData = []
    if(item.quantity != 0){
      formData = {
        ...formValues, cartItems: formValues.cartItems.map((currRow) => {
          if (currRow.id != item.id) return currRow;
          return item;
        })
      }
    } else {
      formData = {
        ...formValues, cartItems: formValues.cartItems.filter((e) => e.id != item.id)
      };
    }
    setFormValues(formData)
    const cartItems = [];
    formData.cartItems.map((i) => {
      cartItems.push({ productId: i.product.id, quantity: i.quantity })
    })
    updateCart({
      cartItems, id: formValues.id, userId
    })
  };

  const handleAddressInputChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value
    });
  };

  const handleDelete = (id) => {
    const updatedCart = { ...formValues, cartItems: formValues.cartItems.filter((b) => b.id != id) }
    setFormValues(updatedCart)
    const cartItems = [];
    updatedCart.cartItems.map((i) => {
      cartItems.push({ productId: i.product.id, quantity: i.quantity })
    })
    updateCart({
      cartItems, id: formValues.id, userId
    })
  };

  const handleSubmitAddress = (e) => {
    e.preventDefault();
    updateUserBillingAddress({ userId, address })
  }

  const calculateSubTotal = () => {
    let total = 0
    if (Array.isArray(formValues?.cartItems)) {
      formValues.cartItems.map((i) => {
        total += i.product.sellingPrice * i.quantity
      })
    }
    return total
  }

  const handleSubmitCart = (e) => {
    navigate(`/checkout`)
    const cartItems = [];
    formValues.cartItems.map((i) => {
      cartItems.push({ productId: i.product.id, quantity: i.quantity })
    })
    updateCart({
      cartItems, id: formValues.id, userId
    })
  }

  const isCartEmpty = () => {
    return !Array.isArray(formValues?.cartItems) || (Array.isArray(formValues?.cartItems) && formValues?.cartItems.length == 0) || (formValues.cartItems && formValues.cartItems.filter((c) => c.quantity != 0).length == 0)
  }
  console.log('xxxxx',isCartEmpty(),formValues?.cartItems);
  return (
    <div className="cart-bg">
      <div className="cart-main-container">
        <span className="cart-heading">Added Items</span>

        {!isCartEmpty() &&
          formValues.cartItems.map((curElm) => {
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
                          disabled={curElm.quantity == 0}
                          onClick={() => handleQuantity({ ...curElm, quantity: curElm.quantity - 1 })}
                        >
                          <span className="cart-min-btn">-</span>
                        </button>

                        <p className="cart-p">{curElm.quantity}</p>

                        <button
                          className="cart-increment-btn"
                          disabled={curElm.quantity == 100}
                          onClick={() => handleQuantity({ ...curElm, quantity: curElm.quantity + 1 })}
                        >
                          <span className="cart-add-btn">+</span>
                        </button>
                      </div>
                      <div className="cart-item-dlt-btn-container">
                        <button>
                          <BsFillTrashFill className="delete-cart-item"
                            onClick={() => handleDelete(curElm.id)} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="checkout-btn-container">
          {Array.isArray(formValues?.cartItems) && formValues?.cartItems.length > 0 && <button
            className={Object.keys(user).length ? "checkoutbtn" : "checkoutbtn-disabled"}
            onClick={() => handleSubmitCart()}
            disabled={!Object.keys(user).length}
          >
            Checkout
          </button>}
          {/* {Array.isArray(formValues?.cartItems) && formValues?.cartItems.length == 0 && <p className="cart-empty-txt">Cart is Empty</p>} */}
        </div>
        {isCartEmpty() ? <p className="cart-empty-txt">Cart is Empty</p> : ""}
      </div>

      <div>
        <div className="Subtotal">
          <span className="cart-ordersum-title">Order Summary</span>

          <div>
            <span className="cart-ordersum-subtotal">Subtotal  </span>
            <span className="cart-ordersum-subtotal-lbl"><span className="space">:</span>RS. {calculateSubTotal()}</span>
          </div>
          <div>
            <span className="cart-ordersum-shipping">Shipping  </span>
            <span className="cart-ordersum-shipping-lbl"><span className="space">:</span>{isCartEmpty() ? "RS. 0" : "RS. 500"}</span>
          </div>
          <div>
            <span className="cart-ordersum-total">Total  </span>
            <span className="cart-ordersum-total-lbl"><span className="space">:</span>{isCartEmpty() ? 'RS. 0' : `RS. ${calculateSubTotal() + 500}`}</span>
          </div>

        </div>

        <div className="billing-address-container">
          <span className="cart-billaddress-title">Billing Details</span>

          <div className="bill-add-container">
            <span className="cart-houseno">House No</span>
            <span className="cart-street">Street</span>
            <span className="cart-city">City</span>
            <span className="cart-country">Country</span>
            <span className="cart-Phone-no">Phone Number</span>
            <span className="cart-Email">Email</span>
          </div>
          <div>
            <input
              className="cart-txtbox-house"
              type="text"
              placeholder="House No"
              name="houseNo"
              value={address.houseNo}
              onChange={handleAddressInputChange}
            />
          </div>

          <div>
            <input
              className="cart-txtbox-street"
              type="text"
              placeholder="Street"
              name="streetName"
              value={address.streetName}
              onChange={handleAddressInputChange}
            />
          </div>

          <div>
            <input
              className="cart-txtbox-city"
              type="text"
              placeholder="City"
              name="city"
              value={address.city}
              onChange={handleAddressInputChange}
            />
          </div>

          <div>
            <input
              className="cart-txtbox-country"
              type="text"
              placeholder="Country"
              name="country"
              value={address.country}
              onChange={handleAddressInputChange}
            />
          </div>

          <div>
            <input
              className="cart-txtbox-Phone-no"
              type="number"
              placeholder="Phone No"
              name="phoneNo"
              value={address.phoneNo}
              onChange={handleAddressInputChange}
            />
          </div>

          <div>
            <input
              className="cart-txtbox-Email"
              type="text"
              placeholder="Email"
              name="username"
              value={address.username}
            />
          </div>

          <div className="checkbox-container">
            {/* <div className="bill-checkbox">
              <input type="checkbox" />
            </div>
            <div className="bill-checkbox-text">
              <label>Set as Default Address</label>
            </div> */}

            <button className="save-address-btn" onClick={handleSubmitAddress}>Save Address Details</button>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartDetails: state.craftbay.cartDetails,
    user: state.craftbay.userById
  };
};

const mapDispatchToProps = {
  viewCart,
  updateUserBillingAddress,
  updateCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
