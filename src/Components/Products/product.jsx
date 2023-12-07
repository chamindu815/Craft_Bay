import React from "react";
import ProductData from "./productData";
import './product.css'
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="prod-category"><span>Wooden Items</span></div>
      <div className='prod-container'>
        {
          ProductData.map((curElm)=>{
            return(
              <>
              
              <div className='prod-box'>
                <div className='content'>
                  <div className='img-box'>
                    <img src={curElm.img} alt={curElm.Title}></img>
                  </div>
                  <div className="prod-main">
                    <div>
                      <h3 className='prod-title'>{curElm.Title}</h3>
                      <label class='prod-price'>Rs: {curElm.Price}</label>
                    </div>
                    <button className="prod-button" onClick={()=>navigate("/viewproduct")}>View</button>
                  </div>
                </div>
              </div>
              </>
            )
          })
        }
      </div>

    </div>
  )
}

export default Product
