const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storeStorage = multer.diskStorage({
    //location
  destination: function (req, file, cb) {
    cb(null, "./uploads/stores");
  },
  // etention , name file
  filename: function (req, file, cb) {
    if (file) {
    //   console.log("file : ", file);
      let fileExt = path.extname(file.originalname);
      cb(null, `${uuidv4()}${fileExt}`); //App
    } else {
      console.log("No image selected!");
      cb(new Error("Please select an image"), false);
    }
  },
});

const imgUpload = multer({
  storage: storeStorage,
  limits: { fieldSize: 8 * 1024 * 102 },
  fileFilter: function (req, file, callback) {
    var ext = path.parse(file.originalname).ext;
    if (
      ext !== ".jpg" &&
      ext !== ".png" &&
      !file.mimetype.startsWith("image")
    ) {
      return callback(new Error("Only jpg and png are allowed"));
    }
    callback(null, true);
  },
});

module.exports = { imgUpload };
