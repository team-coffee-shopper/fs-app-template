import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"
import { connect } from "react-redux";
import ItemInCart from "./ItemInCart";
import { _fetchCart } from '../store/cart';
import { loadStripe } from '@stripe/stripe-js'
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import axios from 'axios'
import { Completed } from './Completed'
import { Modal, Button } from 'react-bootstrap';
import { authenticate } from "../store";
import { Link } from 'react-router-dom'


let price = 0;

const Cart = (props) => {
    const { cart, checkout, auth } = props; 

    
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // console.log('CARTTTTTT', cart)
    console.log('AUTTTTTTT', auth)
    
    const initialTotalPrice = () =>{
        return cart.cart.reduce( (total, item)=>{
            let itemPrice = Number(item.wine.price.slice(1))
            total += itemPrice
            return Math.ceil(total)
        }, 0)
    }
    const [totalPrice, setTotalPrice] = useState( () => initialTotalPrice() );


    
//     <Modal
//     show={show}
//     onHide={handleClose}
//     backdrop="static"
//     keyboard={false}
//   >
//     <Modal.Header closeButton>
//       <Modal.Title>Thanks for your purchase, </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       I will not close if you click outside me. Don't even try to press
//       escape key.
//     </Modal.Body>
//     <Modal.Footer>
//       <Button variant="secondary" onClick={handleClose}>
//         Close
//       </Button>
//       <Button variant="primary">Understood</Button>
//     </Modal.Footer>
//   </Modal>
    
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
            price = total;
            console.log('PRICEEE', price)
            return total; 
        })
    },  [cart.cart.length] )


     
    const [status, setStatus] = React.useState("ready")
   
    if(status === "success") {
        return(
            <div className="receipt-outer">
                 <h2> Thank for your Purchase <span className="color-peach"> { auth.firstName }</span> { auth.lastName } </h2>
                <article className="receipt-inner">
                    <section className="receipt__half upper">
                        <h5>Receipt</h5>
                        <h2> ${ price } </h2>
                        <p className="sm"> { auth.email } </p>

                        <div className="receipt__content">
                            <table>
                                <tbody>
                                    {
                                        cart.cart.map(item => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>
                                                        { item.wine.title }
                                                    </td>
                                                    <td>
                                                        { item.wine.price }
                                                    </td>
                                                </tr>
                                                )
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <button className="primary"><Link to="/products">Back TO Products</Link></button>
                </article>
               
            </div> 
        )

      
    }
    return (
        <div className="container outer">
            <h2> CART </h2>
            <div className="row user-cart">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-4">
                            <h4>Items</h4>
                        </div>
                        <div className="col-4 text-center">
                            <h4>Price</h4>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="order-item-checkout">
                        {
                            (cart.cart.length === 0 ? <h1>Cart is Empty</h1> :<ItemInCart /> )
                        }
                    </div>
                </div>
                <div className="col-md-4">
                <h4> Pay Now </h4>
                <div className="sticky">
                    <div className="row">
                            <div className="col-6 text-left">
                               <h4> Total </h4>
                            </div>
                            <div className="col-6 text-right">
                                <h4> $ {totalPrice} </h4>        
                            </div>
                    </div>
                    <div className="form-area">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm 
                            success={()=> {
                                setStatus("success")
                            }}
                            />
                        </Elements>
                    </div>
                </div>
                   
                </div>
            </div>            
        </div>
    );
};


//Triger the Modal




// console.log( { totalPrice } )
const stripePromise = loadStripe('pk_test_5bRZOP2uBgwvVsiRP9hZN2fz');

const CheckoutForm = (props) => {
    const { success } = props
  

    
    console.log(price)


    const stripe = useStripe();
    //getting the card information
    const elements = useElements();

    const handleSubmit = async(event) => {
        event.preventDefault();
        //sending a call to stripe, with the information that was entered in the card element
        //Stripe is sending Pyment method

       const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            //passing the card info
            card: elements.getElement(CardElement)
       })
       if(!error){
      //    grabbing an id from payment method 
          const { id, amount } = paymentMethod
          try{
            //  posting info to the backend, passing id and amount 
            const data  = await axios.post('/api/charge', { id, amount: price*100});
            console.log(data)
            console.log()
            success();
          } catch(error) {
              console.log(error)
          }
       }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <CardElement />
            <button type="submit" disabled={!stripe} className="primary">
                Pay
            </button>
           
        </form>
    )
}


 


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
