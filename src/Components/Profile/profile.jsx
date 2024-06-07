import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./profile.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { products } from "../../Actions";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const { getUserById, addCardToUser, updateUserBillingAddress, getCardDetails } = products;
const Profile = ({ getUserById, userById, addCardToUser, updateUserBillingAddress, cardDetails, getCardDetails }) => {
  const [startDate, setStartDate] = useState('');
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({});
  const [userValues, setUserValues] = useState({});

  useEffect(() => {
    getUserById(userId);
    getCardDetails(userId)
  }, []);

  useEffect(() => {
    if (userById) {
      setStartDate(userById.dateOfBirth)
      setUserValues(userById)
    }
  }, [userById]);

  useEffect(() => {
    if (cardDetails) {
      setFormValues(cardDetails)
    }
  }, [cardDetails]);

  const addCard = (event) => {
    event.preventDefault();
    addCardToUser({ formValues, userId });
    NotificationManager.success('Card Added Successfully!', 'Success', 3000);
  };

  const handleUserUpdate = (e) => {
    setUserValues({
      ...userValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitUser = (e) => {
    console.log("xxxxx user ",userValues);
    e.preventDefault();
    updateUserBillingAddress({ userId, userValues })
  }

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

        {Object.keys(userValues).length > 0 && (
          <div className="acc-info-txtbox">
            <div>
              <input
                className="acc-info-txtbox-fname"
                name='firstName'
                type="text"
                value={userValues.firstName}
                onChange={handleUserUpdate}
              />
            </div>

            <div>
              <input
                className="acc-info-txtbox-lname"
                name='lastName'
                type="text"
                placeholder="Last Name"
                value={userValues.lastName}
                onChange={handleUserUpdate}
              />
            </div>

            <div>
              <input
                className="acc-info-txtbox-house"
                name='houseNo'
                type="text"
                placeholder="House No"
                value={userValues.houseNo}
                onChange={handleUserUpdate}
              />
            </div>

            <div>
              <input
                className="acc-info-txtbox-street"
                name='streetName'
                type="text"
                placeholder="Street"
                value={userValues.streetName}
                onChange={handleUserUpdate}
              />
            </div>

            <div>
              <input
                className="acc-info-txtbox-city"
                name='city'
                type="text"
                placeholder="City"
                value={userValues.city}
                onChange={handleUserUpdate}
              />
            </div>

            <div>
              <input
                className="acc-info-txtbox-country"
                name='country'
                type="text"
                placeholder="Country"
                value={userValues.country}
                onChange={handleUserUpdate}
              />
            </div>

            <div>
              <input
                className="acc-info-txtbox-email"
                type="text"
                placeholder="Email"
                value={userValues.username}
              />
            </div>

            <div>
              <input
                className="acc-info-txtbox-phone"
                name='phoneNo'
                type="number"
                placeholder="Phone No"
                value={userValues.phoneNo}
                onChange={handleUserUpdate}
              />
            </div>

            <div>
              <DatePicker
                className="acc-info-txtbox-dob"
                name='dateOfBirth'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy.MM.dd"
              />
            </div>

            <div>
              <button className="acc-info-savebtn" onClick={handleSubmitUser}> Submit </button>
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



        {userById?.role === 'ADMIN' &&
          <div className="admin-dashboard-btn-container">
            <button
              className="admin-dashboard-btn"
              onClick={() => navigate(`/admindashboard`)}
            >
              Admin Dashboard
            </button>
          </div>
        }
      </div>
      <NotificationContainer />

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userById: state.craftbay.userById,
    userCardDetails: state.craftbay.userCardDetails,
    cardDetails: state.craftbay.cardDetails,
  };
};

const mapDispatchToProps = {
  getUserById,
  addCardToUser,
  updateUserBillingAddress,
  getCardDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
