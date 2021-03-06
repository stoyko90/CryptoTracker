require('dotenv').config();
const express = require('express');
const router = require('./routers/router');
const cors = require('cors');

const SERVER_PORT = process.env.SERVER_PORT || 3300;
const CLIENT_PORT = process.env.CLIENT_PORT || 3000;
const corsConfig = {
  origin: `http://localhost:${CLIENT_PORT}`,
  credentials: true
};

const app = express();
app.use(cors(corsConfig));
app.use(express.json());
app.use(router);


app.listen(SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${SERVER_PORT}`);
});