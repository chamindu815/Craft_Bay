import React, { useState, useEffect } from "react";
import "./adminupdateproduct.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import Modal from "../Popup/Modal/Modal";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { products } from '../../Actions';
import Select from 'react-select';

const { getProductsById, updateProduct } = products;
const options = [
  { value: 'WOODEN', label: 'Wooden Crafts' },
  { value: 'TEXTILE', label: 'Textile' },
  { value: 'CLAY', label: 'Clay' },
  { value: 'METAL', label: 'Metal' },
  { value: 'LEATHER', label: 'Leather' },
]

const AdminUpdateProduct = ({ productItem, getProductsById, updateProduct }) => {
  const [modalOpen, setModalOpen] = useState(null);
  const [rows, setRows] = useState([
    // { date: "01/02/2024", price: "Rs.1500", quantity: "10" },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const { id } = useParams();
  const [formValues, setFormValues] = useState({});
  const [selectedValue, setSelectedValue] = useState({});

  useEffect(() => {
    getProductsById(id)
  }, [id]);

  useEffect(() => {
    if (productItem) {
      const selectedCategory = options.find(o => o.value == productItem.category)
      setSelectedValue(selectedCategory)
      setFormValues(productItem)
    }
  }, [productItem]);

  const handleDeleteRow = (id, type) => {
    if (type == "BuyingPrice") {
      setFormValues({ ...formValues, adminProductBuyingPriceDetailsDtos: formValues.adminProductBuyingPriceDetailsDtos.filter((b, idx) => idx != id) })
    } else {
      setFormValues({ ...formValues, adminProductSellingPriceDetailsDtos: formValues.adminProductSellingPriceDetailsDtos.filter((b, idx) => idx != id) })
    }
  };

  const handleEditRow = (id, type) => {
    console.log('xxxxx handleEditRow', id);

    setRowToEdit(id);
    setModalOpen(type);
  };

  const handleSubmit = (newRow) => {
    console.log('xxxxx newRow', newRow);
    if (modalOpen == "BuyingPrice") {
      setFormValues({
        ...formValues, adminProductBuyingPriceDetailsDtos: rowToEdit === null ? [...formValues.adminProductBuyingPriceDetailsDtos, newRow] : formValues.adminProductBuyingPriceDetailsDtos.map((currRow, idx) => {
          if (idx !== rowToEdit) return currRow;
          return newRow;
        })
      })
    } else {
      setFormValues({
        ...formValues, adminProductSellingPriceDetailsDtos: rowToEdit === null ? [...formValues.adminProductSellingPriceDetailsDtos, newRow] : formValues.adminProductSellingPriceDetailsDtos.map((currRow, idx) => {
          if (idx !== rowToEdit) return currRow;
          return newRow;
        })
      })
    }

    // rowToEdit === null
    //   ? setRows([...rows, newRow])
    //   : setRows(

    //   );
  };
  console.log('xxxxx handleSave', formValues);

  const getRecentPrice = (productPriceDetailsDtos) => {
    const priceList = productPriceDetailsDtos?.sort((a, b) => new Date(b.date) - new Date(a.date))
    return priceList && priceList.length != 0 ? priceList[0].price : 0
  }


  const handleSelectChange = (value) => {
    setFormValues({ ...formValues, category: value.value })
    setSelectedValue(value);
  };

  const handleSave = (e) => {
    console.log('xxxxx handleSave', formValues);
    updateProduct(formValues)
  }

  const getEditToBeItem = () => {
    return modalOpen == "BuyingPrice" ? formValues.adminProductBuyingPriceDetailsDtos.filter((f, idx) => idx == rowToEdit)[0] : formValues.adminProductSellingPriceDetailsDtos.filter((f, idx) => idx == rowToEdit)[0]
  }
  console.log('xxxxx rowToEdit', rowToEdit);
  return (
    <div className="adminupdateproduct-bg">
      {modalOpen != null && (
        <Modal
          closeModal={() => {
            setModalOpen(null);
            setRowToEdit(null);
          }}
          modalType={modalOpen}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && getEditToBeItem()}
        />
      )}
      <label className="prod-update-form-name">Update Product</label>

      {productItem && <div className="prod-update-container">
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
              value={formValues.name}
              onChange={(event) => {
                setFormValues({ ...formValues, name: event.target.value });
              }}
            />
          </div>

          <div>
            {/* <input className="input-update-prod-img" type="file" /> */}
            <img className="input-update-prod-img"
              src={`data:image/jpeg;base64,${formValues.image}`}
              alt={formValues.name}
            ></img>
          </div>

          <div>
            <input
              className="input-update-prod-description"
              type="text"
              placeholder="Description"
              value={formValues?.description}
              onChange={(event) => {
                setFormValues({ ...formValues, description: event.target.value });
              }}
            />
          </div>

          <div>
            <input
              className="input-update-prod-quantity"
              type="number"
              placeholder="Quantity"
              value={formValues?.remainingQuantity}
              onChange={(event) => {
                setFormValues({ ...formValues, remainingQuantity: event.target.value });
              }}
            />
          </div>

          <div>
            <Select options={options} isSearchable value={selectedValue} onChange={handleSelectChange} />
            <button type="submit" className="update-prod-btn" onClick={(e) => handleSave(e)} >
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
                {formValues && formValues.adminProductBuyingPriceDetailsDtos && formValues?.adminProductBuyingPriceDetailsDtos.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.date}</td>
                    <td>Rs.{row.price}</td>
                    <td>{row.quantity}</td>
                    <td>
                      <span className="actions">
                        <BsFillTrashFill
                          className="delete-btn"
                          onClick={() => handleDeleteRow(idx, "BuyingPrice")}
                        />
                        <BsFillPencilFill onClick={() => handleEditRow(idx, "BuyingPrice")} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="btn" onClick={() => setModalOpen("BuyingPrice")}>
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
                {formValues && formValues.adminProductSellingPriceDetailsDtos && formValues.adminProductSellingPriceDetailsDtos.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.date}</td>
                    <td>Rs.{row.price}</td>

                    <td>
                      <span className="actions">
                        <BsFillTrashFill
                          className="delete-btn"
                          onClick={() => handleDeleteRow(idx, "SellingPrice")}
                        />
                        <BsFillPencilFill onClick={() => handleEditRow(idx, "SellingPrice")} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="btn" onClick={() => setModalOpen("SellingPrice")}>
              Add
            </button>
          </div>

        </div>
      </div>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productItem: state.craftbay.productToBeEdit,
  };
};

const mapDispatchToProps = {
  getProductsById,
  updateProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUpdateProduct);
