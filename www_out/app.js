"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// import path from 'path';
var app = express();
var port = 3000;
app.get('/name/:user_name', function (req, res) {
    res.status(200);
    res.set('Content-Type', 'text/html');
    var helpParams = req.params.user_name;
    res.end("<html><body><h1>Witaj uzytkowniku:: " + helpParams + "</h1><p>To jest bardzo dlugie zdanie przekraczajace linie</p></body><html>");
});
app.get('/', function (req, res) {
    res.sendFile('../dist/index.html', { root: __dirname });
});
app.listen(port, function () { return console.log('Listen on Port: 3000 '); });
console.log('this is pawel');
//# sourceMappingURL=app.js.map