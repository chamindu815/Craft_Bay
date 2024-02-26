import axios from "axios";

export const getProducts = () => {
    return new Promise (async (resolve, reject) => {
        try {
            const { data } = await axios.get(
                "http://localhost:8089/craftbay/admin/product/adminViewProduct"
              );
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
  };

  export const getProductsById = (params) => {
    return new Promise (async (resolve, reject) => {
        try {
            const { data } = await axios.get(
                `http://localhost:8089/craftbay/admin/product/${params}`
              );
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
  };

  export const getTopShopProducts = () => {
    return new Promise (async (resolve, reject) => {
        try {
            const { data } = await axios.get(
                `http://localhost:8089/craftbay/public/shop/products`
              );
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
  };

  export const getNewProducts = () => {
    return new Promise (async (resolve, reject) => {
        try {
            const { data } = await axios.get(
                `http://localhost:8089/craftbay/public/getNewArrival`
              );
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
  };

  export const addProducts = (params) => {
    return new Promise (async (resolve, reject) => {
        try {
            const data = await axios.post(
                "http://localhost:8089/craftbay/admin/product/addProduct",
                params
              );
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
  };

  export const deleteProducts = (params) => {
    return new Promise (async (resolve, reject) => {
        try {
            const data = await axios.delete(
                `http://localhost:8089/craftbay/admin/product/delete/${params}`
              )
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
  };