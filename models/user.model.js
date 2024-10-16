const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
  },
  nationalId: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  store: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
});

// userSchema.pre("save", async function (next) {
//   try {
//     const user = this; //this ==> document
//     if (user.isModified("password"))
//       user.password = await bcrypt.hash(user.password, 8);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  if (!mongoose.isValidObjectId(user.store)) {
    return next("Invalid Store ID");
  }
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
    next();
  }
});

//hide private data
userSchema.method("toJSON", function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.__v;
  delete userObject.token;
  return userObject;
});

const User = mongoose.model("User", userSchema);
module.exports = User;
