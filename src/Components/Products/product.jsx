import React from "react";
import ProductData from "./productData";
import './product.css'

const Product = () => {
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
                      <p  className='prod-price'>Rs: {curElm.Price}</p>
                    </div>
                    <button className="prod-button">View</button>
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
