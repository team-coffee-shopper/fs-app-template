import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ItemInCart from "./ItemInCart";
import { _fetchCart } from '../store/cart';

const Cart = (props) => {

    // useState(0) returns a tuple where the first parameter 
    // count is the current state of the counter and setCounter 
    // is the method that will allow us to update the counter's state.

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty] = useState(0);
    const { cart } = props; 
    
    useEffect(() => {

        if (props.auth.id) props.fetchCart(props.auth.id);

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
    console.log('FIND USER: ', cart)

    return (
        <div>
            <p>Items</p>
            <p>Quantity</p>
            <p>Price</p>
                {/* {cart.map((orderItem) => (
                  <li>
                    <ItemInCart key={orderItem.wine.id} item={orderItem} />
                  </li>
                ))} */}
                {
                    (cart.length === 0 ? <h1>Cart is Empty</h1> :<ItemInCart  cart={cart} /> )
                }

            
            <div>
                <div>
                    <span>{totalQty} items</span>
                    <span>TOTAL $ {totalPrice}</span>
                </div>
                <button>
                    Checkout
                </button>
            </div>
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
