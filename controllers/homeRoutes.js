const express = require("express");
const router = express.Router();

// const auth = require("../utils/auth");


router.get('/', async (req,res) =>{
    try { res.render('homepage')
    } catch(err) {
    console.log(err)
    res.status(500).json(err);
}
})


router.get('/blogForm', async (req,res) =>{
    try { res.render('blogForm')
    } catch(err) {
    console.log(err)
    res.status(500).json(err);
}
})

router.get('/blogRepo', async (req,res) =>{
    try { res.render('blogRepo')
    } catch(err) {
    console.log(err)
    res.status(500).json(err);
}
})


module.exports = router;