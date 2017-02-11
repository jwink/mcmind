"use strict";
var express = require("express");
var path = require("path");
var ip = require("ip");
var app = express();
app.use('/', express.static(path.join(__dirname, '../public')));
var port = 8080;
app.listen(port);
console.log("server up and running on " + ip.address() + ":8080");
