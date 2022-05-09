import {
    addToCart,
    removeFromCart,
    decQuantity,
    addQuantity
} from '../actions/cartAction';
import {
    CartActionTypes,
    ProductsActionTypes
} from '../types';
import fetchProducts from '../actions/productAction';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
    describe('Sync actions', () => {
        it('addToCart should create an action to add product', () => {
            const expectedAction = {
                type: CartActionTypes.ADD_TO_CART,
                payload: [1, 2, 3, 4, 5]
            }
            expect(addToCart([1, 2, 3, 4, 5])).toEqual(expectedAction)
        })

        it('removeFromCart should create an action to remove product', () => {
            const expectedAction = {
                type: CartActionTypes.REMOVE_FROM_CART,
                payload: 1
            }
            expect(removeFromCart(1)).toEqual(expectedAction)
        })

        it('addQuantity should create an action to increasing the number product', () => {
            const expectedAction = {
                type: CartActionTypes.ADD_QUANTITY,
                payload: 1
            }
            expect(addQuantity(1)).toEqual(expectedAction)
        })

        it('decQuantity should create an action to decreasing the number product', () => {
            const expectedAction = {
                type: CartActionTypes.DEC_QUANTITY,
                payload: 1
            }
            expect(decQuantity(1)).toEqual(expectedAction)
        })

    })

    // describe('Async actions', () => { 
    //     afterEach(() => {
    //       fetchMock.reset()
    //       fetchMock.restore()
    //     })

    //     it('creates GET_PRODUCTS_SUCCESS when fetching news has been done', () => {

    //       fetchMock.getOnce("https://rkhakimov.ru/api/products", {
    //         body: { data: [1, 2, 3, 4, 5], status: 'ok' },
    //       }) 

    //       const expectedActions = [
    //         {
    //             type: ProductsActionTypes.GET_PRODUCTS,
    //         },
    //         {
    //             type: ProductsActionTypes.GET_PRODUCTS_SUCCESS,
    //             payload: [1, 2, 3, 4, 5], 
    //         },
    //       ]

    //       const store = mockStore({})

    //       return store.dispatch(fetchProducts()).then(() => {
    //         expect(store.getActions()).toEqual(expectedActions)
    //       })
    //     })
    // });

});