const express = require("express");
const path = require("path");
const praApp = express.Router();

praApp.use(express.static(__dirname + "/client"));

praApp.get("/test", (req, res) => {
  res.send("prakrishth test success");
});
praApp.get("/", (req, res) => {
  res.render(path.join(__dirname + "/client/index.html"));
});

module.exports = praApp;
