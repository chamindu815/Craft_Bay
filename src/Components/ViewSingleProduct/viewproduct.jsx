import React, { useEffect, useState } from "react";
import prod1 from "../Assets/products/Product_01.jpg";
import "./viewproduct.css";
import { connect } from "react-redux";
import { products } from "../../Actions";
import { useParams } from "react-router-dom";

const { getProductById } = products;
const ViewProduct = ({ getProductById, productById }) => {
  const minValue = 1;
  const maxValue = 100;
  const [count, setCount] = useState(minValue);
  const { id } = useParams();
  useEffect(() => {
    getProductById(id);
  }, []);

  useEffect(() => {
    console.log("products", productById);
    if (productById.length > 0) {
    }
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
  return (
    <>
      <div className="all-bg">
        {Object.keys(productById).length > 0 && (
          <div className="main-cont">
            <div className="prod-image-container">
              <div className="prod-title">
                <h1>{productById.name}</h1>
              </div>
              <img
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
                    onClick={handleIncrementCounter}
                  >
                    <span className="add-btn">+</span>
                  </button>

                  <p>{count}</p>

                  <button
                    className="increment-btn"
                    onClick={handleDecrementCounter}
                  >
                    <span className="min-btn">-</span>
                  </button>
                </div>
              </div>

              <div className="cart-buy-btn-container">
                <div className="addtocart-btn">
                  <button className="cart">Add to Cart</button>
                </div>

                <div className="buynow-btn">
                  <button className="buy">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    productById: state.craftbay.productById,
  };
};

const mapDispatchToProps = {
  getProductById,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
