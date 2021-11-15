const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  aud: {
    type: String,
  },
  email: {
    type: String,
  },
  email_verified: {
    type: Boolean,
  },
  name: {
    type: String,
  },
  nickname: {
    type: String,
  },
  picture: {
    type: String,
  },
  sub: {
    type: String,
  },
  updated_at: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
  sessionToken: {
    type: String,
  },
});

module.exports = userSchema;