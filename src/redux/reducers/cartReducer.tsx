/* eslint-disable */
import { CartActionTypes, CartAction } from '../types';
import { CartItemPropsType } from '../../components/CartItems/CartItems';

// Reducer
function cartReducer(state = [], action: CartAction) {
  let doesItemExist;
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      doesItemExist = false;
      const newState = state.map((item: CartItemPropsType) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
          doesItemExist = true;
        }
        return item;
      });
      if (doesItemExist) {
        return newState;
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case CartActionTypes.REMOVE_FROM_CART:
      const newCartState = state.filter((item: CartItemPropsType) => {
        if (item.id === action.payload) {
          return false;
        }
        return true;
      });
      return newCartState;

    case CartActionTypes.ADD_QUANTITY:
      const addedItem = state.find((item: CartItemPropsType) => item.id === action.payload);
      (addedItem as any).quantity += 1;
      return [...state];

    case CartActionTypes.DEC_QUANTITY:
      const decrItem = state.find((item: CartItemPropsType) => item.id === action.payload);
      (decrItem as any).quantity -= 1;
      if ((decrItem as any).quantity === 0) {
        const newCartState = state.filter((item: CartItemPropsType) => {
          if (item.id === action.payload) {
            return false;
          }
          return true;
        });
        return newCartState;
      }
      return [...state];

    default:
      return state;
  }
}

export default cartReducer;
