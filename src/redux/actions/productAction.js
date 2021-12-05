export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_PRODUCT_FAILURE = 'GET_POSTS_FAILURE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const TOGGLE_CART = 'TOGGLE_CART';

// Create Redux action creators that return an action
export const getProduct = () => ({
  type: GET_PRODUCT,
});

export const getProductSuccess = (product) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: product.map((obj) => ({ ...obj, number: 0 })),
});

export const getProductFailure = () => ({
  type: GET_PRODUCT_FAILURE,
});

export const postProduct = (basket) => ({
  type: ADD_TO_CART,
  payload: basket,
});

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

// Combine them all in an asynchronous thunk
export function fetchProducts() {
  return async (dispatch) => {
    dispatch(getProduct());

    try {
      const response = await fetch('https://rkhakimov.ru/api/products');
      const data = await response.json();
      dispatch(getProductSuccess(data));
    } catch (error) {
      dispatch(getProductFailure());
    }
  };
}
