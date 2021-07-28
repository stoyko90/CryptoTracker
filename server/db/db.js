require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {useNewUrlParser:true, useUnifiedTopology:true});

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error: '));
connection.once('open', () => {
  console.log('DB is now connected');
});


module.exports = mongoose;