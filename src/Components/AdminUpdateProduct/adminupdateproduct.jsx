import React, { useState, useEffect } from "react";
import "./adminupdateproduct.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import Modal from "../Popup/Modal/Modal";
import { useNavigate } from "react-router-dom";


const AdminUpdateProduct = (props) => {
  const {product} = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    { date: "01/02/2024", price: "Rs.1500", quantity: "10" },
    { date: "05/02/2024", price: "Rs.2500", quantity: "20" },
    { date: "10/02/2024", price: "Rs.3500", quantity: "30" },
    { date: "15/02/2024", price: "Rs.4500", quantity: "40" },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const navigate = useNavigate()
  console.log('editedProduct',product);
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
          <label className="form-update-selling-price">Selling Price:</label>
        </div>

        <div className="prod-update-txtbox">
          <div>
            <input
              className="input-update-prod-name"
              type="text"
              placeholder="Product Name"
              value={product?.name}
            />
          </div>

          <div>
            <input className="input-update-prod-img" type="file" />
          </div>

          <div>
            <input
              className="input-update-prod-description"
              type="text"
              placeholder="Description"
              value={product?.description}
            />
          </div>

          <div>
            <input
              className="input-update-prod-quantity"
              type="text"
              placeholder="Quantity"
            />
          </div>

          <div>
            <input
              className="input-update-prod-selling-price"
              type="text"
              placeholder="Selling Price"
            />
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
                {rows.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.date}</td>
                    <td>{row.price}</td>
                    <td>{row.quantity}</td>
                    <td>
                      <span className="actions">
                        <BsFillTrashFill
                          className="delete-btn"
                          onClick={() => handleDeleteRow(idx)}
                        />
                        <BsFillPencilFill
                          onClick={() => handleEditRow(idx)}
                        />
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

export default AdminUpdateProduct;