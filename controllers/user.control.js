const User = require("../models/user.model");
const asyncHandler = require("express-async-handler"); //handle try catch

const userCtl = {
  getUserData: asyncHandler(async (req, res) => {
    // console.log("from ctl:",req.user);
    if (!req.user) throw new Error("Not authorized to access this data.");
    // else return res.json({ user: req.user });
    else {
      let user = await User.findById(req.user._id).populate("store");
      return res.json({ user: user });
    }
  }),
  getAllData: asyncHandler(async (req, res) => {
    // console.log("from ctl:",req.user);
    //dont show token , password
    const allData = await User.find({})
      .select(["name", "email", "address", "nationalId", "phone"])
      .where("isAdmin")
      .equals(false)
      .exec();
    return res.status(200).json(allData);
  }),
  deleteUser: asyncHandler(async (req, res, next) => {
    const id = req.params.userId;
    if (!id || id.length != 24) {
      return res.status(400).send("Invalid ID");
    }
    await User.findByIdAndDelete({ _id: id });
    res.status(200).json({
      id: id,
      msg: `Deleted user with the id of ${id}`,
    });
  }),
  addUser: asyncHandler(async (req, res, next) => {
    let newUser = new User({ ...req.body });
    newUser.save();
    return res.status(201).json({ user: result, token: token });
  }),
  updateUser: asyncHandler(async (req, res, next) => {
    let updatedUser;
    const id = req.params.userId;
    if (!id || id.length != 24) {
      return res.status(400).send("Invalid ID");
    }
    const { phone, address, isAdmin } = req.body;
    //update user info in database
    try {
      updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          phone,
          address,
          isAdmin,
        },
        { new: true, runValidators: true } //this will validate input before updating
      );
      res.status(201).json({
        msg: "Just update necessary information  as(phone , address ,is admin) ",
        updateuser: updatedUser,
      });
    } catch (err) {
      next(err);
    }
  }),
};

module.exports = userCtl;
