import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
// import auth from './auth'
// import wines from './wines'
// import cart from './cart'



import auth from './auth'
import wineReducer from './wines'
import cartReducer from './cart'
const reducer = combineReducers({
  auth,
  wines: wineReducer,
  cart: cartReducer
})



// const reducer = combineReducers({ 
//   auth,
//   wines,
//   cart
// })

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './wines'
export * from './cart'

