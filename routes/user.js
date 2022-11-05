const router = require("express").Router();

router.get('/', (req, res)=>{
    res.render('user')
})

router.get('/account', (req, res)=>{
    res.render('account')
})


module.exports = router