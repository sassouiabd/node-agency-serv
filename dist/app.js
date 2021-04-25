"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var createError = require("http-errors");
var express_1 = __importDefault(require("express"));
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var auth = require("./middlewares/auth.middleware");
// Routers
var indexRouter = require("./routes/index.route");
var userRooter = require("./routes/user.route");
var agencyRooter = require("./routes/agency.route");
var app = express_1.default();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(cors());
app.use(logger("dev"));
// Middlewares
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(cookieParser());
// static routes
app.use("/public", express_1.default.static(path.join(__dirname, "../public")));
// Routes
app.use("/", indexRouter);
app.use("/auth", userRooter);
app.use("/agency", auth, agencyRooter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
module.exports = app;
var MongoClient = require("mongodb").MongoClient;
var uri = "mongodb+srv://engie-user:<password>@cluster0.tpnux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
client.connect(function (err) {
    var collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
//# sourceMappingURL=app.js.map