const express = require("express");
const router = express.Router();

// const auth = require("../utils/auth");

// Render homepage
router.get('/', async (req,res) =>{
    try { res.render('homepage')
    } catch(err) {
    console.log(err)
    res.status(500).json(err);
}
});

// Render blog post form page
router.get('/blogForm', async (req,res) =>{
    try { res.render('blogForm')
    } catch(err) {
    console.log(err)
    res.status(500).json(err);
}
});

// Render blog repo page
router.get('/blogRepo', async (req,res) =>{
    try { res.render('blogRepo')
    } catch(err) {
    console.log(err)
    res.status(500).json(err);
}
});

// Render login/signup page
router.get('/loginSignup', async (req, res) => {
    try{ res.render('loginSignup')}
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});


module.exports = router;