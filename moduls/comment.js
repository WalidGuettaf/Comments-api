const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  first_name: String,
  
  family_name:String
  ,
  email: String
,
  message:String
  ,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const comment = mongoose.model('Comment', commentSchema);
module.exports = comment;
