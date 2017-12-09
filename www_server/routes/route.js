"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var DIR_TS_OUT = 'public';
var app = express();
var dirname = path.join(__dirname, '..', DIR_TS_OUT);
function routes() {
    app.get('/tarot', function (req, res) {
        res.sendFile('index.html', { root: dirname });
        // res.send('bobo');
    });
}
exports.routes = routes;
//# sourceMappingURL=route.js.map