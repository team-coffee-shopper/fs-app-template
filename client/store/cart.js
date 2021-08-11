

//*****CART ACTION TYPES *****/

const ADD_TO_CART = "ADD_TO_CART";
const ADJUST_QTY = "ADJUST_QTY";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";

//******CART ACTIONS *******/

export const addToCart = (itemID) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id: itemID,
        },
    };
};

export const removeFromCart = (itemID) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id: itemID,
        },
    };
};

export const adjustQty = (itemID, qty) => {
    return {
        type: ADJUST_QTY,
        payload: {
            id: itemID,
            qty,
        },
    };
};

export const loadCurrentItem = (item) => {
    return {
        type: LOAD_CURRENT_ITEM,
        payload: item,
    };
};

//*******CART REDUCER ********/

// import fetchWines from './wines';

const INITIAL_STATE = {
    cart: [],
    currentItem: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Get Item data from wines array
            const item = state.wines.find(
                (product) => product.id === action.payload.id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +action.payload.qty }
                        : item
                ),
            };
        case LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
};

export default cartReducer;
