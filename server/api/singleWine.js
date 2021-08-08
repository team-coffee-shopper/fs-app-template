const router = require('express').Router()
const { models: { Wine }} = require('../db')
module.exports = router

//GET Wine by ID
router.get('/:id', async(req, res, next) =>{
  const id = req.params.id
  try {
    const wine = await Wine.findByPk(id)
    res.send(wine)
  } catch(err){
    next(err)
  }
})