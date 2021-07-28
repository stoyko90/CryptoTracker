const User = require('../models/userModel');



async function home(req, res) {
  res.send('You are at home!');
}

async function register(req, res) {
  const result = await req.body;
  const user = new User(result);
  await user.save();
  res.send(user);
} 

async function login(req, res) {

}

async function logout(req, res) {
  
}

async function profile(req, res) {
  
}

module.exports = {register, home, login, logout, profile};