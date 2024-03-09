const initialState = {
  products: [],
  productToBeEdit: {},
  topShopProducts: {},
  newProducts: {},
  loginData: {},
  productById: {},
  addToCart: {},
  cartDetails:{},
  userById: {},
  checkoutDetails:{},
  placeOrders:{},
  orderByUserId:{},
  orderByOrderId:{},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER_LOGIN":
      return Object.assign({}, state, {
        loginData: {},
      });
    case "USER_LOGIN_SUCCESS":
      return Object.assign({}, state, {
        loginData: payload,
      });
    case "USER_LOGIN_FAIL":
      return Object.assign({}, state, {
        loginData: {},
      });
    case "ADD_PRODUCTS":
      return Object.assign({}, state, {});
    case "ADD_PRODUCTS_SUCCESS":
      return Object.assign({}, state, {});
    case "ADD_PRODUCTS_FAIL":
      return Object.assign({}, state, {});
    case "UPDATE_PRODUCT":
      return Object.assign({}, state, {});
    case "UPDATE_PRODUCT_SUCCESS":
      return Object.assign({}, state, {
        productToBeEdit: payload
      });
    case "UPDATE_PRODUCT_FAIL":
      return Object.assign({}, state, {});
    case "GET_PRODUCTS":
      return Object.assign({}, state, {
        products: [],
      });
    case "GET_PRODUCTS_SUCCESS":
      return Object.assign({}, state, {
        products: payload,
      });
    case "GET_PRODUCTS_FAIL":
      return Object.assign({}, state, {
        products: [],
      });
    case "DELETE_PRODUCTS":
      return Object.assign({}, state, {
        // products: [],
      });
    case "DELETE_PRODUCTS_SUCCESS":
      return Object.assign({}, state, {
        products: state.products.filter((p) => p.id != payload),
      });
    case "DELETE_PRODUCTS_FAIL":
      return Object.assign({}, state, {
        // products: [],
      });
    case "GET_PRODUCTS_BY_ID":
      return Object.assign({}, state, {
        productToBeEdit: {},
      });
    case "GET_PRODUCTS_SUCCESS_BY_ID":
      return Object.assign({}, state, {
        productToBeEdit: payload,
      });
    case "GET_PRODUCTS_FAIL_BY_ID":
      return Object.assign({}, state, {
        productToBeEdit: {},
      });
    case "GET_TOP_SHOP_PRODUCTS":
      return Object.assign({}, state, {
        topShopProducts: {},
      });
    case "GET_TOP_SHOP_PRODUCTS_SUCCESS":
      return Object.assign({}, state, {
        topShopProducts: payload,
      });
    case "GET_TOP_SHOP_PRODUCTS_FAIL":
      return Object.assign({}, state, {
        topShopProducts: {},
      });
    case "GET_NEW_PRODUCTS":
      return Object.assign({}, state, {
        newProducts: {},
      });
    case "GET_NEW_PRODUCTS_SUCCESS":
      return Object.assign({}, state, {
        newProducts: payload,
      });
    case "GET_NEW_PRODUCTS_FAIL":
      return Object.assign({}, state, {
        newProducts: {},
      });

    //GET_PRODUCT_BY_ID
    case "GET_PRODUCT_BY_ID":
      return Object.assign({}, state, {
        productById: {},
      });
    case "GET_PRODUCT_BY_ID_SUCCESS":
      return Object.assign({}, state, {
        productById: payload,
      });
    case "GET_PRODUCT_BY_ID_FAIL":
      return Object.assign({}, state, {
        productById: {},
      });

    //ADD_TO_CART
    case "POST_ADD_TO_CART":
      return Object.assign({}, state, {
        addToCart: {},
      });
    case "POST_ADD_TO_CART_SUCCESS":
      return Object.assign({}, state, {
        addToCart: payload,
      });
    case "POST_ADD_TO_CART_FAIL":
      return Object.assign({}, state, {
        addToCart: {},
      });


      //VIEW_CART
    case "VIEW_CART":
      return Object.assign({}, state, {
        cartDetails: {},
      });
    case "VIEW_CART_SUCCESS":
      return Object.assign({}, state, {
        ...state,
        cartDetails: payload,
      });
    case "VIEW_CART_FAIL":
      return Object.assign({}, state, {
        cartDetails: {},
      });


      //GET_USER_BY_ID
      case "GET_USER_BY_ID":
      return Object.assign({}, state, {
        userById: {},
      });
    case "GET_USER_BY_ID_SUCCESS":
      return Object.assign({}, state, {
        userById: payload,
      });
    case "GET_USER_BY_ID_FAIL":
      return Object.assign({}, state, {
        userById: {},
      });


      //CART_CHECKOUT
    case "CART_CHECKOUT":
      return Object.assign({}, state, {
        checkoutDetails: {},
      });
    case "CART_CHECKOUT_SUCCESS":
      return Object.assign({}, state, {
        ...state,
        checkoutDetails: payload,
      });
    case "CART_CHECKOUT_FAIL":
      return Object.assign({}, state, {
        checkoutDetails: {},
      });


      //USER_PLACE_ORDERS
    case "USER_PLACE_ORDERS":
      return Object.assign({}, state, {
        placeOrders: {},
      });
    case "USER_PLACE_ORDERS_SUCCESS":
      return Object.assign({}, state, {
        placeOrders: payload,
      });
    case "USER_PLACE_ORDERS_FAIL":
      return Object.assign({}, state, {
        placeOrders: {},
      });


      //USER_VIEW_ORDERS
    case "USER_VIEW_ORDERS":
      return Object.assign({}, state, {
        orderByUserId: {},
      });
    case "USER_VIEW_ORDERS_SUCCESS":
      return Object.assign({}, state, {
        orderByUserId: payload,
      });
    case "USER_VIEW_ORDERS_FAIL":
      return Object.assign({}, state, {
        orderByUserId: {},
      });


       //USER_VIEW_ORDERS_BY_ORDERID
    case "USER_VIEW_ORDERS_BY_ORDERID":
      return Object.assign({}, state, {
        orderByOrderId: {},
      });
    case "USER_VIEW_ORDERS_BY_ORDERID_SUCCESS":
      return Object.assign({}, state, {
        orderByOrderId: payload,
      });
    case "USER_VIEW_ORDERS_BY_ORDERID_FAIL":
      return Object.assign({}, state, {
        orderByOrderId: {},
      });


      //USER_CANCEL_ORDERS
    case "USER_CANCEL_ORDERS":
      return Object.assign({}, state, {
        cancelOrders: {},
      });
    case "USER_CANCEL_ORDERS_SUCCESS":
      return Object.assign({}, state, {
        cancelOrders: payload,
      });
    case "USER_CANCEL_ORDERS_FAIL":
      return Object.assign({}, state, {
        cancelOrders: {},
      });


       //ADMIN_VIEW_ORDERS
    case "ADMIN_VIEW_ORDERS":
      return Object.assign({}, state, {
        adminGetOrderDetails: {},
      });
    case "ADMIN_VIEW_ORDERS_SUCCESS":
      return Object.assign({}, state, {
        adminGetOrderDetails: payload,
      });
    case "ADMIN_VIEW_ORDERS_FAIL":
      return Object.assign({}, state, {
        adminGetOrderDetails: {},
      });


       //ADMIN_VIEW_ORDERS_BY_ORDERID
    case "USER_VIEW_ORDERS_BY_ORDERID":
      return Object.assign({}, state, {
        adminOrderByOrderId: {},
      });
    case "ADMIN_VIEW_ORDERS_BY_ORDERID_SUCCESS":
      return Object.assign({}, state, {
        adminOrderByOrderId: payload,
      });
    case "ADMIN_VIEW_ORDERS_BY_ORDERID_FAIL":
      return Object.assign({}, state, {
        adminOrderByOrderId: {},
      });

    default:
      return state;
  }
};
