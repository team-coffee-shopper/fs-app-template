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
    _fetchCart();

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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWines: () => dispatch(fetchWines()),
    fetchCart: _fetchCart
  }
}

export default connect(null, mapDispatchToProps)(App);
