import React from 'react'
import { connect } from 'react-redux'
import { _fetchCart } from '../store'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div className="container homepage">
      <h3>Welcome, {username}</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username,
    cart: state.cart
  }
}
const mapDispatch = dispatch => {
  return {
    fetchCart: _fetchCart
  }
}

export default connect(mapState, mapDispatch)(Home)
