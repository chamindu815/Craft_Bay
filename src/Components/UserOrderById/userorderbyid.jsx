import React, { useEffect } from "react";
import "./userorderbyid.css";
import { connect } from "react-redux";
import { products } from "../../Actions";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const { userGetOrderByOrderId, addRatings } = products;
const UserOrderById = ({
  userGetOrderByOrderId,
  orderByOrderId,
  addRatings,
}) => {
  const userId = localStorage.getItem("userId");
  const { id } = useParams();

  useEffect(() => {
    userGetOrderByOrderId({ userId, id });
  }, [id, userGetOrderByOrderId, userId]);

  return (
    <>
      {Object.keys(orderByOrderId).length > 0 && (
        <div className="user-by-id-order-bg">
          <div className="user-by-id-order-container">
            <h2 className="user-by-id-order-title">
              Order : # {orderByOrderId.id}
            </h2>
            <h2 className="user-by-id-order-title">
              Order Status : {orderByOrderId.orderStatus}
            </h2>
            <h2 className="user-by-id-order-title">
              Order Total : RS. {orderByOrderId.totalOrderValue}
            </h2>

            {Array.isArray(orderByOrderId.cart.cartItems) &&
              orderByOrderId.cart.cartItems.map((curElm) => {
                return (
                  <>
                    <div className="user-by-id-order-by-order-container">
                      <div className="user-by-id-order-by-order-img">
                        <img
                          src={`data:image/jpeg;base64,${curElm.product.image}`}
                          alt={curElm.product.name}
                        ></img>
                      </div>
                      <h3 className="user-by-id-order-by-order-prodname">
                        Product Name :
                      </h3>
                      <label className="user-by-id-order-by-order-prodname-lbl">
                        {curElm.product.name}
                      </label>

                      <h3 className="user-by-id-order-by-order-qty">
                        Quantity :
                      </h3>
                      <label className="user-by-id-order-by-order-qty-lbl">
                        {" "}
                        {curElm.quantity}
                      </label>

                      <h3 className="user-by-id-order-by-order-price">
                        Price :
                      </h3>
                      <label className="user-by-id-order-by-order-price-lbl">
                        {curElm.product.sellingPrice * curElm.quantity}
                      </label>
                      <div className="raing-comp">
                        <Box
                          sx={{
                            "& > legend": { mt: 2 },
                          }}
                        >
                          <Typography component="legend" ><h3 className="rating-title">Rating :</h3></Typography>
                          <Rating
                            className="rating-stars"
                            name="simple-controlled"
                            value={curElm.rate}
                            onChange={(event, newValue) => {
                              addRatings({
                                cartItemId: curElm.id,
                                rate: newValue,
                              });
                            }}
                          />
                        </Box>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    orderByOrderId: state.craftbay.orderByOrderId,
  };
};

const mapDispatchToProps = {
  userGetOrderByOrderId,
  addRatings,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOrderById);
