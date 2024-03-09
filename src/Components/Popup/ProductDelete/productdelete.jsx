import React from "react";
import "./productdelete.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';
import { products } from '../../../Actions'; // Import your action creators

const {deleteProducts} = products;

const productdelete = ({ onCancel, itemId, deleteProducts }) => {
  const cancelPopup = () => {
  };
  
  const onDeleteItem = () => {
    onCancel()
    deleteProducts(itemId)

    // delete api call -> product Id

    // axios.delete(
    //   `http://localhost:8089/craftbay/admin/product/delete/${itemId}`
    // )
  };
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
          <button className="productdelete-dltbtn" onClick={() => onDeleteItem()} >Delete</button>

          <button
            className="productdelete-cancelbtn"
            onClick={() => onCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.craftbay.products,
  };
};

const mapDispatchToProps = {
  deleteProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(productdelete);

