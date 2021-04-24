const express = require("express");

const router = express.Router();
const signInCtrl = require("../controllers/signIn.controller");

router.post("/", signInCtrl.login);

module.exports = router;
