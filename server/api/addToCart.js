const router = require('express').Router()
const { models: { OrderItem, Wine }} = require('../db')
const Order = require('../db/models/Order')
module.exports = router

//POST add to cart
router.post('/:userId/:itemId', async (req, res, next)=>{
  const userId = req.params.userId
  const itemId = req.params.itemId
  try {
    const order = await Order.findOne({
      attributes: ['id'],
      where: {
        userId: userId
      }, 
      raw: true
    })
    console.log('I AM ORDERRRRRR', order)
    await OrderItem.create({
      quantity: 1, 
      orderId: order.id,
      wineId: itemId
    })
    res.sendStatus(201)
  } catch (err){
      console.log(err)
  }
})