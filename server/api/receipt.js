const router = require('express').Router()

router.get('/', async(req, res, next)=> {
       const data = req.params.id
       try{
            res.send(data)
            console.log('ROUTE RECEIPT', data)
            console.log('hi there')
       }
      catch(err) {
        console.log(err)
    }
})


module.exports = router;