import { all } from 'redux-saga/effects';

import ProductSagas from './Products'

let sagas = [
  ...ProductSagas,
];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;