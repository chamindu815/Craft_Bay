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

export const userRegister = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.post(
        "http://localhost:8089/craftbay/auth/save",
        params
      );
      resolve(data);
      alert("Employee Registation Successfully");
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

      const {data} = await axios.put(
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
      const { data } = await axios.get(
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

//NEED TO ASK ABOUT UI
//USER_PLACE_ORDERS
export const postUserPlaceOrders = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.post(
        `http://localhost:8089/craftbay/user/${params}/cart/${params}/place-order`,
        params
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

//USER_VIEW_ORDERS
export const getOrderByUserId = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.get(
        `http://localhost:8089/craftbay/user/${params}/my-orders`,
        params
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

//USER_VIEW_ORDERS_BY_ORDERID
export const userGetOrderByOrderId = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.get(
        `http://localhost:8089/craftbay/user/${params}/orders/${params}`,
        params
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

//USER_CANCEL_ORDERS
export const cancelUserPlaceOrders = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.post(
        `http://localhost:8089/craftbay/user/${params}/order/${params}/cancel-order`,
        params
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

//ADMIN_VIEW_ORDERS
export const adminGetOrders = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.get(
        `http://localhost:8089/craftbay/admin/orders`,
        params
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

//ADMIN_VIEW_ORDERS_BY_ORDERID
export const adminGetOrderByOrderId = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.get(
        `http://localhost:8089/craftbay/admin/orders/${params}`,
        params
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};


//ADD_CARD_TO_USER
export const addCardToUser = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.post(
        `http://localhost:8089/craftbay/user/${params.userId}/add-card`,
        params.formValues
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};



