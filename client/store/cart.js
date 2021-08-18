import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'


//*****CART ACTION TYPES *****/

const FETCH_CART = "FETCH_CART";
const ADD_TO_CART = "ADD_TO_CART";
const ADJUST_QTY = "ADJUST_QTY";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";

//******CART ACTIONS *******/

export const fetchCart = (cart) => {
  return {
    type: FETCH_CART,
    cart
  }
}

export const addToCart = (item) => {
  //console.log('addToCart: ', item)
  return {
    type: ADD_TO_CART,
    item
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

//**********THUNK **********//

export const _addToCart = (userId, itemId) => {
    return async(dispatch) => {
       await axios.post(`/api/addtocart/${userId}/${itemId}`)
       const wine = (await axios.get(`/api/wines/${itemId}`)).data
        
        console.log('ADD TO CAR THUNK', wine)
        dispatch(addToCart(wine));
    }
};


// export const _addToCart = (item) => {
//     return async(dispatch) => {
//         const cart = (await axios.post(`/api/addusercart/${orderItem.userId}`)).data
//         // dispatch(addToCart(orderItem.ItemId));
//         dispatch(addToCart(cart));
//     }
// };

// export const _adjustQty = (qty) => {
//     return async(dispatch) => {
//         const cart = (await axios.put(`/api/usercart/${orderItem.userId}`)).data
//         dispatch(adjustQty(qty));
//         // dispatch(addToCart(cart));
//     }
// };

export const _fetchCart = (userId) => {
    return async(dispatch) => {
      try {
        const cart = (await axios.get(`/api/usercart/${userId}`)).data
        console.log('FETCH CART THUNK',cart)
        dispatch(fetchCart(cart))
      } catch (err){
          console.log(err)
      }
    }
};

//*******CART REDUCER ********/

const INITIAL_STATE = {
    cart: [],
    currentItem: null
}


const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CART:

          console.log('FETCHED CART')
          return {...state, cart: action.cart }
        case ADD_TO_CART:
            // Get Item data from wines array
            // const item = state.wines.find(
            //     wine => wine.id === action.payload.id
            // );
            const item = action.item;
            console.log('HOW STATE LOOKS', {...state, cart: [...state.cart, action.item ]})
            // Check if Item is in cart already
            // const inCart = state.cart.find((item) =>
            //     item.id === action.payload.id ? true : false
            // );

            return {
                ...state, cart: [...state.cart, action.item ]
                // item
                // cart: inCart
                //     ? state.cart.map((item) =>
                //         item.id === action.payload.id
                //             ? { ...item, qty: item.qty + 1 }
                //             : item
                //     )
                //     : [...state.cart, { ...item, qty: 1 }],
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


export default cartReducer
