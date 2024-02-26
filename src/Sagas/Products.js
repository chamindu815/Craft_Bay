import { getProducts, addProducts, deleteProducts, getProductsById, getTopShopProducts, getNewProducts } from '../Services/Products'
import { put, call, takeLatest } from "redux-saga/effects";
import { products } from "../Actions";

const { getProductsSuccess, getProductsFail, addProductsSuccess, addProductsFail, deleteProductsSuccess, deleteProductsFail,
  getProductsSuccessById, getProductsFailById, getTopShopProductsSuccess, getTopShopProductsFail, getNewProductsSuccess, getNewProductsFail } = products;
const ProductSagas = {
  addProductsSaga: function* (action) {
    const params = action?.payload ?? {};
    try {
      const articleList = yield call(addProducts, params);
      yield put(addProductsSuccess(articleList));
    } catch (error) {
      yield put(addProductsFail(error));
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
}

export default [
  takeLatest('GET_PRODUCTS', ProductSagas.getProductsSaga),
  takeLatest('ADD_PRODUCTS', ProductSagas.addProductsSaga),
  takeLatest('DELETE_PRODUCTS', ProductSagas.deletProductsSaga),
  takeLatest('GET_PRODUCTS_BY_ID', ProductSagas.getProductsByIdSaga),
  takeLatest('GET_TOP_SHOP_PRODUCTS', ProductSagas.getTopShopProductsSaga),
  takeLatest('GET_NEW_PRODUCTS', ProductSagas.getNewProductsSaga),
];