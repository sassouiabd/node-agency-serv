const express = require("express");

const router = express.Router();
const agenciesCtrl = require("../controllers/agencies.controller");

router.get("/", agenciesCtrl.retrieveAll);

module.exports = router;
