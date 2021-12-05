/* eslint-disable */
import * as actions from '../actions/cartAction';

// Type
type CartReducerType = {
  id: number,
  quantity: number,
}

// Reducer
function cartReducer(state = [], action:any = {}) {
  let doesItemExist;
  switch (action.type) {
    case actions.ADD_TO_CART:
      doesItemExist = false;
      const newState = state.map((item:CartReducerType) => {
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

    case actions.REMOVE_FROM_CART:
      const newCartState = state.filter((item:CartReducerType) => {
        if (item.id === action.payload) {
          return false;
        }
        return true;
      });
      return newCartState;

    case actions.ADD_QUANTITY:
      const addedItem:any = state.find((item:CartReducerType) => item.id === action.payload);
      addedItem.quantity += 1;
      return [...state];

    case actions.DEC_QUANTITY:
      const decrItem:any = state.find((item:CartReducerType) => item.id === action.payload);
      decrItem.quantity -= 1;
      if (decrItem.quantity === 0) {
        const newCartState = state.filter((item:CartReducerType) => {
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
