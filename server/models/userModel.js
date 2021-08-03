const mongoose = require('../db/db');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  binanceKey: {
    type: String
  },
  binanceSecret: {
    type: String
  },
  assets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Crypto'
  }]
});



const User = mongoose.model('User', userSchema);
module.exports = {User};