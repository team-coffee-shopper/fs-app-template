import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"
import { connect } from "react-redux";
import ItemInCart from "./ItemInCart";
import { _fetchCart } from '../store/cart';
import { loadStripe } from '@stripe/stripe-js'
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import axios from 'axios'
import { Component } from "react";
import { Completed } from './Completed'
import { Link } from 'react-router-dom'


const Cart = (props) => {
    const { cart, checkout } = props; 
    
    const initialTotalPrice = () =>{
        return cart.cart.reduce( (total, item)=>{
            let itemPrice = Number(item.wine.price.slice(1))
            total += itemPrice
            return Math.ceil(total)
        }, 0)
    }
    const [totalPrice, setTotalPrice] = useState( () => initialTotalPrice() );
    
    useEffect(() => { 
        if (props.auth.id) props.fetchCart(props.auth.id);
    }, []);
    useEffect( () => {
        setTotalPrice( prevTotalPrice =>{
            let total = cart.cart.reduce( (total, item)=>{
                let itemPrice = Number(item.wine.price.slice(1))
                total += itemPrice
                return Math.ceil(total)
            }, 0)
            return total 
        })
    },  [cart.cart.length] )

    const [status, setStatus] = React.useState("ready")

    if(status === "success") {
        <div> You did it </div>
    }

    return (
        <div className="container outer">
            <h2> CART </h2>
            <div className="row user-cart">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-6">
                            <h4>Items</h4>
                        </div>
                        <div className="col-3 text-center">
                            <h4>Price</h4>
                        </div>
                        <div className="col-2 text-right">
                            <h4> Delete </h4>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="order-item">
                        {
                            (cart.cart.length === 0 ? <h1>Cart is Empty</h1> :<ItemInCart /> )
                        }
                    </div>
                </div>
                <div className="col-md-4">
                <h4> READY TO CHECKOUT? </h4>
                <div className="sticky">
                    <div className="row">
                        <div className="col-6 text-left">
                            <h4> Total </h4>
                        </div>
                        <div className="col-6 text-right">
                            <h4> $ {totalPrice} </h4>        
                        </div>
                    </div>
                    <button className="primary"><Link to="/checkout"> CHEKOUT </Link></button>
                </div>
                    
                    {/* <div className="form-area">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm 
                        success={()=> {
                            setStatus("success")
                        }}
                        />
                    </Elements>
                    </div> */}
                </div>
                
            </div>
           
            
        </div>
    );
};
//const stripePromise = loadStripe('pk_test_5bRZOP2uBgwvVsiRP9hZN2fz');

// const CheckoutForm = ({ success }) => {
//     const stripe = useStripe();
//     //getting the card information
//     const elements = useElements();

//     const handleSubmit = async(event) => {
//         event.preventDefault();

//         //sending a call to stripe, with the information that was entered in the card element
//         //Stripe is sending Pyment method
//        const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: 'card',
//             //passing the card info
//             card: elements.getElement(CardElement)
//        })
//        if(!error){
//           //grabbing an id from payment method 
//           const { id } = paymentMethod
          
          

//           try{
//             const { data } = await axios.post('/api/charge', { id, amount: 12 });
//             console.log(data)
//             success();

//           } catch(error) {
//               console.log(error)
//           }
//        }
//     }

//     return (
//         <form onSubmit={ handleSubmit }>
//         <CardElement />
//         <button type="submit" disabled={!stripe} className="primary">
//             Pay
//         </button>
//     </form>
//     )
// }

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        cart: state.cart,
    };
};

const mapDispatchToProps = {
    fetchCart: _fetchCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
