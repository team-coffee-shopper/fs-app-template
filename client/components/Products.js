// import { urlencoded } from 'express';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWines } from '../store/wines'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { _addToCart } from '../store/cart'

class Products extends Component {
    constructor() {
        super()
    }
    render() {
        const { wines, auth, addToCart } = this.props;
        console.log('THIS IS MY PROPS',this.props)
        return (
            <div className="container products-list">
                <h2> Explore Our Products </h2>
                <div className="wines-outer">
                    {
                        wines.map(wine => {
                            return (
                                <div className="wine-card-inner" key= {wine.id}>
                                    <div className="top" >
                                        <div className="img"  style={{ 
  backgroundImage: `url(${wine.imageUrl})`
  }}>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="row">
                                            <div className="col-9">
                                                <h5> { wine.title } </h5>
                                            </div>
                                            <div className="col-3">
                                                <p> { wine.price } </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <p>rating</p>
                                            </div>
                                            <div className="col-6 text-right">
                                                <button><FontAwesomeIcon icon={ faCartPlus } /> </button>
                                                
                                                <button
                                                    onClick={() => addToCart(auth.id, wine.id)}
                                                >
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({ wines, cart, auth }) => {
    return {
        auth,
        wines,
        cart: cart.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWines: () => dispatch(fetchWines()),
        addToCart: (userId, itemId) => dispatch(_addToCart(userId, itemId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
