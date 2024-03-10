import {
  userLogin,
  userRegister,
  getProducts,
  addProducts,
  deleteProducts,
  getProductsById,
  getTopShopProducts,
  getNewProducts,
  updateProduct,
  getProductById,
  postAddToCart,
  viewCart,
  getUserById,
  checkoutCart,
  postUserPlaceOrders,
  getOrderByUserId,
  userGetOrderByOrderId,
  adminGetOrders,
  adminGetOrderByOrderId,
  cancelUserPlaceOrders,
  addCardToUser,
} from "../Services/Products";
import { put, call, takeLatest } from "redux-saga/effects";
import { products } from "../Actions";

const {
  getProductsSuccess,
  getProductsFail,
  addProductsSuccess,
  addProductsFail,
  deleteProductsSuccess,
  deleteProductsFail,
  getProductsSuccessById,
  getProductsFailById,
  getTopShopProductsSuccess,
  getTopShopProductsFail,
  getNewProductsSuccess,
  getNewProductsFail,
  userLoginSuccess,
  userLoginFail,
  userRegisterSuccess,
  userRegisterFail,
  getProductByIdSuccess,
  getProductByIdFail,
  postAddToCartSuccess,
  postAddToCartFail,
  viewCartSuccess,
  viewCartFail,
  getUserByIdSuccess,
  getUserByIdFail,
  checkoutCartSuccess,
  checkoutCartFail,
  postUserPlaceOrdersSuccess,
  postUserPlaceOrdersFail,
  getOrderByUserIdSuccess,
  getOrderByUserIdFail,
  userGetOrderByOrderIdSuccess,
  userGetOrderByOrderIdFail,
  adminGetOrdersSuccess,
  adminGetOrdersFail,
  adminGetOrderByOrderIdSuccess,
  adminGetOrderByOrderIdFail,
  cancelUserPlaceOrdersSuccess,
  cancelUserPlaceOrdersFail,
  updateProductSuccess,
  updateProductFail,
  addCardToUserSuccess,
  addCardToUserFail,
} = products;
const ProductSagas = {
  userLoginSaga: function* (action) {
    const params = action?.payload ?? {};
    try {
      const articleList = yield call(userLogin, params);
      yield put(userLoginSuccess(articleList));
    } catch (error) {
      yield put(userLoginFail(error));
    }
  },

//USER_REGISTER
  userRegisterSaga: function* (action) {
    const params = action?.payload ?? {};
    try {
      const articleList = yield call(userRegister, params);
      yield put(userRegisterSuccess(articleList));
    } catch (error) {
      yield put(userRegisterFail(error));
    }
  },

  addProductsSaga: function* (action) {
    const params = action?.payload ?? {};
    try {
      const articleList = yield call(addProducts, params);
      yield put(addProductsSuccess(articleList));
    } catch (error) {
      yield put(addProductsFail(error));
    }
  },
  updateProductSaga: function* (action) {
    const params = action?.payload ?? {};
    try {
      const articleList = yield call(updateProduct, params);
      yield put(updateProductSuccess(articleList));
    } catch (error) {
      yield put(updateProductFail(error));
    }
  },
  getProductsSaga: function* (action) {
    try {
      const articleList = yield call(getProducts);
      yield put(getProductsSuccess(articleList));
    } catch (error) {
      yield put(getProductsFail(error));
    }
  },
  deletProductsSaga: function* (action) {
    const params = action?.payload ?? {};
    try {
      const articleList = yield call(deleteProducts, params);
      yield put(deleteProductsSuccess(params));
    } catch (error) {
      yield put(deleteProductsFail(error));
    }
  },
  getProductsByIdSaga: function* (action) {
    const params = action?.payload ?? {};
    try {
      const articleList = yield call(getProductsById, params);
      yield put(getProductsSuccessById(articleList));
    } catch (error) {
      yield put(getProductsFailById(error));
    }
  },
  getTopShopProductsSaga: function* (action) {
    try {
      const articleList = yield call(getTopShopProducts);
      yield put(getTopShopProductsSuccess(articleList));
    } catch (error) {
      yield put(getTopShopProductsFail(error));
    }
  },
  getNewProductsSaga: function* (action) {
    try {
      const articleList = yield call(getNewProducts);
      yield put(getNewProductsSuccess(articleList));
    } catch (error) {
      yield put(getNewProductsFail(error));
    }
  },

  //GET_PRODUCT_BY_ID
  getProductByIdSaga: function* (action) {
    const params = action?.payload ?? {};
    try {
      const articleList = yield call(getProductById, params);
      yield put(getProductByIdSuccess(articleList));
    } catch (error) {
      yield put(getProductByIdFail(error));
    }
  },

  //ADD_TO_CART
  postAddToCartSaga: function* (action) {
    const params = action?.payload ?? {};
    try {
      const articleList = yield call(postAddToCart, params);
      yield put(postAddToCartSuccess(articleList));
    } catch (error) {
      yield put(postAddToCartFail(error));
    }
  },


  //VIEW_CART
  viewCartSaga: function* (action) {
    const params = action?.payload ?? {};
    try {
      const articleList = yield call(viewCart, params);
      yield put(viewCartSuccess(articleList));
    } catch (error) {
      yield put(viewCartFail(error));
    }
  },


  //GET_USER_BY_ID
  getUserByIdSaga: function* (action) {
    const params = action?.payload ?? {};
    try {
      const articleList = yield call(getUserById, params);
      yield put(getUserByIdSuccess(articleList));
    } catch (error) {
      yield put(getUserByIdFail(error));
    }
  },


  //CART_CHECKOUT
  checkoutCartSaga: function* (action) {
    const params = action?.payload ?? {};
    try {
      const articleList = yield call(checkoutCart, params);
      yield put(checkoutCartSuccess(articleList));
    } catch (error) {
      yield put(checkoutCartFail(error));
    }
  },


    //USER_PLACE_ORDERS
    postUserPlaceOrdersSaga: function* (action) {
      const params = action?.payload ?? {};
      try {
        const articleList = yield call(postUserPlaceOrders, params);
        yield put(postUserPlaceOrdersSuccess(articleList));
      } catch (error) {
        yield put(postUserPlaceOrdersFail(error));
      }
    },


    //USER_VIEW_ORDERS
    getOrderByUserIdSaga: function* (action) {
      const params = action?.payload ?? {};
      try {
        const articleList = yield call(getOrderByUserId, params);
        yield put(getOrderByUserIdSuccess(articleList));
      } catch (error) {
        yield put(getOrderByUserIdFail(error));
      }
    },


    //USER_VIEW_ORDERS_BY_ORDERID
    userGetOrderByOrderIdSaga: function* (action) {
      const params = action?.payload ?? {};
      try {
        const articleList = yield call(userGetOrderByOrderId, params);
        yield put(userGetOrderByOrderIdSuccess(articleList));
      } catch (error) {
        yield put(userGetOrderByOrderIdFail(error));
      }
    },


    //USER_CANCEL_ORDERS
    cancelUserPlaceOrdersSaga: function* (action) {
      const params = action?.payload ?? {};
      try {
        const articleList = yield call(cancelUserPlaceOrders, params);
        yield put(cancelUserPlaceOrdersSuccess(articleList));
      } catch (error) {
        yield put(cancelUserPlaceOrdersFail(error));
      }
    },

    //ADMIN_VIEW_ORDERS
    adminGetOrdersSaga: function* (action) {
      const params = action?.payload ?? {};
      try {
        const articleList = yield call(adminGetOrders, params);
        yield put(adminGetOrdersSuccess(articleList));
      } catch (error) {
        yield put(adminGetOrdersFail(error));
      }
    },


    //ADMIN_VIEW_ORDERS_BY_ORDERID
    adminGetOrderByOrderIdSaga: function* (action) {
      const params = action?.payload ?? {};
      try {
        const articleList = yield call(adminGetOrderByOrderId, params);
        yield put(adminGetOrderByOrderIdSuccess(articleList));
      } catch (error) {
        yield put(adminGetOrderByOrderIdFail(error));
      }
    },

    //ADD_CARD_TO_USER
    addCardToUserSaga: function* (action) {
      const params = action?.payload ?? {};
      try {
        const articleList = yield call(addCardToUser, params);
        console.log("articleList", articleList);
        yield put(addCardToUserSuccess(articleList));
      } catch (error) {
        yield put(addCardToUserFail(error));
      }
    },
};

export default [
  takeLatest("GET_NEW_PRODUCTS", ProductSagas.getNewProductsSaga),
  takeLatest("GET_PRODUCTS", ProductSagas.getProductsSaga),
  takeLatest("ADD_PRODUCTS", ProductSagas.addProductsSaga),
  takeLatest("UPDATE_PRODUCT", ProductSagas.updateProductSaga),
  takeLatest("DELETE_PRODUCTS", ProductSagas.deletProductsSaga),
  takeLatest("GET_PRODUCTS_BY_ID", ProductSagas.getProductsByIdSaga),
  takeLatest("GET_TOP_SHOP_PRODUCTS", ProductSagas.getTopShopProductsSaga),
  takeLatest("USER_LOGIN", ProductSagas.userLoginSaga),
  takeLatest("GET_PRODUCT_BY_ID", ProductSagas.getProductByIdSaga),
  takeLatest("POST_ADD_TO_CART", ProductSagas.postAddToCartSaga),
  takeLatest("VIEW_CART", ProductSagas.viewCartSaga),
  takeLatest("GET_USER_BY_ID", ProductSagas.getUserByIdSaga),
  takeLatest("CART_CHECKOUT", ProductSagas.checkoutCartSaga),
  takeLatest("USER_PLACE_ORDERS", ProductSagas.postUserPlaceOrdersSaga),
  takeLatest("USER_VIEW_ORDERS", ProductSagas.getOrderByUserIdSaga),
  takeLatest("USER_VIEW_ORDERS_BY_ORDERID", ProductSagas.userGetOrderByOrderIdSaga),
  takeLatest("ADMIN_VIEW_ORDERS", ProductSagas.adminGetOrdersSaga),
  takeLatest("ADMIN_VIEW_ORDERS_BY_ORDERID", ProductSagas.adminGetOrderByOrderIdSaga),
  takeLatest("USER_CANCEL_ORDERS", ProductSagas.cancelUserPlaceOrdersSaga),
  takeLatest("USER_REGISTER", ProductSagas.userRegisterSaga),
  takeLatest("ADD_CARD_TO_USER", ProductSagas.addCardToUserSaga),





];
