import React from 'react'
import "./adminorderbyid.css";

const AdminOrderById = () => {
  return (
    <div className="admin-by-id-order-bg">
      <div className="admin-by-id-order-container">
        <h2 className="admin-by-id-order-title">Order : #</h2>

        <div className="admin-by-id-order-status-selector-container">
          <div className="admin-by-id-order-apply-btn-container">
            <button className="admin-by-id-order-apply-btn">Save</button>
          </div>
        

          <div className="admin-by-id-order-status-selector-container">
            <select className="admin-by-id-order-status-selector">
              <option value="Select">Status</option>
              <option value="Select" className="admin-order-status-inprogress">
                In Progress
              </option>
              <option value="Select" className="admin-order-status-cancelled">
                Cancelled
              </option>
              <option value="Select" className="admin-order-status-completed">
                Completed
              </option>
            </select>
          </div>
        </div>

        <div className="admin-by-id-order-by-order-container">
          <div className="admin-by-id-order-by-order-img"></div>
          <h3 className="admin-by-id-order-by-order-prodname">Product Name :</h3>
          <label className="admin-by-id-order-by-order-prodname-lbl">
            Prod One
          </label>

          <h3 className="admin-by-id-order-by-order-qty">Quantity :</h3>
          <label className="admin-by-id-order-by-order-qty-lbl">
            10
          </label>

          <h3 className="admin-by-id-order-by-order-price">Price :</h3>
          <label className="admin-by-id-order-by-order-price-lbl">Rs. 2000.00</label>

          <label className="admin-by-id-order-by-order-status-lbl"> STATUS </label>

        </div>
      </div>
    </div>
  )
}

export default AdminOrderById