const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/homepage.html"));
});

router.get("/contactus", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/contactus.html"));
});

router.get("/store", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/store.html"));
});

router.get("/items", (req, res) => {
  res.render("items");
});

router.get("/delivery", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/delivery.html"));
});
module.exports = router;
