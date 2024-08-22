const FormRoutes = require("./Routes/UserRoutes")




const express = require("express")
require("dotenv").config()
const mongoose = require('mongoose')
const bp = require('body-parser')
const cors =require("cors") 
const cookieParser = require("cookie-parser")

const app = express()

app.use(bp.json({limit:'10mb'}))
app.use(bp.urlencoded({ extended: true, limit :'10mb' }))

app.use(cors(
   {
      origin:["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true
   }
));

app.use(cookieParser())

 const PORT= 4000
 
app.use((req,res, next) => {
   console.log(req.path , req.body ,req.method , res.body, req.file)
   next()
})





mongoose.set('strictQuery', false);
const connectDB = async ()=> {
   try{
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`Mongodb connected :${conn.connection.host}`);

   } catch (error){
      console.log(error);
      process.exit(1);
   }
}

 
app.use("/api/form", FormRoutes)





connectDB().then(()=> {
   app.listen(PORT, ()=> {
      console.log(`listening on port ${PORT}`)
   })
});