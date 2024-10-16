const express = require("express");
const router = express.Router();
const {
  authorizeAdmin,
  authorizeUser,
} = require("../services/authenticate.service");
const productCtl = require("../controllers/product.control");
const { addProductValid } = require("../validations/product.validate");
const { validate } = require("../services/validate.service");

router.post(
  "/add-product",
  authorizeAdmin,
  validate(addProductValid),
  productCtl.addProduct
);
router.get("/all-products", authorizeUser, productCtl.getProducts);

module.exports = router;
