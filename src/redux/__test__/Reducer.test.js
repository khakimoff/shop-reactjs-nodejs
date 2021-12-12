/* eslint-disable */
import cartReducer from '../reducers/cartReducer'; 
import productsReducer from '../reducers/productsReducer';
import { addToCart } from '../actions/cartAction';
import { ProductsActionTypes } from '../types';
import { initialState } from '../reducers/productsReducer';

const MockCartItems = [
  {
    id: 1, title: 'sweater', price: 109.95, category: "men's clothing", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
  },
];

describe('Redux testing', () => {

  it('GET_PRODUCTS case', () => {
    const action = {
      type: ProductsActionTypes.GET_PRODUCTS
    }

    expect(productsReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true
    })
  })

  it('GET_PRODUCTS_SUCCESS case', () => {
    const prevState = {
      products: [],
      loading: true,
      hasErrors: false,
    }

    const action = {
      type: ProductsActionTypes.GET_PRODUCTS_SUCCESS,
      payload: [1,2,3,4,5]
    }

    expect(productsReducer(prevState, action)).toEqual({
      ...prevState,
      products: action.payload,
      loading: false, 
      hasErrors: false
    })
  })

  it('GET_PRODUCTS_FAILURE case', () => {
    const prevState = {
      products: [],
      loading: true,
      hasErrors: false
    }
    
    const action = {
      type: ProductsActionTypes.GET_PRODUCTS_FAILURE
    }

    expect(productsReducer(prevState, action)).toEqual({
      ...prevState,
      loading: false, 
      hasErrors: true
    })
  })

  it('should return the initial state in productsReducer', () => {
    expect(productsReducer(undefined, {})).toEqual(
      {
        products: [],
        loading: false,
        hasErrors: false,
      }
    )
  })

  it('should return the initial state in cartReducer', () => {
    expect(cartReducer(undefined, {})).toEqual(
      []
    )
  })

  it('should added product to an empty list', () => {
    const previousState = []
    expect(cartReducer(previousState, addToCart(MockCartItems))).toEqual([
      {
        "0": {
          "category": "men's clothing",
          "id": 1,
          "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "price": 109.95,
          "title": "sweater",
        },
        "quantity": 1,
      }
    ])
  })

  it('ADD_TO_CART case', () => {
    const initialState = []
    expect(cartReducer(initialState, addToCart(MockCartItems))).toEqual([
      {
        "0": {
          "category": "men's clothing",
          "id": 1,
          "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "price": 109.95,
          "title": "sweater",
        },
        "quantity": 1,
      }
    ])
  })
});