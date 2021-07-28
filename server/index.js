require('dotenv').config();
const express = require('express');
const router = require('./routers/router');
const cors = require('cors');

const port = process.env.SERVER_PORT;


const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});