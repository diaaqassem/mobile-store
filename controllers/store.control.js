const Store = require("../models/store.model");
const asyncHandler = require("express-async-handler"); //handle try catch

const storeController = {
  addStore: asyncHandler(async (req, res) => {
    let newStore = await new Store({
      ...req.body,
    });
    const file = req.file;
    console.log(file);
    if (file) {
      console.log("received a file");
      let fileName = "/api/images/stores/" + file.filename;
      newStore.logo = fileName;
    }
    await newStore.save();
    return res.status(201).json({
      success: true,
      data: newStore,
    });
  }),
  deleteStore: asyncHandler(async (req, res) => {
    await Store.findOneAndDelete({ _id: req.params.userId });
    res.send({
      status: "store Deleted !!",
    });
  }),
};

module.exports = storeController;
