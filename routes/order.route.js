const express = require("express");
const router = express.Router();
const { authorizeUser } = require("../services/authenticate.service");
const orderCtl = require("../controllers/order.control");

router.post("/add-order", authorizeUser, orderCtl.addOrder);
router.get("/all-orders", authorizeUser, orderCtl.getOrders);

module.exports = router;
