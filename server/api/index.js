const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/wines', require('./wines'))
router.use('/wines', require('./singleWine'))
router.use('/usercart', require('./userCart'))
router.use('/addtocart', require('./addToCart'))
router.use('/orderitem', require('./orderItemId'))
router.use('/removeorderitem/', require('./removeOrderItem'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

