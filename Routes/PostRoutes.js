const express = require('express')
const mongoose = require('mongoose')


const {
    CreatePost,
    GetPost,
    DeletePost,
    
} = require ("../Controller/PostController")

const router = express.Router()




router.post('/addvideo', CreatePost)
router.get('/getvideos', GetPost)
router.post('/:id', DeletePost)




 

module.exports= router