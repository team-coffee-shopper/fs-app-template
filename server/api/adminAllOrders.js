const router = require('express').Router()
const { models: { Order }} = require('../db')
module.exports = router

//GET route = show all orders to Admin User