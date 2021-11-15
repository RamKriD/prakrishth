const { MongoClient } = require("mongodb");

const mongoose = require("mongoose");

const environment = require("dotenv").config();
const config = require("./config.json");
const UserSchema = require("./schema/userSchema");

const env = process.env.NODE_ENV || "development";

const uri = config.dbConnectDevUrl;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;
db.on("error", () => {
  console.error("Error while connecting to DB");
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
