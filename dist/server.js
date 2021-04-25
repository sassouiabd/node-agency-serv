#!/usr/bin/env node
"use strict";
/**
 * Module dependencies.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var debug = require("debug")("test:server");
var http = require("http");
var app = require("./app");
var mongoose_1 = __importDefault(require("mongoose"));
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var lport = parseInt(val, 10);
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
var port = normalizePort(process.env.PORT || "5000");
app.set("port", port);
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            // eslint-disable-next-line no-console
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            // eslint-disable-next-line no-console
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
var server = http.createServer(app);
function onListening() {
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    debug("Listening on " + bind);
}
var DB_PASS = "4L2HfkE1QHvLkorE";
var DB_URL = "mongodb+srv://engie-user:" + DB_PASS + "@cluster0.tpnux.mongodb.net/engie-db?retryWrites=true&w=majority";
mongoose_1.default
    .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(function () {
    console.log("Connection to MongoDB succeeded !");
    server.listen(port);
})
    .catch(function (err) {
    console.log(err);
});
server.on("error", onError);
server.on("listening", onListening);
//# sourceMappingURL=server.js.map