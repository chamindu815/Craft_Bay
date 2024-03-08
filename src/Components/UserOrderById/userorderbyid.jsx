import React from 'react'
import "./userorderbyid.css";

const UserOrderById = () => {
  return (
    <div className="user-by-id-order-bg">
      <div className="user-by-id-order-container">
        <h2 className="user-by-id-order-title">Order : #</h2>

        <div className="user-by-id-order-by-order-container">
          <div className="user-by-id-order-by-order-img"></div>
          <h3 className="user-by-id-order-by-order-prodname">Product Name :</h3>
          <label className="user-by-id-order-by-order-prodname-lbl">
            Prod One
          </label>

          <h3 className="user-by-id-order-by-order-qty">Quantity :</h3>
          <label className="user-by-id-order-by-order-qty-lbl">
            10
          </label>

          <h3 className="user-by-id-order-by-order-price">Price :</h3>
          <label className="user-by-id-order-by-order-price-lbl">Rs. 2000.00</label>

        </div>
      </div>
    </div>
  )
}

export default UserOrderById