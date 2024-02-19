import React from 'react'
import "./adminrevenuereport.css";

const adminrevenuereport = () => {
  return (
    <div className="revenue-report-bg">
      <div className="revenue-report-title-container">
        <span className="revenue-report-title">Manage Reports</span>

        <div className="revenue-report-btn-container">
          <button className="invent-report-btn">Inventory Report</button>
          <button className="revenue-report-btn">Revenue Report</button>
        </div>
        <div className="revenue-report-container">
            <div className="revenue-report-container-title">
                <select>
                    <option value="year">Calender</option>
                </select>
            </div>
        </div>
      </div>
    </div>
  )
}

export default adminrevenuereport