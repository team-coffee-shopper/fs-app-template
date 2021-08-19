const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

router.get('/', async (req, res, next)=>{
  try {
    const allUsers = await User.findAll()
    res.send(allUsers)
  } catch (err){
    console.log(err)
    res.sendStatus(400)
  }
})