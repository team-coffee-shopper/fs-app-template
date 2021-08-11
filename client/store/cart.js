import axios from 'axios';
import {
    makeCart,
    getCart,
    removeWineFromCart,
    addWineToCart,
    updateWineQty
} from '../cartfunction'

//Action Types
const SET_CART = 'SET_CART'
const GET_ORDER = 'GET_ORDER'

//Action Creators
const setCart = cart => {
    return {
      type: SET_CART,
      cart
    }
  }

  const getOrder = (order, orderId) => {
    return {
      type: GET_ORDER,
      order,
      orderId
    }
  }

  //Thunk
export const CatchCart = () => {
    return dispatch => {
      const cart = getCart()
      dispatch(setCart(cart))
    }
  }