const config = require('./config.json')

const express = require('express');
const router = express.Router();

const { MongoClient } = require('mongodb');

const uri = config.dbConnectDevUrl;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("prakrishth").collection("users");
  // perform actions on the collection object
  console.log(collection);
  client.close();
});

module.exports = router;