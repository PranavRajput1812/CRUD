const express = require('express')

const {register,login} = require('../controller/controller.js')
// Route 
const router = express.Router()

//method to post data for register
router.post('/signup',register)

//method to post data for login
router.post('/login',login)

module.exports = router;