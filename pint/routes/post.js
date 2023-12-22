const mongoose = require('mongoose');
const users = require('./users');
const postSchema = mongoose.Schema({
  user: {
     type:mongoose.Schema.ObjectId,
     ref: "user"
  },
  title: String,
  description: String,
  image:String
});



module.exports = mongoose.model("post", postSchema);
