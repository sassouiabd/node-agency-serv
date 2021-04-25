"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
    var _a, _b;
    try {
        var userId = req.headers.userid;
        //in real scenario production it will replaced with
        // complete token
        if (userId === "test") {
            return next();
        }
        if (!userId) {
            throw "userId has not been provided";
        }
        var token = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(" ")[1];
        var decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        var userIdFromToken = decodedToken.userId;
        if (userId && userId !== userIdFromToken) {
            throw "User ID non valid !";
        }
        next();
    }
    catch (error) {
        res.status(401).json({ error: error || "Request not authorized !" });
    }
};
//# sourceMappingURL=auth.middleware.js.map