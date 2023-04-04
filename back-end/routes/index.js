const express = require("express");
const router = express.Router();

const othersRouter = require("./others");
const usersRouter = require(`./users`);

router.use(`/`, othersRouter);
router.use(`/`, usersRouter);

module.exports = router;
