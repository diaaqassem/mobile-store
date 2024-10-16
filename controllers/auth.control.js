const User = require("../models/user.model");
const asyncHandler = require("express-async-handler"); //handle try catch
const generateToken = require("../services/jwt.service");

const authController = {
  register: asyncHandler(async (req, res) => {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      //409 error conflicting
      return res.status(409).json({ message: "User already exists" });
    } else {
      const newUser = new User(req.body);
      // console.log(req.body);
      await newUser.save();
      return res.status(201).send("User Created!!");
    }
  }),
  login: asyncHandler(async (req, res) => {
    const email = req.body.email;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({
        message:
          "Invalid Email or Password" +
          "\nIf you don't have an account please Register!",
      });
    }
    const validPass = await user.comparePassword(req.body.password);
    // console.log(validPass);
    if (!validPass) {
      return res.status(401).json({
        message:
          "Invalid Email or Password" +
          "\nIf you don't have an account please Register!",
      });
    }else{
    //generate token
    const token = generateToken(user._id);
    const cookiesOPtions = {
      epires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES),
    };
    res.cookie("token", `Bearer ${token}`, cookiesOPtions);
    // res.status(200).json({
    //   _id: user._id,
    //   name: user.name,
    //   email: user.email,
    //   token,
    // });

    return res.status(200).send(user);
  }}),
};

module.exports = authController;
