import { getProducts, addProducts, deleteProducts } from '../Services/Products'
import { put, call, takeLatest } from "redux-saga/effects";
import { products } from "../Actions";

const { getProductsSuccess, getProductsFail, addProductsSuccess, addProductsFail, deleteProductsSuccess, deleteProductsFail } = products;
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
    console.log("xxxxx params", params);
    try {
      const articleList = yield call(deleteProducts,params);
    console.log("xxxxx deletProductsSaga", articleList);

      yield put(deleteProductsSuccess(params));
    } catch (error) {
      yield put(deleteProductsSuccess(error));
    }
  },
  getProductsByIdSaga: function* (action) {
    try {
      const articleList = yield call(getProducts);
      yield put(getProductsSuccess(articleList));
    } catch (error) {
      yield put(getProductsFail(error));
    }
  },
}

export default [
  takeLatest('GET_PRODUCTS', ProductSagas.getProductsSaga),
  takeLatest('ADD_PRODUCTS', ProductSagas.addProductsSaga),
  takeLatest('DELETE_PRODUCTS', ProductSagas.deletProductsSaga),
];