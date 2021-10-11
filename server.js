const express = require("express");
const path = require('path');
const praApp = express.Router();
praApp.get('/test', (req,res)=> {
  res.send('test success')
})
praApp.get("/", (req,res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});


module.exports = praApp;