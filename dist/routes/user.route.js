"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var userCtrl = require("../controllers/user.controller");
router.post("/signup", userCtrl.signup);
router.post("/signin", userCtrl.signin);
module.exports = router;
//# sourceMappingURL=user.route.js.map