const router = require('express').Router()
const { models: { User, Order, OrderItem, Wine }} = require('../db')
module.exports = router

//GET Wine by ID
router.get('/:userId', async(req, res, next) =>{
  const userId = req.params.userId
  try {
    //fetching OrderItems ---> Order ---> User
    const cart = await OrderItem.findAll({
      include: [
        {
          model: Order,
          where: {userId},
          include: [User]
        },
        {
          model: Wine
        }
      ],
    })
    res.send(cart)
    
  } catch(err){
    next(err)
  }
})

// include: [Wine],
//       include: {
//         model: Order,
//         where: {userId},
//         include: [User]
//       },