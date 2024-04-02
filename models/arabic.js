const mongoose = require("mongoose");

const arabicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nama harus diisi"]
    },
    unicode: {
        type: String,
        required: [true, "Unicode harus diisi"]
    },
    type: {
        type: String,
        enum: ['harokat', 'huruf', 'angka', 'tanda', 'susunan'],
        required: [true, "Tipe harus diisi dengan 'tanda', 'huruf', atau 'angka'"]
    }

})

const arabicModel = mongoose.model('Arabic', arabicSchema)

module.exports = arabicModel