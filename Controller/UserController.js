const User = require("../Models/UserModel")
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser")







// Register User

const RegisterUser =  (req, res) => {
  
    const {Name, Email, Password,  Username, Role}= req.body;
    bcrypt.hash(Password, 10)
    .then(hashedPwd => {
      User.create({Name, Email, Password: hashedPwd,  Username, Role})
    .then(userInfo => res.json(userInfo))
    .catch(err => res.json(err))
  }).catch(err => res.json(err))
   
}



// login User

const LoginUser= (req, res) => {
 const {Email, Password} = req.body;
 User.findOne({Email}).then( user => {
   if(user){
    bcrypt.compare(Password, user.Password, (err, response)=> {
      if(response){
       const token = jwt.sign(
        {Email: user.Email, Role: user.Role}, "jwt-secret-key", {expiresIn:"1d"}
      )
       res.cookie('token', token, {httpOnly: true, sameSite:"none" , secure: true,})
      return res.status(200).json({
        msg : "Success", 
        Email: user.Email, 
        Username: user.Username,
        Role: user.Role,
        Name: user.Name
      })
     
      } else {
        return res.json("incorrect pwd")
      }
    })

   }
   else {
    res.json("No record")
   }

 })

}
// Log out 

const Logout = async (req, res) => {
  res.cookie('token', '', {httpOnly: true, sameSite:"none" , secure: true, expires: new Date(0)});
  return res.status(200).json({msg : "logged out succesfully", Status : true})
}


// dash board
const Dashboard =  async (req, res ) => {
  const Users = await User.find({}).sort({createdAt:-1})
  res.status(200).json(Users)
}


module.exports = {
  RegisterUser,
  LoginUser,
  Dashboard,
  Logout
}



















     

    