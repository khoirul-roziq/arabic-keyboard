const Button = require("../models/button");

const keyboard = async (req, res) => {
  const buttons = await Button.find().populate('arabic').exec();
  res.render("keyboard", {buttons});
};

module.exports = { keyboard };
