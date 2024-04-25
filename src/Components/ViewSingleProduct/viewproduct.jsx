import React, { useEffect, useState } from "react";
import "./viewproduct.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { products } from "../../Actions";
import { useParams } from "react-router-dom";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';



const { getProductById } = products;
const { postAddToCart } = products;
const ViewProduct = ({ getProductById, productById, postAddToCart, addToCart }) => {
  const userId = localStorage.getItem("userId")
  const minValue = 1;
  const maxValue = productById.remainingQuantity;
  const [count, setCount] = useState(minValue);
  const { id } = useParams();
  const [cartStatus, setCartStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getProductById(id);
  }, []);

  useEffect(() => {
    if(addToCart.status == 200 && !cartStatus){
      navigate('/checkout')
    }
  }, [addToCart]);

  const handleIncrementCounter = () => {
    if (count < maxValue) {
      setCount((prevState) => prevState + 1);
    }
  };

  const handleDecrementCounter = () => {
    if (count > minValue) {
      setCount((prevState) => prevState - 1);
    }
  };

  const handleAddToCart = async (event) => {
    event.preventDefault();
    if(userId){
      setCartStatus(true)
      postAddToCart({
        productId: id,
        quantity: count,
        userId
      })
      NotificationManager.success('Product Added To Cart Successfully!', 'Success', 3000);
    } else {
      NotificationManager.error('Please Login before add products to cart!', 'Error', 1000);
      navigate('/login')
    }
  };

  const handleBuyNow = async (event) => {
    event.preventDefault();
    if(userId){
      setCartStatus(false)
    postAddToCart({
      productId: id,
      quantity: count,
      userId
    })
    } else {
      NotificationManager.error('Please Login before buy products!', 'Error', 1000);
      navigate('/login')
    }
  };

  return (
    <>
      <div className="all-bg">
        {Object.keys(productById).length > 0 && (
          <div className="main-cont">
            <div className="prod-image-container">
              <div className="prod-single-title">
                <h1>{productById.name}</h1>
              </div>
              <img className="prod-img-bg"
                src={`data:image/jpeg;base64,${productById.image}`}
                alt={productById.name}
              ></img>
            </div>

            <div className="prod-detail-container">
              <div className="prod-description">
                <h2 className="prod-des-name">Description</h2>
                <span>{productById.description}</span>
              </div>

              <div className="prod-price-name">
                <label>Rs. {productById.sellingPrice}</label>
              </div>

              <div className="qnt-container">
                <h2 className="prod-qnt-name">Quantity:</h2>
                <div className="qunt-btn">

                  <button
                    className="increment-btn"
                    onClick={handleDecrementCounter}
                  >
                    <span className="min-btn">-</span>
                  </button>

                  <p>{count}</p>

                  <button
                    className="increment-btn"
                    onClick={handleIncrementCounter}
                  >
                    <span className="add-btn">+</span>
                  </button>
                </div>
              </div>

              <div className="cart-buy-btn-container">
                <div className="addtocart-btn">
                  <button className="cart" onClick={handleAddToCart}>Add to Cart</button>
                </div>

                <div className="buynow-btn">
                  <button className="buy" onClick={handleBuyNow}>Buy Now</button>
                </div>
              </div>
              <div>

                <Box
                  sx={{
                    '& > legend': { mt: 2 },
                  }}
                >
                  <Typography component="legend">Rating: </Typography>
                  <Rating name="read-only" value={productById.rate/productById.noOfRatings} precision={0.1} readOnly />
                  {productById.noOfRatings && <div>({productById.noOfRatings})</div>}
                </Box>

              </div>
            </div>
          </div>
        )}
        <NotificationContainer />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    productById: state.craftbay.productById,
    addToCart: state.craftbay.addToCart,
  };
};

const mapDispatchToProps = {
  getProductById,
  postAddToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
