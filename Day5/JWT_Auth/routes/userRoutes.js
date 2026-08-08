const express=require('express');
const { signinHandler} = require('../controllers/signInController');
const { signupHandler, } = require('../controllers/signUpController');
const auth = require('../middlewares/auth');
const router = express.Router();


router.post('/signin',signinHandler)
router.post('/signup',signupHandler)

router.get('/profile', auth, (req, res) => {
     res.json({  
        message: "Protected Route", 
        user: req.user
    });
});

module.exports=router
