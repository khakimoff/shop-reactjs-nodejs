import {
  CartActionTypes, AddToCart, RemoveFromCart, AddQuantity, DeqQuantity,
} from '../types';

// Create Redux action creators that return an action
// Added of a specific product depending on id
export const addToCart = (data: AddToCart) => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: data,
});

// Removed of a specific product depending on id
export const removeFromCart = (id: RemoveFromCart) => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: id,
});

// Adding the quantity of a specific product depending on the id
export const addQuantity = (id: AddQuantity) => ({
  type: CartActionTypes.ADD_QUANTITY,
  payload: id,
});

// Decreasing the quantity of a specific product depending on the id
export const decQuantity = (id: DeqQuantity) => ({
  type: CartActionTypes.DEC_QUANTITY,
  payload: id,
});
