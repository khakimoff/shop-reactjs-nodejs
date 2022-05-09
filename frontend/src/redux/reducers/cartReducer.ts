import { CartActionTypes } from '../types';

// Reducer
function cartReducer(state = [], action) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      const existedItem = state.find(item => item.id === action.payload.id)
      const newState = state.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
        }
        return {...item}
      });

      if(existedItem) {
        return newState
      }
      return [...state, { ...action.payload, quantity: 1 }];

  
    case CartActionTypes.REMOVE_FROM_CART:
      const newCartState = state.filter((item) => {
        if (item.id === action.payload) {
          return false;
        }
        return true;
      });
      return newCartState;

    case CartActionTypes.ADD_QUANTITY:
      const addedItem = state.find((item) => item.id === action.payload);
      addedItem.quantity += 1;
      return [...state];

    case CartActionTypes.DEC_QUANTITY:
      const decrItem = state.find((item) => item.id === action.payload);
      decrItem.quantity -= 1;
      if (decrItem.quantity === 0) {
        const newCartState = state.filter((item) => {
          if (item.id === action.payload) {
            return false;
          }
          return true;
        });
        return {...newCartState};
      }
      return [...state];

    default:
      return state;
  }
}

export default cartReducer;
