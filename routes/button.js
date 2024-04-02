const express = require("express");
const router = express.Router();

const {
  list,
  multipleCreate,
  storeMultiple,
  edit,
  update,
  getAllButtons
} = require("../controllers/buttonController");

router.get("/", list);
router.get("/create/multiple", multipleCreate);
router.post("/store/multiple", storeMultiple)
router.get("/:id/edit", edit)
router.put("/:id", update)
router.get("/get/all", getAllButtons)

module.exports = router;
