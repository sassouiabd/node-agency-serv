import express from "express";

const router = express.Router();
const indexCtrl = require("../controllers/index.controller");

router.get("/", indexCtrl.home);

module.exports = router;
