import React from "react";
import "./adminaddproduct.css";

const AdminAddProduct = () => {
  return (
    <>
      <div className="prod-main-cont">
        <label className="prod-form-name">Add Product</label>
        <div className="prod-add-container">
          <div className="prod-add-label">
            <label className="form-prod-name"> Product Name:</label>
            <label className="form-prod-img">Image:</label>
            <label className="form-prod-des">Description:</label>
            <label className="form-prod-price">Price:</label>
            <label className="form-prod-qnt">Quantity:</label>
          </div>

          <div className="prod-add-txtbox">
            <input
              className="input-prod-name"
              type="productname"
              placeholder="Product Name"
            />
            <input
              className="input-prod-img"
              type="file"
              accept="image/*"
            ></input>
            <input
              className="input-prod-des"
              type="productdescription"
              placeholder="Description"
            />
            <input
              className="input-prod-price"
              type="productprice"
              placeholder="Price"
            />

            <select className="prod-dropdown">
              <option value="Select">Select</option>
              <option value="Wooden">Wooden Crafts</option>
              <option value="Wall Hanger">Wall Hanger</option>
              <option value="Textile">Textile</option>
              <option value="Clay">Clay</option>
              <option value="Metal">Metal</option>
            </select>
            <button className="add-prod-btn">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAddProduct;
