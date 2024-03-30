const express = require("express");
const router = express.Router();

const {
  list,
  create,
  store,
  edit,
  update,
  show
} = require("../controllers/arabicController");

router.get("/", list);
router.get("/:id", show);
router.get("/create", create);
router.post("/store", store);
router.get("/:id/edit", edit);
router.put("/:id/update", update)

module.exports = router;
