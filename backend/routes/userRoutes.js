const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    res.send("Route is working perfectly!");
});

module.exports = router;