const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

// Ye hamara registration ka rasta hai
// Poora URL banega: http://localhost:5000/api/v1/register
router.post('/register', registerUser);

module.exports = router;