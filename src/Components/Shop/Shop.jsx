import React, { useEffect } from "react";
import "./Shop.css";
import nextimg from "../Assets/arrow_7481528.png";
import { connect } from 'react-redux';
import { products } from '../../Actions'; // Import your action creators;
import { useNavigate } from "react-router-dom";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const { getTopShopProducts } = products;

const Shop = ({ getTopShopProducts, topShopProducts }) => {

  const navigate = useNavigate();
  useEffect(() => {
    getTopShopProducts()
  }, []);

  

  useEffect(() => {
    if (Object.keys(topShopProducts).length > 0) {
      NotificationManager.success('Products Load Successfully!', 'Success', 3000);
    }
    // else {
      // NotificationManager.error('Error message', 'Error', 5000);
    // }
  }, [topShopProducts]);

  const getCategoryName = (category) => {
    switch (category) {
      case 'woodenProducts':
        return "Wooden"
      case 'metalProducts':
        return "Metal"
      case 'textileProducts':
        return "Textile"
      case 'clayProducts':
        return "Clay"
      case 'leatherProducts':
        return "Leather"
      default:
        return ""
    }
  }

  return (
    <div className="shop-bg">
      {Object.keys(topShopProducts).map((category) => (
        <div key={category}>
          <div className="shop-prod-header">
            <h1>{getCategoryName(category)} Products</h1>
          </div>
          <div className="shop-prod-see-more-btn-cont">
            <button className="shop-prod-seemore-btn" onClick={() => navigate(`/products/${getCategoryName(category).toUpperCase()}`)}><img className="next-img" src={nextimg} alt="" /></button>
          </div>
          <div className="shop-prod-container">
            {topShopProducts[category].map((product) => (
              <div className="shop-prod-box">
                <div className="shop-prod-content">
                  <div className="shop-prod-img-box">
                    <img
                      src={`data:image/jpeg;base64,${product.image}`}
                      alt={product.name}
                    ></img>
                  </div>

                  <div className="shop-prod-main">
                    <div className="shop-prod-title">
                      <h3>{product.name}</h3>
                    </div>

                    <div className="shop-prod-price">
                      <label>{"Rs." + product.sellingPrice}</label>
                    </div>

                    <div className="shop-prod-btn-container">
                      <button className="shop-prod-button" onClick={() => navigate(`/viewproduct/${product.id}`)}>View</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <NotificationContainer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    topShopProducts: state.craftbay.topShopProducts,
  };
};

const mapDispatchToProps = {
  getTopShopProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
