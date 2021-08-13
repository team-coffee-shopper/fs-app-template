import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Navbar = ({handleClick, isLoggedIn}) => (
  <div className = "nav-outer">
    <nav>
      {isLoggedIn ? (
        <div className="navbar">
          {/* The navbar will show these links after you log in */}
          <div className="col-sm-4">
            <Link to="/products">Shop</Link>
          </div>
          <div className="col-sm-4 text-md-center logo">     
              <Link to="/">WIneCellar</Link>
          </div>
          <div className="col-sm-4 text-md-right">
            <Link to="/cart"> 
                <FontAwesomeIcon icon={ faShoppingCart } /> 
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
              <Link to="/">WIneCellar</Link>
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

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
