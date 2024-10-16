const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.control");
const { registerationSchema,loginSchema } = require("../validations/auth.validate");
const {validate} = require("../services/validate.service");


router.post("/register",validate(registerationSchema), authController.register);
router.post("/login",validate(loginSchema), authController.login);


module.exports = router;
