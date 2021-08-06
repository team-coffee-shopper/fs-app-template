import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Routes from './Routes'
import Products from './components/Products'
import { fetchMerlotWines } from './store';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchMerlotWines();

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
    fetchMerlotWines: () => dispatch(fetchMerlotWines())
  }
}

export default connect(null, mapDispatchToProps)(App);
