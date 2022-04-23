import { Dispatch } from 'redux';
import { ProductsActionTypes, ProductsAction } from '../types'; // eslint-disable-line

// Combine them all in an asynchronous thunk
function fetchProducts() {
  return async (dispatch: Dispatch<ProductsAction>) => {
    dispatch({ type: ProductsActionTypes.GET_PRODUCTS });
    try {
      const response = await fetch(`${process.env.REACT_APP_API_DOMAIN}/api/products`);
      const data = await response.json();
      dispatch({ type: ProductsActionTypes.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ProductsActionTypes.GET_PRODUCTS_FAILURE });
    }
  };
}

export default fetchProducts;
