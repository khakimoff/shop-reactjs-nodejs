/* eslint-disable */
import { ProductsState, ProductsAction, ProductsActionTypes } from '../types';

// Intiial state
const initialState: ProductsState = {
  products: [],
  loading: false,
  hasErrors: false,
};

// Reducer
function productsReducer(state = initialState, action: ProductsAction): ProductsState {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS:
      return { ...state, loading: true };
    case ProductsActionTypes.GET_PRODUCTS_SUCCESS:
      return { products: action.payload, loading: false, hasErrors: false };
    case ProductsActionTypes.GET_PRODUCTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}

export default productsReducer;
