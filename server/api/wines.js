const router = require('express').Router()
const { models: { Wine }} = require('../db')
module.exports = router


//GET all wines
router.get('/', async(req, res, next) => {
    try {
      const wines = await Wine.findAll();
      res.send(wines);
    } catch(ex){
      next(ex)
    }
  })