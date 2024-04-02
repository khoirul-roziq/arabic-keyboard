const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: String,
  key: String, 
  code: String
});

const Button = mongoose.model('Button', formSchema)

module.exports = Button