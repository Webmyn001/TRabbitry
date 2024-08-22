const express = require('express')
const mongoose = require('mongoose')

const verifyUser = require("../AuthConfig/AuthMiddleware")

const {
    RegisterUser,
    LoginUser,
    Dashboard,
    Logout,
} = require ("../Controller/UserController")

const router = express.Router()




router.post('/register', RegisterUser)
router.post('/login', LoginUser)
router.get('/dashboard',verifyUser, Dashboard)
router.post('/logout', Logout)




 

module.exports= router