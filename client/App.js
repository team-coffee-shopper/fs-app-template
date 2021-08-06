import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Routes from './Routes'
import Products from './components/Products'
import { fetchWines } from './store';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchWines();

  }
  render(){
    return (
      <div>
        <Navbar />
        <Routes />
        <Route path='/products' component={ Products } />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWines: () => dispatch(fetchWines())
  }
}

export default connect(null, mapDispatchToProps)(App);
