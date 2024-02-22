import React, { useEffect, useState } from "react";
import ProductData from "./productData";
import "./Home.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import homeimg from "../Assets/Home.jpg"


 const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    get()
  },[])
  const [products,setProducts] = useState()

  async function get() {
    try {
      const {data} = await axios.get(
        "http://localhost:8089/craftbay/public/getNewArrival"
      );
      // alert("Products Loaded Successfully");
      setProducts(data)
    } catch (err) {
      alert(err);
    }
  }

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
        {products && products.map((curElm) => {
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
    </div>
  );
};

export default Home;
