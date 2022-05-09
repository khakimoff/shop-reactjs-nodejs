// Interface state Product
export interface ProductsState {
    products: Array<string>,
    loading: boolean,
    hasErrors: null | boolean,
}

// Enum Cart
export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    ADD_QUANTITY = 'ADD_QUANTITY',
    DEC_QUANTITY = 'DEC_QUANTITY',
}

// Enum Cart
export enum ProductsActionTypes {
    GET_PRODUCTS = 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE',
}

// Interface AddToCart action
export interface AddToCart {
    type: CartActionTypes.ADD_TO_CART,
    payload: string
}

// Interface RemoveFromCart action
export interface RemoveFromCart {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: number
}

// Interface AddQuantity action
export interface AddQuantity {
    type: CartActionTypes.ADD_QUANTITY,
    payload: number
}

// Interface DeqQuantity action
export interface DeqQuantity {
    type: CartActionTypes.DEC_QUANTITY,
    payload: number
}

// Interface GetPtoductsAction action
export interface GetPtoductsAction {
    type: ProductsActionTypes.GET_PRODUCTS,
}

// Interface GetPtoductsSuccesAction action
export interface GetPtoductsSuccesAction {
    type: ProductsActionTypes.GET_PRODUCTS_SUCCESS,
    payload: []
}

// Interface GetPtoductsFailureAction action
export interface GetPtoductsFailureAction {
    type: ProductsActionTypes.GET_PRODUCTS_FAILURE
}

// Types ProductsAction
export type ProductsAction =
    GetPtoductsAction |
    GetPtoductsSuccesAction |
    GetPtoductsFailureAction

// Types CartAction
export type CartAction =
    AddToCart |
    RemoveFromCart |
    AddQuantity |
    DeqQuantity
