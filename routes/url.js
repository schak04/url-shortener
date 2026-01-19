const express = require('express');
const router = express.Router();
const {displayUI, handleShorteningOfURL} = require('../controllers/url');

router.route('/')
    .get(displayUI)
    .post(handleShorteningOfURL);

module.exports = router;