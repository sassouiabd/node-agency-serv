"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var uniqueValidator = require("mongoose-unique-validator");
var Schema = mongoose_1.default.Schema;
var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose_1.default.model("User", userSchema);
//# sourceMappingURL=user.model.js.map