const express = require("express");
const fs = require('fs');

const path = require("path");
const https = require('https');

const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

require("dotenv").config();

const httpPort = process.env.port || 5000;
const httpsPort = process.env.port || 5443;

const baseApp = express();

const key = fs.readFileSync('./CA/localhost/localhost.decrypted.key');
const cert = fs.readFileSync('./CA/localhost/localhost.crt');


/**
 * Session Configuration (New!)
 */



/**
 * Passport Configuration (New!)
 */


/**
 *  App Configuration
 */

const utkrishth = require('./server/utkrishth')

baseApp.set('view engine', 'html');
baseApp.engine('html', require('ejs').renderFile);

baseApp.use(express.static(__dirname + "/client/dist"));

baseApp.use("/utkrishth", utkrishth);

baseApp.get("*", (req, res, next) => {
  res.render(__dirname + "/client/dist/index");
});

const server = https.createServer({ key, cert }, baseApp);

baseApp.listen(httpPort, () => {
  console.log(`Server is listening on https://localhost:${httpPort}`);
});

server.listen(httpsPort, () => {
  console.log(`Server is listening on https://localhost:${httpsPort}`);
});
