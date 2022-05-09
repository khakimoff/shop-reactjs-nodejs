import { combineReducers } from 'redux';
import productsReducer from './productsReducer'; 
import cartReducer from './cartReducer.js'; 

// CombineReducers
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
