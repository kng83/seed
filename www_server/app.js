"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
// import path from 'path';
var app = express();
var port = 3000;
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
var dirname = path.join(__dirname, '..', 'dist');
// app.use(serveStatic(dirname , {'index': 'index.html'}));
app.use(express.static(dirname));
app.use(bodyParser.json());
console.log(__dirname);
app.get('/name', function (req, res) {
    res.sendFile('index.html', { root: dirname });
});
app.listen(port, function () { return console.log('Listen on Port: 3000 '); });
console.log('this is pawel');
//# sourceMappingURL=app.js.map