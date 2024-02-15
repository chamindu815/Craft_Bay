import React from "react";
import "./productdelete.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const productdelete = ({onCancel}) => {
    
  return (
    <div className="productdelete-bg">
      <div className="productdelete-container">
        <div>
          <FontAwesomeIcon
            icon="fa-sharp fa-regular fa-circle-exclamation"
            style={{ color: "#ff0000" }}
          />
        </div>
        <div className="productdelete-heading">
          <label>Are you sure?</label>
        </div>

        <div className="productdelete-msg">
          <span>
            Do you really want to delete these records? This process cannot be
            undone.
          </span>
        </div>

        <div className="productdelete-btn">
          <button className="productdelete-dltbtn">Delete</button>
          
          <button className="productdelete-cancelbtn" onClick={()=> onCancel()}>Canecl</button>
        </div>
      </div>
    </div>
  );
};

export default productdelete;
