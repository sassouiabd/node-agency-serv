"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var agencySchema = new Schema({
    Nom: {
        type: String,
        required: true,
    },
    Responsable: {
        type: String,
        required: true,
    },
    Activité: {
        type: String,
        required: true,
    },
});
module.exports = mongoose_1.default.model("Agency", agencySchema);
//# sourceMappingURL=agency.model.js.map