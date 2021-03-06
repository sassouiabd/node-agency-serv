require("dotenv").config();
const createError = require("http-errors");

import express, { Request, Response, NextFunction } from "express";

const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const auth = require("./middlewares/auth.middleware");

// Routers
const indexRouter = require("./routes/index.route");
const userRooter = require("./routes/user.route");
const agencyRooter = require("./routes/agency.route");

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
app.use("/auth", userRooter);
app.use("/agency", auth, agencyRooter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://engie-user:<password>@cluster0.tpnux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err: any) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
