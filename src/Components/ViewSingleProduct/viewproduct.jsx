import React, { useState } from "react";
import prod1 from "../Assets/products/Product_01.jpg";
import "./viewproduct.css";

const ViewProduct = ({ minValue = 0, maxValue = 100 }) => {
  const [count, setCount] = useState(minValue);

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
  return (
    <>
      <div className="all-bg">
        <div className="main-cont">
          <div className="prod-image-container">
            <div className="prod-title">
              <h1>Wooden Elephant</h1>
            </div>
            <img className="prod-img-bg" src={prod1} alt="" />
          </div>

          <div className="prod-detail-container">
            <div className="prod-description">
              <h2 className="prod-des-name">Description</h2>
              <span>
                Experience the charm of our exquisite wooden elephant
                handicraft, a masterpiece that seamlessly blends artistry and
                tradition. Meticulously hand-carved from premium hardwood, this
                enchanting sculpture captures the majestic grace of elephants
                with intricate details. The rich grain of the wood adds a
                natural warmth, enhancing the beauty of the piece. Standing as a
                symbol of wisdom and strength, the sculpture embodies cultural
                significance. Perfect as a decor accent or a thoughtful gift,
                this artisanal creation showcases the craftsmanship of skilled
                artisans. Elevate your space with the timeless allure of our
                wooden elephant handicraft, a testament to the enduring allure
                of handmade treasures.
              </span>
            </div>

            <div className="prod-price-name">
              <label>Rs. 1600.00/=</label>
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
      </div>
    </>
  );
};

export default ViewProduct;
