import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./profile.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { products } from "../../Actions";

const { getUserById, addCardToUser } = products;
const Profile = ({ getUserById, userById, addCardToUser, userCardDetails }) => {
  const [startDate, setStartDate] = useState(new Date());
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    getUserById(userId);
  }, []);

  useEffect(() => {}, [userById]);

  const addCard = (event) => {
    event.preventDefault();
    addCardToUser({ formValues, userId });
  };

  console.log("userId", userId);

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
      {/* {Object.keys(userCardDetails).length > 0 && ( */}
      <div className="card-info-container">
        <span className="card-info-title">Payment Option</span>

        <label className="card-info-card-no">Card No</label>

        <div className="card-info-card-no-inputs">
          <div className="card-info-card-no-input">
            <input
              type="card-info-card-no"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              id="cardNo"
              value={formValues.cardNo}
              onChange={(event) => {
                setFormValues({ ...formValues, cardNo: event.target.value });
              }}
            />
          </div>
        </div>

        <label className="card-info-exp-date">Exp Date</label>
        <div className="card-info-exp-date-inputs">
          <div className="card-info-exp-date-input">
            <input
              type="card-info-exp-date"
              placeholder="MM"
              id="month"
              value={formValues.month}
              onChange={(event) => {
                setFormValues({ ...formValues, month: event.target.value });
              }}
            />
            <h1 className="MMYY">/</h1>
          </div>
          
          <div className="card-info-exp-year-input">
            <input
              type="card-info-exp-date"
              placeholder="YY"
              id="month"
              value={formValues.year}
              onChange={(event) => {
                setFormValues({ ...formValues, year: event.target.value });
              }}
            />
          </div>
        </div>

        <label className="card-info-cvv">CVV</label>
        <div className="card-info-cvv-inputs">
          <div className="card-info-cvv-input">
            <input
              type="card-info-cvv"
              placeholder="CVV"
              id="cardNo"
              value={formValues.cvv}
              onChange={(event) => {
                setFormValues({ ...formValues, cvv: event.target.value });
              }}
            />
          </div>
        </div>

        <div className="card-info-save-btn-container">
          <button className="card-info-savebtn" onClick={(e) => addCard(e)}>
            Save Details
          </button>
        </div>
        <div className="admin-dashboard-btn-container">
          <button
            className="admin-dashboard-btn"
            onClick={() => navigate(`/admindashboard`)}
          >
            Admin Dashboard
          </button>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userById: state.craftbay.userById,
    userCardDetails: state.craftbay.userCardDetails,
  };
};

const mapDispatchToProps = {
  getUserById,
  addCardToUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
