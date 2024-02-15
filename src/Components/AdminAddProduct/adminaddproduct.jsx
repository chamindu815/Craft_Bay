import React, { useState } from "react";
import "./adminaddproduct.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from "moment";

const AdminAddProduct = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [buyingPrice, setBuyingPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState("");

  async function save(event) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("buyingPrice", buyingPrice);
    formData.append("sellingPrice", sellingPrice);
    formData.append("quantity", quantity);
    formData.append("date", Moment(date).format('YYYY-MM-DD'));
    formData.append("category", category);
    formData.append("image", image);
    console.log("image", image);
    console.log(date);
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:8089/craftbay/admin/product/addProduct",
        formData
      );

      alert("Product Added Successfully");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <div className="prod-main-cont">
        <label className="prod-form-name">Add Product</label>
        <div className="prod-add-container">
          <div className="prod-add-label">
            <label className="form-prod-name"> Product Name:</label>
            <label className="form-prod-img">Image:</label>
            <label className="form-prod-des">Description:</label>
            <label className="form-prod-price">Buying Price:</label>
            <label className="form-prod-selling-price">Buying Date:</label>
            <label className="form-prod-selling-price">Selling Price:</label>
            <label className="form-prod-qnt">Quantity:</label>
            <label className="form-prod-category">Category:</label>
          </div>

          <div className="prod-add-txtbox">
            <div>
              <input
                className="input-prod-name"
                type="name"
                placeholder="Product Name"
                id="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>

            <div>
              <input
                className="input-prod-img"
                type="file"
                id="image"
                onChange={(event) => {
                  console.log("formData", event.target.files);
                  setImage(event.target.files[0]);
                }}
              />
            </div>

            <div>
              <input
                className="input-prod-des"
                type="productdescription"
                placeholder="Description"
                id="description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>

            <div>
              <input
                className="input-prod-buying-price"
                type="productprice"
                placeholder="Buying Price"
                id="buyingPrice"
                value={buyingPrice}
                onChange={(event) => {
                  setBuyingPrice(event.target.value);
                }}
              />
            </div>

            <div className="input-prod-buying-price">
              <DatePicker selected={date} onChange={(date) => setDate(date)}
              dateFormat="yyyy-MM-dd"
              />
            </div>

            <div>
              <input
                className="input-prod-selling-price"
                type="productprice"
                placeholder="Selling Price"
                id="sellingPrice"
                value={sellingPrice}
                onChange={(event) => {
                  setSellingPrice(event.target.value);
                }}
              />
            </div>

            <div>
              <input
                className="input-prod-price"
                type="productqnt"
                placeholder="Quantity"
                id="quantity"
                value={quantity}
                onChange={(event) => {
                  setQuantity(event.target.value);
                }}
              />
            </div>

            <div>
              <select
                className="prod-dropdown"
                // placeholder="Select"
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
              >
                <option value="Select">Select</option>
                <option value="Wooden">Wooden Crafts</option>
                <option value="Wall Hanger">Wall Hanger</option>
                <option value="Textile">Textile</option>
                <option value="Clay">Clay</option>
                <option value="Metal">Metal</option>
              </select>
            </div>

            <button type="submit" className="add-prod-btn" onClick={save}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAddProduct;
