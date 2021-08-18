import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ItemInCart from "./ItemInCart";
import { _fetchCart } from '../store/cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {

    // useState(0) returns a tuple where the first parameter 
    // count is the current state of the counter and setCounter 
    // is the method that will allow us to update the counter's state.

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty] = useState(0);
    const { cart } = props; 
    
    useEffect(() => {

        if (props.auth.id) props.fetchCart(props.auth.id);
        console.log('CAR COMP USE EFFECT --- IS RUNNING')
        let items = 0;
        let price = 0; 

        cart.cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalQty(items);
        setTotalPrice(price);
    }, [props.auth]);
    // [cart.cart, totalPrice, totalQty, setTotalPrice, setTotalQty]);



    // console.log('yo')
    console.log('CART @ Cart.js: ', cart)

    return (
        <div className="container outer">
            <h2> CART </h2>
            <div className="row user-cart">
                <div className="col-4">
                    <h4>Items</h4>
                </div>
                <div className="col-4 text-center">
                    <h4>Price</h4>
                </div>
                <div className="col-4 text-right">
                        <h4> Delete </h4>
                </div>
                <hr></hr>
            </div>
            <div className="order-item">
                {
                    (cart.cart.length === 0 ? <h1>Cart is Empty</h1> :<ItemInCart /> )
                }
            </div>
            <div className="row">
                <div className="col-6 text-left">
                   <h4> Total </h4>
                </div>
                <div className="col-6 text-right">
                    <h4> $ {totalPrice} </h4>        
                </div>
                </div>
                <button  className="primary">
                    Checkout
                </button>
            </div>
       
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        cart: state.cart,
    };
};

const mapDispatchToProps = {
    fetchCart: _fetchCart
}

// {
//     fetchCart: (userId) =>  dispatch(_fetchCart(userId))
// }

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
