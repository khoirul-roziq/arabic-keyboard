const Button = require("../models/button");
const Arabic = require("../models/arabic");

const list = async (req, res) => {
  try {
    const buttonData = await Button.find().populate(['arabic','arabicSecond']).exec();
    res.render("button-list", { buttonData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const multipleCreate = async (req, res) => {
  try {
    const buttonData = await Button.find();
    res.render("button-create-multiple", { buttonData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const storeMultiple = async (req, res) => {
  try {
    // Mendapatkan data formData dari body request
    const formData = req.body.formData;

    // Iterasi melalui setiap properti objek formData
    for (let index in formData) {
      // Memeriksa apakah properti dimiliki secara langsung oleh objek
      if (formData.hasOwnProperty(index)) {
        // Mendapatkan data button dari properti formData saat ini
        const buttonData = formData[index];
        // Mendapatkan nilai name, key, dan code dari buttonData
        const { name, key, code } = buttonData;
        // Membuat instance Button dengan data yang diterima
        const newButtonData = new Button({
          name: name,
          key: key,
          code: code,
        });
        // Menyimpan data ke dalam database MongoDB
        await newButtonData.save();
      }
    }
    res.redirect("/button");
  } catch (error) {
    // Menangani kesalahan jika terjadi saat penyimpanan data
    console.error(error);
    res.status(500).send("Terjadi kesalahan saat menyimpan data");
  }
};

const edit = async (req, res) => {
  try {
    const id = req.params.id;
    const buttonData = await Button.findById(id).populate(['arabic','arabicSecond']).exec();
    const arabicData = await Arabic.find();

    console.log(buttonData)

    res.render("button-edit", { buttonData, arabicData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;

    // Mendapatkan data yang diperbarui dari request body
    const updatedData = req.body;

    updatedData.arabic = req.body.arabicId;
    updatedData.arabicSecond = req.body.arabicIdSecond;

    // Lakukan pencarian dan perbarui dokumen Button
    const buttonData = await Button.findByIdAndUpdate(
      id,
      updatedData,
      {
        runValidators: true,
        new: true, // Mengembalikan dokumen yang diperbarui
      }
    );
    res.redirect("/button");
  } catch (error) {
    console.error("Error updating button:", error);
    res.status(500).json({ error: error.message });
  }
};


const getAllButtons = async (req, res) => {
  try {
    const buttons = await Button.find().populate(['arabic','arabicSecond']).exec();
    res.status(200).json(buttons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const drop = async (req, res) => {
  try {
    const id = req.params.id;
    const buttonData = await Button.findByIdAndDelete(id);
    res.redirect("/button");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  list,
  multipleCreate,
  storeMultiple,
  edit,
  update,
  getAllButtons,
  drop,
};
