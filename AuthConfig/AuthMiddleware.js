

const jwt = require('jsonwebtoken')




const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
      return res.json("missing token")
    } else{
      jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if(err) {
          return res.json("erroe with token")
        }else {
          if(decoded.Role === "Admin") {
            next()
          } else{
            return res.json("not admin")
          }
        }
      })
    }
  }
  
  module.exports = verifyUser