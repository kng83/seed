"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var routes = require("./routes/route");
// import path from 'path';
routes.routes();
var app = express();
var PORT = 3000;
var DIR_TS_OUT = 'public';
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
var dirname = path.join(__dirname, '..', DIR_TS_OUT);
// app.use(serveStatic(dirname , {'index': 'index.html'}));
app.use(express.static(dirname));
app.use(bodyParser.json());
app.get('*', function (req, res) {
    res.sendFile('index.html', { root: dirname });
});
app.listen(PORT, function () { return console.log("Listen on Port: " + PORT); });
console.log('this is super pawdel');
//# sourceMappingURL=app.js.map