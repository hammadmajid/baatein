"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = require("dotenv");
dotenv.config();
// @ts-ignore
var app = express();
var port = process.env.PORT || 5000;
app.get('/', function (_req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
