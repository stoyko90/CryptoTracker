require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../models/userModel');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'apple';

async function home(req, res) {
  res.send('You are at home!');
}

async function register(req, res) {
  const {userName, password} = await req.body;
  const user = await User.findOne({userName});
  if (user) return res.status(409).send('User already exists');
  try {
    if (password === '') throw new Error();
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({...req.body, password: hashedPassword});
    await newUser.save();
    res.status(201).send(newUser);
  }
  catch(error) {
    res.status(400).send({error, message: 'Could not create user'});
  }
} 

async function login(req, res) {
  const {userName, password} = await req.body;
  try {
    const user = await User.findOne({userName});
    if(!user) throw new Error();
    const correctPassword = await bcrypt.compare(password, user.password);
    if(!correctPassword) throw new Error()
      const accessToken = jwt.sign({userName}, ACCESS_TOKEN_SECRET, { expiresIn: '6h' });
      res.status(200).send({accessToken});
  } catch(error) {
    res.status(401).send({error, message: 'Incorrect username or password'});
  }
}

async function logout(req, res) {
  //TO DO: to store NOT expired tokens when user wants to manually log out in a black list on a MongoDB document. To set up node-cron https://www.npmjs.com/package/node-cron to check for tokens a certain period of time and check if they are inside the BlackList and expired, then delete them, only active( time to expire) and black listed tokes to be left in the document.
}

async function profile(req, res) {
    User.findOne({userName: req.user.userName}).populate('assets').exec((err, userData) => {
      if (err) return handleError(err);
      const filteredData = userData.assets.filter(el => el.amount > 0);
      res.send(filteredData);
    })
}




module.exports = {register, home, login, logout, profile};