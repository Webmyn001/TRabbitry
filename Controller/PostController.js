const mongoose = require('mongoose')
const Post = require("../Models/PostModel")









const CreatePost = async (req, res, next) =>  {
     
    try{
        const video = await Post.create(req.body)
        res.status(201).json({
          success: true,
           video
        })
      }
      catch (error) {
          console.log(error);
          next(error);
      }
  }


  const GetPost =  async (req, res ) => {
    const Videos = await Post.find({}).sort({createdAt:-1})
    res.status(200).json(Videos)
  }


  
 const DeletePost = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Not found"})
    }
    
    const video = await Post.findOneAndDelete({_id:id})
   if (!video) {
    return res.status(400).json({error: "Not found"})
  }
   res.status(200).json(video)
  }
  
module.exports = {
    CreatePost,
    GetPost,
    DeletePost
  }