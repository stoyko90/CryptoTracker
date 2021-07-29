const express = require('express');
const router = express.Router();
const {register, home, login, logout, profile} = require('../controllers/userController');
const {authToken} = require('../middleware/auth');

router.get('/home', home);
router.post('/register', register);
router.post('/login', login);
router.get('/profile', authToken, profile);
router.post('/logout', authToken, logout);




module.exports = router;