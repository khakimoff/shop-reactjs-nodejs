export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const DEC_QUANTITY = 'DEC_QUANTITY';
export const RESET_STATE = 'RESET_STATE';

// Create Redux action creators that return an action
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const addQuantity = (id) => ({
  type: ADD_QUANTITY,
  payload: id,
});

export const decQuantity = (id) => ({
  type: DEC_QUANTITY,
  payload: id,
});
