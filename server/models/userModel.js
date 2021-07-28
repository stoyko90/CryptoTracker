const mongoose = require('../db/db');

const userSchema = new mongoose.Schema({
  userName: String,
  name: String,
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;