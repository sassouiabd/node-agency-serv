require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// Routers
const indexRouter = require("./routes/index.route");
const signInRooter = require("./routes/signIn.route");
const agenciesRooter = require("./routes/agencies.route");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(cors());
app.use(logger("dev"));

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// static routes
app.use("/public", express.static(path.join(__dirname, "../public")));

// Routes
app.use("/", indexRouter);
app.use("/signIn", signInRooter);
app.use("/agencies", agenciesRooter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;