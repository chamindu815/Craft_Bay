import React, { useState,useRef  } from "react";
import "./adminaddproduct.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from "moment";
import { connect } from 'react-redux';
import { products } from '../../Actions'; // Import your action creators

const { addProducts } = products;
const initialValues = {
  name: '',
  image: '',
  description: '',
  buyingPrice: '',
  sellingPrice: '',
  quantity: '',
  date: new Date(),
  category: '',
}
const AdminAddProduct = ({ addProducts }) => {
  const [formValues, setFormValues] = useState(initialValues);
  const fileInputRef = useRef(null);

  async function save(event) {
    console.log("formValues", formValues);
    event.preventDefault();
    const formData = new FormData();

    for (const key in formValues) {
      if (key === 'date') {
        formData.append(key, Moment(formValues[key]).format('YYYY-MM-DD'));
      } else {
        formData.append(key, formValues[key]);
      }
    }
    addProducts(formData)
    setFormValues(initialValues)
    fileInputRef.current.value = null;
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
                value={formValues.name}
                onChange={(event) => {
                  setFormValues({ ...formValues, name: event.target.value });
                }}
              />
            </div>

            <div>
              <input
                className="input-prod-img"
                type="file"
                id="image"
                ref={fileInputRef}
                onChange={(event) => {
                  setFormValues({ ...formValues, image: event.target.files[0] });
                }}
              />
            </div>

            <div>
              <input
                className="input-prod-des"
                type="productdescription"
                placeholder="Description"
                id="description"
                value={formValues.description}
                onChange={(event) => {
                  setFormValues({ ...formValues, description: event.target.value });

                }}
              />
            </div>

            <div>
              <input
                className="input-prod-buying-price"
                type="productprice"
                placeholder="Buying Price"
                id="buyingPrice"
                value={formValues.buyingPrice}
                onChange={(event) => {
                  setFormValues({ ...formValues, buyingPrice: event.target.value });
                }}
              />
            </div>

            <div className="input-prod-buying-price">
              <DatePicker selected={formValues.date} onChange={(date) => setFormValues({ ...formValues, date: Moment(date).format('YYYY-MM-DD') })}
                dateFormat="yyyy-MM-dd"
              />
            </div>

            <div>
              <input
                className="input-prod-selling-price"
                type="productprice"
                placeholder="Selling Price"
                id="sellingPrice"
                value={formValues.sellingPrice}
                onChange={(event) => {
                  setFormValues({ ...formValues, sellingPrice: event.target.value });
                }}
              />
            </div>

            <div>
              <input
                className="input-prod-price"
                type="productqnt"
                placeholder="Quantity"
                id="quantity"
                value={formValues.quantity}
                onChange={(event) => {
                  setFormValues({ ...formValues, quantity: event.target.value });
                }}
              />
            </div>

            <div>
              <select
                className="prod-dropdown"
                // placeholder="Select"
                value={formValues.category}
                onChange={(event) => {
                  setFormValues({ ...formValues, category: event.target.value });
                }}
              >
                <option value="Select">Select</option>
                <option value="WOODEN">Wooden</option>
                <option value="TEXTILE">Textile</option>
                <option value="CLAY">Clay</option>
                <option value="METAL">Metal</option>
                <option value="LEATHER">Leather</option>

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

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = {
  addProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddProduct);
