const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: String,
  key: String,
  code: String,
  arabic: {
    type: mongoose.Types.ObjectId,
    ref: "Arabic",
  },
  arabicSecond: {
    type: mongoose.Types.ObjectId,
    ref: "Arabic",
  },
});

const Button = mongoose.model("Button", formSchema);

module.exports = Button;
