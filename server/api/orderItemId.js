const router = require('express').Router()
const { models: { OrderItem, Wine, Order, User }} = require('../db')
module.exports = router

router.get('/:ordertItemId', async (req, res, next)=>{
  const id = req.params.ordertItemId
  //console.log('WHAT IS WRONG ID--->>>', orderItemId)
  try {
    const orderItem = await OrderItem.findAll({
      where: {
        id: id,
      }, 
      include: [
        {
          model: Order,
          include: [User]
        },
        {
          model: Wine
        }
      ]
    })
    //console.log('API OrderItem',orderItem)
    // const orderItem = await OrderItem.findByPk(orderItemId, {   
    //   include: [Order, User, Wine]
    // })
    res.send(orderItem)
  } catch(err){
    console.log(err)
  }

})