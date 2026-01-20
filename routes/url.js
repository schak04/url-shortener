const express = require('express');
const router = express.Router();
const {displayUI, handleShorteningOfURL} = require('../controllers/url');

router.get('/', displayUI);
router.post('/shorten', handleShorteningOfURL);

module.exports = router;