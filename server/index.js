require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routers/router');
const port = process.env.SERVER_PORT;

app.use(router);
app.use(express.json());


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});