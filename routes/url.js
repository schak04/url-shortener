const express = require('express');
const router = express.Router();
const URL = require('../models/url');
const {displayUI, handleShorteningOfURL} = require('../controllers/url');

router.get('/', displayUI);
router.post('/shorten', handleShorteningOfURL);
router.get(`/:shortID`, async (req, res) => {
    const id = req.params.shortID;
    const url = await URL.findOne({shortened: id});
    if (!url) return res.status(404).send("Page NOT found");
    res.redirect(url.redirectTo);
})

module.exports = router;