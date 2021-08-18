import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { _fetchCart } from '../store/cart';
import {logout} from '../store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'



const Navbar = (props) => {
  const { handleClick, isLoggedIn, cart } = props
  //console.log('props', props)
  useEffect(() => {
    if (props.auth.id) props.fetchCart(props) 
  }, [props.auth])

  return (   
    <div className = "nav-outer">
    <nav>
      {isLoggedIn ? (
        <div className="navbar">
          {/* The navbar will show these links after you log in */}
          <div className="col-sm-4">
            <Link to="/products">Shop</Link>
          </div>
          <div className="col-sm-4 text-md-center logo">     
              <Link to="/"><img src="../assets/logo.png"></img></Link>
          </div>
          <div className="col-sm-4 text-md-right">
            <Link to="/cart"> 
                <FontAwesomeIcon icon={ faShoppingCart } /><span className="items-in-cart"> { cart.cart.length ? cart.cart.length : 0} </span> 
            </Link>
            <Link to="/profile">
                <FontAwesomeIcon icon={ faUser } /> 
            </Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          </div>
        </div>
      ) : (
        <div className="navbar">
          {/* The navbar will show these links before you log in */}
          <div className="col-sm-4">
              <Link to="/products">Shop</Link>
          </div>
          <div className="col-sm-4 text-md-center logo">     
              <Link to="/"><img src="../assets/logo.png"></img></Link>
          </div>
          <div  className="col-sm-4 text-md-right">
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  </div>
  )  
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id,
    cart: state.cart,
    auth: state.auth
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    fetchCart: _fetchCart
  }
}

export default connect(mapState, mapDispatch)(Navbar)
