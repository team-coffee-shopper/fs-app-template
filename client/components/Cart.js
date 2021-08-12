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

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalQty(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalQty, setTotalPrice, setTotalQty]);
    
    //console.log('state.cart.cart: ', cart)

    return (
        <div>
            <div>
                {cart.map((item) => (
                    <ItemInCart key={item.id} item={item} />
                ))}
            </div>
            <div>
                <h4>Cart Summary</h4>
                <div>
                    <span>Your total: {totalQty} items</span>
                    <span>$ {totalPrice}</span>
                </div>
                <button>
                    Proceed To Checkout
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    };
};

export default connect(mapStateToProps)(Cart);
