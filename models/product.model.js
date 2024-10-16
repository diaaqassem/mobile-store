const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");
const fs = require("fs");

const productSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
