import React from "react";
import "./profileaddpayment.css";

const profile = () => {
  return (
    <div className="prof-add-pay-bg">
      <div className="acc-info-container">
        <span className="acc-info-title">Account Information</span>

        {/* Form Full Name */}
        <label className="acc-info-fname">Full Name</label>
        <div className="acc-info-fname-inputs">
          <div className="acc-info-fname-input">
            <input type="acc-info-fname" placeholder="" />
          </div>
        </div>

        {/* Form Address */}
        <label className="acc-info-address">Address</label>
        <div className="acc-info-address-inputs">
          <div className="acc-info-address-input">
            <input type="acc-info-address" placeholder="" />
          </div>
        </div>

        {/* Form Email */}
        <label className="acc-info-email">Email</label>
        <div className="acc-info-email-inputs">
          <div className="acc-info-email-input">
            <input type="acc-info-email" placeholder="" />
          </div>
        </div>

        {/* Form Phone-No */}
        <label className="acc-info-phone">Phone No</label>
        <div className="acc-info-phone-inputs">
          <div className="acc-info-phone-input">
            <input type="acc-info-phone" placeholder="" />
          </div>
        </div>

        {/* Form DateOfBirth */}
        <label className="acc-info-birth">Date of Birth</label>
        <div className="acc-info-birth-inputs">
          <div className="acc-info-birth-input">
            <input type="acc-info-birth" placeholder="" />
          </div>
        </div>

        <div className="acc-info-save-btn-container">
          <button className="acc-info-savebtn">Save Details</button>
        </div>
      </div>

      <div className="card-info-container">
      <span className="card-info-title">Payment Option</span>

      {/* Form Card No */}
      <label className="card-info-card-no">Card No</label>
        <div className="card-info-card-no-inputs">
          <div className="card-info-card-no-input">
            <input type="card-info-card-no" placeholder="XXXX-XXXX-XXXX-XXXX" />
          </div>
        </div>

        {/* Form Expire-Date */}
      <label className="card-info-exp-date">Exp Date</label>
        <div className="card-info-exp-date-inputs">
          <div className="card-info-exp-date-input">
            <input type="card-info-exp-date" placeholder="XX/XX" />
          </div>
        </div>


        {/* Form CVV */}
      <label className="card-info-cvv">CVV</label>
        <div className="card-info-cvv-inputs">
          <div className="card-info-cvv-input">
            <input type="card-info-cvv" placeholder="XXX" />
          </div>
        </div>

        <div className="card-info-save-btn-container">
          <button className="card-info-savebtn">Save Details</button>
        </div>

      </div>
    </div>
  );
};

export default profile;
