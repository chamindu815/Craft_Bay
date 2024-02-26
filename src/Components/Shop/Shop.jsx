import React, { useEffect, useState } from "react";
import "./Shop.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import nextimg from "../Assets/arrow_7481528.png";
import { connect } from 'react-redux';
import { products } from '../../Actions'; // Import your action creators

const {getProducts} = products;

const Shop = () => {
  const [products, setProducts] = useState();
  const [metalProducts, setMetalProducts] = useState();
  const [textileProducts, setTextileProducts] = useState();
  const [clayProducts, setClayProducts] = useState();
  const [leatherProducts, setLeatherProducts] = useState();

  const navigate = useNavigate();
  const [metalCategory, setMetalCategory] = useState("METAL");
  const [category, setCategory] = useState("WOODEN");
  const [textileCategory, setTextileCategory] = useState("TEXTILE");
  const [clayCategory, setClayCategory] = useState("CLAY");
  const [leatherCategory, setLeatherCategory] = useState("LEATHER");

  useEffect(() => {
    get();
  }, []);

  async function get() {
    try {
      const { data } = await axios.get(
        `http://localhost:8089/craftbay/public/getShopProducts?category=${category}`
      );
      setProducts(data);
    } catch (err) {
      alert(err);
    }

    try {
      // setCategory("WOODEN");
      const { data } = await axios.get(
        `http://localhost:8089/craftbay/public/getShopProducts?category=${metalCategory}`
      );
      setMetalProducts(data);
    } catch (err) {
      alert(err);
    }

    try {
      // setCategory("WOODEN");
      const { data } = await axios.get(
        `http://localhost:8089/craftbay/public/getShopProducts?category=${textileCategory}`
      );
      setTextileProducts(data);
    } catch (err) {
      alert(err);
    }

    try {
      // setCategory("WOODEN");
      const { data } = await axios.get(
        `http://localhost:8089/craftbay/public/getShopProducts?category=${clayCategory}`
      );
      setClayProducts(data);
    } catch (err) {
      alert(err);
    }

    try {
      // setCategory("WOODEN");
      const { data } = await axios.get(
        `http://localhost:8089/craftbay/public/getShopProducts?category=${leatherCategory}`
      );
      setLeatherProducts(data);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="shop-bg">
      <div className="shop-prod-header">
        <h1>Wooden Products</h1>
      </div>

      <div className="shop-prod-see-more-btn-cont">
        <button className="shop-prod-seemore-btn" onClick={() => navigate("/products")}>
          <img className="next-img" src={nextimg} alt="" />
        </button>
      </div>
      <div className="shop-prod-container">
        {products &&
          products.map((curElm) => {
            return (
              <div className="shop-prod-box">
                <div className="shop-prod-content">
                  <div className="shop-prod-img-box">
                    <img
                      src={`data:image/jpeg;base64,${curElm.image}`}
                      alt={curElm.name}
                    ></img>
                  </div>

                  <div className="shop-prod-main">
                    <div className="shop-prod-title">
                      <h3>{curElm.name}</h3>
                    </div>

                    <div className="shop-prod-price">
                      <label>{"Rs." + curElm.sellingPrice}</label>
                    </div>

                    <div className="shop-prod-btn-container">
                      <button className="shop-prod-button">View</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="shop-prod-header">
        <h1>Metal Products</h1>
      </div>
      <div className="shop-prod-see-more-btn-cont">
        <button className="shop-prod-seemore-btn">
          <img className="next-img" src={nextimg} alt="" />
        </button>
      </div>
      <div className="shop-prod-container">
        {metalProducts &&
          metalProducts.map((curElm) => {
            return (
              <div className="shop-prod-box">
                <div className="shop-prod-content">
                  <div className="shop-prod-img-box">
                    <img
                      src={`data:image/jpeg;base64,${curElm.image}`}
                      alt={curElm.name}
                    ></img>
                  </div>

                  <div className="shop-prod-main">
                    <div className="shop-prod-title">
                      <h3>{curElm.name}</h3>
                    </div>

                    <div className="shop-prod-price">
                      <label>{"Rs." + curElm.sellingPrice}</label>
                    </div>

                    <div className="shop-prod-btn-container">
                      <button className="shop-prod-button">View</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="shop-prod-header">
        <h1>Textile Products</h1>
      </div>

      <div className="shop-prod-see-more-btn-cont">
        <button className="shop-prod-seemore-btn">
          <img className="next-img" src={nextimg} alt="" />
        </button>
      </div>
      <div className="shop-prod-container">
        {textileProducts &&
          textileProducts.map((curElm) => {
            return (
              <div className="shop-prod-box">
                <div className="shop-prod-content">
                  <div className="shop-prod-img-box">
                    <img
                      src={`data:image/jpeg;base64,${curElm.image}`}
                      alt={curElm.name}
                    ></img>
                  </div>

                  <div className="shop-prod-main">
                    <div className="shop-prod-title">
                      <h3>{curElm.name}</h3>
                    </div>

                    <div className="shop-prod-price">
                      <label>{"Rs." + curElm.sellingPrice}</label>
                    </div>

                    <div className="shop-prod-btn-container">
                      <button className="shop-prod-button">View</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="shop-prod-header">
        <h1>Clay Products</h1>
      </div>

      <div className="shop-prod-see-more-btn-cont">
        <button className="shop-prod-seemore-btn">
          <img className="next-img" src={nextimg} alt="" />
        </button>
      </div>
      <div className="shop-prod-container">
        {clayProducts &&
          clayProducts.map((curElm) => {
            return (
              <div className="shop-prod-box">
                <div className="shop-prod-content">
                  <div className="shop-prod-img-box">
                    <img
                      src={`data:image/jpeg;base64,${curElm.image}`}
                      alt={curElm.name}
                    ></img>
                  </div>

                  <div className="shop-prod-main">
                    <div className="shop-prod-title">
                      <h3>{curElm.name}</h3>
                    </div>

                    <div className="shop-prod-price">
                      <label>{"Rs." + curElm.sellingPrice}</label>
                    </div>

                    <div className="shop-prod-btn-container">
                      <button className="shop-prod-button">View</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="shop-prod-header">
        <h1>Leather Products</h1>
      </div>

      <div className="shop-prod-see-more-btn-cont">
        <button className="shop-prod-seemore-btn">
          <img className="next-img" src={nextimg} alt="" />
        </button>
      </div>
      <div className="shop-prod-container">
        {leatherProducts &&
          leatherProducts.map((curElm) => {
            return (
              <div className="shop-prod-box">
                <div className="shop-prod-content">
                  <div className="shop-prod-img-box">
                    <img
                      src={`data:image/jpeg;base64,${curElm.image}`}
                      alt={curElm.name}
                    ></img>
                  </div>

                  <div className="shop-prod-main">
                    <div className="shop-prod-title">
                      <h3>{curElm.name}</h3>
                    </div>

                    <div className="shop-prod-price">
                      <label>{"Rs." + curElm.sellingPrice}</label>
                    </div>

                    <div className="shop-prod-btn-container">
                      <button className="shop-prod-button">View</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Shop;
