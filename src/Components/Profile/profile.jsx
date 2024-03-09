import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./profile.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { products } from "../../Actions";
import { useParams } from "react-router-dom";

const { getUserById } = products;
const Profile = ({ getUserById, userById }) => {
  const [startDate, setStartDate] = useState(new Date());
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  

  useEffect(() => {
    getUserById(userId);
  }, []);

  useEffect(() => {}, [userById]);

  return (
    <div className="prof-add-pay-bg">
      <span className="acc-info-title">Account Information</span>

      <div className="acc-info-container">
        <div className="acc-info-label">
          <label className="acc-info-fname">First Name</label>
          <label className="acc-info-lname">Last Name</label>
          <label className="acc-info-house-no">House No</label>
          <label className="acc-info-street-name">Street Name</label>
          <label className="acc-info-city">City</label>
          <label className="acc-info-country">Country</label>
          <label className="acc-info-email">Email</label>
          <label className="acc-info-phone">Phone No</label>
          <label className="acc-info-birth">Date of Birth</label>
        </div>

        {Object.keys(userById).length > 0 && (
          <div className="acc-info-txtbox">
            <div>
              <input
                className="acc-info-txtbox-fname"
                type="text"
                value={userById.firstName}
              />
            </div>

            <div>
              <input
                className="acc-info-txtbox-lname"
                type="text"
                placeholder="Last Name"
                value={userById.lastName}
              />
            </div>

            <div>
              <input
                className="acc-info-txtbox-house"
                type="text"
                placeholder="House No"
              />
            </div>

            <div>
              <input
                className="acc-info-txtbox-street"
                type="text"
                placeholder="Street"
              />
            </div>

            <div>
              <input
                className="acc-info-txtbox-city"
                type="text"
                placeholder="City"
              />
            </div>

            <div>
              <input
                className="acc-info-txtbox-country"
                type="text"
                placeholder="Country"
              />
            </div>

            <div>
              <input
                className="acc-info-txtbox-email"
                type="text"
                placeholder="Email"
                value={userById.username}
              />
            </div>

            <div>
              <input
                className="acc-info-txtbox-phone"
                type="text"
                placeholder="Phone No"
              />
            </div>

            <div>
              <DatePicker
                className="acc-info-txtbox-dob"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy.MM.dd"
              />
            </div>

            <div>
              <button className="acc-info-savebtn"> Submit </button>
            </div>
          </div>
        )}
      </div>

      <div className="card-info-container">
        <span className="card-info-title">Payment Option</span>

        <label className="card-info-card-no">Card No</label>
        <div className="card-info-card-no-inputs">
          <div className="card-info-card-no-input">
            <input type="card-info-card-no" placeholder="XXXX-XXXX-XXXX-XXXX" />
          </div>
        </div>

        <label className="card-info-exp-date">Exp Date</label>
        <div className="card-info-exp-date-inputs">
          <div className="card-info-exp-date-input">
            <input type="card-info-exp-date" placeholder="MM/YY" />
          </div>
        </div>

        <label className="card-info-cvv">CVV</label>
        <div className="card-info-cvv-inputs">
          <div className="card-info-cvv-input">
            <input type="card-info-cvv" placeholder="CVV" />
          </div>
        </div>

        <div className="card-info-save-btn-container">
          <button className="card-info-savebtn">Save Details</button>
        </div>
        <div className="admin-dashboard-btn-container">
      <button className="admin-dashboard-btn" onClick={() => navigate(`/admindashboard`)}>Admin Dashboard</button>
      </div>

      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userById: state.craftbay.userById,
  };
};

const mapDispatchToProps = {
  getUserById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
