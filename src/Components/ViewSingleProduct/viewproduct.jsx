import React, { useEffect, useState } from "react";
import prod1 from "../Assets/products/Product_01.jpg";
import "./viewproduct.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { products } from "../../Actions";
import { useParams } from "react-router-dom";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';



const { getProductById } = products;
const { postAddToCart } = products;
const ViewProduct = ({ getProductById, productById, postAddToCart, addToCart  }) => {
  const minValue = 1;
  const maxValue = productById.remainingQuantity;
  const [count, setCount] = useState(minValue);
  const { id } = useParams();
  const {userId} = localStorage.getItem("userId");
  console.log("userId:",userId);

  const navigate = useNavigate()

  useEffect(() => {
    getProductById(id);
  }, []);




  
  // Need to ask from akka!
  // useEffect(() => {
  //   if (Object.keys(addToCart).length === 0) {
  //     if (addToCart?.status == 200) {
  //       alert("Successfully!");
  //       console.log("login data",addToCart);
  //       console.log("addToCart",addToCart);
  //     }
  //     else {
  //       alert("Unauthorised");
  //     }
  //   }
  // }, [addToCart]);








  useEffect(() => {
    console.log("productById", productById);
    console.log("getProductById", getProductById);
    console.log("postAddToCart", postAddToCart);
    console.log("products", products);
    console.log("addToCart", addToCart);
    // if (productById.length > 0) {
    //   NotificationManager.success('Product Added to Cart Successfully!', 'Success', 3000);
    // }
    // else {
      // NotificationManager.error('Error message', 'Error', 5000);
    // }
  }, [productById]);

  const handleIncrementCounter = () => {
    if (count < maxValue) {
      setCount((prevState) => prevState + 1);
    }
  };

  console.log("count", count);
  const handleDecrementCounter = () => {
    if (count > minValue) {
      setCount((prevState) => prevState - 1);
    }
  };

  // localStorage.setItem("userId", productById?.userId);

  const handleAddToCart = async (event) => {
    event.preventDefault();
    postAddToCart ({
      productId: id,
      quantity: count,
      userId: localStorage.getItem("userId")
    })
    
    NotificationManager.success('Product Added To Cart Successfully!', 'Success', 3000);
    // navigate("/cart"); 
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
                  <button className="buy">Buy Now</button>
                </div>
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
