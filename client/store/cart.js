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
  console.log('addToCart: ACTION CREATOR ', item)
  item = item[0]
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
       const orderItemId = (await axios.post(`/api/addtocart/${userId}/${itemId}`)).data.id
       const orderItem = (await axios.get(`/api/orderitem/${orderItemId}`)).data
       //const wine = (await axios.get(`/api/wines/${itemId}`)).data
       //console.log('I AM ORDER ITEM ID---->', orderItemId)
        //console.log('CREATED Order Item--->', orderItem)
        //console.log('ADD TO CAR THUNK', wine)
        dispatch(addToCart(orderItem));
    }
};

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
            console.log('ADD TO CART')
            return { ...state, cart: [...state.cart, action.item ] };
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
