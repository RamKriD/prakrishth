// auth.js

/**
 * Required External Modules
 */
const express = require("express");
const router = express.Router();
const passport = require("passport");
const querystring = require("querystring");

require("dotenv").config();

/**
 * Routes Definitions
//  */
router.get(
  "/login",
  passport.authenticate("auth0"),
  (req, res) => {
    console.log("login redirect");
    res.redirect(`https://${process.env.AUTH0_DOMAIN}/v2/login`);
  }
);


router.get("/logout", (req, res) => {
  req.logOut();

  let returnTo = req.protocol + "://" + req.hostname;
  const port = req.connection.localPort;
  if (port !== undefined && port !== 80 && port !== 443) {
    returnTo =
      process.env.NODE_ENV === "production"
        ? `${returnTo}/`
        : `${returnTo}:${port}/`;
  }

  returnTo = returnTo + 'callback'
  console.log(returnTo)
  const logoutURL = new URL(`https://${process.env.AUTH0_DOMAIN}/v2/logout`);

  const searchString = querystring.stringify({
    client_id: process.env.AUTH0_CLIENT_ID,
    returnTo: returnTo,
  });
  logoutURL.search = searchString;

  res.redirect(logoutURL);
});

router.get("/", (req, res, next) => {
  passport.authenticate("auth0", (err, user, info) => {
    console.log("callback");
    console.log(user);
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("no user");
      return res.redirect(`https://${process.env.AUTH0_DOMAIN}/api/v2/login`);
    }
    console.log(err);
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      const returnTo = req.session.returnTo;
      delete req.session.returnTo;
      res.redirect(returnTo || "/");
    });
  })(req, res, next);
});

/**
 * Module Exports
 */
module.exports = router;
