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
    payload: error,
  }),

  //USER_REGISTER
  userRegister: (data) => ({
    type: "USER_REGISTER",
    payload: data,
  }),
  userRegisterSuccess: (data) => ({
    type: "USER_REGISTER_SUCCESS",
    payload: data,
  }),
  userRegisterFail: (error) => ({
    type: "USER_REGISTER_FAIL",
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

  updateUserBillingAddress: (data) => ({
    type: "UPDATE_USER_ADDRESS",
    payload: data,
  }),
  updateUserBillingAddressSuccess: (data) => ({
    type: "UPDATE_USER_ADDRESS_SUCCESS",
    payload: data,
  }),
  updateUserBillingAddressFail: (error) => ({
    type: "UPDATE_USER_ADDRESS_FAIL",
    payload: {},
  }),

  updateCart: (data) => ({
    type: "UPDATE_CART_DETAILS",
    payload: data,
  }),
  updateCartSuccess: (data) => ({
    type: "UPDATE_CART_DETAILS_SUCCESS",
    payload: data,
  }),
  updateCartFail: (error) => ({
    type: "UPDATE_CART_DETAILS_FAIL",
    payload: {},
  }),

  getCardDetails: (data) => ({
    type: "GET_CARD_DETAILS",
    payload: data,
  }),
  getCardDetailsSuccess: (data) => ({
    type: "GET_CARD_DETAILS_SUCCESS",
    payload: data,
  }),
  getCardDetailsFail: (error) => ({
    type: "GET_CARD_DETAILS_FAIL",
    payload: {},
  }),

  updateCardDetails: (data) => ({
    type: "UPDATE_CARD_DETAILS",
    payload: data,
  }),
  updateCardDetailsSuccess: (data) => ({
    type: "UPDATE_CARD_DETAILS_SUCCESS",
    payload: data,
  }),
  updateCardDetailsFail: (error) => ({
    type: "UPDATE_CARD_DETAILS_FAIL",
    payload: {},
  }),

    //ADD_CARD_TO_USER
    addCardToUser: (data) => ({
      type: "ADD_CARD_TO_USER",
      payload: data,
    }),
    addCardToUserSuccess: (data) => ({
      type: "ADD_CARD_TO_USER_SUCCESS",
      payload: data,
    }),
    addCardToUserFail: (error) => ({
      type: "ADD_CARD_TO_USER_FAIL",
      payload: {},
    }),

    //GET_SALES_REPORT
    getSalesReportDetails: (data) => ({
      type: "GET_SALES_REPORT",
      payload: data,
    }),
    getSalesReportDetailsSuccess: (data) => ({
      type: "GET_SALES_REPORT_SUCCESS",
      payload: data,
    }),
    getSalesReportDetailsFail: (error) => ({
      type: "GET_SALES_REPORT_FAIL",
      payload: {},
    }),

    //GET_INVENTORY_REPORT
    getInventoryReportDetails: (data) => ({
      type: "GET_INVENTORY_REPORT",
      payload: data,
    }),
    getInventoryReportDetailsSuccess: (data) => ({
      type: "GET_INVENTORY_REPORT_SUCCESS",
      payload: data,
    }),
    getInventoryReportDetailsFail: (error) => ({
      type: "GET_INVENTORY_REPORT_FAIL",
      payload: {},
    }),

    //FORGOT_PASSWORD
    userForgotPassword: (data) => ({
      type: "FORGOT_PASSWORD",
      payload: data,
    }),
    userForgotPasswordSuccess: (data) => ({
      type: "FORGOT_PASSWORD_SUCCESS",
      payload: data,
    }),
    userForgotPasswordFail: (error) => ({
      type: "FORGOT_PASSWORD_FAIL",
      payload: {},
    }),

    //ADD_RATINGS
    addRatings: (data) => ({
      type: "ADD_RATINGS",
      payload: data,
    }),
    addRatingsSuccess: (data) => ({
      type: "ADD_RATINGS_SUCCESS",
      payload: data,
    }),
    addRatingsFail: (error) => ({
      type: "ADD_RATINGS_FAIL",
      payload: {},
    }),

    //UPDATE_ORDER_STATUS
    updateOrderStatus: (data) => ({
      type: "UPDATE_ORDER_STATUS",
      payload: data,
    }),
    updateOrderStatusSuccess: (data) => ({
      type: "UPDATE_ORDER_STATUS_SUCCESS",
      payload: data,
    }),
    updateOrderStatusFail: (error) => ({
      type: "UPDATE_ORDER_STATUS_FAIL",
      payload: {},
    }),

    //CLEAR_STATE
        clearState: () => ({
          type: "CLEAR_STATE"
        }),
};
