const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const fs = require("fs");

const storeSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
    unique: false,
  },
  logo: {
    type: String,
    default: "/api/images/stores/default.png",
  },
});

storeSchema.pre("findOneAndDelete", async function (next) {
  // console.log("this in delete : ",this);
  const document = await this.model.findOne(this.getQuery());
  //check
  if (document && document.logo) {
    // console.log(document);
    const logo = document.logo;
    const imgName = logo.split("/")[4];
    console.log(imgName);
    try {
      if (imgName == "default") {
        next();
      } else {
        fs.unlink(`./uploads/stores/${imgName}`, (err) => {
          if (err) {
            console.error(`Failed to delete one image... ${err.message}`);
          } else {
            console.log("Successfully deleted image");
          }
        });
      }
    } catch (err) {
      console.error(err);
    }
  }
  next();
});

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
