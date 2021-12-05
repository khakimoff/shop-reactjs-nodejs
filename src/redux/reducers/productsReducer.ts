import * as actions from '../actions/productAction';

// Type
type InitialStateType = {
  products: [],
  loading: boolean,
  hasErrors: boolean,
}

// Intial state
const initialState:InitialStateType = {
  products: [],
  loading: false,
  hasErrors: false,
};

// Reducer
function productsReducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case actions.GET_PRODUCT:
      return { ...state, loading: true };
    case actions.GET_PRODUCT_SUCCESS:
      return { products: action.payload, loading: false, hasErrors: false };
    case actions.GET_PRODUCT_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}

export default productsReducer;
