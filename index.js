const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.send('Hola Giuli');
});

app.listen(port);