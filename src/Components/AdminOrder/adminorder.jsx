import React, { useState } from "react";
import "./adminorder.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import nextimg from "../Assets/arrow_7481528.png";


const AdminOrder = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="admin-order-bg">
      <div className="admin-order-container">
        <h2 className="admin-order-title">My Orders</h2>
        <div className="admin-order-status-selector-container">
          <div className="admin-order-apply-btn-container">
            <button className="admin-order-apply-btn">Apply</button>
          </div>
          <div className="admin-order-status-date-container">
            <DatePicker
              className="admin-order-status-date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy.MM.dd"
            />
          </div>

          <div className="admin-order-status-selector-container">
            <select className="admin-order-status-selector">
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

        <div className="admin-order-by-order-container">
          <h3 className="admin-order-by-order-id">Order No : #</h3>
          <div className="admin-order-by-order-img"></div>
          <h3 className="admin-order-by-order-fname">Full Name :</h3>
          <label className="admin-order-by-order-fname-lbl">
            Chamindu Anjana De Alwis
          </label>

          <h3 className="admin-order-by-order-address">Address :</h3>
          <label className="admin-order-by-order-address-lbl">
            Chamindu Anjana De Alwis
          </label>

          <h3 className="admin-order-by-order-total">Total :</h3>
          <label className="admin-order-by-order-total-lbl">Rs. 5000.00</label>

          <label className="admin-order-by-order-status-lbl"> STATUS </label>

          {/* <select className="admin-order-by-order-status-selector">
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
          </select> */}

          <button className="admin-order-by-order-more-btn"><img className="next-img" src={nextimg} alt="" /></button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
