import React, { useEffect } from 'react'
import "./adminorderbyid.css";
import { connect } from "react-redux";
import { products } from "../../Actions";
import { useParams } from 'react-router-dom';


const { adminGetOrderByOrderId } = products;
const AdminOrderById = ({ adminGetOrderByOrderId, adminOrderByOrderId }) => {
  const { id } = useParams();


  useEffect(() => {
    console.log("adminOrderByOrderId xxxxxx");
    adminGetOrderByOrderId(id);
  }, []);

  console.log("adminOrderByOrderId", adminOrderByOrderId);

  return (
    <>
      {adminOrderByOrderId && Object.keys(adminOrderByOrderId).length && (
        <div className="admin-by-id-order-bg">
          <div className="admin-by-id-order-container">
        <h2 className="user-by-id-order-title">Order : # {adminOrderByOrderId.id}</h2>
        <h2 className="user-by-id-order-title">Order Status : {adminOrderByOrderId.orderStatus}</h2>
        <h2 className="user-by-id-order-title">Order Total : RS. {adminOrderByOrderId.totalOrderValue}</h2>

            <div className="admin-by-id-order-status-selector-container">
              <div className="admin-by-id-order-apply-btn-container">
                <button className="admin-by-id-order-apply-btn">Save</button>
              </div>

              <div className="admin-by-id-order-status-selector-container">
                <select className="admin-by-id-order-status-selector">
                  {/* <option value="Select">Status</option> */}
                  <option value="Select" className="admin-order-status-inprogress">
                    In Progress
                  </option>
                  <option value="Select" className="admin-order-status-inprogress">
                  ORDERED
                  </option>
                  <option value="Select" className="admin-order-status-cancelled">
                    Cancelled
                  </option>
                  <option value="Select" className="admin-order-status-completed">
                    Completed
                  </option>
                </select>
              </div>
            </div>


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
                    <label className="admin-by-id-order-by-order-status-lbl"> STATUS </label>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrderById);