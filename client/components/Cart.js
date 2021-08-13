import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ItemInCart from "./ItemInCart";

const Cart = ({ cart }) => {
    
    // useState(0) returns a tuple where the first parameter 
    // count is the current state of the counter and setCounter 
    // is the method that will allow us to update the counter's state.

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalQty(items);
        setTotalPrice(price);
    }, [cart.cart, totalPrice, totalQty, setTotalPrice, setTotalQty]);
    
    console.log('Cart.js cart: ', cart)

    return (
        <div>
            <p>Items</p>
            <p>Quantity</p>
            <p>Price</p>
            <div>
                {cart.cart.map((item) => (
                    <ItemInCart key={item.id} item={item} />
                ))}
            </div>
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
        cart: state.cart,
    };
};

export default connect(mapStateToProps)(Cart);
