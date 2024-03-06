import { DataArrayOutlined } from "@mui/icons-material";
import axios from "axios";

export const userLogin = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.post(
        "http://localhost:8089/craftbay/auth/login",
        params
      );
      resolve({
        status: data.status,
        token: data.data.token,
        userId: data.data.userId,
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const getProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      const { data } = await axios.get(
        "http://localhost:8089/craftbay/admin/product/adminViewProduct"
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getTopShopProducts = () => {
  return new Promise(async (resolve, reject) => {
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
  return new Promise(async (resolve, reject) => {
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
export const getProductsById = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      const { data } = await axios.get(
        `http://localhost:8089/craftbay/admin/product/${params}`
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const addProducts = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;

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
  return new Promise(async (resolve, reject) => {
    try {
      // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;

      const data = await axios.delete(
        `http://localhost:8089/craftbay/admin/product/delete/${params}`
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateProduct = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;

      const data = await axios.put(
        "http://localhost:8089/craftbay/admin/product/update",
        params
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

//GET_PRODUCT_BY_ID
export const getProductById = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8089/craftbay/public/products/${params}`
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

//ADD_TO_CART
export const postAddToCart = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.post(
        "http://localhost:8089/craftbay/user/cart/addtocart",
        params
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};


//VIEW_CART
export const viewCart = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.get(
        `http://localhost:8089/craftbay/user/${params}/cart`,
        params
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};


//GET_USER_BY_ID  
export const getUserById = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.get(
        `http://localhost:8089/craftbay/user/${params}`,
        params
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};


//CART_CHECKOUT
export const checkoutCart = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.put(
        "http://localhost:8089/craftbay/user/cart/update-cart",
        params
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};



