// const { Schema } = require('mongoose');
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
    type: mongoose.Schema.Types.String,
    ref: 'Crypto'
  }]
});

const  cryptoSchema= new mongoose.Schema({
  owner: {
    type: String
  },
  asset: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});

const User = mongoose.model('User', userSchema);
const Crypto = mongoose.model('Crypto', cryptoSchema);
module.exports = {User, Crypto};