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
      reject({status:error.response.status, data:error.response.data});
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

      const { data } = await axios.put(
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
      const { data } = await axios.get(
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
        `http://localhost:8089/craftbay/user/${params}`
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
export const postUserPlaceOrders = ({ userId, cartId }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.post(
        `http://localhost:8089/craftbay/user/${userId}/cart/${cartId}/place-order`);
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
      const {data} = await axios.get(
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
export const userGetOrderByOrderId = ({userId,id}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.get(
        `http://localhost:8089/craftbay/user/${userId}/orders/${id}`
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

//USER_CANCEL_ORDERS
export const cancelUserPlaceOrders = ({userId, orderId}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.post(
        `http://localhost:8089/craftbay/user/${userId}/order/${orderId}/cancel-order`,
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

//ADMIN_VIEW_ORDERS
export const adminGetOrders = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.get(
        `http://localhost:8089/craftbay/admin/orders`
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
      const {data} = await axios.get(
        `http://localhost:8089/craftbay/admin/orders/${params}`
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

export const updateUserBillAddress = ({ userId, address }) => {
  return new Promise(async (resolve, reject) => {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;

      const { data } = await axios.put(
        `http://localhost:8089/craftbay/user/${userId}`,
        address
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateCartDetails = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;

      const { data } = await axios.put(
        `http://localhost:8089/craftbay/user/cart/update-cart`,
        params
      );
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateCardDetails = ({ userId, cardDetails }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axios.put(
        `http://localhost:8089/craftbay/user/${userId}/update-card`,cardDetails);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getCardDetails = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.get(
        `http://localhost:8089/craftbay/user/${params}/get-card`);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getSalesReportDetails = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.get(
        `http://localhost:8089/craftbay/admin/reports/sales-report?startDate=${params.startDate}&endDate=${params.endDate}`);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

//ADMIN_INVENTORY_REPORT
export const getInventoryReportDetails = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.get(
        `http://localhost:8089/craftbay/admin/reports/inventory-report`);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

//FORGOT_PASSWORD
export const forgotPassword = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.post(
        `http://localhost:8089/craftbay/auth/forgot-password`,params);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

//ADD_RATINGS
export const addRatings = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.post(
        `http://localhost:8089/craftbay/user/cart/cart-item/rate`,params);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};