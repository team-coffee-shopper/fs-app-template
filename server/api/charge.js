const router = require('express').Router()
const { Stripe } = require('stripe')
const stripe = new Stripe('sk_test_NhebPVc1Xii8GcVFTCHEkRLO')

router.post('/', async(req, res, next)=> {
    const { id, amount } = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            payment_method: id,
            confirm: true
        })

        
        console.log('this is payment', payment)
        return res.status(200).json({
            confirm: "Payment Confirmed",
            payment
        })
    } catch(err) {
        console.log(err)
    }
})


module.exports = router;