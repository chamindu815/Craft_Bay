import React, { useState, useEffect } from "react";
import "./adminupdateproduct.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import Modal from "../Popup/Modal/Modal";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { products } from '../../Actions'; // Import your action creators

const {getProductsById} = products;

const AdminUpdateProduct = ({ productItem, getProductsById }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    // { date: "01/02/2024", price: "Rs.1500", quantity: "10" },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductsById(id)
  }, [id]);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
        rows.map((currRow, idx) => {
          if (idx !== rowToEdit) return currRow;

          return newRow;
        })
      );
  };

  const getRecentPrice = (productPriceDetailsDtos) => {
    const priceList = productPriceDetailsDtos?.sort((a, b) => new Date(b.date) - new Date(a.date))
    return priceList && priceList.length != 0 ? priceList[0].price : 0
  }

  return (
    <div className="adminupdateproduct-bg">
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
      <label className="prod-update-form-name">Update Product</label>

      <div className="prod-update-container">
        <div className="prod-update-label">
          <label className="form-update-name"> Product Name:</label>
          <label className="form-update-img">Image:</label>
          <label className="form-update-des">Description:</label>
          <label className="form-update-qnt">Quantity:</label>
          <label className="form-update-category">Category:</label>
          <label className="form-update-bp-tbl">Buying Prices:</label>
          <label className="form-update-sp-tbl">Selling Prices:</label>
        </div>

        <div className="prod-update-txtbox">
          <div>
            <input
              className="input-update-prod-name"
              type="text"
              placeholder="Product Name"
              value={productItem?.name}
            />
          </div>

          <div>
            {/* <input className="input-update-prod-img" type="file" /> */}
            <img className="input-update-prod-img"
              src={`data:image/jpeg;base64,${productItem.image}`}
              alt={productItem?.name}
            ></img>
          </div>

          <div>
            <input
              className="input-update-prod-description"
              type="text"
              placeholder="Description"
              value={productItem?.description}
            />
          </div>

          {/* <div>
            <input
              className="input-update-prod-buying-price"
              type="text"
              placeholder="Buying Price"
              value={getRecentPrice(productItem.adminProductBuyingPriceDetailsDtos)}
            />
          </div>

          <div>
            <input
              className="input-update-prod-selling-price"
              type="text"
              placeholder="Selling Price"
              value={getRecentPrice(productItem.adminProductSellingPriceDetailsDtos)}
            />
          </div> */}

          <div>
            <input
              className="input-update-prod-quantity"
              type="text"
              placeholder="Quantity"
              value={productItem?.remainingQuantity}
            />
          </div>

          <div>
            <select
              className="update-dropdown"
              // placeholder="Select"
            >
              <option value="Select">Select</option>
              <option value="Wooden">Wooden Crafts</option>
              <option value="Wall Hanger">Wall Hanger</option>
              <option value="Textile">Textile</option>
              <option value="Clay">Clay</option>
              <option value="Metal">Metal</option>
            </select>
            <button type="submit" className="update-prod-btn">
              Submit
            </button>
          </div>

          <div className="prod-update-tbl">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {productItem && productItem.adminProductBuyingPriceDetailsDtos && productItem?.adminProductBuyingPriceDetailsDtos.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.date}</td>
                    <td>Rs.{row.price}</td>
                    <td>{row.quantity}</td>
                    <td>
                      <span className="actions">
                        <BsFillTrashFill
                          className="delete-btn"
                          onClick={() => handleDeleteRow(idx)}
                        />
                        <BsFillPencilFill onClick={() => handleEditRow(idx)} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <button className="btn" onClick={() => setModalOpen(true)}>
              Add
            </button>
          </div>


          <div className="prod-update-tbl">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {productItem && productItem.adminProductSellingPriceDetailsDtos && productItem.adminProductSellingPriceDetailsDtos.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.date}</td>
                    <td>Rs.{row.price}</td>

                    <td>
                      <span className="actions">
                        <BsFillTrashFill
                          className="delete-btn"
                          onClick={() => handleDeleteRow(idx)}
                        />
                        <BsFillPencilFill onClick={() => handleEditRow(idx)} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="btn" onClick={() => setModalOpen(true)}>
              Add
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productItem: state.craftbay.productToBeEdit,
  };
};

const mapDispatchToProps = {
  getProductsById
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUpdateProduct);
