const express = require("express");
const app = express();
var path = require("path");

const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    //Usamos el "path" para emviar el html necesario cuando la aplicacion inicia.
    res.sendFile(path.join(__dirname+"/index.html"));
});


app.listen(port);