const initialState = {
  products: [],
  productToBeEdit: {},
  topShopProducts: {},
  newProducts: {},
  loginData: {},
  registerData: {},
  productById: {},
  addToCart: {},
  cartDetails: {},
  userById: {},
  checkoutDetails: {},
  placeOrders: {},
  orderByUserId: {},
  orderByOrderId: {},
  userCardDetails: {},
  cardDetails: {},
  salesReportData: {},
  inventoryReportData: {},
  forgotPassword: {},
  ratings: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'USER_LOGIN':
      return Object.assign({}, state, {
        loginData: {},
      });
    case 'USER_LOGIN_SUCCESS':
      return Object.assign({}, state, {
        loginData: payload,
      });
    case 'USER_LOGIN_FAIL':
      return Object.assign({}, state, {
        loginData: payload,
      });

    //USER_REGISTER
    case 'USER_REGISTER':
      return Object.assign({}, state, {
        registerData: {},
      });
    case 'USER_REGISTER_SUCCESS':
      return Object.assign({}, state, {
        registerData: payload,
      });
    case 'USER_REGISTER_FAIL':
      return Object.assign({}, state, {
        registerData: {},
      });

    case 'ADD_PRODUCTS':
      return Object.assign({}, state, {});
    case 'ADD_PRODUCTS_SUCCESS':
      return Object.assign({}, state, {});
    case 'ADD_PRODUCTS_FAIL':
      return Object.assign({}, state, {});
    case 'UPDATE_PRODUCT':
      return Object.assign({}, state, {});
    case 'UPDATE_PRODUCT_SUCCESS':
      return Object.assign({}, state, {
        productToBeEdit: payload,
      });
    case 'UPDATE_PRODUCT_FAIL':
      return Object.assign({}, state, {});
    case 'GET_PRODUCTS':
      return Object.assign({}, state, {
        products: [],
      });
    case 'GET_PRODUCTS_SUCCESS':
      return Object.assign({}, state, {
        products: payload,
      });
    case 'GET_PRODUCTS_FAIL':
      return Object.assign({}, state, {
        products: [],
      });
    case 'DELETE_PRODUCTS':
      return Object.assign({}, state, {
        // products: [],
      });
    case 'DELETE_PRODUCTS_SUCCESS':
      return Object.assign({}, state, {
        products: state.products.filter((p) => p.id != payload),
      });
    case 'DELETE_PRODUCTS_FAIL':
      return Object.assign({}, state, {
        // products: [],
      });
    case 'GET_PRODUCTS_BY_ID':
      return Object.assign({}, state, {
        productToBeEdit: {},
      });
    case 'GET_PRODUCTS_SUCCESS_BY_ID':
      return Object.assign({}, state, {
        productToBeEdit: payload,
      });
    case 'GET_PRODUCTS_FAIL_BY_ID':
      return Object.assign({}, state, {
        productToBeEdit: {},
      });
    case 'GET_TOP_SHOP_PRODUCTS':
      return Object.assign({}, state, {
        topShopProducts: {},
      });
    case 'GET_TOP_SHOP_PRODUCTS_SUCCESS':
      return Object.assign({}, state, {
        topShopProducts: payload,
      });
    case 'GET_TOP_SHOP_PRODUCTS_FAIL':
      return Object.assign({}, state, {
        topShopProducts: {},
      });
    case 'GET_NEW_PRODUCTS':
      return Object.assign({}, state, {
        newProducts: {},
      });
    case 'GET_NEW_PRODUCTS_SUCCESS':
      return Object.assign({}, state, {
        newProducts: payload,
        placeOrders: {},
        addToCart: {},
        cartDetails: {},
        productById: {}
      });
    case 'GET_NEW_PRODUCTS_FAIL':
      return Object.assign({}, state, {
        newProducts: {},
      });

    //GET_PRODUCT_BY_ID
    case 'GET_PRODUCT_BY_ID':
      return Object.assign({}, state, {
        productById: {},
      });
    case 'GET_PRODUCT_BY_ID_SUCCESS':
      return Object.assign({}, state, {
        productById: payload,
      });
    case 'GET_PRODUCT_BY_ID_FAIL':
      return Object.assign({}, state, {
        productById: {},
      });

    //ADD_TO_CART
    case 'POST_ADD_TO_CART':
      return Object.assign({}, state, {
        addToCart: {},
      });
    case 'POST_ADD_TO_CART_SUCCESS':
      return Object.assign({}, state, {
        addToCart: payload,
        placeOrders: {}
      });
    case 'POST_ADD_TO_CART_FAIL':
      return Object.assign({}, state, {
        addToCart: {},
      });

    //VIEW_CART
    case 'VIEW_CART':
      return Object.assign({}, state, {
        cartDetails: {},
      });
    case 'VIEW_CART_SUCCESS':
      return Object.assign({}, state, {
        ...state,
        cartDetails: payload.cart,
        userById: payload.user,
        cardDetails: payload.card,
      });
    case 'VIEW_CART_FAIL':
      return Object.assign({}, state, {
        cartDetails: {},
      });

    //GET_USER_BY_ID
    case 'GET_USER_BY_ID':
      return Object.assign({}, state, {
        userById: {},
      });
    case 'GET_USER_BY_ID_SUCCESS':
      return Object.assign({}, state, {
        userById: payload,
      });
    case 'GET_USER_BY_ID_FAIL':
      return Object.assign({}, state, {
        userById: {},
      });

    //CART_CHECKOUT
    case 'CART_CHECKOUT':
      return Object.assign({}, state, {
        checkoutDetails: {},
      });
    case 'CART_CHECKOUT_SUCCESS':
      return Object.assign({}, state, {
        ...state,
        checkoutDetails: payload,
      });
    case 'CART_CHECKOUT_FAIL':
      return Object.assign({}, state, {
        checkoutDetails: {},
      });

    //USER_PLACE_ORDERS
    case 'USER_PLACE_ORDERS':
      return Object.assign({}, state, {
        placeOrders: {},
      });
    case 'USER_PLACE_ORDERS_SUCCESS':
      return Object.assign({}, state, {
        placeOrders: payload,
      });
    case 'USER_PLACE_ORDERS_FAIL':
      return Object.assign({}, state, {
        placeOrders: {},
      });

    //USER_VIEW_ORDERS
    case 'USER_VIEW_ORDERS':
      return Object.assign({}, state, {
        orderByUserId: {},
      });
    case 'USER_VIEW_ORDERS_SUCCESS':
      return Object.assign({}, state, {
        orderByUserId: payload,
      });
    case 'USER_VIEW_ORDERS_FAIL':
      return Object.assign({}, state, {
        orderByUserId: {},
      });

    //USER_VIEW_ORDERS_BY_ORDERID
    case 'USER_VIEW_ORDERS_BY_ORDERID':
      return Object.assign({}, state, {
        orderByOrderId: {},
      });
    case 'USER_VIEW_ORDERS_BY_ORDERID_SUCCESS':
      return Object.assign({}, state, {
        orderByOrderId: payload,
      });
    case 'USER_VIEW_ORDERS_BY_ORDERID_FAIL':
      return Object.assign({}, state, {
        orderByOrderId: {},
      });

    //USER_CANCEL_ORDERS
    case 'USER_CANCEL_ORDERS':
      return Object.assign({}, state, {
        cancelOrders: {},
      });
    case 'USER_CANCEL_ORDERS_SUCCESS':
      const data = state.orderByUserId.map((i) => {
        if(i.id == payload) {
          console.log('xxxxx',i);
          i.orderStatus = "CANCELLED"
          return i
        }
        return i
      })
      return Object.assign({}, state, {
        cancelOrders: {},
        orderByUserId: data
      });
    case 'USER_CANCEL_ORDERS_FAIL':
      return Object.assign({}, state, {
        cancelOrders: {},
      });

    //ADMIN_VIEW_ORDERS
    case 'ADMIN_VIEW_ORDERS':
      return Object.assign({}, state, {
        adminGetOrderDetails: {},
      });
    case 'ADMIN_VIEW_ORDERS_SUCCESS':
      return Object.assign({}, state, {
        adminGetOrderDetails: payload,
      });
    case 'ADMIN_VIEW_ORDERS_FAIL':
      return Object.assign({}, state, {
        adminGetOrderDetails: {},
      });

    //ADMIN_VIEW_ORDERS_BY_ORDERID
    case 'USER_VIEW_ORDERS_BY_ORDERID':
      return Object.assign({}, state, {
        adminOrderByOrderId: {},
      });
    case 'ADMIN_VIEW_ORDERS_BY_ORDERID_SUCCESS':
      return Object.assign({}, state, {
        adminOrderByOrderId: payload,
      });
    case 'ADMIN_VIEW_ORDERS_BY_ORDERID_FAIL':
      return Object.assign({}, state, {
        adminOrderByOrderId: {},
      });

    //ADD_CARD_TO_USER
    case 'ADD_CARD_TO_USER':
      return Object.assign({}, state, {
        userCardDetails: {},
      });
    case 'ADD_CARD_TO_USER_SUCCESS':
      return Object.assign({}, state, {
        userCardDetails: payload,
      });
    case 'ADD_CARD_TO_USER_FAIL':
      return Object.assign({}, state, {
        userCardDetails: {},
      });

    //UPDATE_USER_ADDRESS
    case 'UPDATE_USER_ADDRESS':
      return Object.assign({}, state, {});
    case 'UPDATE_USER_ADDRESS_SUCCESS':
      return Object.assign({}, state, {
        userById: payload,
      });
    case 'UPDATE_USER_ADDRESS_FAIL':
      return Object.assign({}, state, {
        // userById: {},
      });

    //UPDATE_CART
    case 'UPDATE_CART_DETAILS':
      return Object.assign({}, state, {});
    case 'UPDATE_CART_DETAILS_SUCCESS':
      return Object.assign({}, state, {
        // cartDetails: payload,
      });
    case 'UPDATE_CART_DETAILS_FAIL':
      return Object.assign({}, state, {
        cartDetails: {},
      });

    //GET_CARD_DETAILS
    case 'GET_CARD_DETAILS':
      return Object.assign({}, state, {});
    case 'GET_CARD_DETAILS_SUCCESS':
      return Object.assign({}, state, {
        cardDetails: payload,
      });
    case 'GET_CARD_DETAILSS_FAIL':
      return Object.assign({}, state, {
        cardDetails: {},
      });

    //UPDATE_CART
    case 'UPDATE_CARD_DETAILS':
      return Object.assign({}, state, {});
    case 'UPDATE_CARD_DETAILS_SUCCESS':
      return Object.assign({}, state, {
        cardDetails: payload,
      });
    case 'UPDATE_CARD_DETAILS_FAIL':
      return Object.assign({}, state, {
        cardDetails: {},
      });

    //GET_SALES_REPORT
    case 'GET_SALES_REPORT':
      return Object.assign({}, state, {
        salesReportData: {},
      });
    case 'GET_SALES_REPORT_SUCCESS':
      return Object.assign({}, state, {
        salesReportData: payload,
      });
    case 'GET_SALES_REPORT_FAIL':
      return Object.assign({}, state, {
        salesReportData: {},
      });

    //GET_INVENTORY_REPORT
    case 'GET_INVENTORY_REPORT':
      return Object.assign({}, state, {
        inventoryReportData: {},
      });
    case 'GET_INVENTORY_REPORT_SUCCESS':
      return Object.assign({}, state, {
        inventoryReportData: payload,
      });
    case 'GET_INVENTORY_REPORT_FAIL':
      return Object.assign({}, state, {
        inventoryReportData: {},
      });

    //FORGOT_PASSWORD
    case 'FORGOT_PASSWORD':
      return Object.assign({}, state, {
        forgotPassword: {},
      });
    case 'FORGOT_PASSWORD_SUCCESS':
      return Object.assign({}, state, {
        forgotPassword: payload,
      });
    case 'FORGOT_PASSWORD_FAIL':
      return Object.assign({}, state, {
        forgotPassword: {},
      });

    //ADD_RATINGS
    case 'ADD_RATINGS':
      return Object.assign({}, state, {
        ratings: {},
      });
    case 'ADD_RATINGS_SUCCESS':
      const items = state.orderByOrderId.cart.cartItems.map((i) => {
        if (i.id == payload.cartItemId) {
          i.rate = payload.rate;
          return i;
        }
        return i;
      });
      console.log('items', items);
      return Object.assign({}, state, {
        orderByOrderId: { ...state.orderByOrderId, cart: { ...state.orderByOrderId.cart, cartItems: items } },
      });
    case 'ADD_RATINGS_FAIL':
      return Object.assign({}, state, {
        ratings: {},
      });

    //UPDATE_ORDER_STATUS
    case 'UPDATE_ORDER_STATUS':
      return Object.assign({}, state, {
      });
    case 'UPDATE_ORDER_STATUS_SUCCESS':
      return Object.assign({}, state, {
        adminOrderByOrderId: {...state.adminOrderByOrderId, orderStatus:payload}
      });
    case 'UPDATE_ORDER_STATUS_FAIL':
      return Object.assign({}, state, {
      });
    case 'CLEAR_STATE':
      return initialState;

    default:
      return state;
  }
};
