import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Routes from './Routes'
import Products from './components/Products'
import Footer from './components/Footer'
import { _fetchCart } from './store/cart';
import { fetchWines } from './store';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchWines();
  }
  componentDidUpdate(prevProps){
    if (prevProps.auth.id !== this.props.auth.id){
      //console.log('AUTH ID ---->',this.props.auth.id)
      //console.log('runnnnn')
      this.props.fetchCart(this.props.auth.id);
    }
  }

  render(){
    return (
      <div>
        <Navbar />
        <Routes />
          {/* <Switch> 
            <Route path='/products' exact component={ Products } />
          </Switch> */}
          <Footer />
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id,
    cart: state.cart,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWines: () => dispatch(fetchWines()),
    fetchCart: (id) => dispatch(_fetchCart(id))
  }
}

export default connect(mapState, mapDispatchToProps)(App);
