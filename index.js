const express = require("express");
const app = express();
var path = require("path");

const port = process.env.PORT || 8080;

app.use('/', express.static('static'));

app.listen(port);