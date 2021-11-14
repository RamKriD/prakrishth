const express = require("express");
const fs = require("fs");

const path = require("path");
const https = require("https");

const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

const env = require("dotenv").config();
console.log(env);

const httpPort = process.env.port || 5000;
const httpsPort = process.env.port || 5443;

const baseApp = express();

const key = fs.readFileSync("./CA/localhost/localhost.decrypted.key");
const cert = fs.readFileSync("./CA/localhost/localhost.crt");

/**
 * Session Configuration (New!)
 */

const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false,
};

// if (baseApp.get("NODE_ENV") === "production") {
// Serve secure cookies, requires HTTPS
session.cookie.secure = true;
// }

/**
 * Passport Configuration (New!)
 */

const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL,
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    /**
     * Access tokens are used to authorize users to an API
     * (resource server)
     * accessToken is the token to call the Auth0 API
     * or a secured third-party API
     * extraParams.id_token has the JSON Web Token
     * profile has all the information from the user
     */
    return done(null, profile);
  }
);

/**
 *  App Configuration
 */

const utkrishth = require("./server/utkrishth");

baseApp.set("view engine", "html");
baseApp.engine("html", require("ejs").renderFile);

baseApp.use(express.static(__dirname + "/client/dist"));

baseApp.use(expressSession(session));

passport.use(strategy);

baseApp.use(passport.initialize());
baseApp.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

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
