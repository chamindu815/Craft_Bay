import React from "react";
import "./adminprofile.css";

const adminprofile = () => {
  return (
    <div className="admin-profile-bg">
      <div className="admin-acc-info-container">
        <span className="admin-acc-info-title">Account Information</span>

        {/* Form Full Name */}
        <label className="admin-acc-info-fname">Full Name</label>
        <div className="admin-acc-info-fname-inputs">
          <div className="admin-acc-info-fname-input">
            <input type="admin-acc-info-fname" placeholder="" />
          </div>
        </div>

        {/* Form Address */}
        <label className="admin-acc-info-address">Address</label>
        <div className="admin-acc-info-address-inputs">
          <div className="admin-acc-info-address-input">
            <input type="admin-acc-info-address" placeholder="" />
          </div>
        </div>

        {/* Form Email */}
        <label className="admin-acc-info-email">Email</label>
        <div className="admin-acc-info-email-inputs">
          <div className="admin-acc-info-email-input">
            <input type="admin-acc-info-email" placeholder="" />
          </div>
        </div>

        {/* Form Phone-No */}
        <label className="admin-acc-info-phone">Phone No</label>
        <div className="admin-acc-info-phone-inputs">
          <div className="admin-acc-info-phone-input">
            <input type="admin-acc-info-phone" placeholder="" />
          </div>
        </div>

        {/* Form DateOfBirth */}
        <label className="admin-acc-info-birth">Date of Birth</label>
        <div className="admin-acc-info-birth-inputs">
          <div className="admin-acc-info-birth-input">
            <input type="admin-acc-info-birth" placeholder="" />
          </div>
        </div>

        <div className="admin-acc-info-save-btn-container">
          <button className="admin-acc-info-savebtn">Save Details</button>
        </div>
      </div>

      <div className="admin-btn-container">
        <div className="admin-acc-info-manage-order-btn-container">
          <button className="admin-acc-info-manage-order-btn">Manage Orders</button>
        </div>


        <div className="admin-acc-info-manage-report-btn-container">
          <button className="admin-acc-info-manage-report-btn">Manage Reports</button>
        </div>
      </div>
    </div>
  );
};

export default adminprofile;
