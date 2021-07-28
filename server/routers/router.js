const express = require('express');
const router = express.Router();
const {register, home, login, logout, profile} = require('../controllers/userController');

router.get('/home', home);

router.post('/register', register);

module.exports = router;