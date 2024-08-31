const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Post = new Schema(
    {
   
        Description: {
            type: String,
            required: true,
        },
        

        URL: {
            type: String,
            required: true,
        },

   
 },

{ timestamps: true }

);
module.exports = mongoose.model('Post', Post);