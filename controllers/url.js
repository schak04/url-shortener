const URL = require('../models/url');
const {nanoid} = require('nanoid');
const path = require('path');

function displayUI(_req, res) {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
}

function handleShorteningOfURL(req, res) {
    const {originalURL} = req.body.originalURL;
    if (!originalURL) {
        return res.status(400).send("No URL entered by user! Original URL required!!");
    }
    const shortenedURL = `https://sept.com/${nanoid(6)}`;
    
    URL.create({
        shortened: shortenedURL,
        redirectTo: originalURL
    })

    res.status(201).send("Successfully shortened URL");
}

module.exports = {
    displayUI,
    handleShorteningOfURL
};