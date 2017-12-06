"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});
app.get('/about', function (req, res) {
    res.sendFile('about.html', { root: __dirname });
});
app.get('/home', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});
app.listen(3000, function () { return console.log('Listen on Port: 3000 '); });
console.log('heddddddda');
function showSomething(name, value) {
    return name;
}
showSomething([4, 4, 6], 5);
//# sourceMappingURL=apphelp.js.map