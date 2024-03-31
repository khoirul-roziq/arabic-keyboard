const arabicModel = require("../models/arabic");

const list = async (req, res) => {
  try {
    const arabicData = await arabicModel.find();
    res.render("arabic-list", { arabicData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const show = async (req, res) => {
  try {
    const id = req.params.id;
    const arabicChar = await arabicModel.findById(id);
    res.render("arabic-show", { arabicChar });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = (req, res) => {
  try {
    res.render("arabic-create");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const store = async (req, res) => {
  try {
    const arabic = new arabicModel(req.body);
    await arabic.save();
    res.redirect("/arabic/arabic-list");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const edit = async (req, res) => {
  try {
    const id = req.params.id;
    const arabicChar = await arabicModel.findById(id);
    res.render("arabic-edit", { arabicChar });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const arabicChar = await arabicModel.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });
    res.redirect("/arabic");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const drop = async (req, res) => {
  try {
    const id = req.params.id;
    const arabicChar = await arabicModel.findByIdAndDelete(id);
    res.redirect("/arabic");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { list, create, store, edit, update, show, drop };
