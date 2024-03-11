import React, { useEffect, useState } from "react";
import "./product.css";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [products,setProducts] = useState()
  const navigate = useNavigate();
  const [category, setCategory] = useState("WOODEN");
  useEffect(() => {
    get()
  },[]);

  
  const { type } = useParams();

  async function get() {
    const formData = new FormData();
    formData.append("category", "TEXTILE");
    try {
      const {data} = await axios.get(
        `http://localhost:8089/craftbay/public/getAllProductsByCategory?category=${type}`,
      );
      // alert("Products Loaded Successfully");
      setProducts(data)
    } catch (err) {
      alert(err);
    }
  }

  // const getRecentCellingPrice = (adminProductSellingPriceDetailsDtos) => {
  //   const priceList = adminProductSellingPriceDetailsDtos?.sort(
  //     (a, b) => new Date(b.date) - new Date(a.date)
  //   );
  //   return priceList.length !== 0 ? priceList[0].price : 0;
  // };

  return (
    <div>
      <div className="prod-category">
        <span>{type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()} Items</span>
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
                    <div className="prod-title-cont">
                      <div className="prod-title-head">
                      <h3 >{curElm.name}</h3>
                      </div>

                      <div class="prod-sellingprice">
                      <label >{"Rs." + curElm.sellingPrice}</label>
                      </div>
                    </div>

                    <div className="prod-button-cont">
                    <button
                      className="prod-button"
                      onClick={() => navigate(`/viewproduct/${curElm.id}`)}
                    >
                      View
                    </button>
                    </div>
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
