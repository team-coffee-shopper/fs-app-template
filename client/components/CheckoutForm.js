// import React from 'react';
// import {
//     CardElement,
//     useStripe,
//     useElements
// } from '@stripe/react-stripe-js';


// const CheckoutForm = () => {
//     //Stripe hooks 
//     const stripe = useStripe();
//     const elements = useElements();

//     async function handleSubmit(ev) {
//         ev.preventDefault()
//         //to access stripe card element 
//         const cardElement = elements.getElement(CardElement)

//         //sending data to stripe, return a js object, error - if there is an error with the payment, otherwise - pyeemthd - success
//         const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: "card",
//             card: cardElement
//         });
//         if(error) {
//             console.log(error)
//         } else {
//             console.log(paymentMethod)
//         }
//     };

    

//     return (
//         <form onSubmit={ handleSubmit }>
//             <CardElement />
//             {/* Disble the button if stripe object hasn't loaded yet */}
//             <button type="submit" disabled={!stripe}> Pay now</button>
//         </form>
//     )

// }

// export default CheckoutForm;