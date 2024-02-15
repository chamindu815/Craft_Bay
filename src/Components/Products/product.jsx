import React, { useEffect, useState } from "react";
import "./product.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [products,setProducts] = useState()
  const navigate = useNavigate();
  useEffect(() => {
    get()
  },[])

  async function get() {
    try {
      const {data} = await axios.get(
        "http://localhost:8089/craftbay/public/product"
      );
      // alert("Products Loaded Successfully");
      setProducts(data)
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div className="prod-category">
        <span>Wooden Items</span>
      </div>
      <div className="prod-container">
        {products && products.map((curElm) => {
          return (
            <>
              <div className="prod-box">
                <div className="content">
                  <div className="img-box">
                    <img src={`data:image/jpeg;base64,${curElm.image}`} alt={curElm.name}></img>
                  </div>
                  <div className="prod-main">
                    <div>
                      <h3 className="prod-title">{curElm.name}</h3>
                      {curElm.productSellingPriceDetailsDtos && curElm.productSellingPriceDetailsDtos.map((curPriceEle, idx) =>(
                      <label class="prod-sellingprice">Rs: {curPriceEle.price}</label>
                      ))}
                    </div>
                    <button
                      className="prod-button"
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

export default Product;
