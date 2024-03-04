import React, { useEffect } from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { products } from '../../Actions'; // Import your action creators
import homeimg from "../Assets/Home.jpg"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const { getNewProducts } = products;

const Home = ({ getNewProducts, newProducts }) => {

  const navigate = useNavigate()
  useEffect(() => {
    getNewProducts()
  }, []);

  useEffect(() => {
    console.log("products",newProducts);
    if (newProducts.length > 0) {
      NotificationManager.success('New Arrivals Load Successfully!', 'Success', 3000);
    }
    // else {
      // NotificationManager.error('Error message', 'Error', 5000);
    // }
  }, [newProducts]);

  return (
    <div>
      <div >
        <img src={homeimg} alt="" className='advertisement-container'/>
      </div>

      <div className="bg-text">
        <h1>Welcome To CraftBay..</h1>
      </div>

      <div className='home-header'>
        <span> New Arrivals </span>
      </div>

      <div className="home-prod-container">
        {Array.isArray(newProducts) && newProducts.map((curElm) => {
          return (
            <>
              <div className="home-prod-box">
                <div className="home-content">
                  <div className="home-prod-img-box">
                    <img src={`data:image/jpeg;base64,${curElm.image}`} alt={curElm.name}></img>
                  </div>
                  <div className="home-prod-main">
                    <div>
                      <div className="home-prod-title">
                        <h3 >{curElm.name}</h3>
                      </div>


                      <div className="home-prod-price">
                        <label class="">Rs.{curElm.sellingPrice}
                        </label>
                      </div>
                    </div>

                    <div className="home-prod-button-cont">
                      <button className="home-prod-button"

                        onClick={() => navigate("/viewproduct")}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div className="btn-box">
                </div>
              </div>

            </>
          );
        })}
      </div>
      <NotificationContainer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newProducts: state.craftbay.newProducts,
  };
};

const mapDispatchToProps = {
  getNewProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
