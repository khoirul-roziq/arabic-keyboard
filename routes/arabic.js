const express = require("express");
const router = express.Router();

const {
  list,
  create,
  store,
  edit,
  update,
  show,
  drop
} = require("../controllers/arabicController");

router.get("/", list);
router.get("/:id/show", show);
router.get("/create", create);
router.post("/store", store);
router.get("/:id/edit", edit);
router.put("/:id", update)
router.delete("/:id", drop)

module.exports = router;
