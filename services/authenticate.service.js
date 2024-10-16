const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const asyncHandler = require("express-async-handler");

const authenticate = asyncHandler(async (req, res, next) => {
  //access cookies
  let token = req.cookies["token"].split(" ")[1];
  if (!token) {
    return res.status(401).send({ auth: false, message: "No Token Provided." });
  }
  console.log(token);
  let decode = await jwt.verify(token, process.env.SECRET_KEY);
  console.log(decode);
  if (!decode) {
    return res.status(401).send({ auth: false, message: "No Token Provided." });
  }
  req.user = await User.findById(decode.id);
  if (!req.user) {
    return res.status(404).send({ auth: false, message: "User not found" });
  }
  next();
});
const adminAuth = (req, res, next) => {
  //use func auth
  authenticate(req, res, function () {
    if (req.user.isAdmin === true) next();
    else return res.status(403).send({ message: "Route Is Only For Admins!!" });
  });
};

module.exports = {
  authorizeUser: authenticate,
  authorizeAdmin: adminAuth,
};
