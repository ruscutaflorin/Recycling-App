const express = require("express");
const router = express.Router();

const usersController = require(`../controllers/users`);

router.post("/logIn", usersController.logIn);
router.post("/signIn", usersController.signIn);
router.post("/order", usersController.placeOrder);

module.exports = router;
