import React from 'react';
import ProductData from "./productData";
import "./Home.css"
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='advertisement-container'>
      </div>

      <div className='home-header'>
        <span> New Arrivals </span>
      </div>
      
      <div className="home-prod-container">
        {ProductData.map((curElm) => {
          return (
            <>
              <div className="home-prod-box">
                <div className="home-content">
                  <div className="home-prod-img-box">
                    <img src={curElm.img} alt={curElm.Title}></img>
                  </div>
                  <div className="home-prod-main">
                    <div>
                      <h3 className="home-prod-title">{curElm.Title}</h3>
                      <label class="home-prod-price">Rs: {curElm.Price}</label>
                    </div>
                    <button
                      className="home-prod-button"
                      onClick={() => navigate("/viewproduct")}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
