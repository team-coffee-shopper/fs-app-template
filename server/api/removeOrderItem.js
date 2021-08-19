const router = require('express').Router()
const { models: { OrderItem }} = require('../db')
module.exports = router

//Delete OrderItem route
router.delete('/:orderId', async (req, res, next)=>{
  const id = req.params.orderId
  try {
    const orderItem = await OrderItem.findByPk(id)
    //console.log('API, ITEM TO DESTROY---',orderItem)
    await orderItem.destroy()
    res.sendStatus(204)
  } catch (err){
    console.log(err)
    res.sendStatus(400)
  }
})