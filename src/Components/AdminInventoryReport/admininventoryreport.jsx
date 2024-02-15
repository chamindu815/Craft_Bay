import React from "react";
import "./admininventoryreport.css";

const admininventoryreport = () => {
  return (
    <div className="invent-report-bg">
      <div className="invent-report-title-container">
        <span className="invent-report-title">Manage Reports</span>

        <div className="invent-report-btn-container">
          <button className="invent-report-btn">Inventory Report</button>
          <button className="revenue-report-btn">Revenue Report</button>
        </div>
        <div className="invent-report-container">
            <div className="invent-report-container-title">
                <span className="invent-rep-title-1">Product Name</span>
                <span className="invent-rep-title-2">Quantity</span>
                <span className="invent-rep-title-3">Price</span>
                <span className="invent-rep-title-4">Date</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default admininventoryreport;
