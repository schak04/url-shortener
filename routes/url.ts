const express = require('express');
const router = express.Router();
const {displayUI, handleShorteningOfURL, handleRedirectionOfURL} = require('../controllers/url');

router.get('/', displayUI);
router.post('/shorten', handleShorteningOfURL);
router.get(`/:shortID`, handleRedirectionOfURL);

module.exports = router;