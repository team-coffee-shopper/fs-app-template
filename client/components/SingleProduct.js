import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSingleWine } from '../store/wine'
import { _addToCart } from '../store/cart'

class SingleProduct extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.loadSingleWine(this.props.match.params.id)
    }

    render() {
        const { singleWine, auth, addToCart } = this.props
        console.log(singleWine)
        return(
            <div className="container single-product-outer">
                 <div className="single-product-inner">
                     <div className="row">
                        <div className="col-6 rating">
                            <div className="img">
                                <img src={ singleWine.imageUrl } />
                            </div>
                        </div>
                        <div className="col-6">
                            <h1> { singleWine.title } </h1> 
                            <p> { singleWine.description } </p>
                            <h5>Price: { singleWine.price }</h5>
                            <p><i> {singleWine.stock} bottles left in stock. </i></p>
                            <button  onClick={() => addToCart(auth.id, singleWine.id)} className="primary"> Add to Cart </button>
                        </div>
                     </div>
                 </div>
            </div>
        )
    }
}

const mapStateToProps = ({ singleWine, cart, auth }) => {
    console.log('STATE IN SINGLE PRODUCT')
    return {
        singleWine,
        auth,
        cart: cart.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadSingleWine: (id) => dispatch(fetchSingleWine(id)),
        addToCart: (userId, itemId) => dispatch(_addToCart(userId, itemId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);