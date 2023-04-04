const express = require("express");
const router = express.Router();

const othersController = require(`../controllers`).others;

router.get("/reset", othersController.reset);

module.exports = router;
