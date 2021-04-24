#!/usr/bin/env node

/**
 * Module dependencies.
 */

const debug = require("debug")("test:server");
const http = require("http");
const app = require("./src/app");
const mongoose = require("mongoose");

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const lport = parseInt(val, 10);

  if (Number.isNaN(lport)) {
    // named pipe
    return val;
  }

  if (lport >= 0) {
    // port number
    return lport;
  }

  return false;
}

const port = normalizePort(process.env.PORT || "5000");
app.set("port", port);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      // eslint-disable-next-line no-console
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      // eslint-disable-next-line no-console
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

const server = http.createServer(app);

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}

const DB_PASS = "4L2HfkE1QHvLkorE";
const DB_URL = `mongodb+srv://engie-user:${DB_PASS}@cluster0.tpnux.mongodb.net/engie-db?retryWrites=true&w=majority`;
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to MongoDB succeeded !");
    server.listen(port);
  })
  .catch(err => {
    console.log(err);
  });

server.on("error", onError);
server.on("listening", onListening);
