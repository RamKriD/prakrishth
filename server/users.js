const express = require('express');
const router = express.Router();

router.post('/activeUser', (req,res) => {
  console.log(req.body)
  res.send("Got it")
})


module.exports = router;
