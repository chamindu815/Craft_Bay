export const products = {
  userLogin: (data) => ({
    type: "USER_LOGIN",
    payload: data,
  }),
  userLoginSuccess: (data) => ({
    type: "USER_LOGIN_SUCCESS",
    payload: data,
  }),
  userLoginFail: (error) => ({
    type: "USER_LOGIN_FAIL",
    payload: {},
  }),
  addProducts: (data) => ({
    type: "ADD_PRODUCTS",
    payload: data,
  }),
  addProductsSuccess: (data) => ({
    type: "ADD_PRODUCTS_SUCCESS",
    payload: {},
  }),
  addProductsFail: (error) => ({
    type: "ADD_PRODUCTS_FAIL",
    payload: {},
  }),
  updateProduct: (data) => ({
    type: "UPDATE_PRODUCT",
    payload: data,
  }),
  updateProductSuccess: (data) => ({
    type: "UPDATE_PRODUCT_SUCCESS",
    payload: data,
  }),
  updateProductFail: (error) => ({
    type: "UPDATE_PRODUCT_FAIL",
    payload: {},
  }),
  getProducts: () => ({
    type: "GET_PRODUCTS",
    payload: {},
  }),
  getProductsSuccess: (data) => ({
    type: "GET_PRODUCTS_SUCCESS",
    payload: data,
  }),
  getProductsFail: (error) => ({
    type: "GET_PRODUCTS_FAIL",
    payload: {},
  }),
  deleteProducts: (data) => ({
    type: "DELETE_PRODUCTS",
    payload: data,
  }),
  deleteProductsSuccess: (data) => ({
    type: "DELETE_PRODUCTS_SUCCESS",
    payload: data,
  }),
  deleteProductsFail: (error) => ({
    type: "DELETE_PRODUCTS_FAIL",
    payload: {},
  }),
  getProductsById: (data) => ({
    type: "GET_PRODUCTS_BY_ID",
    payload: data,
  }),
  getProductsSuccessById: (data) => ({
    type: "GET_PRODUCTS_SUCCESS_BY_ID",
    payload: data,
  }),
  getProductsFailById: (error) => ({
    type: "GET_PRODUCTS_FAIL_BY_ID",
    payload: {},
  }),
  getTopShopProducts: () => ({
    type: "GET_TOP_SHOP_PRODUCTS",
    payload: {},
  }),
  getTopShopProductsSuccess: (data) => ({
    type: "GET_TOP_SHOP_PRODUCTS_SUCCESS",
    payload: data,
  }),
  getTopShopProductsFail: (error) => ({
    type: "GET_TOP_SHOP_PRODUCTS_FAIL",
    payload: {},
  }),
  getNewProducts: () => ({
    type: "GET_NEW_PRODUCTS",
    payload: {},
  }),
  getNewProductsSuccess: (data) => ({
    type: "GET_NEW_PRODUCTS_SUCCESS",
    payload: data,
  }),
  getNewProductsFail: (error) => ({
    type: "GET_NEW_PRODUCTS_FAIL",
    payload: {},
  }),

  //GET_PRODUCT_BY_ID
  getProductById: (data) => ({
    type: "GET_PRODUCT_BY_ID",
    payload: data,
  }),
  getProductByIdSuccess: (data) => ({
    type: "GET_PRODUCT_BY_ID_SUCCESS",
    payload: data,
  }),
  getProductByIdFail: (error) => ({
    type: "GET_PRODUCT_BY_ID_FAIL",
    payload: {},
  }),

  //ADD_TO_CART
  postAddToCart: (data) => ({
    type: "POST_ADD_TO_CART",
    payload: data,
  }),
  postAddToCartSuccess: (data) => ({
    type: "POST_ADD_TO_CART_SUCCESS",
    payload: data,
  }),
  postAddToCartFail: (error) => ({
    type: "POST_ADD_TO_CART_FAIL",
    payload: {},
  }),


  //VIEW_CART
  viewCart: (data) => ({
    type: "VIEW_CART",
    payload: data,
  }),
  viewCartSuccess: (data) => ({
    type: "VIEW_CART_SUCCESS",
    payload: data,
  }),
  viewCartFail: (error) => ({
    type: "VIEW_CART_FAIL",
    payload: {},
  }),


  //GET_USER_BY_ID
  getUserById: (data) => ({
    type: "GET_USER_BY_ID",
    payload: data,
  }),
  getUserByIdSuccess: (data) => ({
    type: "GET_USER_BY_ID_SUCCESS",
    payload: data,
  }),
  getUserByIdFail: (error) => ({
    type: "GET_USER_BY_ID_FAIL",
    payload: {},
  }),


  //CART_CHECKOUT
  checkoutCart: (data) => ({
    type: "CART_CHECKOUT",
    payload: data,
  }),
  checkoutCartSuccess: (data) => ({
    type: "CART_CHECKOUT_SUCCESS",
    payload: data,
  }),
  checkoutCartFail: (error) => ({
    type: "CART_CHECKOUT_FAIL",
    payload: {},
  }),


    //USER_PLACE_ORDERS
    postUserPlaceOrders: (data) => ({
      type: "USER_PLACE_ORDERS",
      payload: data,
    }),
    postUserPlaceOrdersSuccess: (data) => ({
      type: "USER_PLACE_ORDERS_SUCCESS",
      payload: data,
    }),
    postUserPlaceOrdersFail: (error) => ({
      type: "USER_PLACE_ORDERS_FAIL",
      payload: {},
    }),


    //USER_VIEW_ORDERS
    getOrderByUserId: (data) => ({
      type: "USER_VIEW_ORDERS",
      payload: data,
    }),
    getOrderByUserIdSuccess: (data) => ({
      type: "USER_VIEW_ORDERS_SUCCESS",
      payload: data,
    }),
    getOrderByUserIdFail: (error) => ({
      type: "USER_VIEW_ORDERS_FAIL",
      payload: {},
    }),


     //USER_VIEW_ORDERS_BY_ORDERID
     userGetOrderByOrderId: (data) => ({
      type: "USER_VIEW_ORDERS_BY_ORDERID",
      payload: data,
    }),
    userGetOrderByOrderIdSuccess: (data) => ({
      type: "USER_VIEW_ORDERS_BY_ORDERID_SUCCESS",
      payload: data,
    }),
    userGetOrderByOrderIdFail: (error) => ({
      type: "USER_VIEW_ORDERS_BY_ORDERID_FAIL",
      payload: {},
    }),

    //USER_CANCEL_ORDERS
    cancelUserPlaceOrders: (data) => ({
      type: "USER_CANCEL_ORDERS",
      payload: data,
    }),
    cancelUserPlaceOrdersSuccess: (data) => ({
      type: "USER_CANCEL_ORDERS_SUCCESS",
      payload: data,
    }),
    cancelUserPlaceOrdersFail: (error) => ({
      type: "USER_CANCEL_ORDERS_FAIL",
      payload: {},
    }),


    //ADMIN_VIEW_ORDERS
    adminGetOrders: (data) => ({
      type: "ADMIN_VIEW_ORDERS",
      payload: data,
    }),
    adminGetOrdersSuccess: (data) => ({
      type: "ADMIN_VIEW_ORDERS_SUCCESS",
      payload: data,
    }),
    adminGetOrdersFail: (error) => ({
      type: "ADMIN_VIEW_ORDERS_FAIL",
      payload: {},
    }),


    //ADMIN_VIEW_ORDERS_BY_ORDERID
    adminGetOrderByOrderId: (data) => ({
      type: "ADMIN_VIEW_ORDERS_BY_ORDERID",
      payload: data,
    }),
    adminGetOrderByOrderIdSuccess: (data) => ({
      type: "ADMIN_VIEW_ORDERS_BY_ORDERID_SUCCESS",
      payload: data,
    }),
    adminGetOrderByOrderIdFail: (error) => ({
      type: "ADMIN_VIEW_ORDERS_BY_ORDERID_FAIL",
      payload: {},
    }),
};
