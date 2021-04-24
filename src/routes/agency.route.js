const express = require("express");

const router = express.Router();
const agencyCtrl = require("../controllers/agency.controller");

router.get("/retriveAll", agencyCtrl.retriveAll);

router.post("/add", agencyCtrl.add);

module.exports = router;
