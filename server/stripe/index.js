
// const router = require('express').Router()
// module.exports = router
// const stripe = require('stripe')('pk_test_5bRZOP2uBgwvVsiRP9hZN2fz');

// const DOMAIN = 'http://localhost:8080';

// //Checkout session with Stripe
// router.post('/create-checkout-session', async (req, res) => {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: [
//         'card',
//       ],
//       line_items: [
//         {
//           // TODO: replace this with the `price` of the product you want to sell
//           price: 2,
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${DOMAIN}/completed`,
//       cancel_url: `${DOMAIN}/completed`,
//     });

//     console.log('SESIION', session)
//     res.send(session)
//     res.redirect(303, session.url)
//     //res.send(303)
// });