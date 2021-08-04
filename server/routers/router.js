const express = require('express');
const router = express.Router();
const {register, home, login, logout, profile} = require('../controllers/userController');
const {binanceAccountApi} = require('../controllers/binanceApiController');
const {authToken} = require('../middleware/auth');

router.get('/home', home);
router.post('/register', register);
router.post('/login', login);
router.get('/profile', authToken, profile);
router.post('/logout', authToken, logout);
router.post('/api-manager/binance', authToken, binanceAccountApi);


module.exports = router;