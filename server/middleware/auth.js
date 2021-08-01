require('dotenv').config();
const {User} = require('../models/userModel');
const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'apple';

async function authToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token === null) return res.sendStatus(401);
  try {
    const {userName} = jwt.verify(token, ACCESS_TOKEN_SECRET);
    const user = await User.findOne({userName});
    if (!user) throw new Error;
    req.user = user;
    next();
  } catch(error) {
    res.status(401).send('something is fucked');
  }
}


module.exports = {authToken};