const express = require("express");
const router = express.Router();
const {
  authorizeUser,
  authorizeAdmin,
} = require("../services/authenticate.service");
const { updateSchema } = require("../validations/auth.validate");
const { validate, validateParamsId } = require("../services/validate.service");

// controller♠   
const userCtl = require("../controllers/user.control");

router.get("/data", authorizeUser, userCtl.getUserData);
router.get("/data/all", authorizeAdmin, userCtl.getAllData);
router.delete("/:userId", validateParamsId, authorizeAdmin, userCtl.deleteUser);
router.delete("/add", authorizeAdmin, userCtl.addUser);
router.patch(
  "/:userId",
  validateParamsId,
  authorizeAdmin,
  validate(updateSchema),
  userCtl.updateUser
);

module.exports = router;
