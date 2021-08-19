import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ItemInCart from "./ItemInCart";
import { _fetchCart } from '../store/cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const { cart } = props; 
    
    const initialTotalPrice = () =>{
        return cart.cart.reduce( (total, item)=>{
            let itemPrice = Number(item.wine.price.slice(1))
            total += itemPrice
            console.log('running')
            console.log(total)
            return Math.ceil(total)
        }, 0)
    }
    const [totalPrice, setTotalPrice] = useState( () => initialTotalPrice() );
    
    useEffect(() => { 
        if (props.auth.id) props.fetchCart(props.auth.id);
        console.log('FETCHED CART onMount--->')
    }, []);
    useEffect( () => {
        setTotalPrice( prevTotalPrice =>{
            let total = cart.cart.reduce( (total, item)=>{
                let itemPrice = Number(item.wine.price.slice(1))
                total += itemPrice
                console.log('running')
                console.log(total)
                return Math.ceil(total)
            }, 0)
            return total 
        })
    },  [cart.cart.length] )

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
    fetchCart: _fetchCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
