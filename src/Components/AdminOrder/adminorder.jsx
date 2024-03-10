import React, { useState, useEffect } from 'react';
import './adminorder.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import nextimg from '../Assets/arrow_7481528.png';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { products } from '../../Actions';
import defaultImage from "../Assets/Order-Sucessfull.jpg";

const { adminGetOrders } = products;
const AdminOrder = ({ adminGetOrders, adminGetOrderDetails }) => {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    adminGetOrders();
  }, [adminGetOrders]);


  useEffect(() => {}, [adminGetOrderDetails]);

  return (
    <div className="admin-order-bg">
      <div className="admin-order-container">
        <h2 className="admin-order-title">Admin Orders</h2>
        <div className="admin-order-status-selector-container">
          <div>
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
                <option
                  value="Select"
                  className="admin-order-status-inprogress"
                >
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

          {Array.isArray(adminGetOrderDetails) &&
            adminGetOrderDetails.map((curElm) => {
              return (
                <>
                  <div className="admin-order-by-order-container">
                    <h3 className="admin-order-by-order-id">Order No : # {curElm.id}</h3>
                    <div className="admin-order-by-order-img">
              <img src={defaultImage} alt="Default" />
                    </div>
                    <h3 className="admin-order-by-order-fname">Full Name :</h3>
                    <label className="admin-order-by-order-fname-lbl">
                    {curElm.user.firstName} {curElm.user.lastName}
                    </label>

                    <h3 className="admin-order-by-order-address">Address :</h3>
                    <label className="admin-order-by-order-address-lbl">
                    {curElm.user.houseNo}, {curElm.user.streetName}, {curElm.user.city}, {curElm.user.country}
                    </label>

                    <h3 className="admin-order-by-order-total">Total :</h3>
                    <label className="admin-order-by-order-total-lbl">
                      Rs. {curElm.totalOrderValue}
                    </label>

                    <label className="admin-order-by-order-status-lbl">
                    {curElm.orderStatus}
                    </label>

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

                    <button className="admin-order-by-order-more-btn">
                      <img
                        className="next-img"
                        src={nextimg}
                        alt=""
                        onClick={() => navigate(`/adminorders/${curElm.id}`)}
                      />
                    </button>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    adminGetOrderDetails: state.craftbay.adminGetOrderDetails,
  };
};

const mapDispatchToProps = {
  adminGetOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrder);
