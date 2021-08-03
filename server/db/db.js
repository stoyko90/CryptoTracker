require('dotenv').config();
const mongoose = require('mongoose');
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'cryptoStorage';


mongoose.connect(`mongodb://localhost:${DB_PORT}/${DB_NAME}`, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false});

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error: '));
connection.once('open', () => {
  console.log('DB is now connected');
});


module.exports = mongoose;