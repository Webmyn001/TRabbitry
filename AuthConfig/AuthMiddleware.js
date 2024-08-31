

const jwt = require('jsonwebtoken')




const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
      return res.json("error")
    } else{
      jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if(err) {
          return res.json("error")
        }else {
          if(decoded.Role === "Admin") {
            next()
          } else{
            return res.json("error")
          }
        }
      })
    }
  }
  
  module.exports = verifyUser