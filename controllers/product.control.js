const Product = require("../models/product.model");
const asyncHandler = require("express-async-handler"); //handle try catch
const productCtl = {
  addProduct: asyncHandler(async (req, res) => {
    console.log("add product");
    let newProduct = await Product.create({ ...req.body });
    res.status(201).json({
      success: true,
      data: newProduct,
    });
    await newProduct.save();
  }),
  getProducts: asyncHandler(async (req, res) => {
    let data = await Product.find({});
    if (!data) {
      return res.status(404).json({ success: false, msg: "No Data Found" });
    }
    res.json({ success: true, data });
  }),
};
module.exports = productCtl;
