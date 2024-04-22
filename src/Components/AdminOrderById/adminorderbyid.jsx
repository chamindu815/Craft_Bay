import React, { useEffect, useState } from 'react'
import "./adminorderbyid.css";
import { connect } from "react-redux";
import { products } from "../../Actions";
import { useParams } from 'react-router-dom';
import Select from 'react-select';

const { adminGetOrderByOrderId, updateOrderStatus } = products;
const options = [
  { value: 'ORDERED', label: 'Ordered' },
  { value: 'INPROGRESS', label: 'In Progress' },
  { value: 'COMPLETED', label: 'Completed' },
  // { value: 'CANCELLED', label: 'Cancelled' },
]
const AdminOrderById = ({ adminGetOrderByOrderId, adminOrderByOrderId, updateOrderStatus }) => {
  const { id } = useParams();

  const [selectedValue, setSelectedValue] = useState({});

  useEffect(() => {
    adminGetOrderByOrderId(id);
  }, []);

  useEffect(() => {
    if(adminOrderByOrderId){
      const selectedStatus = options.find(o => o.value == adminOrderByOrderId.orderStatus)
      setSelectedValue(selectedStatus)
    }
  }, [adminOrderByOrderId]);

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  const handleSave = (e) => {
    updateOrderStatus({id,status:selectedValue.value})
  }

  return (
    <>
      {adminOrderByOrderId && Object.keys(adminOrderByOrderId).length && (
        <div className="admin-by-id-order-bg">
          <div className="admin-by-id-order-container">
            <h2 className="user-by-id-order-title">Order : # {adminOrderByOrderId.id}</h2>
            <h2 className="user-by-id-order-title">Order Status : {adminOrderByOrderId.orderStatus}</h2>
            <h2 className="user-by-id-order-title">Order Total : RS. {adminOrderByOrderId.totalOrderValue}</h2>

            {(adminOrderByOrderId.orderStatus != 'COMPLETED' && adminOrderByOrderId.orderStatus != 'CANCELLED') && <div className="admin-by-id-order-status-selector-container">
              <div className="admin-by-id-order-apply-btn-container">
                <button className="admin-by-id-order-apply-btn" onClick={(e) => handleSave(e)}>Save</button>
              </div>

              <div className="admin-by-id-order-status-selector-container">
                <Select className="admin-by-id-order-status-selector-id" options={options} isSearchable value={selectedValue} onChange={handleSelectChange} />
              </div>
            </div>}

            {Array.isArray(adminOrderByOrderId.cart.cartItems) && adminOrderByOrderId.cart.cartItems.map((curElm) => {
              return (
                <>
                  <div className="admin-by-id-order-by-order-container">
                    <div className="admin-by-id-order-by-order-img">

                      <img src={`data:image/jpeg;base64,${curElm.product.image}`} alt={curElm.product.name}></img>
                    </div>
                    <h3 className="admin-by-id-order-by-order-prodname">Product Name :</h3>
                    <label className="admin-by-id-order-by-order-prodname-lbl">
                      {curElm.product.name}
                    </label>

                    <h3 className="admin-by-id-order-by-order-qty">Quantity :</h3>
                    <label className="admin-by-id-order-by-order-qty-lbl">
                      {curElm.quantity}
                    </label>

                    <h3 className="admin-by-id-order-by-order-price">Price :</h3>
                    <label className="admin-by-id-order-by-order-price-lbl">Rs. {curElm.quantity * curElm.product.sellingPrice}</label>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    adminOrderByOrderId: state.craftbay.adminOrderByOrderId,
  };
};

const mapDispatchToProps = {
  adminGetOrderByOrderId,
  updateOrderStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrderById);