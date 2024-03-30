const arabicModel = require("../models/arabic");

const list = async (req, res) => {
  try {
    const arabicData = await arabicModel.find();
    res.render("arabic-list", {arabicData});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
};

const show = async (req, res) => {
  const id = req.params.id
  const arabicChar = await arabicModel.findById(id)
  res.render("arabic-show", {arabicChar});
}

const create = (req, res) => {
  res.render("arabic-create");
};

const store = async (req, res) => {
  try {
    const arabic = new arabicModel(req.body);
    await arabic.save();
    res.redirect("/arabic/arabic-list");
  } catch (error) {
    console.error("Gagal menyimpan data Arabic:", error);
    res.status(500).send("Gagal menyimpan data Arabic");
  }
};

const edit = async (req, res) => {
  const id = req.params.id
  const arabicChar = await arabicModel.findById(id)
  res.render("arabic-edit", {arabicChar});
};

const update = async (req,res) => {
  const id = req.params.id
  const arabicChar = await arabicModel.findByIdAndUpdate(id, req.body)
  res.redirect("/arabic")
}

module.exports = { list, create, store, edit, update, show };
