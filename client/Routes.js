import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Cart from './components/Cart'
import Products from './components/Products'
import Home from './components/Home';
import {me} from './store'
import SingleProduct from './components/SingleProduct';
import Completed from './components/Completed'
import Checkout from './components/Checkout'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/" exact component={ Home } />
            {/* <Redirect to="/home" /> */}
            <Route path="/cart" component={ Cart } />
            <Route path="/checkout/completed" exact component={ Completed } />
            <Route path="/checkout" component={ Checkout } />
            <Route path="/products/:id" exact component={ SingleProduct } />
            <Route path="/products" component={ Products } />
            <Redirect to='/' />
        </Switch>
      ) : (
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/cart" component={Cart} />
          <Redirect to='/' />
        </Switch>
        
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
