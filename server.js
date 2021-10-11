const express = require("express");

const praApp = express.Router();

praApp.use(express.static(__dirname + "/client/dist"));

praApp.get("/test", (req, res) => {
  res.send("prakrishth test success");
});

module.exports = praApp;
