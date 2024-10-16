const express = require("express");
const router = express.Router();
const storeController = require("../controllers/store.control");
const { authorizeAdmin } = require("../services/authenticate.service");
const { imgUpload } = require("../services/file-upload");

const { addStore } = require("../validations/store.validate");
const { validate, validateParamsId } = require("../services/validate.service");

router.post(
  "/add",
  imgUpload.single("logo"),
  authorizeAdmin,
  validate(addStore),
  storeController.addStore
);
router.delete(
  "/:userId",
  authorizeAdmin,
  validateParamsId,
  storeController.deleteStore
);

module.exports = router;
