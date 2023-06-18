const express = require('express');
const path = require('path');
const port = 5001;

const app = express();
app.set("view engine", "ejs");
app.use("/js", express.static(__dirname+"/public/js"));
app.use("/css", express.static(__dirname+"/public/css"));
app.use("/imgs", express.static(__dirname+"/public/imgs"));
app.use("/", require('./routes/pages'));

//routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/homepage.html"));
})

app.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/contactus.html"));
})

app.get('/store', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/store.html"));
})

app.get('/items', (req, res) => {
    res.render("items");
})

app.get('/terms', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/terms.html"));
})
//routes

app.listen(port);
console.log("\n===== *** WEB is running *** =====\n")

module.exports = app;