const express = require("express");
const router = express.Router();

const { keyboard } = require("../controllers/keyboardController");

router.get("/", keyboard);

module.exports = router;
