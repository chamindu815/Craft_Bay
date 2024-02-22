// store.js
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from './Reducers'; // You'll need to create this reducer file
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import rootSaga from "./Sagas/index";

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(
//         applyMiddleware(/* Add middleware if needed */)
//         // other store enhancers if any
//       )    );
export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

const store = configureStore();

export default store;