const express = require("express");
const router = express.Router();

const secured = (req, res, next) => {
  // console.log(req.user)
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl; 
  res.status(401).send("unauthorized");
};
router.post("/activeUser", secured, (req, res) => {
  // console.log(req.headers);
  // console.log("*****");
  const { _raw, _json, ...userProfile } = req.user;
  res.status(200).send({
    title: "Profile",
    userProfile: userProfile,
  });
});

module.exports = router;
