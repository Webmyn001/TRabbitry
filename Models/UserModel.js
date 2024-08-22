const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let User = new Schema(
    {
   
        Name: {
            type: String,
            required: true,
        },
        

        Email: {
            type: String,
            required: true,
            unique : true,
            
        },

        Password: {
            type: String,
            required: true,
        },

        Username: {
            type: String,
            required: true,
        },

        Role:{
            type:String,
            default: "Visitor"
        }
       
    
   
 },

{ timestamps: true }

);
module.exports = mongoose.model('User', User);