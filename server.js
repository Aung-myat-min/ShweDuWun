const express = require('express');
const path = require('path');
const port = 5001;

const app = express();
app.use("/js", express.static(__dirname+"/public/js"));
app.use("/css", express.static(__dirname+"/public/css"));
app.use("/imgs", express.static(__dirname+"/public/imgs"));
app.use("/", require('./routes/pages'));

app.listen(port);