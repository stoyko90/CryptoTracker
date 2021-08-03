const mongoose = require('../db/db');

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

const Crypto = mongoose.model('Crypto', cryptoSchema);
module.exports = {Crypto};
