const Order = require("../models/order.model");
const asyncHandler = require("express-async-handler"); //handle try catch
const mongoose = require("mongoose");

const orderCtl = {
  addOrder: asyncHandler(async (req, res) => {
    let data = req.body;
    if (!mongoose.isValidObjectId(data.product)) {
      return res.status(400).send("Invalid user or product ID");
    } else {
      const newOrder = await Order.create({ ...data, user: req.user._id });
      await newOrder.save();
      return res.status(201).json({
        success: true,
        message: "Added a new order",
        data: newOrder,
      });
    }
  }),

  getOrders: asyncHandler(async (req, res) => {
    let data = await Order.find({user: req.user._id}).populate("user").populate("product");
    if (!data) {
      return res.status(404).json({ success: false, msg: "No Data Found" });
    }
    res.json({ success: true, data });
  }),
};
module.exports = orderCtl;
