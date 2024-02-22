// reducers/index.js
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Import your reducers here
// Example:
import reducer from '../Reducers/reducer';

const craftbay = reducer

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  craftbay
})

export default rootReducer;